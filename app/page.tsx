import Header from "./components/header"
import Hero from "./components/hero"
import WhyChooseUs from "./components/why-choose-us"
import BeforeAfterDemo from "./components/before-after-demo"
import HowItWorks from "./components/how-it-works"
import PrivacySection from "./components/privacy-section"
import Features from "./components/features"
import Footer from "./components/footer"

export default function Home() {
  return (
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
  )
}
