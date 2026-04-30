import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

export default function Login() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const nextPath = answers.registrationPath === 'found' ? '/voter-plan/id' : '/voter-plan';

  function handleContinue() {
    if (!phone.trim() && !email.trim()) {
      setError('Please enter a phone number or email address to continue.');
      return;
    }
    navigate(nextPath);
  }

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            Save your plan
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Enter your phone number or email to save your progress and receive reminders about key deadlines.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone number</label>
            <input
              id="phone"
              className="form-input"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="e.g. (801) 555-0100"
              value={phone}
              onChange={e => { setPhone(e.target.value); setError(''); }}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email address</label>
            <input
              id="email"
              className="form-input"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="e.g. jamie@example.com"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(''); }}
            />
          </div>

          <p className="form-hint">We'll only contact you about voter registration deadlines and election reminders.</p>
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
          <button className="btn btn-outline" onClick={() => navigate(nextPath)}>
            Skip for now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
