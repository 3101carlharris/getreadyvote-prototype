import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <div
        style={{
          width: '100%',
          height: '260px',
          background: 'linear-gradient(135deg, #c8c8c8 0%, #efefef 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <span style={{ fontSize: '64px' }} role="img" aria-hidden="true">🗳️</span>
      </div>

      {/* Main card */}
      <section className="page-section" aria-labelledby="landing-heading">
        <div className="card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h1 id="landing-heading" style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.1, color: 'var(--color-text-primary)' }}>
                Your personal plan to register and vote
              </h1>
              <p style={{ fontSize: '20px', lineHeight: 1.4, color: 'var(--color-text-primary)' }}>
                We show you exactly which documents you need to register and vote — and the easiest way to get them.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                className="btn btn-primary"
                onClick={() => navigate('/registration')}
              >
                See if I'm registered
              </button>
              <button
                className="btn btn-outline"
                onClick={() => navigate('/registration')}
              >
                Register to vote
              </button>
            </div>
          </div>
        </div>

        {/* Trust tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <span className="tag tag-neutral">Free · nonprofit</span>
          <span className="tag tag-neutral">Nonpartisan</span>
          <span className="tag tag-neutral">Private &amp; secure</span>
        </div>
      </section>

      {/* How it works */}
      <section className="page-section" aria-labelledby="how-it-works-heading" style={{ background: 'var(--color-bg-secondary)', borderRadius: '16px', margin: '0 16px' }}>
        <h2 id="how-it-works-heading" style={{ fontSize: '24px', fontWeight: 500 }}>How it works</h2>
        <p style={{ fontSize: '18px' }}>We'll guide you through every step.</p>

        <ol style={{ display: 'flex', flexDirection: 'column', gap: '24px', listStyle: 'none' }}>
          <li className="step-item">
            <span className="step-icon" aria-hidden="true">1</span>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>Check if you're registered</h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Your registration may be inactive if you have moved, changed your name, or haven't voted recently.
              </p>
            </div>
          </li>
          <li className="step-item">
            <span className="step-icon" aria-hidden="true">2</span>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>Get your checklist</h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                See exactly which documents you need for your state and the easiest way to get each one.
              </p>
            </div>
          </li>
          <li className="step-item">
            <span className="step-icon" aria-hidden="true">3</span>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>Gather your documents</h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                We show you where and how to request each document: online, by mail, or in person.
              </p>
            </div>
          </li>
          <li className="step-item">
            <span className="step-icon" aria-hidden="true">4</span>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>Register and stay on track</h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                We'll help you register, and send reminders for key election deadlines.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Second CTA */}
      <section className="page-section" aria-labelledby="cta2-heading">
        <h2 id="cta2-heading" style={{ fontSize: '32px', fontWeight: 500 }}>
          Make your voice heard in the next election
        </h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/registration')}
        >
          See if I'm registered
        </button>
      </section>

      {/* Get voting updates */}
      <div className="promo-dark">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2>Get voting updates</h2>
          <p>Sign up for text reminders. We'll only text you when it matters.</p>
        </div>
        <button className="btn btn-dark-outline" type="button">
          Sign me up →
        </button>
      </div>

      <Footer />
    </>
  );
}
