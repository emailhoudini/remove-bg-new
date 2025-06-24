import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get("image") as File

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 })
    }

    // Validate file type
    if (!image.type.startsWith("image/")) {
      return NextResponse.json({ error: "Please upload a valid image file" }, { status: 400 })
    }

    // Validate file size (10MB limit)
    if (image.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "Image size must be less than 10MB" }, { status: 400 })
    }

    // Require API key - no demo mode
    if (!process.env.REMOVE_BG_API_KEY) {
      console.error("REMOVE_BG_API_KEY environment variable is not set")
      return NextResponse.json(
        {
          error: "Background removal service is not configured. Please contact support.",
        },
        { status: 503 },
      )
    }

    // Create FormData for the Remove.bg API
    const apiFormData = new FormData()
    apiFormData.append("image_file", image)
    apiFormData.append("size", "auto")

    // Call the Remove.bg API with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": process.env.REMOVE_BG_API_KEY,
        },
        body: apiFormData,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Remove.bg API error:", response.status, errorText)

        // Parse the error response for better user feedback
        let errorMessage = "Failed to process image"
        try {
          const errorData = JSON.parse(errorText)
          if (errorData.errors && errorData.errors[0]) {
            const error = errorData.errors[0]
            switch (error.code) {
              case "insufficient_credits":
                errorMessage = "Service temporarily unavailable due to API limits. Please try again later."
                break
              case "invalid_image_format":
                errorMessage = "Invalid image format. Please use PNG, JPG, or WebP."
                break
              case "image_too_large":
                errorMessage = "Image is too large. Please use an image smaller than 25 megapixels."
                break
              case "auth_failed":
                errorMessage = "Service authentication failed. Please try again later."
                break
              case "rate_limit_exceeded":
                errorMessage = "Too many requests. Please wait a moment and try again."
                break
              default:
                errorMessage = error.title || "Failed to process image. Please try again."
            }
          }
        } catch (e) {
          // Use default error message if parsing fails
          console.error("Failed to parse error response:", e)
        }

        return NextResponse.json({ error: errorMessage }, { status: response.status })
      }

      const processedImageBuffer = await response.arrayBuffer()

      return new NextResponse(processedImageBuffer, {
        headers: {
          "Content-Type": "image/png",
          "Content-Disposition": 'attachment; filename="removed-background.png"',
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      })
    } catch (fetchError) {
      clearTimeout(timeoutId)

      if (fetchError instanceof Error && fetchError.name === "AbortError") {
        return NextResponse.json(
          {
            error: "Request timeout. Please try with a smaller image or try again later.",
          },
          { status: 408 },
        )
      }

      console.error("Fetch error:", fetchError)
      throw fetchError
    }
  } catch (error) {
    console.error("Error processing image:", error)

    // Return user-friendly error message
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    )
  }
}
