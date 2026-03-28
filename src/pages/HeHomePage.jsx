import HeNavbar from '../components/he/HeNavbar'
import HeHero from '../components/he/HeHero'
import HeStatsStrip from '../components/he/HeStatsStrip'
import HeProblemSolution from '../components/he/HeProblemSolution'
import HePlaybook from '../components/he/HePlaybook'
import HeBentoFeatures from '../components/he/HeBentoFeatures'
import HeFinalCTA from '../components/he/HeFinalCTA'
import HeFooter from '../components/he/HeFooter'

export default function HeHomePage() {
  return (
    <div dir="rtl" className="he-page">
      <HeNavbar />
      <main>
        <HeHero />
        <HeProblemSolution />
        <HeStatsStrip />
        <HePlaybook />
        <HeBentoFeatures />
        <div className="home-content-section" style={{
          background: '#fff', borderRadius: 64, padding: '32px 24px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32,
          maxWidth: 1280, margin: '0 auto',
        }}>
          <HeFinalCTA />
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
      <HeFooter />
    </div>
  )
}
