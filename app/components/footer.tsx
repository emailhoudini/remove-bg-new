import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  brand: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
  ],
  help: [
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/wipebg-logo.png" 
                  alt="Wipe BG Logo" 
                  width={120} 
                  height={120}
                  className="h-12 w-auto" 
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Link>
              <p className="mt-4 text-sm text-gray-600 max-w-xs">
                Professional AI-powered background removal tool. Remove backgrounds from images instantly with
                pixel-perfect precision.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.brand.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a 
                    href="https://blog.wipebg.ai" 
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Need help?</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Wipe BG. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
