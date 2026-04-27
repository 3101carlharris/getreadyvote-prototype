import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const DOCUMENTS = [
  {
    id: 'tribal-number',
    label: 'Tribal ID, treaty card, or enrollment number',
    desc: "You can provide the number — you don't need to submit the physical card.",
  },
  {
    id: 'cdib',
    label: 'Certificate of Degree of Indian Blood (CDIB)',
    desc: 'BIA affidavit of birth also qualifies. Either a copy or the card number works.',
  },
  {
    id: 'carry-permit',
    label: 'Utah concealed carry permit',
    desc: 'Acceptable ID at the polls in Utah.',
  },
  {
    id: 'alien-number',
    label: 'Alien registration number (A-number)',
    desc: 'This is your "A-number" found on your green card.',
  },
  {
    id: 'none',
    label: "I don't have any of these",
  },
];

export default function SecondaryDocuments() {
  const navigate = useNavigate();
  const { answers, setAnswer } = usePrototype();
  const [selected, setSelected] = useState([]);
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
    const combined = [...(answers.documents || []), ...selected.filter(x => x !== 'none')];
    setAnswer('documents', combined.length > 0 ? combined : ['none']);
    navigate('/signup');
  }

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            We'll help you find other options
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Utah accepts several alternative documents. Select everything you have available.
          </p>
        </div>

        <fieldset style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <legend style={{ fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>
            Select all the documents you have
          </legend>
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
          <button className="btn btn-outline" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
