import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    number: '54M',
    prefix: '', suffix: 'M', value: 54, decimals: 0,
    label: 'Active Members',
    description: 'Starbucks Rewards is the most successful retail loyalty program in history.',
  },
  {
    number: '40%',
    prefix: '', suffix: '%', value: 40, decimals: 0,
    label: 'Revenue Attribution',
    description: 'Nearly half of all transactions are driven directly by loyalty incentives.',
  },
  {
    number: '$3.6B',
    prefix: '$', suffix: 'B', value: 3.6, decimals: 1,
    label: 'Pre-loaded Cards',
    description: 'Customers treat their apps like bank accounts, ensuring repeat visits.',
  },
]

function CountUp({ prefix, suffix, value, decimals, started }) {
  const [current, setCurrent] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!started) return
    const duration = 1600
    const start = performance.now()
    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(eased * value)
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [started, value])

  const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current)
  return <>{prefix}{display}{suffix}</>
}

export default function StatsStrip() {
  const [started, setStarted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-enroll" ref={sectionRef} style={{ background: '#f4faff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="stats-header" style={{ marginBottom: 64 }}>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
            textTransform: 'uppercase', letterSpacing: '1.2px', color: '#61001d',
            marginBottom: 8,
          }}>The Benchmark</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36,
            color: '#141d21', lineHeight: '40px', margin: 0,
          }}>Why loyalty matters</h2>
        </div>

        <div className="stats-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 24, padding: 40,
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 48,
                color: '#61001d', lineHeight: '48px',
              }}>
                <CountUp prefix={s.prefix} suffix={s.suffix} value={s.value} decimals={s.decimals} started={started} />
              </div>
              <div style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16,
                color: '#564143', marginTop: 8, lineHeight: '24px',
              }}>{s.label}</div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14, color: '#576065',
                lineHeight: '22.75px', marginTop: 10,
              }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          #why-enroll { padding: 64px 20px !important; }
          #why-enroll .stats-header { margin-bottom: 40px !important; }
        }
      `}</style>
    </section>
  )
}
