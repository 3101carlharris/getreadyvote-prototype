import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const VOTE_METHOD_LABELS = {
  mail: 'By mail',
  'in-person': 'In person',
  'early-voting': 'Early voting',
};

export default function VoterPlanId() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const firstName = name.split(' ')[0];
  const voteMethod = answers.voteMethod || 'in-person';

  return (
    <>
      <div className="voter-plan-page">

        {/* Welcome card */}
        <div className="card-white">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
              Welcome, {firstName}
            </h1>
            <span className="tag tag-success" style={{ alignSelf: 'flex-start' }}>
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 5" stroke="#046b23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Ready to vote
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="detail-row">
              <span className="detail-row__label">Selected voting method</span>
              <button
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '16px', color: 'var(--color-text-primary)', textDecoration: 'underline', padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }}
                onClick={() => navigate('/vote-method')}
              >
                {VOTE_METHOD_LABELS[voteMethod] || 'In person'}
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="detail-row">
              <span className="detail-row__label">Election Day</span>
              <span className="detail-row__value">June 23, 2026</span>
            </div>
          </div>
        </div>

        {/* Tasks section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p className="voter-plan-section-label">{firstName}'s tasks</p>

          {/* Head to the polls task card */}
          <div className="card-white">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Head to the polls</h2>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 15l-6-6-6 6" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <ul className="voter-plan-steps" aria-label="Your voting steps">
              <li className="voter-plan-step">
                <div className="voter-plan-step__dot voter-plan-step__dot--done" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="voter-plan-step__text">
                  <p className="voter-plan-step__label voter-plan-step__label--done">Done</p>
                  <p className="voter-plan-step__title voter-plan-step__title--done">Choose your voting method</p>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginTop: '4px' }}>
                    Utah offers multiple ways to vote.
                  </p>
                </div>
              </li>
              <li className="voter-plan-step">
                <div
                  className="voter-plan-step__dot"
                  style={{ background: '#111', border: 'none' }}
                  aria-hidden="true"
                />
                <div className="voter-plan-step__text">
                  <p className="voter-plan-step__label voter-plan-step__label--current">Current</p>
                  <p className="voter-plan-step__title voter-plan-step__title--current">Know what to bring</p>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginTop: '4px' }}>
                    Get your personalized Election Day checklist.
                  </p>
                </div>
              </li>
              <li className="voter-plan-step">
                <div className="voter-plan-step__dot voter-plan-step__dot--upcoming" aria-hidden="true" />
                <div className="voter-plan-step__text">
                  <p className="voter-plan-step__label voter-plan-step__label--upcoming">Upcoming</p>
                  <p className="voter-plan-step__title voter-plan-step__title--upcoming">Head to the polls</p>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginTop: '4px' }}>
                    Fill out your ballot or head to your polling place with everything you need.
                  </p>
                </div>
              </li>
            </ul>

            <button className="btn btn-primary">Get started</button>
          </div>

          {/* Registered to vote card */}
          <div
            className="card-white"
            style={{ borderColor: 'var(--color-success-text)', padding: '16px 24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '20px', fontWeight: 500 }}>Registered to vote</span>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#111" strokeWidth="1.5" />
                <path d="M8 12l3 3 5-5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Voting reminders */}
        <div className="card-white" style={{ padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.73 21a2 2 0 01-3.46 0" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: '20px', fontWeight: 500 }}>Voting reminders</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 5" stroke="#046b23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-success-text)' }}>On</span>
            </div>
          </div>
        </div>

        {/* Find your vote center */}
        <div className="card-white">
          <h2 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>Find your vote center</h2>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            You can vote at any Utah vote center on Election Day. Find the closest one to you.
          </p>
          <button
            type="button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '18px', fontWeight: 500, color: 'var(--color-text-primary)', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            Find my vote center
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Extra documents */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p className="voter-plan-section-label">Need an extra document?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Birth certificate */}
            <div className="card-white">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
                  <rect x="6" y="4" width="20" height="24" rx="2" stroke="#111" strokeWidth="1.5" />
                  <path d="M10 11h12M10 16h12M10 21h8" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>Get your birth certificate</p>
                  <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Beyond voting, you'll need this for passports, Real ID, and other official documents.
                  </p>
                </div>
              </div>
              <button
                type="button"
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '18px', fontWeight: 500, color: 'var(--color-text-primary)', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <line x1="12" y1="5" x2="12" y2="19" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="5" y1="12" x2="19" y2="12" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Add to my plan
              </button>
            </div>

            {/* Marriage certificate */}
            <div className="card-white">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
                  <rect x="4" y="7" width="24" height="20" rx="2" stroke="#111" strokeWidth="1.5" />
                  <path d="M4 13h24M11 7V5M21 7V5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>Get a marriage certificate</p>
                  <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Useful if your name changed through marriage or divorce.
                  </p>
                </div>
              </div>
              <button
                type="button"
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '18px', fontWeight: 500, color: 'var(--color-text-primary)', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <line x1="12" y1="5" x2="12" y2="19" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="5" y1="12" x2="19" y2="12" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Add to my plan
              </button>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
