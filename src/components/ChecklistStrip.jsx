const ITEMS = ['No dev team required','Live in days, not months','Loyalty + subscriptions unified','AI that learns your brand','Founding-member pricing']

export default function ChecklistStrip() {
  return (
    <div style={{ background: 'var(--cream)', borderTop: '1px solid var(--cream-2)', borderBottom: '1px solid var(--cream-2)', padding: '1rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {ITEMS.map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--mid)' }}>
            <span style={{ color: 'var(--orange)', fontWeight: 700 }}>✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
