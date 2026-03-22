import CoffeeWaitlistForm from './CoffeeWaitlistForm'

const TRUST = ['Free to join', 'No credit card required', 'Founding-member pricing locked in']

export default function CoffeeWaitlistCTA() {
  return (
    <section id="waitlist" style={{ background: 'var(--dark)', padding: '96px 0' }}>
      <style>{`
        .coffee-cta-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .coffee-cta-eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 1.25rem;
        }
        .coffee-cta-h2 {
          font-size: clamp(1.85rem, 3.5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.1;
          color: var(--white);
          margin: 0 0 1.25rem;
        }
        .coffee-cta-body {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 480px;
        }
        .coffee-cta-form-wrap {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.11);
          border-radius: 14px;
          padding: 2rem 2rem 1.75rem;
          width: 100%;
        }
        .coffee-cta-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .coffee-cta-trust-item {
          font-size: 0.77rem;
          color: rgba(255,255,255,0.38);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .coffee-cta-trust-item::before {
          content: '✓';
          color: rgba(255,255,255,0.5);
          font-weight: 700;
        }
        @media (max-width: 480px) {
          .coffee-cta-form-wrap {
            padding: 1.5rem 1.25rem;
          }
        }
      `}</style>
      <div className="container">
        <div className="coffee-cta-inner">
          <p className="coffee-cta-eyebrow">Early access · Coffee shops</p>
          <h2 className="coffee-cta-h2">Be the first café on the Enroll waitlist</h2>
          <p className="coffee-cta-body">
            We're onboarding a small group of independent coffee shops first. Get founding-member pricing, direct input into the product, and a loyalty program live before your competition.
          </p>
          <div className="coffee-cta-form-wrap">
            <CoffeeWaitlistForm dark={true} buttonLabel="Reserve My Spot →" />
          </div>
          <div className="coffee-cta-trust">
            {TRUST.map((t, i) => (
              <span key={i} className="coffee-cta-trust-item">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
