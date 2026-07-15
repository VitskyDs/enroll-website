const PROBLEMS = [
  {
    icon: '🐾',
    title: 'אתם מתחרים באיכות. הם מתחרים בהרגלים.',
    body: 'הרשתות הגדולות לא מנצחות בגלל איכות הטיפוח או המזון — הן מנצחות בזכות נקודות מועדון לקוחות, אפליקציה ותזכורות אוטומטיות. בלי מערכת כזו, אתם נלחמים עם יד אחת קשורה מאחורי הגב.',
  },
  {
    icon: '📱',
    title: 'ללקוחות שלכם אין סיבה ספציפית לחזור דווקא אליכם.',
    body: 'הם אוהבים אתכם. אבל כשצריך למלא מזון בדחיפות או לתאם טיפוח, הם חוזרים לרשת שבה כבר יש להם הטבות. אתם מפסידים ביקורים לא בגלל השירות — אלא בגלל שאין לכם מערכת.',
  },
  {
    icon: '💸',
    title: 'פתרונות מועדון לקוחות בנויים לרשתות, לא לחנויות שכונתיות.',
    body: 'כלים ארגוניים עולים אלפי שקלים בחודש ודורשים צוות פיתוח להטמעה. חנויות עצמאיות נשארות עם כרטיסיית ניקוב שלא עושה כלום לשימור לקוחות.',
  },
]

export default function PetsProblem() {
  return (
    <section style={{ background: '#fff', padding: '88px 24px' }}>
      <style>{`
        .pets-problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .pets-problem-card {
          background: #f4faff;
          border: 1.5px solid #e8d9c0;
          border-radius: 14px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .pets-problem-icon { font-size: 1.75rem; line-height: 1; }
        .pets-problem-title {
          font-family: var(--font-heading);
          font-size: 1rem; font-weight: 700; color: #141d21;
          letter-spacing: -0.015em; line-height: 1.4;
        }
        .pets-problem-body {
          font-family: var(--font-body);
          font-size: 0.9rem; color: #576065; line-height: 1.65;
        }
        @media (max-width: 900px) {
          .pets-problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
          textTransform: 'uppercase', letterSpacing: '1.2px', color: '#61001d',
        }}>נשמע מוכר?</p>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', fontWeight: 700,
          letterSpacing: '-0.03em', lineHeight: 1.15, color: '#141d21', margin: '0.6rem 0 0', maxWidth: 600,
        }}>
          טיפוח מעולה ומזון איכותי לא מספיקים כדי לשמור על לקוחות
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#576065', lineHeight: 1.65, marginTop: '1rem', maxWidth: 540 }}>
          אתם שמים את הלב בכל טיפול וכל המלצה. אבל בלי מערכת שמתגמלת לקוחות קבועים,
          הרשת הגדולה מנצחת בהרגל — לא באיכות.
        </p>
        <div className="pets-problem-grid">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="pets-problem-card">
              <div className="pets-problem-icon">{p.icon}</div>
              <div className="pets-problem-title">{p.title}</div>
              <div className="pets-problem-body">{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
