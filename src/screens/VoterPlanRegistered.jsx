import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import Footer from '../components/Footer';

export default function VoterPlanRegistered() {
  const navigate = useNavigate();
  const { answers } = usePrototype();
  const name = answers.name || 'Jamie Smith';
  const firstName = name.split(' ')[0];

  return (
    <>
      <div className="page-section">
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '48px' }} role="img" aria-label="Ready to vote">🗳️</span>
          <h1 style={{ fontSize: '32px', fontWeight: 500, lineHeight: 1.2 }}>
            You're all set, {firstName}!
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.5 }}>
            Your voter registration is active in Utah. Here's what you need to know before Election Day.
          </p>
        </div>

        {/* Status card */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span className="tag tag-success" style={{ fontSize: '16px', padding: '6px 12px' }}>✓ Registered in Utah</span>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            Your registration is active in Salt Lake County. No action needed right now.
          </p>
        </div>

        {/* Before you vote */}
        <section aria-labelledby="before-you-vote-heading">
          <h2 id="before-you-vote-heading" style={{ fontSize: '24px', fontWeight: 500, marginBottom: '16px' }}>
            Before Election Day
          </h2>
          <ol style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
            {[
              { title: 'Check your polling place', desc: 'Find your assigned polling location at vote.utah.gov.' },
              { title: 'Bring your ID', desc: 'Utah requires photo ID to vote. Your driver license or state ID works.' },
              { title: "Know what's on your ballot", desc: 'Review candidates and measures at ballotpedia.org before you go.' },
              { title: 'Confirm election dates', desc: 'General elections are held the first Tuesday after the first Monday in November.' },
            ].map((step, i) => (
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

        {/* Key deadlines */}
        <section aria-labelledby="deadlines-heading">
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 id="deadlines-heading" style={{ fontSize: '20px', fontWeight: 500 }}>
              Key Utah voting info
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="detail-row">
                <span className="detail-row__label">Voting method</span>
                <span className="detail-row__value">In person or vote-by-mail</span>
              </div>
              <div className="divider" />
              <div className="detail-row">
                <span className="detail-row__label">Ballot mailed to you</span>
                <span className="detail-row__value">28 days before election</span>
              </div>
              <div className="divider" />
              <div className="detail-row">
                <span className="detail-row__label">Polls open</span>
                <span className="detail-row__value">7:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </section>

        {/* Re-check registration */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 500 }}>Keep your registration current</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.5 }}>
            If you move or change your name, update your registration at least 30 days before an election.
          </p>
          <button className="btn btn-outline" onClick={() => navigate('/registration')}>
            Re-check my registration
          </button>
        </div>

        {/* Text alerts */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 500 }}>Get election reminders</h2>
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
