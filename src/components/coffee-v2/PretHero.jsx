import PretWaitlistForm from './PretWaitlistForm'

export default function PretHero() {
  return (
    <section style={{ background: '#FDFAF4', paddingTop: 120, paddingBottom: 0, overflow: 'hidden' }}>
      <style>{`
        .pret-hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .pret-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FEF0E8;
          border: 1.5px solid #F2C9B4;
          border-radius: 100px;
          padding: 0.4rem 1rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #D94F1C;
          letter-spacing: 0.02em;
          margin-bottom: 2rem;
        }
        .pret-hero-h1 {
          font-size: clamp(2.6rem, 5.5vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.03;
          color: #1A1109;
          max-width: 800px;
          margin: 0 0 1.5rem;
        }
        .pret-hero-h1 em {
          font-style: normal;
          color: #D94F1C;
        }
        .pret-hero-sub {
          font-size: 1.1rem;
          color: #7A6450;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 0 2.25rem;
        }
        .pret-hero-trust {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 1.25rem;
        }
        .pret-hero-trust-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: #9A8470;
        }
        .pret-hero-trust-item svg {
          color: #2D5C28;
        }
        .pret-hero-banner {
          margin-top: 5rem;
          background: #D94F1C;
          border-radius: 24px 24px 0 0;
          padding: 3rem 3rem 0;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          overflow: hidden;
          min-height: 240px;
        }
        .pret-hero-banner-text {
          color: white;
          padding-bottom: 2.5rem;
        }
        .pret-hero-banner-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 0.75rem;
        }
        .pret-hero-banner-h2 {
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: white;
          max-width: 380px;
        }
        .pret-hero-dashboard {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          align-self: flex-end;
          padding-bottom: 0;
        }
        .pret-dash-card {
          background: white;
          border-radius: 16px 16px 0 0;
          padding: 1.25rem 1.5rem;
          min-width: 260px;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .pret-dash-title {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9A8470;
        }
        .pret-stamp-row {
          display: flex;
          gap: 0.3rem;
        }
        .pret-stamp {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid #E8D9C0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          background: #FDFAF4;
        }
        .pret-stamp.on {
          background: #D94F1C;
          border-color: #D94F1C;
          color: white;
        }
        .pret-stamp-hint {
          font-size: 0.7rem;
          color: #9A8470;
          font-weight: 500;
        }
        .pret-dash-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        @media (max-width: 768px) {
          .pret-hero-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .pret-hero-dashboard {
            width: 100%;
          }
          .pret-dash-card {
            min-width: unset;
            border-radius: 16px;
            margin-bottom: 1rem;
          }
        }
      `}</style>

      <div className="pret-hero-inner">
        <div className="pret-hero-tag">
          ☕ Built for independent coffee shops
        </div>
        <h1 className="pret-hero-h1">
          Your regulars deserve<br />loyalty <em>as good as</em><br />Starbucks.
        </h1>
        <p className="pret-hero-sub">
          Enroll gives independent coffee shops the same loyalty and subscription tools that built Starbucks into a 54-million-member empire — without the enterprise price tag.
        </p>
        <PretWaitlistForm buttonLabel="Claim your spot →" variant="rust" />
        <div className="pret-hero-trust">
          {['Free to join', 'No card required', 'Founding-member pricing'].map((t, i) => (
            <span key={i} className="pret-hero-trust-item">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="6.5" fill="#2D5C28"/><path d="M3.5 6.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="pret-hero-banner">
          <div className="pret-hero-banner-text">
            <div className="pret-hero-banner-label">Early access · Coffee shops</div>
            <div className="pret-hero-banner-h2">The Starbucks loyalty playbook, ready for your café</div>
          </div>
          <div className="pret-hero-dashboard">
            <div className="pret-dash-card">
              <div className="pret-dash-title">Sarah's rewards</div>
              <div className="pret-stamp-row">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`pret-stamp${i < 7 ? ' on' : ''}`}>{i < 7 ? '☕' : ''}</div>
                ))}
              </div>
              <div className="pret-stamp-hint">3 more coffees for a free drink ✨</div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="pret-dash-pill" style={{ background: '#FEF0E8', color: '#D94F1C' }}>🎂 Birthday reward active</span>
                <span className="pret-dash-pill" style={{ background: '#EBF4E9', color: '#2D5C28' }}>🔁 Daily regular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
