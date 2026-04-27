import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

export default function RegistrationLookup() {
  const navigate = useNavigate();
  const { setAnswer } = usePrototype();
  const [form, setForm] = useState({ firstName: '', lastName: '', dob: '', address: '' });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function simulateFound() {
    setAnswer('name', `${form.firstName || 'Jamie'} ${form.lastName || 'Smith'}`);
    setAnswer('dob', form.dob || '04/15/1992');
    setAnswer('address', form.address || '123 Main Street, Salt Lake City, UT 12345');
    navigate('/registration/found');
  }

  function simulateNotFound() {
    setAnswer('name', `${form.firstName || 'Jamie'} ${form.lastName || 'Smith'}`);
    setAnswer('dob', form.dob || '04/15/1992');
    setAnswer('address', form.address || '123 Main Street, Salt Lake City, UT 12345');
    navigate('/registration/not-found');
  }

  return (
    <>
      <div className="page-section">
        <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
          Let's check your voter registration in Utah
        </h1>

        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">First name</label>
            <input
              className="form-input"
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Jamie"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="lastName">Last name</label>
            <input
              className="form-input"
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Smith"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="dob">Date of birth</label>
            <input
              className="form-input"
              id="dob"
              name="dob"
              type="date"
              autoComplete="bday"
              value={form.dob}
              onChange={handleChange}
            />
            <p className="form-hint">Enter the date of birth on your government-issued ID.</p>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="address">Home address</label>
            <input
              className="form-input"
              id="address"
              name="address"
              type="text"
              autoComplete="street-address"
              value={form.address}
              onChange={handleChange}
              placeholder="123 Main St, Salt Lake City"
            />
          </div>
        </form>

        {/* Prototype simulation controls */}
        <div
          role="group"
          aria-label="Prototype simulation controls"
          style={{ display: 'flex', flexDirection: 'column', gap: '12px', border: '2px dashed var(--color-accent)', borderRadius: '8px', padding: '16px', background: '#ebf5ff' }}
        >
          <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-accent)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Prototype only — simulate lookup result
          </p>
          <button className="btn btn-prototype" type="button" onClick={simulateFound}>
            ✅ Simulate: Registration found
          </button>
          <button className="btn btn-prototype" type="button" onClick={simulateNotFound}>
            ❌ Simulate: Not registered
          </button>
        </div>

        <button className="btn btn-outline" type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <Footer />
    </>
  );
}
