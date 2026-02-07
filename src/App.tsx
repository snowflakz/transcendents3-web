import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { NotificationProvider } from './components/ui/NotificationProvider';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import WebinarsLanding from './pages/WebinarsLanding';
import FinancialCalculator from './pages/FinancialCalculator';
import QuickBooksGuides from './pages/QuickBooksGuides';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Career from './pages/Career';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/webinars" element={<WebinarsLanding />} />
            <Route path="/resources/calculators" element={<FinancialCalculator />} />
            <Route path="/resources/quickbooks-guides" element={<QuickBooksGuides />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </NotificationProvider>
  );
}

export default App;