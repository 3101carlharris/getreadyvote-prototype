import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

const METHODS = [
  {
    id: 'online',
    icon: '💻',
    label: 'Register online',
    desc: "Fastest option. Complete your registration at vote.utah.gov in about 5 minutes. You'll need your Utah Driver License or ID number.",
    time: '~5 minutes',
  },
  {
    id: 'mail',
    icon: '✉️',
    label: 'Register by mail',
    desc: 'Download, print, and mail the Utah voter registration form. Must be postmarked 30 days before an election.',
    time: '2–3 weeks',
  },
  {
    id: 'in-person',
    icon: '🏢',
    label: 'Register in person',
    desc: "Visit your county clerk's office or any Utah DMV. Same-day registration is available on Election Day.",
    time: 'Same day available',
  },
];

export default function RegisterMethod() {
  const navigate = useNavigate();
  const { setAnswer } = usePrototype();

  function handleSelect(id) {
    setAnswer('registrationMethod', id);
    navigate('/voter-plan');
  }

  return (
    <>
      <div className="page-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            How would you like to register?
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Choose the method that works best for you. All three options are free.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} role="list">
          {METHODS.map(method => (
            <button
              key={method.id}
              className="method-card"
              role="listitem"
              onClick={() => handleSelect(method.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '28px' }} aria-hidden="true">{method.icon}</span>
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 500 }}>{method.label}</h2>
                  <span className="tag tag-neutral" style={{ marginTop: '4px' }}>{method.time}</span>
                </div>
              </div>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                {method.desc}
              </p>
            </button>
          ))}
        </div>

        <button className="btn btn-outline" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <Footer />
    </>
  );
}
