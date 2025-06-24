"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Upload, Download, Loader2, CheckCircle, AlertCircle, ImageIcon, FileImage, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface UploadState {
  status: "idle" | "uploading" | "processing" | "success" | "error"
  originalImage?: string
  processedImage?: string
  error?: string
  fileName?: string
  fileSize?: number
  progress?: number
}

const SUPPORTED_FORMATS = ["JPG", "JPEG", "PNG", "WebP"]
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export default function ImageUpload() {
  const [uploadState, setUploadState] = useState<UploadState>({ status: "idle" })
  const [isDragActive, setIsDragActive] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Fix hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const processImage = async (file: File) => {
    // Validate file type
    const fileExtension = file.name.split(".").pop()?.toUpperCase()
    if (!fileExtension || !SUPPORTED_FORMATS.includes(fileExtension)) {
      setUploadState({
        status: "error",
        error: `Unsupported file format. Please use: ${SUPPORTED_FORMATS.join(", ")}`,
      })
      return
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      setUploadState({
        status: "error",
        error: `File size too large. Maximum size is ${formatFileSize(MAX_FILE_SIZE)}`,
      })
      return
    }

    setUploadState({
      status: "uploading",
      originalImage: URL.createObjectURL(file),
      fileName: file.name,
      fileSize: file.size,
      progress: 0,
    })

    try {
      const formData = new FormData()
      formData.append("image", file)

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadState((prev) => ({
          ...prev,
          progress: Math.min((prev.progress || 0) + Math.random() * 30, 90),
        }))
      }, 200)

      setUploadState((prev) => ({ ...prev, status: "processing", progress: 95 }))
      clearInterval(progressInterval)

      const response = await fetch("/api/remove-bg", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to process image")
      }

      const blob = await response.blob()
      const processedImageUrl = URL.createObjectURL(blob)

      setUploadState((prev) => ({
        ...prev,
        status: "success",
        processedImage: processedImageUrl,
        progress: 100,
      }))
    } catch (error) {
      setUploadState((prev) => ({
        ...prev,
        status: "error",
        error: error instanceof Error ? error.message : "An error occurred while processing your image",
      }))
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      processImage(file)
    }
  }

  const handleDragEnter = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragActive(true)
  }

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragActive(false)
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragActive(false)
    const file = event.dataTransfer.files[0]
    if (file) {
      processImage(file)
    }
  }

  const downloadImage = () => {
    if (uploadState.processedImage) {
      const link = document.createElement("a")
      link.href = uploadState.processedImage
      link.download = `${uploadState.fileName?.split(".")[0] || "image"}-no-bg.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const resetUpload = () => {
    setUploadState({ status: "idle" })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Don't render until client-side to prevent hydration mismatch
  if (!isClient) {
    return (
      <Card className="p-8 bg-white shadow-xl ring-1 ring-gray-900/10">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="h-48 bg-gray-200 rounded-xl mb-8"></div>
          <div className="grid grid-cols-2 gap-6">
            <div className="h-24 bg-gray-200 rounded-lg"></div>
            <div className="h-24 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </Card>
    )
  }

  // Success State
  if (uploadState.status === "success") {
    return (
      <div className="space-y-6">
        <Card className="p-6 bg-white shadow-xl ring-1 ring-gray-900/10">
          <div className="text-center mb-6">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Background Removed Successfully!</h3>
            <p className="text-sm text-gray-600 mt-2">Your image is ready for download</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
                <img
                  src={uploadState.originalImage || "/placeholder.svg"}
                  alt="Original image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-gray-800">
                    Original
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3 font-medium">
                {uploadState.fileName} • {uploadState.fileSize ? formatFileSize(uploadState.fileSize) : ""}
              </p>
            </div>

            <div className="text-center">
              <div
                className="relative rounded-xl overflow-hidden shadow-lg border-2 border-green-200"
                style={{
                  backgroundImage: "repeating-conic-gradient(#f3f4f6 0% 25%, white 0% 50%) 50% / 20px 20px",
                }}
              >
                <img
                  src={uploadState.processedImage || "/placeholder.svg"}
                  alt="Image with background removed"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center rounded-full bg-green-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                    No Background
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3 font-medium">PNG with transparent background</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={downloadImage} size="lg" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download PNG
            </Button>
            <Button onClick={resetUpload} variant="outline" size="lg" className="flex-1">
              <Upload className="mr-2 h-5 w-5" />
              Upload Another Image
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  // Error State
  if (uploadState.status === "error") {
    return (
      <Card className="p-6 bg-white shadow-xl ring-1 ring-gray-900/10">
        <div className="text-center">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500" />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Processing Failed</h3>
          <p className="mt-3 text-sm text-gray-600 max-w-md mx-auto">{uploadState.error}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={resetUpload} variant="outline">
              <Trash2 className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button onClick={() => fileInputRef.current?.click()} className="bg-blue-600 hover:bg-blue-700">
              <Upload className="mr-2 h-4 w-4" />
              Choose Different File
            </Button>
          </div>
        </div>
      </Card>
    )
  }

  // Processing State
  if (uploadState.status === "processing" || uploadState.status === "uploading") {
    return (
      <Card className="p-6 bg-white shadow-xl ring-1 ring-gray-900/10">
        <div className="text-center">
          <div className="relative">
            <Loader2 className="mx-auto h-16 w-16 text-blue-600 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xs font-semibold text-blue-600">{Math.round(uploadState.progress || 0)}%</div>
            </div>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            {uploadState.status === "uploading" ? "Uploading Image..." : "Removing Background..."}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {uploadState.status === "uploading"
              ? "Preparing your image for processing"
              : "Our AI is removing the background. This usually takes a few seconds."}
          </p>

          <div className="mt-6 max-w-md mx-auto">
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
                style={{ width: `${uploadState.progress || 0}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {uploadState.fileName} • {uploadState.fileSize ? formatFileSize(uploadState.fileSize) : ""}
            </p>
          </div>

          {uploadState.originalImage && (
            <div className="mt-6">
              <img
                src={uploadState.originalImage || "/placeholder.svg"}
                alt="Image being processed"
                className="mx-auto h-32 w-32 object-cover rounded-lg border shadow-md"
              />
            </div>
          )}
        </div>
      </Card>
    )
  }

  // Upload State
  return (
    <Card className="p-8 bg-white shadow-xl ring-1 ring-gray-900/10">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Remove Background from Your Image</h3>
        <p className="text-gray-600 mt-2">Upload your image and get a professional result in seconds</p>
      </div>

      <div
        className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200 ${
          isDragActive
            ? "border-blue-500 bg-blue-50 scale-105"
            : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="space-y-4">
          <div className="flex justify-center">
            {isDragActive ? (
              <FileImage className="h-16 w-16 text-blue-500" />
            ) : (
              <Upload className="h-16 w-16 text-gray-400" />
            )}
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900">
              {isDragActive ? "Drop your image here" : "Drag & drop your image here"}
            </h4>
            <p className="text-gray-600 mt-2">or click to browse from your computer</p>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <ImageIcon className="mr-2 h-5 w-5" />
            Choose Image File
          </Button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Supported Formats</h4>
          <div className="flex flex-wrap gap-2">
            {SUPPORTED_FORMATS.map((format) => (
              <span
                key={format}
                className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-gray-900"
              >
                {format}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">File Requirements</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Maximum size: {formatFileSize(MAX_FILE_SIZE)}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>High resolution supported</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
