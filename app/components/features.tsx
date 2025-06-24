import { Zap, Shield, Clock, Sparkles, Users, Globe } from "lucide-react"

const features = [
  {
    name: "AI-Powered Precision",
    description:
      "Advanced machine learning algorithms detect edges and remove backgrounds with pixel-perfect accuracy.",
    icon: Zap,
  },
  {
    name: "Lightning Fast",
    description: "Process images in seconds, not minutes. Our optimized AI delivers results faster than ever.",
    icon: Clock,
  },
  {
    name: "High Quality Output",
    description: "Maintain image quality with smart edge detection and anti-aliasing for professional results.",
    icon: Sparkles,
  },
  {
    name: "Secure & Private",
    description: "Your images are processed securely and automatically deleted after processing.",
    icon: Shield,
  },
  {
    name: "Batch Processing",
    description: "Remove backgrounds from multiple images at once to save time on large projects.",
    icon: Users,
  },
  {
    name: "Universal Format Support",
    description: "Works with PNG, JPG, JPEG, and WebP formats. Export in your preferred format.",
    icon: Globe,
  },
]

export default function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for perfect background removal
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered background removal tool combines cutting-edge technology with ease of use to deliver
            professional results every time.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
