import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import ProblemStrip from './components/ProblemStrip'
import Solution from './components/Solution'
import WhoItsFor from './components/WhoItsFor'
import HowItWorks from './components/HowItWorks'
import Testimonial from './components/Testimonial'
import ChecklistStrip from './components/ChecklistStrip'
import WaitlistCTA from './components/WaitlistCTA'
import CompetitiveBar from './components/CompetitiveBar'
import OrangeCTA from './components/OrangeCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <ProblemStrip />
        <Solution />
        <WhoItsFor />
        <HowItWorks />
        <Testimonial />
        <ChecklistStrip />
        <WaitlistCTA />
        <CompetitiveBar />
        <OrangeCTA />
        <Footer />
      </main>
    </>
  )
}
