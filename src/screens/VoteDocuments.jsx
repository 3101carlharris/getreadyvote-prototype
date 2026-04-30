import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const VOTE_DOCUMENTS = [
  {
    id: 'drivers-license',
    label: 'Utah Driver License or state ID',
    desc: "Utah's DMV verifies citizenship when issuing identification.",
    tag: 'Recommended',
  },
  {
    id: 'passport',
    label: 'U.S. passport or passport card',
    desc: 'A current U.S. passport book or card issued by the U.S. government.',
    tag: 'Recommended',
  },
  {
    id: 'birth-certificate',
    label: 'U.S. birth certificate',
    desc: 'An official certified copy issued by a U.S. state or territory where you were born.',
  },
  {
    id: 'military-id',
    label: 'U.S. Military ID',
    desc: 'Active duty, veteran, or dependent card issued by the Department of Defense.',
  },
  {
    id: 'naturalization',
    label: 'Naturalization certificate',
    desc: 'This is Form N-550 or N-570, issued by USCIS when you became a citizen.',
  },
  {
    id: 'gov-photo-id',
    label: 'Government issued photo ID',
  },
  {
    id: 'none',
    label: "I don't have any of these",
  },
];

export default function VoteDocuments() {
  const navigate = useNavigate();
  const { answers, setAnswer } = usePrototype();
  const [selected, setSelected] = useState(answers.voteDocuments || []);
  const [error, setError] = useState('');

  function toggle(id) {
    setError('');
    if (id === 'none') {
      setSelected(prev => prev.includes('none') ? [] : ['none']);
      return;
    }
    setSelected(prev => {
      const withoutNone = prev.filter(x => x !== 'none');
      return withoutNone.includes(id)
        ? withoutNone.filter(x => x !== id)
        : [...withoutNone, id];
    });
  }

  function handleContinue() {
    if (selected.length === 0) {
      setError('Please select at least one option before continuing.');
      return;
    }
    setAnswer('voteDocuments', selected);
    navigate('/vote-confirm');
  }

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            Check your documents to vote
          </h1>
        </div>

        <fieldset style={{ border: 'none', padding: 0 }}>
          <legend style={{ fontSize: '20px', fontWeight: 500, marginBottom: '16px', display: 'block' }}>
            Select all the documents you have
          </legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {VOTE_DOCUMENTS.map(doc => (
              <label key={doc.id} className="checkbox-card">
                <input
                  type="checkbox"
                  checked={selected.includes(doc.id)}
                  onChange={() => toggle(doc.id)}
                />
                <div className="checkbox-card__body">
                  <span className="checkbox-card__label">{doc.label}</span>
                  {doc.desc && <p className="checkbox-card__desc">{doc.desc}</p>}
                  {doc.tag && (
                    <span className="tag tag-neutral" style={{ marginTop: '8px' }}>
                      {doc.tag}
                    </span>
                  )}
                </div>
              </label>
            ))}
          </div>
        </fieldset>

        {error && (
          <p role="alert" style={{ fontSize: '16px', color: '#b91c1c', fontWeight: 500 }}>
            {error}
          </p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button className="btn btn-primary" onClick={handleContinue}>
            Continue
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/vote-method')}>
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
