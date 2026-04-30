import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrototypeProvider } from './context/PrototypeContext';
import Header from './components/Header';
import Landing from './screens/Landing';
import Screener from './screens/Screener';
import RegistrationLookup from './screens/RegistrationLookup';
import RegistrationFound from './screens/RegistrationFound';
import NotRegistered from './screens/NotRegistered';
import InfoIncorrect from './screens/InfoIncorrect';
import RegisterMethod from './screens/RegisterMethod';
import DocumentSelection from './screens/DocumentSelection';
import SecondaryDocuments from './screens/SecondaryDocuments';
import VoterPlanSignUp from './screens/VoterPlanSignUp';
import Login from './screens/Login';
import VoterPlan from './screens/VoterPlan';
import VoterPlanRegistered from './screens/VoterPlanRegistered';
import PathSelector from './screens/PathSelector';
import VoteMethod from './screens/VoteMethod';
import VoteDocuments from './screens/VoteDocuments';
import VoteConfirm from './screens/VoteConfirm';
import VoterPlanId from './screens/VoterPlanId';

export default function App() {
  return (
    <BrowserRouter>
      <PrototypeProvider>
        <div className="app-shell">
          <Header />
          <main id="main-content" className="page-main">
            <Routes>
              <Route path="/path-select" element={<PathSelector />} />
              <Route path="/" element={<Landing />} />
              <Route path="/registration" element={<RegistrationLookup />} />
              <Route path="/registration/found" element={<RegistrationFound />} />
              <Route path="/registration/not-found" element={<NotRegistered />} />
              <Route path="/registration/incorrect" element={<InfoIncorrect />} />
              <Route path="/screener" element={<Screener />} />
              <Route path="/register-method" element={<RegisterMethod />} />
              <Route path="/documents" element={<DocumentSelection />} />
              <Route path="/secondary-documents" element={<SecondaryDocuments />} />
              <Route path="/signup" element={<VoterPlanSignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/voter-plan" element={<VoterPlan />} />
              <Route path="/voter-plan/registered" element={<VoterPlanRegistered />} />
              <Route path="/vote-method" element={<VoteMethod />} />
              <Route path="/vote-documents" element={<VoteDocuments />} />
              <Route path="/vote-confirm" element={<VoteConfirm />} />
              <Route path="/voter-plan/id" element={<VoterPlanId />} />
            </Routes>
          </main>
        </div>
      </PrototypeProvider>
    </BrowserRouter>
  );
}
