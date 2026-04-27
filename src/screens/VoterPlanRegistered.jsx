import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

function formatDob(dob) {
  if (!dob) return '';
  const match = dob.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (match) return `${match[2]}/${match[3]}/${match[1]}`;
  return dob;
}

export default function VoterPlanRegistered() {
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const dob = formatDob(answers.dob) || '04/15/1992';
  const firstName = name.split(' ')[0];

  return (
    <>
      <div className="page-section">
        {/* Check icon + heading */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div
            aria-hidden="true"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '2px solid var(--color-text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            You're all set, {firstName}.
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '24px' }}>
            Your registration is active and your information is up to date. Get ready for election day!
          </p>
        </div>

        {/* Registration card */}
        <div className="card-white">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Registration</h2>
          </div>
          <div className="divider" style={{ marginBottom: '16px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="detail-row">
              <span className="detail-row__label">Status</span>
              <span className="tag tag-success">Active</span>
            </div>
            <div className="detail-row">
              <span className="detail-row__label">Name</span>
              <span className="detail-row__value">{name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-row__label">Date of birth</span>
              <span className="detail-row__value">{dob}</span>
            </div>
            <div className="detail-row">
              <span className="detail-row__label">State</span>
              <span className="detail-row__value">Utah</span>
            </div>
            <div className="detail-row">
              <span className="detail-row__label">Registered since</span>
              <span className="detail-row__value">2022</span>
            </div>
          </div>
        </div>

        {/* Election day card */}
        <div className="card-white">
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--color-bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#111" strokeWidth="1.5" />
                <path d="M16 2v4M8 2v4M3 10h18" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Utah Election Day</p>
              <p style={{ fontSize: '20px', fontWeight: 500 }}>November 4, 2026</p>
            </div>
          </div>
          <button className="btn btn-outline" type="button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Add to calendar
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
