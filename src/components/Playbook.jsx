const steps = [
  {
    title: 'Multi-Tiered Tiers',
    desc: 'Move beyond "10th cup free". Reward high-frequency customers with elite perks and exclusive early access.',
  },
  {
    title: 'Variable Rewards',
    desc: 'Gamify the morning commute. Use bonus stars on slow Tuesdays to drive traffic when you need it most.',
  },
  {
    title: 'Birthday Magic',
    desc: 'Automated personalized offers that make your customers feel seen, valued, and celebrated.',
  },
]

export default function Playbook() {
  return (
    <section id="how-it-works" style={{
      background: '#fff', padding: '128px 24px',
    }}>
      <div className="playbook-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
        maxWidth: 1280, margin: '0 auto',
      }}>
        {/* Left — Image grid */}
        <div className="playbook-images" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 48 }}>
            <div style={{
              borderRadius: 24, overflow: 'hidden', height: 256,
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}>
              <img src="/playbook-1.jpg" alt="Coffee preparation" style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }} />
            </div>
            <div style={{
              background: '#811b32', borderRadius: 24, height: 128,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 3L22.5 12L32 13.5L25 20.5L26.5 30L18 25.5L9.5 30L11 20.5L4 13.5L13.5 12L18 3Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 48 }}>
            <div style={{
              background: '#e0e9f0', borderRadius: 24, height: 128,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="36" height="40" viewBox="0 0 36 40" fill="none">
                <path d="M18 2V8M6 14H30V30C30 33.3 27.3 36 24 36H12C8.7 36 6 33.3 6 30V14ZM30 18H33C34.7 18 36 19.3 36 21V23C36 24.7 34.7 26 33 26H30" stroke="#61001d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{
              borderRadius: 24, overflow: 'hidden', height: 256,
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}>
              <img src="/playbook-2.jpg" alt="Latte art" style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }} />
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
            textTransform: 'uppercase', letterSpacing: '1.2px', color: '#61001d',
            marginBottom: 8,
          }}>The Playbook</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 48,
            color: '#141d21', lineHeight: '48px', margin: 0,
          }}>
            Why 54 million people<br />keep coming back
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 32 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <div style={{
                  width: 48, height: 48, minWidth: 48, borderRadius: '50%', background: '#e0e9f0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16, color: '#61001d',
                }}>{i + 1}</div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20,
                    color: '#141d21', lineHeight: '28px', margin: 0,
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065',
                    lineHeight: '24px', marginTop: 8,
                  }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .playbook-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .playbook-grid h2 {
            font-size: 32px !important;
            line-height: 36px !important;
          }
        }
        @media (max-width: 640px) {
          .playbook-images {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
