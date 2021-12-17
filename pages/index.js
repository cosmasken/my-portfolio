
import Features from '../components/feature-section'
import HeroSection from '../components/hero-section'
import Pricing from '../components/pricing'

export default function Home() {
  return (
    <div className="container">
     <HeroSection></HeroSection>
     <Features></Features>
     <Pricing></Pricing>
    </div>
  )
}
