"use client"

import { useState } from "react"

export default function BeforeAfterDemo() {
  const [isAfter, setIsAfter] = useState(false)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">See the Magic in Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how our AI instantly transforms your images with pixel-perfect background removal
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* Before Image - Original with background */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${isAfter ? "opacity-0" : "opacity-100"}`}
              >
                <img
                  src="/images/demo-before-new.webp"
                  alt="Woman in yellow dress with flowers - original with pink background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Original
                </div>
              </div>

              {/* After Image - Background removed */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${isAfter ? "opacity-100" : "opacity-0"}`}
                style={{
                  backgroundImage: "repeating-conic-gradient(#f3f4f6 0% 25%, white 0% 50%) 50% / 20px 20px",
                }}
              >
                <img
                  src="/images/demo-after-new.webp"
                  alt="Woman in yellow dress with flowers - background removed"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Background Removed
                </div>
              </div>

              {/* Click to toggle */}
              <button
                onClick={() => setIsAfter(!isAfter)}
                className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label="Click to toggle between before and after"
              >
                <span className="sr-only">Toggle between before and after</span>
              </button>

              {/* Hover hint */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                Click to see {isAfter ? "before" : "after"}
              </div>
            </div>

            {/* Bottom Info */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Processing Time:</span> 2.3 seconds
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Quality:</span> Original maintained
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Format:</span> PNG with transparency
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Ready to try it with your own images?</p>
            <button
              onClick={() => document.querySelector("#upload-section")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Upload Your Image Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
