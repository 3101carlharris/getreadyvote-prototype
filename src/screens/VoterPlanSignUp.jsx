import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const METHOD_LABELS = {
  online: 'Online',
  mail: 'By mail',
  'in-person': 'In person',
};

const METHOD_TAGS = {
  online: 'Requires a Utah ID',
  mail: 'Allow 3–4 weeks',
  'in-person': 'Same day available',
};

const DOC_LABELS = {
  'drivers-license': "Utah driver's license",
  passport: 'U.S. Passport',
  'military-id': 'U.S. Military ID',
  'tribal-id': 'Tribal ID',
  'student-id': 'Student ID',
  'tribal-number': 'Tribal enrollment number',
  cdib: 'Certificate of Degree of Indian Blood',
  'carry-permit': 'Utah concealed carry permit',
  'alien-number': 'Alien registration number',
};

const DOC_TAGS = {
  'drivers-license': ['Registration ID', 'Voting ID'],
  passport: ['Backup voting ID'],
  'military-id': ['Voting ID'],
  'tribal-id': ['Registration ID', 'Voting ID'],
  'student-id': ['Voting ID'],
};

export default function VoterPlanSignUp() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const firstName = name.split(' ')[0];
  const method = answers.registrationMethod || 'online';
  const docs = (answers.documents || []).filter(d => d !== 'none');

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            You're ready to register, {firstName}
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '24px', color: 'var(--color-text-secondary)' }}>
            Here's exactly what your documents get you — and what we'll help you do next.
          </p>
        </div>

        {/* Registration method card */}
        <div className="card-white">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 500 }}>Registration method</h2>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '16px', color: 'var(--color-text-primary)', textDecoration: 'underline', padding: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}
              onClick={() => navigate('/register-method')}
            >
              Edit
            </button>
          </div>
          <div className="divider" style={{ marginBottom: '16px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '16px', fontWeight: 500 }}>{METHOD_LABELS[method] || 'Online'}</span>
            {METHOD_TAGS[method] && (
              <span className="tag tag-neutral" style={{ alignSelf: 'flex-start' }}>
                {METHOD_TAGS[method]}
              </span>
            )}
          </div>
        </div>

        {/* Documents card */}
        <div className="card-white">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 500 }}>Your documents</h2>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '16px', color: 'var(--color-text-primary)', textDecoration: 'underline', padding: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}
              onClick={() => navigate('/documents')}
            >
              Edit
            </button>
          </div>
          <div className="divider" style={{ marginBottom: '16px' }} />
          {docs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {docs.map(id => (
                <div key={id} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                    <path d="M5 13l4 4L19 7" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 500 }}>{DOC_LABELS[id] || id}</span>
                    {DOC_TAGS[id] && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {DOC_TAGS[id].map(tag => (
                          <span key={tag} className="tag tag-neutral" style={{ fontSize: '12px' }}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)' }}>
              No standard ID selected. We'll help you find alternatives.
            </p>
          )}
        </div>

        {/* What's next card */}
        <div className="card-white">
          <h2 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '16px' }}>What's next?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p style={{ fontSize: '16px', fontWeight: 500 }}>Get your personalized checklist</p>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                You'll see exactly what to do next — tailored to your method, your documents, and your deadline.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p style={{ fontSize: '16px', fontWeight: 500 }}>Every document you have — what it's for and when to use it</p>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                We'll tell you exactly when each document you have matters.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p style={{ fontSize: '16px', fontWeight: 500 }}>We'll support you all the way to the polls</p>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Once you're registered, we'll make sure you know exactly what to expect on Election Day.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button className="btn btn-primary" onClick={() => navigate('/login')}>
            Continue
          </button>
          <button className="btn btn-outline" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
