const TIERS = [
  {
    icon: '🟢',
    name: 'Green',
    pill: 'Starter',
    pillBg: '#EBF4E9',
    pillColor: '#2D5C28',
    barColor: '#52b788',
    earnRate: '1★ per $1',
    qualify: 'Automatic on signup',
    birthday: '1 day window',
    doubleStar: 'Occasional',
    perk: 'Digital member card',
  },
  {
    icon: '🥇',
    name: 'Gold',
    pill: 'Loyal',
    pillBg: '#FDF6E3',
    pillColor: '#B5830A',
    barColor: '#D4A017',
    earnRate: '1.2★ per $1',
    qualify: '500 stars / year',
    birthday: '7 day window',
    doubleStar: '4 extra days/year',
    perk: 'Gold Card + early access',
  },
  {
    icon: '💎',
    name: 'Reserve',
    pill: 'VIP',
    pillBg: '#FEF0E8',
    pillColor: '#D94F1C',
    barColor: '#D94F1C',
    earnRate: '1.7★ per $1',
    qualify: '2,500 stars / year',
    birthday: '30 day window',
    doubleStar: '6 extra days/year',
    perk: 'Personalized Reserve Card',
    highlight: true,
  },
]

const HOOKS = [
  { icon: '⭐', title: 'Variable Reward Schedule', body: 'Double Star Days and surprise bonus offers drop unpredictably. That uncertainty creates compulsive checking — the same mechanism behind a slot machine.' },
  { icon: '⏰', title: 'Star Expiration Urgency', body: 'Green-tier stars expire 6 months after earning. This creates real loss aversion — customers come back just to protect what they already have.' },
  { icon: '🎂', title: 'The Birthday Effect', body: 'A free drink on your birthday feels personal and earned. It guarantees a visit and creates emotional attachment. Reserve members get 30 days to redeem.' },
  { icon: '📊', title: 'The Progress Bar', body: '147 stars → 200 for a free latte. That 53-star gap is a purchase motivator. Near-completion is one of the most powerful forces in consumer psychology.' },
  { icon: '👑', title: 'Status & Identity', body: 'The Reserve Card isn\'t just a card — it\'s an identity. Gold and Reserve members get invite-only access, early drops, and personalized merchandise.' },
  { icon: '🔁', title: 'Pre-loaded Wallets', body: 'Bonus stars for loading $30+ onto the app means money enters the ecosystem before a purchase. Psychologically, it\'s already "spent" — customers return to use it.' },
]

export default function PretPlaybook() {
  return (
    <section style={{ background: '#FDFAF4', padding: '96px 0 0' }}>
      <style>{`
        .pret-pb-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .pret-pb-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FEF0E8;
          border: 1.5px solid #F2C9B4;
          border-radius: 100px;
          padding: 0.35rem 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #D94F1C;
          letter-spacing: 0.04em;
          margin-bottom: 1.25rem;
        }
        .pret-pb-h2 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.08;
          color: #1A1109;
          margin: 0 0 1.1rem;
          max-width: 600px;
        }
        .pret-pb-sub {
          font-size: 1rem;
          color: #7A6450;
          line-height: 1.7;
          max-width: 540px;
          margin: 0 0 3.5rem;
        }

        /* Tier cards */
        .pret-tiers-bg {
          background: #F2E8D4;
          border-radius: 24px;
          padding: 2.5rem;
          margin-bottom: 4rem;
        }
        .pret-tiers-heading {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9A8470;
          margin-bottom: 1.5rem;
        }
        .pret-tiers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .pret-tier-card {
          background: #FDFAF4;
          border-radius: 18px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          position: relative;
          overflow: hidden;
          border: 1.5px solid #E8D9C0;
          transition: box-shadow 0.2s;
        }
        .pret-tier-card:hover {
          box-shadow: 0 8px 28px rgba(26,17,9,0.1);
        }
        .pret-tier-card.vip {
          border-color: #D94F1C;
        }
        .pret-tier-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          border-radius: 0;
        }
        .pret-tier-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pret-tier-icon { font-size: 1.5rem; }
        .pret-tier-pill {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border-radius: 100px;
          padding: 0.2rem 0.65rem;
        }
        .pret-tier-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #1A1109;
          letter-spacing: -0.02em;
        }
        .pret-tier-earn {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .pret-tier-earn-sub {
          font-size: 0.72rem;
          color: #9A8470;
          font-weight: 500;
          margin-top: 0.15rem;
        }
        .pret-tier-rows {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          padding-top: 0.75rem;
          border-top: 1px solid #E8D9C0;
        }
        .pret-tier-row {
          display: flex;
          justify-content: space-between;
          gap: 0.5rem;
          font-size: 0.78rem;
        }
        .pret-tier-row-k { color: #9A8470; font-weight: 500; }
        .pret-tier-row-v { color: #1A1109; font-weight: 700; text-align: right; }

        /* Hooks */
        .pret-hooks-heading {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9A8470;
          margin-bottom: 1.5rem;
        }
        .pret-hooks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .pret-hook-card {
          background: #ffffff;
          border: 1.5px solid #E8D9C0;
          border-radius: 20px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          transition: box-shadow 0.18s, transform 0.18s;
        }
        .pret-hook-card:hover {
          box-shadow: 0 6px 24px rgba(26,17,9,0.08);
          transform: translateY(-2px);
        }
        .pret-hook-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FEF0E8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .pret-hook-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #1A1109;
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .pret-hook-body {
          font-size: 0.83rem;
          color: #7A6450;
          line-height: 1.65;
        }

        /* Closing strip */
        .pret-pb-callout {
          margin-top: 4rem;
          background: #1A1109;
          padding: 3.5rem 3rem;
          text-align: center;
        }
        .pret-pb-callout-q {
          font-size: clamp(1.15rem, 2vw, 1.5rem);
          font-weight: 700;
          color: white;
          line-height: 1.5;
          letter-spacing: -0.02em;
          max-width: 700px;
          margin: 0 auto;
        }
        .pret-pb-callout-q em {
          font-style: normal;
          color: #D94F1C;
        }

        @media (max-width: 900px) {
          .pret-tiers-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .pret-hooks-grid { grid-template-columns: 1fr; }
          .pret-tiers-bg { padding: 1.5rem; }
        }
      `}</style>
      <div className="pret-pb-wrap">
        <div className="pret-pb-kicker">The Starbucks Playbook</div>
        <h2 className="pret-pb-h2">Why 54 million people keep coming back</h2>
        <p className="pret-pb-sub">It's not the coffee. It's the system. Here's the exact psychology Starbucks built their empire on — and why it works so devastatingly well.</p>

        <div className="pret-tiers-bg">
          <div className="pret-tiers-heading">The three tiers — and how they lock customers in</div>
          <div className="pret-tiers-grid">
            {TIERS.map((t, i) => (
              <div key={i} className={`pret-tier-card${t.highlight ? ' vip' : ''}`}>
                <div className="pret-tier-topbar" style={{ background: t.barColor }} />
                <div className="pret-tier-head">
                  <span className="pret-tier-icon">{t.icon}</span>
                  <span className="pret-tier-pill" style={{ background: t.pillBg, color: t.pillColor }}>{t.pill}</span>
                </div>
                <div>
                  <div className="pret-tier-name">{t.name} Level</div>
                  <div className="pret-tier-earn" style={{ color: t.barColor }}>{t.earnRate.split(' ')[0]}</div>
                  <div className="pret-tier-earn-sub">{t.earnRate.split(' ').slice(1).join(' ')}</div>
                </div>
                <div className="pret-tier-rows">
                  {[['Qualify by', t.qualify], ['Birthday', t.birthday], ['Double Stars', t.doubleStar], ['Status perk', t.perk]].map(([k, v]) => (
                    <div key={k} className="pret-tier-row">
                      <span className="pret-tier-row-k">{k}</span>
                      <span className="pret-tier-row-v">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pret-hooks-heading">The 6 psychological hooks that make it work</div>
        <div className="pret-hooks-grid">
          {HOOKS.map((h, i) => (
            <div key={i} className="pret-hook-card">
              <div className="pret-hook-icon">{h.icon}</div>
              <div className="pret-hook-title">{h.title}</div>
              <div className="pret-hook-body">{h.body}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pret-pb-callout">
        <p className="pret-pb-callout-q">
          "This isn't loyalty. It's a <em>precision retention engine</em>. And until now, it was only available to billion-dollar chains."
        </p>
      </div>
    </section>
  )
}
