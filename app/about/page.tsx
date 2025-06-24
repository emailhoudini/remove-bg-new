import Header from "../components/header"
import Footer from "../components/footer"
import { Users, Zap, Globe, Shield, Sparkles, Target } from "lucide-react"

const userTypes = [
  {
    icon: Sparkles,
    title: "Designers & Creatives",
    description:
      "Perfect for graphic designers, web designers, and creative professionals who need clean, professional results for their projects.",
  },
  {
    icon: Target,
    title: "Marketers & Businesses",
    description:
      "Create stunning product photos, social media content, and marketing materials with transparent backgrounds in seconds.",
  },
  {
    icon: Users,
    title: "Everyday Users",
    description:
      "Whether you're creating a profile picture or working on a personal project, Wipe BG makes it simple for everyone.",
  },
]

const benefits = [
  {
    icon: Zap,
    title: "No Downloads Required",
    description: "Work directly in your browser without installing any software or plugins.",
  },
  {
    icon: Globe,
    title: "Accessible Anywhere",
    description: "Use Wipe BG from any device with an internet connection - desktop, tablet, or mobile.",
  },
  {
    icon: Shield,
    title: "No Complicated Settings",
    description: "Simply upload your image and let our AI do the work. No technical knowledge required.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About <span className="text-blue-600">Wipe BG</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Wipe BG is an AI-powered online tool built to help designers, marketers, and everyday users instantly
                remove backgrounds from images.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Whether you're editing product photos, creating social media content, or enhancing your personal
                  projects, Wipe BG makes the process seamless, fast, and high-quality.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe tools like this should be accessible to everyone—no software downloads, no complicated
                  settings, just quick results with clean, transparent images.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                    <p className="text-gray-600">Process images in under 5 seconds</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Sparkles className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered</h3>
                    <p className="text-gray-700">Advanced machine learning for perfect results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Who We Serve</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Wipe BG is designed for anyone who needs professional background removal, from creative professionals to
                everyday users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {userTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-6">
                    <type.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Wipe BG?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We've built Wipe BG with simplicity and accessibility at its core.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Remove Backgrounds Like a Pro?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Wipe BG for their background removal needs.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Zap className="mr-2 h-5 w-5" />
              Try Wipe BG Now - It's Free!
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
