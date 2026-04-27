import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

export default function RegistrationFound() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const dob = answers.dob || '04/15/1992';
  const firstName = name.split(' ')[0];

  return (
    <>
      <div className="page-section">
        {/* Status icon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '48px' }} role="img" aria-label="Success">✅</span>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            {firstName}, you're registered to vote in Utah!
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Your voter registration is active in Salt Lake County, Utah.
          </p>
        </div>

        {/* Registration detail card */}
        <div className="card-white">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
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

        {/* Confirmation prompt */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Does this look correct?</h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Your voter registration must match your current information to be able to vote.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/voter-plan/registered')}
            >
              Yes, this is correct
            </button>
            <button
              className="btn btn-outline"
              onClick={() => navigate('/registration/incorrect')}
            >
              No, something's changed
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
