import Header from "../components/header"
import Footer from "../components/footer"
import { Cpu, Award, Upload, Users, Smartphone, Lock, Clock } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Removal",
    description:
      "Accurate and fast background detection using deep learning. Advanced machine learning algorithms analyze your images and remove backgrounds with pixel-perfect precision.",
    highlight: "99.9% Accuracy",
  },
  {
    icon: Award,
    title: "No Watermark",
    description:
      "Download clean images without logos or overlays. Get professional results that you can use immediately in your projects without any branding.",
    highlight: "100% Clean",
  },
  {
    icon: Upload,
    title: "Drag-and-Drop Upload",
    description:
      "Simple, smooth user interface for image uploading. Simply drag your images into the browser or click to upload with support for multiple formats.",
    highlight: "Super Easy",
  },
  {
    icon: Users,
    title: "Batch Processing",
    description:
      "Upload multiple images at once. Process multiple images simultaneously to save time on large projects and bulk photo editing tasks.",
    highlight: "Coming Soon",
    comingSoon: true,
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly",
    description:
      "Fully responsive design that works on any device. Remove backgrounds on the go with the same quality and speed as desktop.",
    highlight: "All Devices",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "Your images are never stored or shared. We process your images securely and automatically delete them after processing for complete privacy.",
    highlight: "100% Secure",
  },
]

const stats = [
  { number: "1M+", label: "Images Processed" },
  { number: "50K+", label: "Happy Users" },
  { number: "99.9%", label: "Uptime" },
  { number: "< 5s", label: "Average Processing Time" },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Features That Make <span className="text-blue-600">Wipe BG</span> Stand Out
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Discover the powerful features that make background removal effortless, fast, and professional for users
                of all skill levels.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 shadow-sm border-2 hover:shadow-lg transition-all duration-300 ${
                    feature.comingSoon ? "border-amber-200 bg-amber-50/30" : "border-gray-200 hover:border-blue-200"
                  }`}
                >
                  {feature.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        feature.comingSoon ? "bg-amber-100" : "bg-blue-100"
                      }`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.comingSoon ? "text-amber-600" : "text-blue-600"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-900">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Technical Specifications</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Built with cutting-edge technology to deliver the best possible results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Processing Speed</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-1">{"< 5 seconds"}</p>
                <p className="text-sm text-gray-600">Average processing time</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Upload className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">File Size Limit</h3>
                </div>
                <p className="text-2xl font-bold text-green-600 mb-1">10 MB</p>
                <p className="text-sm text-gray-600">Maximum file size</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-purple-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Image Quality</h3>
                </div>
                <p className="text-2xl font-bold text-purple-600 mb-1">Original</p>
                <p className="text-sm text-gray-600">No quality loss</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Lock className="h-5 w-5 text-red-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Data Retention</h3>
                </div>
                <p className="text-2xl font-bold text-red-600 mb-1">0 hours</p>
                <p className="text-sm text-gray-600">Auto-deleted after processing</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Experience These Features Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Try all these powerful features for free. No signup required, no hidden costs.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Upload className="mr-2 h-5 w-5" />
              Start Removing Backgrounds Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
