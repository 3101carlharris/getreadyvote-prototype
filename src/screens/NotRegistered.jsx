import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

export default function NotRegistered() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const dob = answers.dob || '04/15/1992';
  const address = answers.address || '123 Main Street, Salt Lake City, UT 12345';

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '48px' }} role="img" aria-label="Not found">⚠️</span>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            It looks like you're not registered to vote in Utah
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            You're not registered to vote yet, based on the information you entered. Double-check your details, or get started registering.
          </p>
        </div>

        {/* Details card */}
        <div className="card-white">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Registration</h2>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '16px', color: 'var(--color-text-primary)', textDecoration: 'underline', padding: '4px' }}
              onClick={() => navigate('/registration')}
            >
              Edit
            </button>
          </div>
          <div className="divider" style={{ marginBottom: '16px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="detail-row">
              <span className="detail-row__label">Status</span>
              <span className="tag tag-warning">Not found</span>
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
              <span className="detail-row__label">Address</span>
              <span className="detail-row__value" style={{ maxWidth: '60%' }}>{address}</span>
            </div>
          </div>
        </div>

        {/* Action card */}
        <div className="card-white">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 500 }}>Let's get you registered</h2>
            <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
              We'll walk you through every step — from finding the right documents to registering to vote before the deadline.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/screener')}
            >
              Register to vote
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
