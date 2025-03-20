import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VisibilitySection } from "@/components/visibility-section"
import { Footer } from "@/components/footer"
import { PopupForm } from "@/components/popup-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <HeroSection />
      <VisibilitySection />
      <Footer />
      <PopupForm />
    </main>
  )
}

