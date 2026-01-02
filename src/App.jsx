import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DeveloperPage from './pages/DeveloperPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/developer/:slug" element={<DeveloperPage />} />
        <Route path="/property-detail/:slug" element={<PropertyDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
