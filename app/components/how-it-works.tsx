"use client"

import { Upload, Cpu, Eye, Download } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Your Image",
    description: "Drag and drop or click to select your image file from your device",
    step: "01",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Our advanced AI analyzes and removes the background with precision",
    step: "02",
  },
  {
    icon: Eye,
    title: "Preview Results",
    description: "Review the before and after comparison to see the perfect results",
    step: "03",
  },
  {
    icon: Download,
    title: "Download & Use",
    description: "Download your high-quality PNG with transparent background instantly",
    step: "04",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Remove backgrounds from your images in just four simple steps
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-100">
                    <span className="text-xs font-bold text-blue-600">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Ready to get started?</p>
          <button
            onClick={() => document.querySelector("#upload-section")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <Upload className="mr-2 h-5 w-5" />
            Try It Now - It's Free!
          </button>
        </div>
      </div>
    </section>
  )
}
