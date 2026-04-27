import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Landing() {
  const navigate = useNavigate();
  const [state, setState] = useState('utah');

  return (
    <>
      <section className="page-section" aria-labelledby="landing-heading" style={{ gap: '32px' }}>

        {/* Hero text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1
            id="landing-heading"
            style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.1, color: 'var(--color-text-primary)' }}
          >
            Your personal plan to register and vote
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '24px', color: 'var(--color-text-primary)' }}>
            GetReadyVote shows you exactly which documents you need to register and vote — and the easiest way to get them.
          </p>
        </div>

        {/* State selector + CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 500 }}>Ready to get started?</h2>

          <div className="form-group">
            <label className="form-label" htmlFor="state-select">State</label>
            <div style={{ position: 'relative' }}>
              <select
                id="state-select"
                className="form-input"
                value={state}
                onChange={e => setState(e.target.value)}
                style={{ appearance: 'none', WebkitAppearance: 'none', paddingRight: '48px', cursor: 'pointer' }}
              >
                <option value="utah">Utah</option>
              </select>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
              >
                <path d="M6 9l6 6 6-6" stroke="#353535" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => navigate('/registration')}>
            See if I'm registered
          </button>
        </div>

        {/* Trust tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <span className="tag tag-neutral">Free · nonprofit</span>
          <span className="tag tag-neutral">Nonpartisan</span>
          <span className="tag tag-neutral">Private &amp; secure</span>
        </div>

        {/* How it works */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 500 }}>How it works</h2>
            <p style={{ fontSize: '18px', lineHeight: '24px' }}>We'll guide you through every step.</p>
          </div>

          <ol style={{ display: 'flex', flexDirection: 'column', gap: '24px', listStyle: 'none' }}>
            <li className="card step-item">
              <span className="step-icon" aria-hidden="true">1</span>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>Check if you're registered</h3>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Your registration may be inactive if you have moved, changed your name, or haven't voted recently.
                </p>
              </div>
            </li>
            <li className="card step-item">
              <span className="step-icon" aria-hidden="true">2</span>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>Get your checklist</h3>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  See exactly which documents you need for your state and the easiest way to get each one.
                </p>
              </div>
            </li>
            <li className="card step-item">
              <span className="step-icon" aria-hidden="true">3</span>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>Gather your documents</h3>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  We show you where and how to request each document: online, by mail, or in person.
                </p>
              </div>
            </li>
            <li className="card step-item">
              <span className="step-icon" aria-hidden="true">4</span>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>Register and stay on track</h3>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  We'll help you register, and send reminders for key election deadlines.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Get voting updates */}
      <section aria-labelledby="updates-heading" className="landing-updates">
        <div className="landing-updates__inner">
          <h2 id="updates-heading" style={{ fontSize: '24px', fontWeight: 500 }}>Get voting updates</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ fontSize: '16px', lineHeight: '24px' }}>
              Sign up for text reminders about registration deadlines, ID requirements, and key dates. We'll only text you when it matters.
            </p>
            <p style={{ fontSize: '12px', fontWeight: 500, lineHeight: '18px', letterSpacing: '0.2px', color: 'var(--color-text-primary)' }}>
              We don't sell or share your information with third parties.
            </p>
          </div>
          <button
            type="button"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font)', fontSize: '18px', fontWeight: 500,
              color: 'var(--color-text-primary)', padding: 0,
            }}
          >
            Get text reminders
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
