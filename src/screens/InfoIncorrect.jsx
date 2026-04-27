import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const CHANGED_OPTIONS = [
  { id: 'name', label: 'My name has changed' },
  { id: 'address', label: 'My address has changed' },
  { id: 'other', label: 'Something else has changed' },
];

export default function InfoIncorrect() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState('');

  function toggle(id) {
    setError('');
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }

  function handleContinue() {
    if (selected.length === 0) {
      setError('Please select at least one option before continuing.');
      return;
    }
    navigate('/screener');
  }

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            What has changed?
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            If your registration details are out of date, you may need to update your registration before you can vote.
          </p>
        </div>

        <fieldset style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <legend style={{ fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>
            Select all that apply
          </legend>
          {CHANGED_OPTIONS.map(opt => (
            <label key={opt.id} className="checkbox-card">
              <input
                type="checkbox"
                checked={selected.includes(opt.id)}
                onChange={() => toggle(opt.id)}
              />
              <div className="checkbox-card__body">
                <span className="checkbox-card__label">{opt.label}</span>
              </div>
            </label>
          ))}
        </fieldset>

        <div className="alert alert-info" role="note">
          <strong>Re-registering is easy.</strong> You can update your registration online, by mail, or in person — we'll show you the easiest option.
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
        </div>
      </div>
      <Footer />
    </>
  );
}
