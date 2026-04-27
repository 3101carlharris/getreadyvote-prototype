import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const METHOD_LABELS = {
  online: 'Register online',
  mail: 'Register by mail',
  'in-person': 'Register in person',
};

const METHOD_STEPS = {
  online: [
    { title: 'Go to vote.utah.gov', desc: 'Visit the official Utah voter registration portal.' },
    { title: 'Enter your information', desc: 'Use your Utah Driver License or ID number to complete the form.' },
    { title: 'Submit your registration', desc: "You'll receive a confirmation email when your registration is processed." },
    { title: 'Check your registration', desc: 'Confirm your registration is active 2–3 business days after submitting.' },
  ],
  mail: [
    { title: 'Download the form', desc: 'Get the Utah Voter Registration form at elections.utah.gov.' },
    { title: 'Complete and sign', desc: 'Fill in all required fields. Your signature is required.' },
    { title: 'Mail your form', desc: 'Send to your county clerk at least 30 days before an election.' },
    { title: 'Wait for confirmation', desc: "You'll receive a voter registration card by mail." },
  ],
  'in-person': [
    { title: 'Find your county clerk', desc: "Locate your county clerk's office at utah.gov/government." },
    { title: 'Bring your ID', desc: 'Bring your Utah Driver License, ID, or other accepted ID.' },
    { title: 'Complete registration', desc: 'A staff member will help you fill out and submit the form.' },
    { title: 'Same-day registration', desc: 'You can also register on Election Day at your polling place.' },
  ],
};

export default function VoterPlan() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const firstName = name.split(' ')[0];
  const method = answers.registrationMethod || 'online';
  const steps = METHOD_STEPS[method] || METHOD_STEPS.online;
  const methodLabel = METHOD_LABELS[method] || 'Register online';

  return (
    <>
      <div className="page-section">
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '48px' }} role="img" aria-label="Voter plan">📋</span>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            {firstName}'s voter plan
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Here are your next steps to register to vote in Utah.
          </p>
        </div>

        {/* Method card */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Your registration method</h2>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '16px', color: 'var(--color-text-primary)', textDecoration: 'underline', padding: '4px' }}
              onClick={() => navigate('/register-method')}
            >
              Change
            </button>
          </div>
          <span className="tag tag-neutral" style={{ alignSelf: 'flex-start' }}>{methodLabel}</span>
        </div>

        {/* Steps */}
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" style={{ fontSize: '24px', fontWeight: 500, marginBottom: '16px' }}>
            Your steps
          </h2>
          <ol style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
            {steps.map((step, i) => (
              <li key={i} className="plan-task">
                <span className="plan-task__num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Deadlines */}
        <section aria-labelledby="deadlines-heading">
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 id="deadlines-heading" style={{ fontSize: '20px', fontWeight: 500 }}>
              Key deadlines in Utah
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="detail-row">
                <span className="detail-row__label">Online registration closes</span>
                <span className="detail-row__value">30 days before election</span>
              </div>
              <div className="divider" />
              <div className="detail-row">
                <span className="detail-row__label">Mail registration postmark deadline</span>
                <span className="detail-row__value">30 days before election</span>
              </div>
              <div className="divider" />
              <div className="detail-row">
                <span className="detail-row__label">In-person / same-day registration</span>
                <span className="detail-row__value">Available on Election Day</span>
              </div>
            </div>
          </div>
        </section>

        {/* Documents needed */}
        {answers.documents && answers.documents.length > 0 && !answers.documents.includes('none') && (
          <section aria-labelledby="docs-heading">
            <div className="card-white" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h2 id="docs-heading" style={{ fontSize: '20px', fontWeight: 500 }}>
                Documents you'll need
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)' }}>
                Bring one of these when you register:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {answers.documents.map(id => (
                  <li key={id} style={{ fontSize: '16px' }}>
                    {id === 'drivers-license' && 'Utah Driver License or ID card'}
                    {id === 'passport' && 'U.S. Passport or Passport Card'}
                    {id === 'military-id' && 'U.S. Military ID'}
                    {id === 'tribal-id' && 'Tribal ID'}
                    {id === 'student-id' && 'Student ID'}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Get text alerts */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 500 }}>Get reminders</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.5 }}>
            Sign up for text reminders so you don't miss any deadlines.
          </p>
          <button className="btn btn-primary" type="button">
            Sign up for text alerts
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
