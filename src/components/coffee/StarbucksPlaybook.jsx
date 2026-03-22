const TIERS = [
  {
    icon: '🟢',
    name: 'Green',
    label: 'Starter',
    qualify: 'Automatic on signup',
    earnRate: '1 star per $1 spent',
    birthday: '1 day to redeem',
    doubleStar: 'Occasional',
    status: 'Digital member card',
    accentColor: '#2d6a4f',
    borderColor: '#52b788',
  },
  {
    icon: '🥇',
    name: 'Gold',
    label: 'Loyal',
    qualify: '500 stars in 12 months',
    earnRate: '1.2 stars per $1 spent',
    birthday: '7 days to redeem',
    doubleStar: '4 extra days/year',
    status: 'Gold Card + early access',
    accentColor: '#b5830a',
    borderColor: '#d4a017',
  },
  {
    icon: '💎',
    name: 'Reserve',
    label: 'VIP',
    qualify: '2,500 stars in 12 months',
    earnRate: '1.7 stars per $1 spent',
    birthday: '30 days to redeem',
    doubleStar: '6 extra days/year',
    status: 'Personalized Reserve Card',
    accentColor: '#9f1b32',
    borderColor: '#9f1b32',
    highlight: true,
  },
]

const HOOKS = [
  {
    icon: '⭐',
    title: 'Variable Reward Schedule',
    body: "You never know when the next bonus drops. Double Star Days and surprise offers create unpredictable excitement — the same mechanism as a slot machine. Unpredictability drives compulsive checking.",
  },
  {
    icon: '⏰',
    title: 'Star Expiration Urgency',
    body: 'Green-level stars expire 6 months after earning — unless you keep spending. This creates real urgency: customers come back just to protect what they already have. Loss aversion at work.',
  },
  {
    icon: '🎂',
    title: 'The Birthday Effect',
    body: "A free drink on your birthday feels personal, earned, and special. It drives a guaranteed visit and creates emotional attachment to the brand. Reserve members get 30 days — a gift that keeps giving.",
  },
  {
    icon: '📊',
    title: 'The Progress Bar',
    body: 'Every purchase moves the needle. 147 stars → 200 for a free latte. That 53-star gap is a purchase motivator. The near-completion effect is one of the most powerful forces in consumer psychology.',
  },
  {
    icon: '👑',
    title: 'Status & Identity',
    body: "The Reserve Card isn't just a card — it's an identity. Gold and Reserve members get invite-only access, early product drops, and personalized merchandise. People pay to belong to something exclusive.",
  },
  {
    icon: '🔁',
    title: 'Pre-loaded Wallets',
    body: 'Bonus stars for loading $30+ onto the app means money enters the Starbucks ecosystem before a purchase is made. Psychologically, it\'s already "spent" — and customers return to use it.',
  },
]

export default function StarbucksPlaybook() {
  return (
    <section style={{ background: 'var(--white)', padding: '88px 0 0' }}>
      <style>{`
        .playbook-header {
          margin-bottom: 3rem;
        }
        .playbook-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }
        .playbook-h2 {
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.1;
          color: var(--dark);
          margin-bottom: 1rem;
          max-width: 580px;
        }
        .playbook-sub {
          font-size: 1rem;
          color: var(--mid);
          line-height: 1.65;
          max-width: 540px;
        }

        /* Tiers */
        .tiers-wrap {
          background: var(--cream);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          margin-bottom: 3.5rem;
        }
        .tiers-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }
        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .tier-card {
          background: var(--white);
          border-radius: 12px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border: 1.5px solid var(--border);
          position: relative;
          overflow: hidden;
        }
        .tier-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }
        .tier-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tier-icon {
          font-size: 1.5rem;
          line-height: 1;
        }
        .tier-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 100px;
          padding: 0.2rem 0.6rem;
        }
        .tier-name {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--dark);
        }
        .tier-earn {
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .tier-earn-label {
          font-size: 0.72rem;
          color: var(--muted);
          margin-top: 0.2rem;
        }
        .tier-rows {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--border);
        }
        .tier-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.78rem;
          line-height: 1.4;
        }
        .tier-row-key {
          color: var(--muted);
          font-weight: 500;
          flex-shrink: 0;
        }
        .tier-row-val {
          color: var(--dark);
          font-weight: 600;
          text-align: right;
        }

        /* Hooks */
        .hooks-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }
        .hooks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 0;
        }
        .hook-card {
          background: var(--cream);
          border: 1.5px solid var(--border);
          border-radius: 14px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .hook-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--accent-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .hook-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: -0.015em;
          line-height: 1.3;
        }
        .hook-body {
          font-size: 0.83rem;
          color: var(--mid);
          line-height: 1.65;
        }

        /* Closing callout */
        .playbook-callout {
          margin-top: 3.5rem;
          background: var(--dark);
          padding: 3rem 2.5rem;
          text-align: center;
        }
        .playbook-callout-quote {
          font-size: clamp(1.1rem, 2vw, 1.45rem);
          font-weight: 600;
          color: var(--white);
          line-height: 1.5;
          letter-spacing: -0.02em;
          max-width: 680px;
          margin: 0 auto;
        }
        .playbook-callout-quote em {
          color: var(--accent);
          font-style: normal;
        }

        @media (max-width: 900px) {
          .tiers-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .hooks-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="container">
        <div className="playbook-header">
          <div className="playbook-eyebrow">The Starbucks Playbook</div>
          <h2 className="playbook-h2">Why 54 million people keep coming back</h2>
          <p className="playbook-sub">
            It's not the coffee. It's the system. Here's the exact psychology Starbucks built their empire on — and why it works so devastatingly well.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="tiers-wrap">
          <div className="tiers-label">The three tiers — and how they lock customers in</div>
          <div className="tiers-grid">
            {TIERS.map((tier, i) => (
              <div
                key={i}
                className="tier-card"
                style={{ borderColor: tier.highlight ? 'var(--accent)' : 'var(--border)' }}
              >
                <div
                  className="tier-card-top-bar"
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '3px',
                    background: tier.borderColor,
                  }}
                />
                <div className="tier-card-head">
                  <span className="tier-icon">{tier.icon}</span>
                  <span
                    className="tier-label"
                    style={{
                      background: tier.accentColor + '18',
                      color: tier.accentColor,
                    }}
                  >
                    {tier.label}
                  </span>
                </div>
                <div>
                  <div className="tier-name">{tier.name} Level</div>
                  <div className="tier-earn" style={{ color: tier.accentColor }}>{tier.earnRate.split(' ')[0]}</div>
                  <div className="tier-earn-label">{tier.earnRate.split(' ').slice(1).join(' ')}</div>
                </div>
                <div className="tier-rows">
                  <div className="tier-row">
                    <span className="tier-row-key">Qualify by</span>
                    <span className="tier-row-val">{tier.qualify}</span>
                  </div>
                  <div className="tier-row">
                    <span className="tier-row-key">Birthday reward</span>
                    <span className="tier-row-val">{tier.birthday}</span>
                  </div>
                  <div className="tier-row">
                    <span className="tier-row-key">Double Star Days</span>
                    <span className="tier-row-val">{tier.doubleStar}</span>
                  </div>
                  <div className="tier-row">
                    <span className="tier-row-key">Status perk</span>
                    <span className="tier-row-val">{tier.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hooks Grid */}
        <div className="hooks-label">The 6 psychological hooks that make it work</div>
        <div className="hooks-grid">
          {HOOKS.map((h, i) => (
            <div key={i} className="hook-card">
              <div className="hook-icon-wrap">{h.icon}</div>
              <div className="hook-title">{h.title}</div>
              <div className="hook-body">{h.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing callout — full width, no container */}
      <div className="playbook-callout">
        <p className="playbook-callout-quote">
          "This isn't loyalty. It's a <em>precision retention engine</em>. And until now, it was only available to billion-dollar chains."
        </p>
      </div>
    </section>
  )
}
