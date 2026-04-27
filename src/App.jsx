import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrototypeProvider } from './context/PrototypeContext';
import Header from './components/Header';
import Landing from './screens/Landing';
import Screener from './screens/Screener';
import RegistrationLookup from './screens/RegistrationLookup';
import RegistrationFound from './screens/RegistrationFound';
import NotRegistered from './screens/NotRegistered';
import InfoIncorrect from './screens/InfoIncorrect';
import DocumentSelection from './screens/DocumentSelection';
import RegisterMethod from './screens/RegisterMethod';
import VoterPlan from './screens/VoterPlan';
import VoterPlanRegistered from './screens/VoterPlanRegistered';

export default function App() {
  return (
    <BrowserRouter>
      <PrototypeProvider>
        <div className="app-shell">
          <Header />
          <main id="main-content" className="page-main">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/screener" element={<Screener />} />
              <Route path="/registration" element={<RegistrationLookup />} />
              <Route path="/registration/found" element={<RegistrationFound />} />
              <Route path="/registration/not-found" element={<NotRegistered />} />
              <Route path="/registration/incorrect" element={<InfoIncorrect />} />
              <Route path="/documents" element={<DocumentSelection />} />
              <Route path="/register-method" element={<RegisterMethod />} />
              <Route path="/voter-plan" element={<VoterPlan />} />
              <Route path="/voter-plan/registered" element={<VoterPlanRegistered />} />
            </Routes>
          </main>
        </div>
      </PrototypeProvider>
    </BrowserRouter>
  );
}
