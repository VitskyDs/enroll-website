import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CoffeeHero from '../components/coffee/CoffeeHero'
import StarbucksStatsStrip from '../components/coffee/StarbucksStatsStrip'
import StarbucksPlaybook from '../components/coffee/StarbucksPlaybook'
import CoffeeProblem from '../components/coffee/CoffeeProblem'
import CoffeeHowItWorks from '../components/coffee/CoffeeHowItWorks'
import CoffeeFeatures from '../components/coffee/CoffeeFeatures'
import CoffeeWaitlistCTA from '../components/coffee/CoffeeWaitlistCTA'

export default function CoffeePage() {
  return (
    <>
      <Navbar />
      <main>
        <CoffeeHero />
        <StarbucksStatsStrip />
        <StarbucksPlaybook />
        <CoffeeProblem />
        <CoffeeHowItWorks />
        <CoffeeFeatures />
        <CoffeeWaitlistCTA />
      </main>
      <Footer />
    </>
  )
}
