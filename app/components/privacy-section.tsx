import { Lock, Eye, Trash2, Server } from "lucide-react"

const privacyFeatures = [
  {
    icon: Lock,
    title: "Secure Processing",
    description: "All images are processed using encrypted connections",
  },
  {
    icon: Eye,
    title: "No Viewing",
    description: "We never view, analyze, or use your images for any purpose",
  },
  {
    icon: Trash2,
    title: "Auto Deletion",
    description: "Images are automatically deleted after processing",
  },
  {
    icon: Server,
    title: "No Storage",
    description: "We don't store your images on our servers permanently",
  },
]

export default function PrivacySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Your Privacy Matters</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We take your privacy seriously. Your images are processed securely and never stored or shared.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full">
            <Lock className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">100% Private & Secure Processing</span>
          </div>
        </div>
      </div>
    </section>
  )
}
