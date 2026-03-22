const FEATURES = [
  {
    icon: '☕',
    iconBg: '#FEF0E8',
    title: 'Digital Stamp Cards',
    body: 'Replace paper punch cards with a digital version customers actually keep. Ten stamps, free drink. Auto-tracked, zero friction at the counter.',
    tag: 'Most popular',
    tagBg: '#D94F1C',
  },
  {
    icon: '🎂',
    iconBg: '#EBF4E9',
    title: 'Birthday Drink Rewards',
    body: "Automatically send a free drink offer on a customer's birthday. One of the highest-converting loyalty perks in existence — and it runs completely on its own.",
    tag: null,
  },
  {
    icon: '🔁',
    iconBg: '#FDF6E3',
    title: 'Daily Regulars Subscription',
    body: 'Let your most loyal customers pay a flat monthly fee for their daily coffee. Predictable revenue for you, a reason to return every single day for them.',
    tag: 'New',
    tagBg: '#2D5C28',
  },
  {
    icon: '📣',
    iconBg: '#F2E8D4',
    title: 'Slow-Day Push Notifications',
    body: 'Tuesday at 2pm looking quiet? Send a targeted offer to nearby regulars. Fill seats without blasting discounts to the whole world.',
    tag: null,
  },
]

export default function PretFeatures() {
  return (
    <section style={{ background: '#FDFAF4', padding: '96px 0' }}>
      <style>{`
        .pret-feat-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .pret-feat-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9A8470;
          margin-bottom: 0.75rem;
        }
        .pret-feat-h2 {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          color: #1A1109;
          max-width: 520px;
          margin: 0 0 1rem;
        }
        .pret-feat-sub {
          font-size: 1rem;
          color: #7A6450;
          line-height: 1.7;
          max-width: 480px;
          margin: 0 0 3.5rem;
        }
        .pret-feat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .pret-feat-card {
          background: #ffffff;
          border: 1.5px solid #E8D9C0;
          border-radius: 20px;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .pret-feat-card:hover {
          box-shadow: 0 10px 36px rgba(26,17,9,0.09);
          transform: translateY(-2px);
        }
        .pret-feat-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .pret-feat-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        .pret-feat-tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border-radius: 100px;
          padding: 0.25rem 0.75rem;
          color: white;
          align-self: flex-start;
        }
        .pret-feat-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1A1109;
          letter-spacing: -0.025em;
          line-height: 1.3;
        }
        .pret-feat-body {
          font-size: 0.87rem;
          color: #7A6450;
          line-height: 1.65;
        }
        @media (max-width: 640px) {
          .pret-feat-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="pret-feat-wrap">
        <p className="pret-feat-kicker">Built for coffee shops</p>
        <h2 className="pret-feat-h2">Features your regulars will actually use</h2>
        <p className="pret-feat-sub">Not generic loyalty points. Tools designed for how coffee shops work — and how coffee drinkers think.</p>
        <div className="pret-feat-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="pret-feat-card">
              <div className="pret-feat-card-top">
                <div className="pret-feat-icon" style={{ background: f.iconBg }}>{f.icon}</div>
                {f.tag && <span className="pret-feat-tag" style={{ background: f.tagBg }}>{f.tag}</span>}
              </div>
              <div className="pret-feat-title">{f.title}</div>
              <div className="pret-feat-body">{f.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
