import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

function formatDob(dob) {
  if (!dob) return '';
  const match = dob.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (match) return `${match[2]}/${match[3]}/${match[1]}`;
  return dob;
}

export default function RegistrationFound() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const dob = formatDob(answers.dob) || '04/15/1992';
  const rawAddress = answers.address || '123 Main Street, Salt Lake City, UT 12345';
  const firstName = name.split(' ')[0];

  const commaIdx = rawAddress.indexOf(',');
  const addressLine1 = commaIdx >= 0 ? rawAddress.slice(0, commaIdx).trim() : rawAddress;
  const addressLine2 = commaIdx >= 0 ? rawAddress.slice(commaIdx + 1).trim() : null;

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <svg aria-hidden="true" width="48" height="48" viewBox="0 0 43.5 43.5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.75 41.75C32.7957 41.75 41.75 32.7957 41.75 21.75C41.75 10.7043 32.7957 1.75 21.75 1.75C10.7043 1.75 1.75 10.7043 1.75 21.75C1.75 32.7957 10.7043 41.75 21.75 41.75Z" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.75 21.75L19.75 25.75L27.75 17.75" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            {firstName}, you're registered to vote in Utah!
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Your voter registration is active in Salt Lake County, Utah.
          </p>
        </div>

        <div className="card-white">
          <div style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Registration</h2>
          </div>
          <div className="divider" style={{ marginBottom: '16px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="detail-row">
              <span className="detail-row__label">Status</span>
              <span className="tag tag-success" style={{ gap: '6px' }}>
                <svg aria-hidden="true" width="10" height="10" viewBox="0 0 8.61111 8.61111" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.30556 7.63889C6.14651 7.63889 7.63889 6.14651 7.63889 4.30556C7.63889 2.46461 6.14651 0.972222 4.30556 0.972222C2.46461 0.972222 0.972222 2.46461 0.972222 4.30556C0.972222 6.14651 2.46461 7.63889 4.30556 7.63889Z" fill="#05862C" stroke="#267B24" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Active
              </span>
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
              <span className="detail-row__label">Registered since</span>
              <span className="detail-row__value">2022</span>
            </div>
            <div className="detail-row">
              <span className="detail-row__label">Address</span>
              <span className="detail-row__value" style={{ textAlign: 'right' }}>
                {addressLine1}
                {addressLine2 && <><br />{addressLine2}</>}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-row__label">State</span>
              <span className="detail-row__value">Utah</span>
            </div>
          </div>
        </div>

        <div className="card-white">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Does this look correct?</h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-primary)', lineHeight: 1.5 }}>
              Your voter registration must match your current information to be able to vote.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button className="btn btn-primary" onClick={() => navigate('/vote-method')}>
              Yes, my info is correct
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/screener')}>
              No, update my registration
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
