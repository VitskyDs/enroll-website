import { useNavigate } from 'react-router-dom'

export default function HeNotFoundPage() {
  const navigate = useNavigate()

  return (
    <div dir="rtl" className="he-page" style={{
      minHeight: '100vh', background: '#f4faff',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '24px', fontFamily: 'var(--font-body)',
    }}>
      {/* Logo */}
      <a href="/he" style={{
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 64,
        fontFamily: 'var(--font-heading)', fontWeight: 700,
        fontSize: 22, color: '#61001d', letterSpacing: '-1px',
        textDecoration: 'none',
      }}>
        <img src="/logo-mark.svg" alt="Enroll" style={{ width: 28, height: 28 }} />
        Enroll
      </a>

      {/* 404 number */}
      <div style={{
        fontFamily: 'var(--font-heading)', fontWeight: 800,
        fontSize: 128, lineHeight: 1, color: '#e0e9f0',
        letterSpacing: '-6px', userSelect: 'none',
      }}>404</div>

      {/* Heading */}
      <h1 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 700,
        fontSize: 32, color: '#141d21', marginTop: 16,
        letterSpacing: '-0.8px', textAlign: 'center',
      }}>הדף לא נמצא</h1>

      {/* Body */}
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 18,
        color: '#576065', marginTop: 12, maxWidth: 400,
        textAlign: 'center', lineHeight: '28px',
      }}>
        הדף הזה אינו קיים או אולי עבר למקום אחר. בואו נחזיר אותך למסלול.
      </p>

      {/* CTA */}
      <button
        onClick={() => navigate('/he')}
        style={{
          marginTop: 40, height: 56, padding: '0 40px',
          background: '#811b32', color: '#fff', border: 'none',
          borderRadius: 28, cursor: 'pointer',
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16,
          boxShadow: '0 10px 15px -3px rgba(129,27,50,0.2)',
          transition: 'background 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#6b1529'}
        onMouseLeave={e => e.currentTarget.style.background = '#811b32'}
      >
        חזרה לדף הבית
      </button>
    </div>
  )
}
