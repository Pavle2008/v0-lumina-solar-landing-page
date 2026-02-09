import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { SavingsCalculator } from "@/components/landing/savings-calculator"
import { ComparisonTable, CTABanner } from "@/components/landing/comparison-table"
import { SocialProof } from "@/components/landing/social-proof"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { BackToTop } from "@/components/landing/back-to-top"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SavingsCalculator />
        <CTABanner variant="forest" />
        <ComparisonTable />
        <SocialProof />
        <CTABanner variant="gold" />
        <FAQSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
