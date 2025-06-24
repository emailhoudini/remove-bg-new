import Header from "../components/header"
import Footer from "../components/footer"
import { Shield, Eye, Clock, Lock } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Privacy <span className="text-blue-600">Policy</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Your privacy is important to us. Learn how we protect your data.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 m-0">Privacy Policy for Wipe BG</h2>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="m-0">
                    <strong>Effective Date:</strong> 23/06/2025
                  </p>
                  <p className="m-0">
                    <strong>Website:</strong> https://wipebg.ai
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Introduction</h3>
                  <p className="text-gray-700">
                    At Wipe BG, we respect your privacy and are committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, and safeguard your data when you use our background
                    remover tool and services.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Information We Collect</h3>
                  <p className="text-gray-700 mb-4">We may collect the following types of information:</p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Eye className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Uploaded Images</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Temporarily stored only for processing background removal. Automatically deleted within 1 hour.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Technical Data</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Browser type, IP address (anonymized), operating system, device type, and referring URL.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-purple-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Usage Analytics</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        For improving site performance and user experience (Google Analytics or similar tools).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. How We Use Your Information</h3>
                  <p className="text-gray-700 mb-4">We use your data to:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></span>
                      <span>Process and display results from image uploads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></span>
                      <span>Improve functionality, speed, and responsiveness of the tool</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></span>
                      <span>Understand user interaction (via anonymous analytics)</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium text-sm m-0">
                      <Lock className="inline h-4 w-4 mr-1" />
                      We do not sell, rent, or share your files or personal data with third parties.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <p className="text-gray-700">
                    Questions about this privacy policy?
                    <br />📧 Email:{" "}
                    <a href="mailto:support@wipebg.ai" className="text-blue-600 hover:text-blue-700">
                      support@wipebg.ai
                    </a>
                  </p>
                </div>

                <div className="text-sm text-gray-500 border-t border-gray-200 pt-6">
                  <p>Last updated: 23/06/2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
