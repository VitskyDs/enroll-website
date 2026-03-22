const PROBLEMS = [
  {
    icon: '☕',
    iconBg: '#FEF0E8',
    title: 'You compete on quality. They compete on habits.',
    body: "Starbucks doesn't win on taste — they win on loyalty points, streak rewards, and push notifications. Without that system, you're fighting with one hand tied behind your back.",
    tag: 'The real competition',
    tagBg: '#FEF0E8',
    tagColor: '#D94F1C',
  },
  {
    icon: '📱',
    iconBg: '#EBF4E9',
    title: 'Your regulars have no specific reason to return.',
    body: "They like you. But when they're in a rush, they default to the app that already has their rewards on it. You're losing visits not because of your coffee — but because you don't have a system.",
    tag: 'The retention gap',
    tagBg: '#EBF4E9',
    tagColor: '#2D5C28',
  },
  {
    icon: '💸',
    iconBg: '#FDF6E3',
    title: 'Loyalty platforms are priced for chains, not cafés.',
    body: 'Enterprise loyalty tools cost thousands per month and need a developer to set up. Independent shops get left with a paper punch card — or a clunky app that does nothing for retention.',
    tag: 'The pricing wall',
    tagBg: '#FDF6E3',
    tagColor: '#B5830A',
  },
]

export default function PretProblem() {
  return (
    <section style={{ background: '#ffffff', padding: '96px 0' }}>
      <style>{`
        .pret-prob-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .pret-prob-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9A8470;
          margin-bottom: 0.75rem;
        }
        .pret-prob-h2 {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          color: #1A1109;
          max-width: 540px;
          margin: 0 0 1rem;
        }
        .pret-prob-sub {
          font-size: 1rem;
          color: #7A6450;
          line-height: 1.7;
          max-width: 500px;
          margin: 0 0 3.5rem;
        }
        .pret-prob-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .pret-prob-card {
          background: #FDFAF4;
          border: 1.5px solid #E8D9C0;
          border-radius: 20px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .pret-prob-card:hover {
          box-shadow: 0 8px 30px rgba(26,17,9,0.09);
          transform: translateY(-2px);
        }
        .pret-prob-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .pret-prob-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .pret-prob-tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border-radius: 100px;
          padding: 0.25rem 0.7rem;
          white-space: nowrap;
          align-self: flex-start;
        }
        .pret-prob-title {
          font-size: 1rem;
          font-weight: 800;
          color: #1A1109;
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .pret-prob-body {
          font-size: 0.86rem;
          color: #7A6450;
          line-height: 1.65;
        }
        @media (max-width: 768px) {
          .pret-prob-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="pret-prob-wrap">
        <p className="pret-prob-kicker">Sound familiar?</p>
        <h2 className="pret-prob-h2">Great coffee isn't enough to keep them coming back</h2>
        <p className="pret-prob-sub">You pour your heart into every cup. But without a system to reward regulars, Starbucks wins on habit — not quality.</p>
        <div className="pret-prob-grid">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="pret-prob-card">
              <div className="pret-prob-card-top">
                <div className="pret-prob-icon" style={{ background: p.iconBg }}>{p.icon}</div>
                <span className="pret-prob-tag" style={{ background: p.tagBg, color: p.tagColor }}>{p.tag}</span>
              </div>
              <div className="pret-prob-title">{p.title}</div>
              <div className="pret-prob-body">{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
