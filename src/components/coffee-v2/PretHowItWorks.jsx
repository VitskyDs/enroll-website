const STEPS = [
  {
    num: '01',
    icon: '🧠',
    title: 'Tell us about your café',
    body: "Share your brand, your regulars, and what makes your coffee worth coming back for. Enroll's AI builds a loyalty program around your specific menu, vibe, and customers.",
  },
  {
    num: '02',
    icon: '🚀',
    title: 'Launch in days, not months',
    body: 'Stamp cards, birthday drinks, daily-regular subscriptions — all live under your brand. No code, no developer, no months of setup. Your loyalty program is ready before the week is out.',
  },
  {
    num: '03',
    icon: '📈',
    title: 'Watch the data work for you',
    body: 'Enroll tracks which rewards drive repeat visits and tunes your program automatically. You focus on the coffee. The system keeps customers coming back.',
  },
]

export default function PretHowItWorks() {
  return (
    <section style={{ background: '#F2E8D4', padding: '96px 0' }}>
      <style>{`
        .pret-hiw-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .pret-hiw-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .pret-hiw-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9A8470;
          margin-bottom: 0.75rem;
        }
        .pret-hiw-h2 {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          color: #1A1109;
          max-width: 440px;
          margin: 0;
        }
        .pret-hiw-sub {
          font-size: 0.95rem;
          color: #7A6450;
          line-height: 1.7;
          max-width: 300px;
          margin: 0;
          align-self: flex-end;
        }
        .pret-hiw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .pret-hiw-card {
          background: #FDFAF4;
          border-radius: 20px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border: 1.5px solid #E8D9C0;
        }
        .pret-hiw-num {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -0.06em;
          line-height: 1;
          color: #E8D9C0;
        }
        .pret-hiw-icon {
          font-size: 1.5rem;
          line-height: 1;
        }
        .pret-hiw-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #1A1109;
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .pret-hiw-body {
          font-size: 0.86rem;
          color: #7A6450;
          line-height: 1.65;
        }
        @media (max-width: 768px) {
          .pret-hiw-grid { grid-template-columns: 1fr; }
          .pret-hiw-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
      <div className="pret-hiw-wrap">
        <div className="pret-hiw-header">
          <div>
            <div className="pret-hiw-kicker">Simple by design</div>
            <h2 className="pret-hiw-h2">Your loyalty program, live in three steps</h2>
          </div>
          <p className="pret-hiw-sub">No developers. No months of setup. Just your brand and customers who keep coming back.</p>
        </div>
        <div className="pret-hiw-grid">
          {STEPS.map((s, i) => (
            <div key={i} className="pret-hiw-card">
              <div className="pret-hiw-num">{s.num}</div>
              <div className="pret-hiw-icon">{s.icon}</div>
              <div className="pret-hiw-title">{s.title}</div>
              <div className="pret-hiw-body">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
