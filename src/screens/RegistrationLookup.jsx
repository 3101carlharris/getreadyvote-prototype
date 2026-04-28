import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function RegistrationLookup() {
  const navigate = useNavigate();
  const { answers, setAnswer } = usePrototype();
  const [form, setForm] = useState({ firstName: '', lastName: '', dobMonth: '', dobDay: '', dobYear: '', address: '' });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const next = {};
    if (!form.firstName.trim()) next.firstName = 'First name is required.';
    if (!form.lastName.trim()) next.lastName = 'Last name is required.';
    if (!form.dobMonth) next.dobMonth = 'Month is required.';
    if (!form.dobDay.trim()) next.dobDay = 'Day is required.';
    if (!form.dobYear.trim()) next.dobYear = 'Year is required.';
    if (!form.address.trim()) next.address = 'Address is required.';
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) { setErrors(next); return; }

    const dob = `${String(MONTHS.indexOf(form.dobMonth) + 1).padStart(2, '0')}/${form.dobDay.padStart(2, '0')}/${form.dobYear}`;
    setAnswer('name', `${form.firstName} ${form.lastName}`);
    setAnswer('dob', dob);
    setAnswer('address', form.address);

    const destination = answers.registrationPath === 'not-found'
      ? '/registration/not-found'
      : '/registration/found';
    navigate(destination);
  }

  return (
    <>
      <div className="page-section">
        <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
          Check if you're registered to vote
        </h1>

        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="firstName">First name</label>
              <input
                className="form-input"
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="Jamie"
                value={form.firstName}
                onChange={handleChange}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
              {errors.firstName && <p id="firstName-error" role="alert" className="form-hint" style={{ color: '#b91c1c' }}>{errors.firstName}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="lastName">Last name</label>
              <input
                className="form-input"
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Smith"
                value={form.lastName}
                onChange={handleChange}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              />
              {errors.lastName && <p id="lastName-error" role="alert" className="form-hint" style={{ color: '#b91c1c' }}>{errors.lastName}</p>}
            </div>

            <p className="form-hint">Use your full legal name as it appears on your ID or official documents.</p>
          </div>

          <div className="form-group">
            <span className="form-label" id="dob-label">Date of birth</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <div style={{ flex: '1 1 0', position: 'relative' }}>
                <select
                  className="form-input"
                  id="dobMonth"
                  name="dobMonth"
                  value={form.dobMonth}
                  onChange={handleChange}
                  aria-label="Month"
                  aria-describedby={errors.dobMonth ? 'dob-error' : 'dob-label'}
                  style={{ appearance: 'none', WebkitAppearance: 'none', paddingRight: '40px', cursor: 'pointer' }}
                >
                  <option value="">Month</option>
                  {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                  <path d="M6 9l6 6 6-6" stroke="#353535" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ width: '64px' }}>
                <input
                  className="form-input"
                  id="dobDay"
                  name="dobDay"
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  placeholder="DD"
                  value={form.dobDay}
                  onChange={handleChange}
                  aria-label="Day"
                  style={{ textAlign: 'center' }}
                />
              </div>
              <div style={{ width: '96px' }}>
                <input
                  className="form-input"
                  id="dobYear"
                  name="dobYear"
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="YYYY"
                  value={form.dobYear}
                  onChange={handleChange}
                  aria-label="Year"
                  style={{ textAlign: 'center' }}
                />
              </div>
            </div>
            {(errors.dobMonth || errors.dobDay || errors.dobYear) && (
              <p id="dob-error" role="alert" className="form-hint" style={{ color: '#b91c1c' }}>Date of birth is required.</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="address">Address</label>
            <input
              className="form-input"
              id="address"
              name="address"
              type="text"
              autoComplete="street-address"
              placeholder="123 Main Street, New York NY"
              value={form.address}
              onChange={handleChange}
              aria-describedby={errors.address ? 'address-error' : undefined}
            />
            {errors.address && <p id="address-error" role="alert" className="form-hint" style={{ color: '#b91c1c' }}>{errors.address}</p>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button className="btn btn-primary" type="submit">
              Check my voter registration
            </button>
            <button className="btn btn-outline" type="button" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
