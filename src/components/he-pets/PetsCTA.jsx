import { HeWaitlistForm } from '../he/HeHero'

const TRUST = ['חינם להצטרפות', 'בלי כרטיס אשראי', 'מחיר מוקפא למצטרפים ראשונים']

export default function PetsCTA() {
  return (
    <section id="waitlist" style={{ background: '#141d21', padding: '96px 24px' }}>
      <style>{`
        .pets-cta-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .pets-cta-eyebrow {
          font-family: var(--font-heading);
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.4);
          margin-bottom: 1.25rem;
        }
        .pets-cta-h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 3.5vw, 2.75rem); font-weight: 800;
          letter-spacing: -0.035em; line-height: 1.1; color: #fff;
          margin: 0 0 1.25rem;
        }
        .pets-cta-body {
          font-family: var(--font-body);
          font-size: 0.95rem; color: rgba(255,255,255,0.55);
          line-height: 1.7; margin-bottom: 2.5rem; max-width: 480px;
        }
        .pets-cta-form-wrap {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.11);
          border-radius: 14px;
          padding: 2rem 2rem 1.75rem;
          width: 100%;
        }
        .pets-cta-trust {
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 1.25rem; margin-top: 1.5rem;
        }
        .pets-cta-trust-item {
          font-family: var(--font-body);
          font-size: 0.77rem; color: rgba(255,255,255,0.38); font-weight: 500;
          display: flex; align-items: center; gap: 0.35rem;
        }
        .pets-cta-trust-item::before {
          content: '✓'; color: rgba(255,255,255,0.5); font-weight: 700;
        }
        @media (max-width: 480px) {
          .pets-cta-form-wrap { padding: 1.5rem 1.25rem; }
        }
      `}</style>
      <div className="pets-cta-inner">
        <p className="pets-cta-eyebrow">גישה מוקדמת · חנויות ומספרות חיות מחמד</p>
        <h2 className="pets-cta-h2">היו העסק הראשון לחיות מחמד ברשימת ההמתנה של אנרול</h2>
        <p className="pets-cta-body">
          אנחנו קולטים קבוצה קטנה של עסקים עצמאיים לחיות מחמד ראשונים. קבלו מחיר מוקפא למצטרפים ראשונים,
          השפעה ישירה על המוצר, ומועדון לקוחות פעיל לפני המתחרים שלכם.
        </p>
        <div className="pets-cta-form-wrap">
          <HeWaitlistForm dark />
        </div>
        <div className="pets-cta-trust">
          {TRUST.map((t, i) => (
            <span key={i} className="pets-cta-trust-item">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
