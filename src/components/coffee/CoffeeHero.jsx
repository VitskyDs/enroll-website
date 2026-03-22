import CoffeeWaitlistForm from './CoffeeWaitlistForm'

export default function CoffeeHero() {
  return (
    <section style={{ background: 'var(--cream)', padding: '120px 0 88px' }}>
      <style>{`
        .coffee-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .coffee-hero-grid {
            grid-template-columns: 1fr;
          }
          .coffee-hero-visual {
            display: none;
          }
        }
        .coffee-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--white);
          border: 1.5px solid var(--accent);
          border-radius: 100px;
          padding: 0.35rem 0.9rem;
          margin-bottom: 1.5rem;
        }
        .coffee-hero-eyebrow span {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--dark);
        }
        .coffee-hero-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .coffee-hero-h1 {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: var(--dark);
          margin: 0 0 1.25rem;
        }
        .coffee-hero-sub {
          font-size: 1.05rem;
          color: var(--mid);
          line-height: 1.65;
          max-width: 480px;
          margin: 0 0 2rem;
        }
        .coffee-hero-trust {
          margin-top: 0.9rem;
          font-size: 0.78rem;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .coffee-hero-mockup {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
        }
        .coffee-hero-mockup-icon {
          font-size: 2.5rem;
          line-height: 1;
        }
        .coffee-hero-mockup-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: -0.01em;
        }
        .coffee-hero-mockup-sub {
          font-size: 0.78rem;
          color: var(--muted);
          line-height: 1.55;
          max-width: 240px;
        }
        .coffee-hero-mockup-bar {
          width: 100%;
          background: var(--orange-bg);
          border-radius: 8px;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .coffee-hero-mockup-bar-label {
          font-size: 0.72rem;
          color: var(--muted);
          font-weight: 500;
        }
        .coffee-hero-mockup-bar-value {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--dark);
        }
        .stamp-row {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.25rem;
        }
        .stamp {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          background: var(--white);
        }
        .stamp.filled {
          background: var(--dark);
          border-color: var(--dark);
          color: white;
        }
      `}</style>
      <div className="container">
        <div className="coffee-hero-grid">
          <div>
            <div className="coffee-hero-eyebrow">
              <div className="coffee-hero-eyebrow-dot"></div>
              <span>Coffee Shops · Early Access</span>
            </div>
            <h1 className="coffee-hero-h1">
              Give your regulars a reason to choose you over Starbucks.<br />Every time.
            </h1>
            <p className="coffee-hero-sub">
              Enroll gives independent coffee shops a loyalty and subscription program that rivals the big chains — built for your brand, ready in days.
            </p>
            <CoffeeWaitlistForm buttonLabel="Join the Waitlist →" />
            <p className="coffee-hero-trust">
              🔒 Free to join — no card required.
            </p>
          </div>
          <div className="coffee-hero-visual">
            <div className="coffee-hero-mockup">
              <div className="coffee-hero-mockup-icon">☕</div>
              <div className="coffee-hero-mockup-title">Brew & Earn — Loyalty Dashboard</div>
              <div className="coffee-hero-mockup-sub">Stamp progress, birthday rewards, and daily regulars — all in your brand.</div>
              <div style={{ width: '100%', marginTop: '0.5rem' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 600, textAlign: 'left', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sarah's progress</div>
                <div className="stamp-row">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`stamp${i < 7 ? ' filled' : ''}`}>
                      {i < 7 ? '☕' : ''}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.5rem' }}>7/10 — 3 more for a free drink</div>
              </div>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div className="coffee-hero-mockup-bar">
                  <span className="coffee-hero-mockup-bar-label">🎂 Birthday reward</span>
                  <span className="coffee-hero-mockup-bar-value">Active</span>
                </div>
                <div className="coffee-hero-mockup-bar">
                  <span className="coffee-hero-mockup-bar-label">🔁 Daily regular</span>
                  <span className="coffee-hero-mockup-bar-value">Subscribed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
