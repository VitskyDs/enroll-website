const problemItems = [
  'כמה נקודות יש לו',
  'מה ההטבה הבאה שלו',
  'אם קיבל הטבה על יום הולדת',
  'מה הוא מקבל אם הוא מזמין חבר',
]

const solutionItems = [
  'כמה ביקורים יש לו',
  'כמה חסר לפרס הבא',
  'איזו דרגה יש לו',
  'אילו הטבות פעילות',
  'מה הוא מקבל אם הוא מגיע עוד פעם',
]

function ConfusedCard() {
  return (
    <div style={{
      background: '#f5f0ef', borderRadius: 32, padding: 20,
      boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)',
    }}>
      <div style={{
        background: '#fff', borderRadius: 24, padding: 28,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        border: '1px solid #ede8e8',
        filter: 'grayscale(0.2)',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div style={{
            background: '#e8e2e2', borderRadius: 8, padding: '6px 14px',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, color: '#999',
          }}>כרטיס נאמנות</div>
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: '#bbb',
          }}>קפה X</div>
        </div>

        {/* Points row — blurred */}
        <div style={{
          background: '#f9f5f5', borderRadius: 16, padding: '16px 20px', marginBottom: 16,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: 13, color: '#bbb', fontWeight: 600,
          }}>הנקודות שלך</span>
          <span style={{
            fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22,
            color: '#d0c8c8', letterSpacing: 2,
          }}>???</span>
        </div>

        {/* Progress bar — empty */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#ccc', fontWeight: 600 }}>התקדמות לפרס</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#ccc' }}>???</span>
          </div>
          <div style={{
            height: 10, borderRadius: 9999, background: '#ede8e8', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(90deg, #e0d8d8 0px, #e0d8d8 8px, #ede8e8 8px, #ede8e8 16px)',
            }} />
          </div>
        </div>

        {/* Info rows */}
        {[
          'מצב יום הולדת',
          'דרגת חברות',
          'הטבות זמינות',
        ].map((label, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '12px 0', borderBottom: i < 2 ? '1px solid #f2ecec' : 'none',
          }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#c0b8b8', fontWeight: 500 }}>{label}</span>
            <div style={{
              background: '#ede8e8', borderRadius: 6, height: 14, width: 60,
            }} />
          </div>
        ))}

        {/* Footer note */}
        <div style={{
          marginTop: 20, padding: '12px 16px', background: '#fdf8f8',
          borderRadius: 12, border: '1px dashed #ddd',
          fontFamily: 'var(--font-body)', fontSize: 12, color: '#c0b0b0',
          textAlign: 'center', lineHeight: '18px',
        }}>
          לפרטים נוספים פנה לאחד מנציגינו
        </div>
      </div>
    </div>
  )
}

function ClearCard() {
  return (
    <div style={{
      background: '#e8f4f0', borderRadius: 32, padding: 20,
      boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)',
    }}>
      <div style={{
        background: '#fff', borderRadius: 24, padding: 28,
        boxShadow: '0 4px 24px rgba(39,24,9,0.08)',
        border: '1px solid rgba(129,27,50,0.08)',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, color: '#594141', letterSpacing: '0.8px',
          }}>חברת מועדון</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%', background: '#fbddc4',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, color: '#7b001f',
            }}>שר</div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: '#271809' }}>שרה</span>
          </div>
        </div>

        {/* Visits + tier */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
          <div style={{
            background: '#fdf6f0', borderRadius: 14, padding: '14px 16px', textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 900, fontSize: 26, color: '#7b001f', lineHeight: 1 }}>42</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#594141', fontWeight: 600, marginTop: 4 }}>ביקורים סה״כ</div>
          </div>
          <div style={{
            background: '#fdf6f0', borderRadius: 14, padding: '14px 16px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 22, lineHeight: 1 }}>👑</div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, color: '#271809', marginTop: 4 }}>דרגת זהב</div>
          </div>
        </div>

        {/* Progress to next reward */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#ac3400', fontWeight: 700 }}>עוד 3 ביקורים לפרס!</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#594141', fontWeight: 600 }}>7/10</span>
          </div>
          <div style={{ display: 'flex', gap: 5, height: 10 }}>
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} style={{
                flex: 1, borderRadius: 9999,
                background: i < 7 ? '#7b001f' : '#f0e8e8',
              }} />
            ))}
          </div>
        </div>

        {/* Active perks */}
        <div style={{
          background: 'rgba(45,92,40,0.08)', border: '1px solid rgba(45,92,40,0.15)',
          borderRadius: 14, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12,
          marginBottom: 12,
        }}>
          <span style={{ fontSize: 16 }}>🎂</span>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, color: '#154413' }}>מתנת יום הולדת פעילה</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(21,68,19,0.7)' }}>בתוקף עד 24 באוקטובר</div>
          </div>
        </div>

        <div style={{
          background: '#f4f8ff', border: '1px solid #dce8f5',
          borderRadius: 14, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: 16 }}>🤝</span>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: '#1e3a5f' }}>
            הזמן חבר — קבל כוס חינם
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeProblemSolution() {
  return (
    <>
      {/* Problem */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div className="problem-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
          maxWidth: 1280, margin: '0 auto',
        }}>
          {/* Text — right in RTL */}
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
              textTransform: 'uppercase', letterSpacing: '1.2px', color: '#61001d', marginBottom: 8,
            }}>הבעיה</div>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 40,
              color: '#141d21', lineHeight: '48px', margin: '0 0 20px',
            }}>הבעיה בתוכניות נאמנות היום</h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18, color: '#576065',
              lineHeight: '28px', marginBottom: 32,
            }}>
              רוב תוכניות הנאמנות נבנות מנקודת המבט של העסק —
              לא של הלקוח.
              <br /><br />
              הלקוח לא באמת יודע:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
              {problemItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 28, height: 28, minWidth: 28, borderRadius: '50%',
                    background: 'rgba(220,38,38,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 3l6 6M9 3l-6 6" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{
              borderRight: '3px solid #e0e0e0', paddingRight: 20,
              fontFamily: 'var(--font-body)', fontSize: 16, color: '#94a3b8',
              lineHeight: '26px',
            }}>
              חוסר השקיפות הזה גורם לזה שרוב הלקוחות
              פשוט מפסיקים להתעניין בתוכנית הנאמנות.
              <br /><br />
              <strong style={{ color: '#811b32' }}>תוכנית נאמנות שלא משתמשים בה — לא מייצרת נאמנות.</strong>
            </div>
          </div>

          {/* Visual — left in RTL */}
          <div className="problem-visual">
            <ConfusedCard />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section style={{ background: '#f4faff', padding: '96px 24px' }}>
        <div className="solution-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
          maxWidth: 1280, margin: '0 auto',
        }}>
          {/* Visual — right in RTL */}
          <div className="solution-visual">
            <ClearCard />
          </div>

          {/* Text — left in RTL */}
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
              textTransform: 'uppercase', letterSpacing: '1.2px', color: '#61001d', marginBottom: 8,
            }}>הפתרון</div>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 40,
              color: '#141d21', lineHeight: '48px', margin: '0 0 20px',
            }}>היתרון של אנרול</h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18, color: '#576065',
              lineHeight: '28px', marginBottom: 32,
            }}>
              באנרול, הלקוח תמיד יודע איפה הוא עומד.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
              {solutionItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 28, height: 28, minWidth: 28, borderRadius: '50%',
                    background: 'rgba(21,68,19,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6l3 3 4-4" stroke="#154413" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{
              borderRight: '3px solid #811b32', paddingRight: 20,
              fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065',
              lineHeight: '26px',
            }}>
              הכל שקוף, ברור, ובטלפון של הלקוח.
              <br /><br />
              וכשהלקוח רואה את ההתקדמות שלו —
              הוא חוזר כדי להשלים אותה.
              <br /><br />
              <strong style={{ color: '#811b32', fontFamily: 'var(--font-heading)', fontSize: 18 }}>
                זאת נאמנות אמיתית.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .problem-grid, .solution-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .problem-grid h2, .solution-grid h2 {
            font-size: 28px !important;
            line-height: 36px !important;
          }
          .problem-visual { order: -1; }
        }
        @media (max-width: 640px) {
          .problem-grid h2, .solution-grid h2 {
            font-size: 24px !important;
            line-height: 32px !important;
          }
        }
      `}</style>
    </>
  )
}
