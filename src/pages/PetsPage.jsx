import HeNavbar from '../components/he/HeNavbar'
import HeFooter from '../components/he/HeFooter'
import PetsHero from '../components/he-pets/PetsHero'
import PetsStatsStrip from '../components/he-pets/PetsStatsStrip'
import PetsPlaybook from '../components/he-pets/PetsPlaybook'
import PetsProblem from '../components/he-pets/PetsProblem'
import PetsHowItWorks from '../components/he-pets/PetsHowItWorks'
import PetsFeatures from '../components/he-pets/PetsFeatures'
import PetsCTA from '../components/he-pets/PetsCTA'

export default function PetsPage() {
  return (
    <div dir="rtl" className="he-page">
      <HeNavbar />
      <main>
        <PetsHero />
        <PetsStatsStrip />
        <PetsPlaybook />
        <PetsProblem />
        <PetsHowItWorks />
        <PetsFeatures />
        <PetsCTA />
      </main>
      <HeFooter />
    </div>
  )
}
