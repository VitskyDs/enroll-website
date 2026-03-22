import PretWaitlistForm from './PretWaitlistForm'

export default function PretCTA() {
  return (
    <section id="waitlist" style={{ background: '#2D5C28', padding: '100px 0' }}>
      <style>{`
        .pret-cta-wrap {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pret-cta-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          padding: 0.35rem 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.75rem;
        }
        .pret-cta-h2 {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.07;
          color: #ffffff;
          margin: 0 0 1.25rem;
          max-width: 640px;
        }
        .pret-cta-body {
          font-size: 1rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          max-width: 500px;
          margin: 0 0 2.5rem;
        }
        .pret-cta-form-wrap {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 20px;
          padding: 2rem 2rem 1.75rem;
          width: 100%;
          max-width: 560px;
        }
        .pret-cta-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 1.75rem;
        }
        .pret-cta-trust-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
        }
        .pret-cta-trust-item::before {
          content: '✓';
          color: rgba(255,255,255,0.6);
          font-weight: 700;
        }
        @media (max-width: 480px) {
          .pret-cta-form-wrap { padding: 1.5rem 1.25rem; }
        }
      `}</style>
      <div className="pret-cta-wrap">
        <div className="pret-cta-kicker">Early access · Coffee shops</div>
        <h2 className="pret-cta-h2">Be the first café on the Enroll waitlist</h2>
        <p className="pret-cta-body">
          We're onboarding a small cohort of independent coffee shops first. Get founding-member pricing, direct input into the product, and your loyalty program live before your competition even knows it exists.
        </p>
        <div className="pret-cta-form-wrap">
          <PretWaitlistForm variant="sage" buttonLabel="Reserve my spot →" />
        </div>
        <div className="pret-cta-trust">
          {['Free to join', 'No credit card', 'Founding-member pricing locked in'].map((t, i) => (
            <span key={i} className="pret-cta-trust-item">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
