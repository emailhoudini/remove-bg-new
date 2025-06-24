import Header from "../components/header"
import Footer from "../components/footer"
import { Shield, FileText, Users, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Terms & <span className="text-blue-600">Conditions</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 m-0">Welcome to Wipe BG</h2>
                </div>
                <p className="text-gray-700 m-0">
                  By using our services, you agree to the following terms and conditions. These terms govern your use of
                  Wipe BG's background removal services.
                </p>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900 m-0">Permitted Use</h3>
                  </div>
                  <p className="text-gray-700">
                    You may use the background remover for personal and commercial purposes. Our service is designed to
                    help individuals and businesses create professional-quality images with transparent backgrounds.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900 m-0">Content Restrictions</h3>
                  </div>
                  <p className="text-gray-700">
                    Do not upload illegal, offensive, or copyrighted content you don't own. You are responsible for
                    ensuring you have the right to process and modify any images you upload to our service.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900 m-0">Service Updates</h3>
                  </div>
                  <p className="text-gray-700">
                    Wipe BG may update its terms at any time with reasonable notice. We will notify users of significant
                    changes through our website or email communications.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Terms</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>We reserve the right to refuse service for any reason</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>Images are automatically deleted after processing for your privacy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>Service availability is not guaranteed and may be interrupted for maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>You retain all rights to your original images</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <p className="text-gray-700">
                    If you have any questions about these terms, please contact us at{" "}
                    <a href="mailto:support@wipebg.ai" className="text-blue-600 hover:text-blue-700">
                      support@wipebg.ai
                    </a>
                  </p>
                </div>

                <div className="text-sm text-gray-500 border-t border-gray-200 pt-6">
                  <p>Last updated: {new Date().toLocaleDateString()}</p>
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
