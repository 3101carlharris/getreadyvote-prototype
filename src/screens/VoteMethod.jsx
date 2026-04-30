import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const VOTE_METHODS = [
  {
    id: 'mail',
    label: 'By mail',
    desc: 'Utah automatically sends every registered voter a mail ballot.',
    tag: 'Automatic',
  },
  {
    id: 'in-person',
    label: 'In person',
    desc: "Vote at any Utah vote center on Election Day — you're not limited to any one location.",
  },
  {
    id: 'early-voting',
    label: 'Early voting',
    desc: 'Vote in person before Election Day at select vote centers.',
  },
];

export default function VoteMethod() {
  const navigate = useNavigate();
  const { answers, setAnswer } = usePrototype();
  const [selected, setSelected] = useState(answers.voteMethod || '');
  const [error, setError] = useState('');

  function handleContinue() {
    if (!selected) {
      setError('Please select a voting method before continuing.');
      return;
    }
    setAnswer('voteMethod', selected);
    navigate('/vote-documents');
  }

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            Select how you want to vote
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Your choice determines what documents you'll need.
          </p>
        </div>

        <fieldset style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <legend className="sr-only">Select your voting method</legend>
          {VOTE_METHODS.map(method => (
            <label
              key={method.id}
              className="checkbox-card"
              style={{
                borderColor: selected === method.id ? 'var(--color-text-primary)' : undefined,
                background: selected === method.id ? '#f5f5f5' : undefined,
              }}
            >
              <input
                type="radio"
                name="voteMethod"
                checked={selected === method.id}
                onChange={() => { setSelected(method.id); setError(''); }}
                style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '2px', accentColor: 'var(--color-text-primary)' }}
              />
              <div className="checkbox-card__body">
                <span className="checkbox-card__label">{method.label}</span>
                {method.desc && <p className="checkbox-card__desc">{method.desc}</p>}
                {method.tag && (
                  <span className="tag tag-neutral" style={{ marginTop: '8px' }}>
                    {method.tag}
                  </span>
                )}
              </div>
            </label>
          ))}
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
          <button className="btn btn-outline" onClick={() => navigate('/registration/found')}>
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
