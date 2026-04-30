import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const VOTE_METHOD_LABELS = {
  mail: 'By mail',
  'in-person': 'In person',
  'early-voting': 'Early voting',
};

const VOTE_DOC_LABELS = {
  'drivers-license': "Utah driver's license",
  passport: 'U.S. passport',
  'birth-certificate': 'U.S. birth certificate',
  'military-id': 'U.S. Military ID',
  naturalization: 'Naturalization certificate',
  'gov-photo-id': 'Government issued photo ID',
};

const VOTE_DOC_TAGS = {
  'drivers-license': ['Voting ID'],
  passport: ['Voting ID'],
  'birth-certificate': ['Supporting document'],
  'military-id': ['Voting ID'],
  naturalization: ['Supporting document'],
  'gov-photo-id': ['Voting ID'],
};

const VOTE_METHOD_ICONS = {
  mail: (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#111" strokeWidth="1.5" />
      <path d="M2 7l10 7 10-7" stroke="#111" strokeWidth="1.5" />
    </svg>
  ),
  'in-person': (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="#111" strokeWidth="1.5" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'early-voting': (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#111" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function VoteConfirm() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const firstName = name.split(' ')[0];
  const voteMethod = answers.voteMethod || 'mail';
  const voteDocs = (answers.voteDocuments || []).filter(d => d !== 'none');

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            Here's your plan to vote, {firstName}
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '24px', color: 'var(--color-text-secondary)' }}>
            Based on what you've told us, here's how you'll vote in Utah.
          </p>
        </div>

        {/* Registration card */}
        <div className="card-white">
          <h2 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '16px' }}>Registration</h2>
          <div className="divider" style={{ marginBottom: '16px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="detail-row">
              <span className="detail-row__label">Status</span>
              <span className="tag tag-success">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" stroke="#046b23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Active
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-row__label">Name</span>
              <span className="detail-row__value">{name}</span>
            </div>
          </div>
        </div>

        {/* Voting method card */}
        <div className="card-white">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 500 }}>Voting method</h2>
            <button
              className="voter-plan-edit-btn"
              onClick={() => navigate('/vote-method')}
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Edit
            </button>
          </div>
          <div className="divider" style={{ marginBottom: '16px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {VOTE_METHOD_ICONS[voteMethod]}
            <span style={{ fontSize: '16px', fontWeight: 500 }}>
              {VOTE_METHOD_LABELS[voteMethod] || 'By mail'}
            </span>
          </div>
        </div>

        {/* Documents card */}
        <div className="card-white">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 500 }}>Your documents</h2>
            <button
              className="voter-plan-edit-btn"
              onClick={() => navigate('/vote-documents')}
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Edit
            </button>
          </div>
          <div className="divider" style={{ marginBottom: '16px' }} />
          {voteDocs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {voteDocs.map(id => (
                <div key={id} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                    <path d="M5 13l4 4L19 7" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 500 }}>{VOTE_DOC_LABELS[id] || id}</span>
                    {VOTE_DOC_TAGS[id] && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {VOTE_DOC_TAGS[id].map(tag => (
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
              No documents selected.
            </p>
          )}
        </div>

        {/* What's next card */}
        <div className="card-white">
          <h2 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '16px' }}>What's next?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ fontSize: '16px', fontWeight: 500 }}>Get your personalized checklist</p>
            <p style={{ fontSize: '16px', fontWeight: 500 }}>Get support all the way to the polls</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button className="btn btn-primary" onClick={() => navigate('/login')}>
            Continue
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/vote-documents')}>
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
