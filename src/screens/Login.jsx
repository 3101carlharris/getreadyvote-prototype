import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Login() {
  const navigate = useNavigate();
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');

  function handleContinue() {
    if (!contact.trim()) {
      setError('Please enter your phone number or email address.');
      return;
    }
    navigate('/voter-plan');
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

        <div className="form-group">
          <label className="form-label" htmlFor="contact">Phone number or email</label>
          <input
            id="contact"
            className="form-input"
            type="text"
            inputMode="email"
            autoComplete="email tel"
            placeholder="e.g. (801) 555-0100 or jamie@example.com"
            value={contact}
            onChange={e => { setContact(e.target.value); setError(''); }}
          />
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
          <button className="btn btn-outline" onClick={() => navigate('/voter-plan')}>
            Skip for now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
