import { WaitlistForm } from './Hero'

export default function FinalCTA() {
  return (
    <section id="final-cta" style={{
      maxWidth: 1280, margin: '0 auto', padding: '0 24px',
    }}>
      <div style={{
        background: '#61001d',
        backgroundImage: 'linear-gradient(163deg, #61001d 0%, #811b32 100%)',
        borderRadius: 40, padding: '80px 80px 96px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
      }} className="cta-inner">
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 48,
          color: '#fff', textAlign: 'center', lineHeight: '48px', margin: 0,
        }} className="cta-heading">Ready to own your audience?</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 20, color: 'rgba(255,255,255,0.8)',
          textAlign: 'center', lineHeight: '28px', marginTop: 32, maxWidth: 576,
        }}>
          Join the waitlist today and get your first 3 months of Enroll
          Loyalty for free.
        </p>

        <div style={{ marginTop: 32 }}>
          <WaitlistForm dark />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-inner {
            padding: 48px 32px 56px !important;
            border-radius: 32px !important;
          }
          .cta-heading {
            font-size: 32px !important;
            line-height: 36px !important;
          }
        }
        @media (max-width: 640px) {
          .cta-inner {
            padding: 40px 24px 48px !important;
          }
          .cta-heading {
            font-size: 28px !important;
            line-height: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
