import Header from "./components/header"
import Hero from "./components/hero"
import WhyChooseUs from "./components/why-choose-us"
import BeforeAfterDemo from "./components/before-after-demo"
import HowItWorks from "./components/how-it-works"
import PrivacySection from "./components/privacy-section"
import Features from "./components/features"
import Footer from "./components/footer"
import Script from "next/script"

export default function Home() {
  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Wipe BG",
    "applicationCategory": "PhotoEditing",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered background removal tool for images",
    "screenshot": "https://www.wipebg.ai/images/hero-before-after.png",
    "featureList": "Remove background, Transparent PNG, High quality, Fast processing",
    "url": "https://www.wipebg.ai"
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main>
          <Hero />
          <WhyChooseUs />
          <BeforeAfterDemo />
          <HowItWorks />
          <PrivacySection />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  )
}
