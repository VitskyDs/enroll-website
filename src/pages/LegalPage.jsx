import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LAST_UPDATED = 'March 28, 2026'

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ paddingTop: 80, marginTop: -80 }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 36,
        color: '#141d21', letterSpacing: '-0.8px', margin: '0 0 8px',
      }}>{title}</h2>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 14, color: '#94a3b8',
        margin: '0 0 40px',
      }}>Last updated: {LAST_UPDATED}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {children}
      </div>
    </section>
  )
}

function Block({ heading, children }) {
  return (
    <div>
      {heading && (
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18,
          color: '#141d21', margin: '0 0 10px',
        }}>{heading}</h3>
      )}
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: 16, color: '#576065',
        lineHeight: '26px',
      }}>{children}</div>
    </div>
  )
}

export default function LegalPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  const divider = (
    <hr style={{ border: 'none', borderTop: '1px solid #e6eff6', margin: '16px 0' }} />
  )

  return (
    <div style={{ background: '#f4faff', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '72px 24px 56px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(129,27,50,0.08)', borderRadius: 24,
              padding: '6px 16px', marginBottom: 24,
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13,
                color: '#811b32', letterSpacing: '0.4px', textTransform: 'uppercase',
              }}>Legal</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 56,
              color: '#141d21', lineHeight: '60px', letterSpacing: '-1.5px',
              margin: '0 0 20px',
            }}>Privacy &amp; Terms</h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18, color: '#576065',
              lineHeight: '28px', maxWidth: 520, margin: '0 0 40px',
            }}>
              We believe in transparency. Here's how we handle your data and what you agree to when using Enroll.
            </p>

            {/* Jump links */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {[
                { href: '#privacy-policy', label: 'Privacy Policy' },
                { href: '#terms-of-service', label: 'Terms of Service' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14,
                    color: '#811b32', textDecoration: 'none',
                    background: '#fff', border: '1.5px solid #e6eff6',
                    borderRadius: 24, padding: '8px 20px',
                    transition: 'border-color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#811b32'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#e6eff6'}
                >
                  {label} ↓
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '0 24px 96px' }}>
          <div style={{
            maxWidth: 760, margin: '0 auto',
            display: 'flex', flexDirection: 'column', gap: 80,
          }}>
            {/* Privacy Policy */}
            <Section id="privacy-policy" title="Privacy Policy">
              <Block>
                Enroll Loyalty, Inc. ("Enroll," "we," "us," or "our") operates the Enroll loyalty platform. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information.
              </Block>

              <Block heading="Information We Collect">
                <p style={{ margin: '0 0 10px' }}>We collect information you provide directly to us, including:</p>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li><strong>Account information:</strong> your name, email address, and business details when you sign up or join our waitlist.</li>
                  <li><strong>Communications:</strong> messages you send us via contact forms or email.</li>
                  <li><strong>Usage data:</strong> information about how you interact with our platform, such as pages visited, features used, and time spent.</li>
                  <li><strong>Device data:</strong> IP address, browser type, and operating system, collected automatically.</li>
                </ul>
              </Block>

              <Block heading="How We Use Your Information">
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li>To provide, operate, and improve the Enroll platform.</li>
                  <li>To communicate with you about your account, updates, and product news.</li>
                  <li>To respond to your questions and support requests.</li>
                  <li>To analyze usage patterns and improve our service.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
              </Block>

              <Block heading="Sharing Your Information">
                We do not sell your personal information. We may share your information with:
                <ul style={{ margin: '10px 0 0', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li><strong>Service providers</strong> who help us operate our platform (e.g., hosting, analytics, email delivery), bound by confidentiality obligations.</li>
                  <li><strong>Legal authorities</strong> when required by law or to protect our rights.</li>
                  <li><strong>Successors</strong> in the event of a merger, acquisition, or sale of assets.</li>
                </ul>
              </Block>

              <Block heading="Cookies">
                We use cookies and similar tracking technologies to operate our website and understand usage. You can control cookies through your browser settings. Disabling cookies may affect some functionality.
              </Block>

              <Block heading="Data Retention">
                We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us at <a href="mailto:hi@joinenroll.app" style={{ color: '#811b32' }}>hi@joinenroll.app</a>.
              </Block>

              <Block heading="Your Rights">
                Depending on your location, you may have the right to access, correct, or delete your personal information, or to object to or restrict its processing. To exercise these rights, contact us at <a href="mailto:hi@joinenroll.app" style={{ color: '#811b32' }}>hi@joinenroll.app</a>.
              </Block>

              <Block heading="Changes to This Policy">
                We may update this Privacy Policy from time to time. We'll notify you of material changes by posting the new policy on this page with an updated date.
              </Block>

              <Block heading="Contact">
                Questions about this Privacy Policy? Email us at <a href="mailto:hi@joinenroll.app" style={{ color: '#811b32' }}>hi@joinenroll.app</a>.
              </Block>
            </Section>

            {divider}

            {/* Terms of Service */}
            <Section id="terms-of-service" title="Terms of Service">
              <Block>
                These Terms of Service ("Terms") govern your access to and use of the Enroll platform and website (collectively, the "Service") operated by Enroll Loyalty, Inc. By accessing or using the Service, you agree to be bound by these Terms.
              </Block>

              <Block heading="Use of the Service">
                You must be at least 18 years old and authorized to enter into a binding contract to use Enroll. You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.
              </Block>

              <Block heading="Acceptable Use">
                You agree not to:
                <ul style={{ margin: '10px 0 0', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li>Use the Service for any illegal or unauthorized purpose.</li>
                  <li>Transmit any harmful, offensive, or disruptive content.</li>
                  <li>Attempt to gain unauthorized access to any part of the Service or its related systems.</li>
                  <li>Reverse engineer, decompile, or attempt to extract the source code of the Service.</li>
                  <li>Use automated means to access or scrape the Service without our written permission.</li>
                </ul>
              </Block>

              <Block heading="Intellectual Property">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Enroll Loyalty, Inc. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </Block>

              <Block heading="Waitlist & Early Access">
                Joining our waitlist does not constitute a binding agreement to purchase any product or service. We reserve the right to modify, delay, or discontinue the Service at any time without liability.
              </Block>

              <Block heading="Disclaimer of Warranties">
                The Service is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </Block>

              <Block heading="Limitation of Liability">
                To the maximum extent permitted by applicable law, Enroll Loyalty, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service, even if we have been advised of the possibility of such damages.
              </Block>

              <Block heading="Termination">
                We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Upon termination, your right to use the Service will immediately cease.
              </Block>

              <Block heading="Governing Law">
                These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
              </Block>

              <Block heading="Changes to These Terms">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
              </Block>

              <Block heading="Contact">
                Questions about these Terms? Email us at <a href="mailto:hi@joinenroll.app" style={{ color: '#811b32' }}>hi@joinenroll.app</a>.
              </Block>
            </Section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
