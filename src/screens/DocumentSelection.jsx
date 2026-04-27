import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const DOCUMENTS = [
  {
    id: 'drivers-license',
    label: 'Utah Driver License or ID card',
    desc: 'Issued by the Utah Division of Motor Vehicles.',
    tag: 'Most common',
  },
  {
    id: 'passport',
    label: 'U.S. Passport or Passport Card',
    desc: 'Current or expired within the last 4 years.',
    tag: 'Accepted',
  },
  {
    id: 'military-id',
    label: 'U.S. Military ID',
    desc: 'Active duty, retired, or dependent military ID card.',
  },
  {
    id: 'tribal-id',
    label: 'Tribal ID',
    desc: 'Photo ID issued by a federally recognized tribe.',
  },
  {
    id: 'student-id',
    label: 'Student ID',
    desc: 'Photo ID from a Utah accredited college or university.',
  },
  {
    id: 'none',
    label: "I don’t have any of these",
    desc: "We'll help you get the documents you need.",
  },
];

export default function DocumentSelection() {
  const navigate = useNavigate();
  const { setAnswer } = usePrototype();
  const [selected, setSelected] = useState([]);

  function toggle(id) {
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
    setAnswer('documents', selected);
    navigate('/register-method');
  }

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            What ID documents do you have?
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Utah requires one of the following to register to vote. Select everything you have available.
          </p>
        </div>

        <fieldset style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <legend className="sr-only">Select your available ID documents</legend>
          {DOCUMENTS.map(doc => (
            <label key={doc.id} className="checkbox-card">
              <input
                type="checkbox"
                checked={selected.includes(doc.id)}
                onChange={() => toggle(doc.id)}
              />
              <div className="checkbox-card__body">
                <span className="checkbox-card__label">{doc.label}</span>
                {doc.desc && <p className="checkbox-card__desc">{doc.desc}</p>}
                {doc.tag && <span className="checkbox-card__tag">{doc.tag}</span>}
              </div>
            </label>
          ))}
        </fieldset>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            className="btn btn-primary"
            disabled={selected.length === 0}
            style={{ opacity: selected.length === 0 ? 0.5 : 1, cursor: selected.length === 0 ? 'not-allowed' : 'pointer' }}
            onClick={handleContinue}
          >
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
