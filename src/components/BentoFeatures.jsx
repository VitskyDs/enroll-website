export default function BentoFeatures() {
  return (
    <section style={{ background: '#f4faff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80, maxWidth: 672, margin: '0 auto 80px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36,
            color: '#141d21', lineHeight: '40px', letterSpacing: '-0.9px', margin: 0,
          }}>Enterprise tech for local legends.</h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065',
            lineHeight: '24px', marginTop: 16,
          }}>We've distilled millions of dollars of loyalty R&D into a simple app for your counter.</p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {/* Feature 1 — Stamp Cards (spans 2 cols) */}
          <div className="bento-span-2" style={{
            gridColumn: 'span 2', background: '#fff', borderRadius: 24,
            padding: 33, display: 'flex', gap: 32, alignItems: 'center',
            border: '1px solid rgba(0,0,0,0)',
          }}>
            <div style={{ flex: '0 0 342px' }} className="bento-text-col">
              <div style={{
                width: 48, height: 48, borderRadius: 24, background: 'rgba(129,27,50,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#811b32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 3v18"/>
                </svg>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24,
                color: '#141d21', marginTop: 24, lineHeight: '32px',
              }}>Digital Stamp Cards</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065',
                lineHeight: '26px', marginTop: 12,
              }}>
                No more lost paper cards. Customers scan a
                simple QR code at the till. Fast, hygienic, and
                eco-friendly.
              </p>
            </div>

            {/* Stamp card mockup */}
            <div style={{
              flex: 1, background: '#e6eff6', borderRadius: 8, padding: 16,
            }} className="bento-mockup">
              <div style={{
                background: '#fff', borderRadius: 24, padding: 17,
                border: '1px solid rgba(221,192,193,0.1)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
                    color: '#61001d', textTransform: 'uppercase', letterSpacing: '0.6px',
                  }}>Your Rewards</span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16, color: '#61001d',
                  }}>8/10</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} style={{
                      width: 23, height: 32, borderRadius: 9999,
                      background: i < 8 ? '#61001d' : '#e0e9f0',
                      border: i >= 8 ? '2px dashed #ddc0c1' : 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {i < 8 && (
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path d="M3 6l3 3 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 — Daily Subscriptions (dark card) */}
          <div style={{
            background: '#61001d', borderRadius: 24, padding: 32,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 29 }}>
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24,
                color: '#fff', lineHeight: '32px', margin: 0,
              }}>Daily Subscriptions</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.8)',
                lineHeight: '24px', marginTop: 12,
              }}>
                Launch your own reward club, increasing recurring revenue every month.
              </p>
            </div>

            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 32, paddingTop: 25,
            }}>
              <div style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
                color: '#fff', textTransform: 'uppercase', letterSpacing: '1.2px', opacity: 0.6,
              }}>Success Stat</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 24,
                color: '#fff', lineHeight: '32px',
              }}>+24% Monthly Revenue</div>
            </div>
          </div>

          {/* Feature 3 — Audience Insights */}
          <div style={{
            background: '#fff', borderRadius: 24, padding: 32,
            border: '1px solid rgba(0,0,0,0)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 24, background: 'rgba(129,27,50,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#811b32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24,
              color: '#141d21', marginTop: 24, lineHeight: '32px',
            }}>Audience Insights</h3>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065',
              lineHeight: '26px', marginTop: 12,
            }}>
              Know your best customers by name. See
              when they visit, what they buy, and why
              they stay.
            </p>
          </div>

          {/* Feature 4 — Push Campaigns (spans 2 cols) */}
          <div className="bento-span-2" style={{
            gridColumn: 'span 2', background: '#fff', borderRadius: 24,
            padding: 33, display: 'flex', gap: 32, alignItems: 'center',
            border: '1px solid rgba(0,0,0,0)',
          }}>
            {/* Birthday notification mockup */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
              className="bento-mockup">
              <div style={{ maxWidth: 280, position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: '-16px -16px 16px 16px',
                  background: '#e6eff6', borderRadius: 16,
                }} />
                <div style={{
                  background: '#fff', borderRadius: 16, padding: 25,
                  border: '1px solid rgba(221,192,193,0.1)',
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
                  position: 'relative',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', background: '#ffd9dc',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#811b32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
                      </svg>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#141d21',
                    }}>Happy Birthday, Alex!</span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 12, color: '#576065',
                    lineHeight: '16px', margin: 0,
                  }}>
                    Your favorite Flat White is on the house
                    today. Tap to claim at Brick & Brew.
                  </p>
                  <div style={{
                    height: 8, borderRadius: 9999, background: '#811b32', marginTop: 16, width: '100%',
                  }} />
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }} className="bento-text-col">
              <div style={{
                width: 48, height: 48, borderRadius: 24, background: 'rgba(129,27,50,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="#811b32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
                </svg>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24,
                color: '#141d21', marginTop: 24, lineHeight: '32px',
              }}>Push Campaigns</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065',
                lineHeight: '26px', marginTop: 12,
              }}>
                Re-engage lost regulars with automated "We
                miss you" messages sent straight to their
                phone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-span-2 {
            grid-column: span 1 !important;
          }
          .bento-span-2 {
            flex-direction: column !important;
          }
          .bento-text-col {
            flex: unset !important;
          }
        }
        @media (max-width: 640px) {
          .bento-mockup {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
