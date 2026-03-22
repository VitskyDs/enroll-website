import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsStrip from '../components/StatsStrip'
import Playbook from '../components/Playbook'
import BentoFeatures from '../components/BentoFeatures'
import Testimonial from '../components/Testimonial'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Playbook />
        <BentoFeatures />
        <div style={{
        background: '#fff', borderRadius: 48, padding: '96px 96px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 96
      }}>
      
<Testimonial />
        <FinalCTA />

        </div>
        
      </main>
      <Footer />
    </>
  )
}
