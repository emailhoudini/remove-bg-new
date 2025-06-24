import ImageUpload from "./image-upload"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Text content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Remove Backgrounds from Your Images
              <span className="text-blue-600"> in Seconds</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Wipe BG is your free, fast, and AI-powered solution to get high-quality transparent images. No sign-up
              required.
            </p>

            <div className="mt-8 flex items-center gap-x-6 text-sm text-gray-600">
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Free to try</span>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>High quality results</span>
              </div>
            </div>

            {/* Before/After Demo Images */}
            <div className="mt-12 lg:mt-16">
              <div className="relative">
                <img
                  src="/images/hero-before-after.png"
                  alt="Before and after example - woman in purple hoodie with background removed"
                  className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center lg:text-left">
                ✨ See the difference - instant background removal
              </p>
            </div>
          </div>

          {/* Upload Area */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div id="upload-section">
              <ImageUpload />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
