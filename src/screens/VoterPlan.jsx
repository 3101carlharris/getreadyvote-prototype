import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const METHOD_LABELS = {
  online: 'Online',
  mail: 'By mail',
  'in-person': 'In person',
};

const STEPS = [
  { label: 'Step 1', title: 'Confirm eligibility', state: 'done' },
  { label: 'Step 2', title: 'Gather your documents', state: 'current' },
  { label: 'Step 3', title: 'Register at vote.utah.gov', state: 'upcoming' },
  { label: 'Step 4', title: "Confirm you're registered", state: 'upcoming' },
];

export default function VoterPlan() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const firstName = name.split(' ')[0];
  const method = answers.registrationMethod || 'online';

  const detailRows = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="detail-row">
        <span className="detail-row__label">Registration method</span>
        <button className="voter-plan-edit-btn" onClick={() => navigate('/register-method')}>
          {METHOD_LABELS[method] || 'Online'}
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="detail-row">
        <span className="detail-row__label">Registration deadline</span>
        <span className="detail-row__value">June 12, 2026</span>
      </div>
      <div className="detail-row">
        <span className="detail-row__label">Election Day</span>
        <span className="detail-row__value">June 23, 2026</span>
      </div>
    </div>
  );

  return (
    <>
      <div className="voter-plan-page">

        {/* Mobile: heading + details in one card */}
        <div className="card-white voter-plan-welcome-mobile">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
              Welcome, {firstName}
            </h1>
            <span className="tag tag-neutral" style={{ alignSelf: 'flex-start' }}>Registering to vote</span>
          </div>
          <div className="divider" style={{ marginBottom: '16px' }} />
          {detailRows}
        </div>

        {/* Desktop: heading above the grid */}
        <div className="voter-plan-welcome-desktop">
          <h1 style={{ fontSize: '40px', fontWeight: 500, lineHeight: 1.2 }}>
            Welcome, {firstName}
          </h1>
          <span className="tag tag-neutral" style={{ alignSelf: 'flex-start' }}>Registering to vote</span>
        </div>

        {/* Body: grid on desktop, column on mobile */}
        <div className="voter-plan-body">

          {/* Left: tasks */}
          <div className="voter-plan-left">
            <p className="voter-plan-section-label">{firstName}'s tasks</p>

            <div className="card-white">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Register to vote</h2>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 15l-6-6-6 6" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="divider" style={{ marginBottom: '24px' }} />

              <ol className="voter-plan-steps" aria-label="Registration steps">
                {STEPS.map((step, i) => (
                  <li key={i} className="voter-plan-step">
                    <div className={`voter-plan-step__dot voter-plan-step__dot--${step.state}`} aria-hidden="true">
                      {step.state === 'done' && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="voter-plan-step__text">
                      <p className={`voter-plan-step__label voter-plan-step__label--${step.state}`}>{step.label}</p>
                      <p className={`voter-plan-step__title voter-plan-step__title--${step.state}`}>{step.title}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <button className="btn btn-primary voter-plan-continue-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                Continue registration
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="card-white">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Head to the polls</h2>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
                Once you're registered, we'll help you know what to expect — and bring — on election day.
              </p>
              <span className="tag tag-neutral" style={{ alignSelf: 'flex-start', display: 'inline-flex' }}>
                🔒 Locked
              </span>
            </div>
          </div>

          {/* Right: details + extras */}
          <div className="voter-plan-right">

            {/* Desktop-only details card */}
            <div className="card-white voter-plan-desktop-details">
              {detailRows}
            </div>

            {/* Need an extra document */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p className="voter-plan-section-label">Need an extra document?</p>

              <div className="card-white">
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
                    <polyline points="14,2 14,8 20,8" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 500 }}>Get your birth certificate</h3>
                    <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Beyond voting, you'll need this for passports, Real ID, and other official documents.
                    </p>
                  </div>
                </div>
                <button type="button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font)', fontSize: '18px', fontWeight: 500, color: 'var(--color-text-primary)', padding: 0 }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Add to my plan
                </button>
              </div>

              <div className="card-white">
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
                    <polyline points="14,2 14,8 20,8" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M9 15l2 2 4-4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 500 }}>Get a marriage certificate</h3>
                    <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Useful if your name changed through marriage or divorce.
                    </p>
                  </div>
                </div>
                <button type="button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font)', fontSize: '18px', fontWeight: 500, color: 'var(--color-text-primary)', padding: 0 }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Add to my plan
                </button>
              </div>
            </div>

            {/* Get voting reminders */}
            <div className="card-white">
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#111" strokeWidth="1.5" />
                  <polyline points="22,6 12,13 2,6" stroke="#111" strokeWidth="1.5" />
                </svg>
                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>Get voting reminders</h2>
                  <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Enter your phone number to stay on top of your voting rights.
                  </p>
                </div>
              </div>
              <button type="button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font)', fontSize: '18px', fontWeight: 500, color: 'var(--color-text-primary)', padding: 0 }}>
                Get text reminders
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
