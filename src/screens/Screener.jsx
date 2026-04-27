import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

export default function Screener() {
  const navigate = useNavigate();
  const { answers, setAnswer } = usePrototype();
  const [error, setError] = useState('');
  const headingRef = useRef(null);

  useEffect(() => { headingRef.current?.focus(); }, []);

  function handleContinue() {
    if (answers.citizen === null || answers.incarceration === null) {
      setError('Please answer both questions before continuing.');
      return;
    }
    navigate('/register-method');
  }

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 ref={headingRef} tabIndex={-1} style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2, outline: 'none' }}>
            Confirm your eligibility
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Utah has specific voter rules. Your answers help us point you to the right next step.
          </p>
        </div>

        <QuestionBlock
          question="Are you a U.S. citizen?"
          hint="You're either a citizen through birth or via naturalization."
          value={answers.citizen}
          onChange={v => { setAnswer('citizen', v); setError(''); }}
        />

        <QuestionBlock
          question="Have you experienced incarceration?"
          hint="Your answers are never shared with anyone."
          value={answers.incarceration}
          onChange={v => { setAnswer('incarceration', v); setError(''); }}
        />

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
        </div>
      </div>
      <Footer />
    </>
  );
}

function QuestionBlock({ question, hint, value, onChange }) {
  return (
    <fieldset style={{ border: 'none', padding: 0 }}>
      <legend style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', width: '100%' }}>
        <span style={{ fontSize: '20px', fontWeight: 500 }}>{question}</span>
        {hint && <span style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{hint}</span>}
      </legend>
      <div className="choice-group">
        <button
          type="button"
          className={`choice-btn${value === true ? ' selected' : ''}`}
          onClick={() => onChange(true)}
          aria-pressed={value === true}
        >
          Yes
        </button>
        <button
          type="button"
          className={`choice-btn${value === false ? ' selected' : ''}`}
          onClick={() => onChange(false)}
          aria-pressed={value === false}
        >
          No
        </button>
      </div>
    </fieldset>
  );
}
