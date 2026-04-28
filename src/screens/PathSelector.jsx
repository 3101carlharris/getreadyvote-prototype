import { useNavigate } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';

export default function PathSelector() {
  const navigate = useNavigate();
  const { setAnswer } = usePrototype();

  function selectPath(path) {
    setAnswer('registrationPath', path);
    navigate('/');
  }

  return (
    <div className="path-selector">
      <button className="btn btn-outline" onClick={() => selectPath('found')}>
        Registered path
      </button>
      <button className="btn btn-outline" onClick={() => selectPath('not-found')}>
        Unregistered path
      </button>
    </div>
  );
}
