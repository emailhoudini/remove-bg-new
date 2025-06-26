import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support - Wipe BG",
  description: "Get help with Wipe BG's background removal tool. Find answers to frequently asked questions and contact our support team.",
}

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            🛠️ Support
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Need Help? We've Got You Covered!
          </p>
          <p className="mt-2 text-gray-600">
            At Wipe BG, we aim to make background removal as fast, easy, and reliable as possible. 
            If you're facing any issues or have questions, this page will help you find the answers quickly.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📄 Frequently Asked Questions (FAQs)
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Q: Is Wipe BG free to use?</h3>
              <p className="mt-2 text-gray-600">
                A: Yes! Wipe BG offers free background removal for standard use. Advanced or bulk features may require premium access (if applicable in future).
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Q: What image formats do you support?</h3>
              <p className="mt-2 text-gray-600">
                A: We currently support JPG, JPEG, and PNG formats.
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Q: What happens to my uploaded images?</h3>
              <p className="mt-2 text-gray-600">
                A: All files are automatically deleted from our servers within 60 minutes for your privacy and security.
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Q: Can I remove the background from multiple images at once?</h3>
              <p className="mt-2 text-gray-600">
                A: Currently, Wipe BG processes one image at a time. Bulk upload support may be added soon.
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Q: My image didn't process correctly. What should I do?</h3>
              <p className="mt-2 text-gray-600">
                A: Make sure the subject is clearly visible and the image resolution is not too low. If the problem persists, contact our support team.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ✉️ Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for or need direct help? We're here to assist.
          </p>
          
          <div className="space-y-3 text-left max-w-md mx-auto">
            <p className="flex items-center justify-between">
              <span className="font-medium">Email:</span>
              <span className="text-blue-600">support@wipebg.ai</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="font-medium">Response Time:</span>
              <span>Within 24–48 business hours</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="font-medium">Support Hours:</span>
              <span>Monday to Friday – 9 AM to 6 PM (NZST)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 