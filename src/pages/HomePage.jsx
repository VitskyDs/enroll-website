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
        <div className="home-content-section" style={{
          background: '#fff', borderRadius: 48, padding: '96px 96px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 96
        }}>
          <Testimonial />
          <FinalCTA />
        </div>

        <style>{`
          @media (max-width: 900px) {
            .home-content-section {
              padding: 64px 48px !important;
              gap: 64px !important;
              border-radius: 32px !important;
            }
          }
          @media (max-width: 640px) {
            .home-content-section {
              padding: 48px 20px !important;
              gap: 48px !important;
              border-radius: 24px !important;
            }
          }
        `}</style>
        
      </main>
      <Footer />
    </>
  )
}
