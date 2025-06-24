import Header from "../components/header"
import Footer from "../components/footer"
import { Cookie, Settings, BarChart3, Shield } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Cookie <span className="text-blue-600">Policy</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Learn about how we use cookies to improve your experience.
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Cookie className="h-6 w-6 text-amber-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 m-0">Cookie Policy for Wipe BG</h2>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="m-0">
                    <strong>Effective Date:</strong> 23/06/2025
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. What Are Cookies?</h3>
                  <p className="text-gray-700">
                    Cookies are small text files stored on your device when you visit a website. They help us understand
                    how users interact with our site and allow for basic functionalities like language preferences or
                    tool performance improvements.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Types of Cookies We Use</h3>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-red-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Required for the site to work (e.g., tool functionality).</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Help us understand user behavior (e.g., Google Analytics).
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Settings className="h-5 w-5 text-purple-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Preference Cookies</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Store your tool settings or theme preferences.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. How You Can Control Cookies</h3>
                  <p className="text-gray-700">
                    You can accept or reject cookies via your browser settings. Disabling cookies may affect how some
                    features function.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Third-Party Cookies</h3>
                  <p className="text-gray-700">
                    We may allow services like Google Analytics or similar to set cookies to measure website usage.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Contact</h3>
                  <p className="text-gray-700">
                    Questions about this cookie policy?
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
