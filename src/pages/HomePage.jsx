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
          background: '#fff', borderRadius: 64, padding: '32px 24px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32
        }}>
          <Testimonial />
          <FinalCTA />
        </div>

        <style>{`
          @media (max-width: 900px) {
            .home-content-section {
              padding: 20px 16px !important;
              gap: 20px !important;
              border-radius: 40px !important;
            }
          }
          @media (max-width: 640px) {
            .home-content-section {
              padding: 16px 12px !important;
              gap: 16px !important;
              border-radius: 28px !important;
            }
          }
        `}</style>

      </main>
      <Footer />
    </>
  )
}
