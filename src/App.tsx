// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieConsent from './components/CookieConsent'; // Importer le composant
import CookiePolicy from './pages/CookiePolicy';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
            <Helmet>
              <meta charSet="utf-8" />
              <title>FreshAgency</title>
              <meta
                name="description"
                content="FreshAgency est une agence de gestion de créateurs TikTok spécialisée dans le gaming et le live streaming."
              />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta
                httpEquiv="Content-Security-Policy"
                content="default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://formsubmit.co;"
              />
              <meta name="referrer" content="strict-origin-when-cross-origin" />
              <meta name="robots" content="index, follow" />
            </Helmet>
            <Navbar />
            <CookieConsent /> {/* Ajouter le composant ici */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/join" element={<JoinUs />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<LegalNotice />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/cookie-policy' element={<CookiePolicy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
