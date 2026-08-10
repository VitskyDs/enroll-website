import { Link } from 'react-router-dom'

const USE_CASES = [
  {
    icon: '🍽️',
    title: 'בתי קפה',
    body: 'נקודות על כל קנייה, כרטיסיית ניקובים דיגיטלית והטבת יום הולדת — בדיוק כמו שראיתם למעלה.',
  },
  {
    icon: '🐾',
    title: 'חנויות ומספרות לחיות מחמד',
    body: 'כרטיסיית ניקובים לטיפוחים, הטבת יום הולדת ומנוי חודשי קבוע.',
    href: '/pets',
    cta: 'צפו בעמוד לדוגמה',
  },
  {
    icon: '💇',
    title: 'מספרות ומספרות גברים',
    body: 'תוכנית דרגות ותורים חוזרים שמשאירים את הכיסא מלא כל שבוע.',
  },
  {
    icon: '🧘',
    title: 'ספא וטיפוח',
    body: 'מנויי טיפולים חודשיים והכנסה צפויה במקום תלות בהזמנות מזדמנות.',
  },
  {
    icon: '💅',
    title: 'מכוני יופי וציפורניים',
    body: 'חבילות מראש ותוכנית נאמנות שהופכות ביקור חד-פעמי להרגל קבוע.',
  },
  {
    icon: '🧹',
    title: 'שירותי בית',
    body: 'חבילות שירות מראש והטבות הפניה שמביאות את ההזמנה הבאה לבד.',
  },
]

export default function HeUseCases() {
  return (
    <section className="use-cases-section" style={{ background: '#fff', padding: '88px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
            textTransform: 'uppercase', letterSpacing: '1.2px', color: '#61001d', margin: 0,
          }}>לא רק לבתי קפה</p>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
            letterSpacing: '-0.03em', lineHeight: 1.15, color: '#141d21', margin: '10px 0 0',
          }}>
            מועדון לקוחות לכל עסק שהלקוחות שלו חוזרים
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065',
            lineHeight: 1.65, marginTop: 16,
          }}>
            אנרול נבנתה קודם כול לבתי קפה, אבל אותה תשתית עובדת מצוין גם בתחומים אחרים — הנה כמה דוגמאות.
          </p>
        </div>

        <div className="use-cases-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48,
        }}>
          {USE_CASES.map((u, i) => {
            const Card = u.href ? Link : 'div'
            const linkProps = u.href ? { to: u.href } : {}
            return (
              <Card
                key={i}
                {...linkProps}
                className={`use-case-card${u.href ? ' use-case-card--linked' : ''}`}
                style={{
                  background: '#f4faff', border: '1.5px solid #e8d9c0', borderRadius: 14,
                  padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12,
                  textDecoration: 'none',
                }}
              >
                <div style={{ fontSize: 28, lineHeight: 1 }}>{u.icon}</div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 17,
                  color: '#141d21', letterSpacing: '-0.02em',
                }}>{u.title}</div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, color: '#576065', lineHeight: 1.6, flex: 1,
                }}>{u.body}</div>
                {u.href && (
                  <div style={{
                    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13.5, color: '#811b32',
                    display: 'flex', alignItems: 'center', gap: 6, marginTop: 4,
                  }}>
                    {u.cta}
                    <span aria-hidden="true">←</span>
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>

      <style>{`
        .use-case-card--linked {
          border-color: #811b32 !important;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          cursor: pointer;
          transition: box-shadow 0.18s, transform 0.18s;
        }
        .use-case-card--linked:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.08);
        }
        @media (max-width: 900px) {
          .use-cases-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .use-cases-section { padding: 64px 20px !important; }
          .use-cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
