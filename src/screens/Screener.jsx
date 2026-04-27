import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const STEPS = ['citizen', 'incarceration'];
const TOTAL = STEPS.length;

export default function Screener() {
  const navigate = useNavigate();
  const { answers, setAnswer } = usePrototype();
  const [step, setStep] = useState(0);
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  function handleChoice(key, value) {
    setAnswer(key, value);
  }

  function handleContinue() {
    const key = STEPS[step];
    if (answers[key] === null) return;

    if (step < TOTAL - 1) {
      setStep(s => s + 1);
    } else {
      navigate('/documents');
    }
  }

  function handleBack() {
    if (step > 0) {
      setStep(s => s - 1);
    } else {
      navigate('/');
    }
  }

  const progress = ((step + 1) / TOTAL) * 100;

  return (
    <>
      {/* Progress */}
      <div className="progress-bar" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label={`Step ${step + 1} of ${TOTAL}`}>
        <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            Step {step + 1} of {TOTAL}
          </p>
          <h1
            ref={headingRef}
            tabIndex={-1}
            style={{ fontSize: '32px', fontWeight: 500, outline: 'none' }}
          >
            Answer a few questions to confirm your eligibility
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Utah has specific voter rules. Your answers help us point you to the right next step.
          </p>
        </div>

        {step === 0 && (
          <QuestionBlock
            question="Are you a U.S. citizen?"
            hint="We need this information to confirm eligibility. You're either a citizen through birth or via naturalization."
            value={answers.citizen}
            onChange={v => handleChoice('citizen', v)}
          />
        )}

        {step === 1 && (
          <QuestionBlock
            question="Have you experienced incarceration?"
            hint="Your answers are never shared with anyone."
            value={answers.incarceration}
            onChange={v => handleChoice('incarceration', v)}
          />
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            className="btn btn-primary"
            onClick={handleContinue}
            disabled={answers[STEPS[step]] === null}
            style={{ opacity: answers[STEPS[step]] === null ? 0.5 : 1, cursor: answers[STEPS[step]] === null ? 'not-allowed' : 'pointer' }}
          >
            Continue
          </button>
          <button className="btn btn-outline" onClick={handleBack}>
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
      <legend style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', width: '100%' }}>
        <span style={{ fontSize: '20px', fontWeight: 500 }}>{question}</span>
        {hint && (
          <span style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            {hint}
          </span>
        )}
      </legend>
      <div className="choice-group" role="group">
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
