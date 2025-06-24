import { Zap, Target, Shield, MousePointer } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Fast & Free",
    description: "Get instant results without any cost or login requirements. Process unlimited images at no charge.",
  },
  {
    icon: Target,
    title: "AI Precision",
    description: "Our smart AI ensures accurate background separation every time with pixel-perfect edge detection.",
  },
  {
    icon: Shield,
    title: "No Watermarks",
    description: "Clean and clear results — completely free of branding or watermarks on your processed images.",
  },
  {
    icon: MousePointer,
    title: "Easy to Use",
    description: "Upload, preview, download — done in three simple steps. No technical skills required.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Wipe BG?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect combination of speed, accuracy, and simplicity in background removal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
