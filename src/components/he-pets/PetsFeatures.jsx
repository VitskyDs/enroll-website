const FEATURES = [
  {
    icon: '🐾',
    title: 'כרטיסיות חותמות דיגיטליות',
    body: 'החליפו את כרטיסיית הניקוב הישנה בגרסה דיגיטלית שהלקוחות באמת שומרים. עשר חותמות, טיפוח חינם. מעקב אוטומטי, אפס חיכוך.',
    tag: 'הכי פופולרי',
  },
  {
    icon: '🎂',
    title: 'הטבת יום הולדת לחיית המחמד',
    body: 'שולחים אוטומטית הטבה ביום ההולדת של הכלב או החתול. אחת ההטבות עם שיעור ההמרה הגבוה ביותר — והיא רצה לבד.',
    tag: null,
  },
  {
    icon: '🔁',
    title: 'מנוי חודשי למזון או טיפוח',
    body: 'תנו ללקוחות הכי נאמנים לשלם דמי מנוי חודשי קבועים על מזון או טיפוח שוטף. הכנסה צפויה עבורכם, סיבה לחזור כל חודש עבורם.',
    tag: 'חדש',
  },
  {
    icon: '📣',
    title: 'התראות בימים חלשים',
    body: 'יום שלישי אחר הצהריים שקט? שלחו הצעה ממוקדת ללקוחות קבועים מהאזור. מלאו תורים בלי להוזיל מחיר לכולם.',
    tag: null,
  },
]

export default function PetsFeatures() {
  return (
    <section style={{ background: '#fff', padding: '88px 24px' }}>
      <style>{`
        .pets-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-top: 3rem;
        }
        .pets-feature-card {
          background: #f4faff;
          border: 1.5px solid #e8d9c0;
          border-radius: 14px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: box-shadow 0.18s, transform 0.18s;
        }
        .pets-feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.07);
        }
        .pets-feature-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .pets-feature-card-icon { font-size: 1.75rem; line-height: 1; }
        .pets-feature-tag {
          font-family: var(--font-body);
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.02em;
          background: #811b32; color: #fff;
          border-radius: 100px; padding: 0.25rem 0.7rem;
          white-space: nowrap; align-self: flex-start;
        }
        .pets-feature-card-title {
          font-family: var(--font-heading);
          font-size: 1.05rem; font-weight: 700; color: #141d21;
          letter-spacing: -0.02em; line-height: 1.3;
        }
        .pets-feature-card-body {
          font-family: var(--font-body);
          font-size: 0.875rem; color: #576065; line-height: 1.65;
        }
        @media (max-width: 640px) {
          .pets-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
          textTransform: 'uppercase', letterSpacing: '1.2px', color: '#61001d',
        }}>בנוי לחנויות ולמספרות חיות מחמד</p>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700,
          letterSpacing: '-0.03em', lineHeight: 1.15, color: '#141d21', margin: '0.6rem 0 0', maxWidth: 580,
        }}>
          פיצ׳רים שהלקוחות שלכם באמת ישתמשו בהם
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#576065', lineHeight: 1.65, marginTop: '1rem', maxWidth: 520 }}>
          לא עוד נקודות גנריות. כלים שנבנו בדיוק לאופן שבו חנויות ומספרות חיות מחמד עובדות.
        </p>
        <div className="pets-features-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="pets-feature-card">
              <div className="pets-feature-card-top">
                <div className="pets-feature-card-icon">{f.icon}</div>
                {f.tag && <span className="pets-feature-tag">{f.tag}</span>}
              </div>
              <div className="pets-feature-card-title">{f.title}</div>
              <div className="pets-feature-card-body">{f.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
