import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PretHero from '../components/coffee-v2/PretHero'
import PretStatsStrip from '../components/coffee-v2/PretStatsStrip'
import PretPlaybook from '../components/coffee-v2/PretPlaybook'
import PretProblem from '../components/coffee-v2/PretProblem'
import PretHowItWorks from '../components/coffee-v2/PretHowItWorks'
import PretFeatures from '../components/coffee-v2/PretFeatures'
import PretCTA from '../components/coffee-v2/PretCTA'

export default function CoffeeV2Page() {
  return (
    <>
      <Navbar />
      <main>
        <PretHero />
        <PretStatsStrip />
        <PretPlaybook />
        <PretProblem />
        <PretHowItWorks />
        <PretFeatures />
        <PretCTA />
      </main>
      <Footer />
    </>
  )
}
