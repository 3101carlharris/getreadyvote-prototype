import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const METHODS = [
  {
    id: 'online',
    label: 'Online',
    desc: 'Register at vote.utah.gov with your Utah Driver License or ID number.',
    tag: 'Requires Utah ID',
  },
  {
    id: 'mail',
    label: 'By mail',
    desc: "Print and mail a registration form. We'll guide you to send the right documents.",
  },
  {
    id: 'in-person',
    label: 'In person',
    desc: "Visit your county clerk's office. Same-day registration is available on Election Day.",
  },
];

export default function RegisterMethod() {
  const navigate = useNavigate();
  const { answers, setAnswer } = usePrototype();
  const [selected, setSelected] = useState(answers.registrationMethod || '');
  const [error, setError] = useState('');

  function handleContinue() {
    if (!selected) {
      setError('Please select a registration method before continuing.');
      return;
    }
    setAnswer('registrationMethod', selected);
    navigate('/documents');
  }

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            Select how you want to register
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Your choice determines what documents you'll need.
          </p>
        </div>

        <fieldset style={{ border: 'none', padding: 0 }}>
          <legend className="sr-only">Select your registration method</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {METHODS.map(method => (
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
                  name="registerMethod"
                  checked={selected === method.id}
                  onChange={() => { setSelected(method.id); setError(''); }}
                  style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '2px', accentColor: 'var(--color-text-primary)' }}
                />
                <div className="checkbox-card__body">
                  <span className="checkbox-card__label">{method.label}</span>
                  <p className="checkbox-card__desc">{method.desc}</p>
                  {method.tag && (
                    <span className="tag tag-neutral" style={{ marginTop: '8px' }}>
                      {method.tag}
                    </span>
                  )}
                </div>
              </label>
            ))}
          </div>
        </fieldset>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-secondary)', borderRadius: '4px', padding: '8px 16px' }}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" stroke="#111" strokeWidth="1.5"/>
            <line x1="12" y1="8" x2="12" y2="8" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="12" x2="12" y2="17" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
            Registering to vote is always free.
          </p>
        </div>

        {error && (
          <p role="alert" style={{ fontSize: '16px', color: '#b91c1c', fontWeight: 500 }}>
            {error}
          </p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button className="btn btn-primary" onClick={handleContinue}>
            Continue
          </button>
          <button className="btn btn-outline" onClick={() => navigate(-1)}>
            Back
          </button>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
            <button
              type="button"
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '6px', padding: '8px' }}
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#111" strokeWidth="1.5"/>
                <line x1="12" y1="8" x2="12" y2="8" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="12" x2="12" y2="17" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Need help?
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
