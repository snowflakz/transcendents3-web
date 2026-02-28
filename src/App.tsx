import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { NotificationProvider } from './components/ui/NotificationProvider';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceBookkeeping = lazy(() => import('./pages/ServiceBookkeeping'));
const ServicePayroll = lazy(() => import('./pages/ServicePayroll'));
const ServiceQuickBooksCleanup = lazy(() => import('./pages/ServiceQuickBooksCleanup'));
const ServiceConsulting = lazy(() => import('./pages/ServiceConsulting'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Resources = lazy(() => import('./pages/Resources'));
const WebinarsLanding = lazy(() => import('./pages/WebinarsLanding'));
const FinancialCalculator = lazy(() => import('./pages/FinancialCalculator'));
const QuickBooksGuides = lazy(() => import('./pages/QuickBooksGuides'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Career = lazy(() => import('./pages/Career'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
      <span className="text-neutral-600">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Layout>
          <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/bookkeeping" element={<ServiceBookkeeping />} />
            <Route path="/services/insurance" element={<ServicePayroll />} />
            <Route path="/services/payroll" element={<Navigate to="/services/insurance" replace />} />
            <Route path="/services/quickbooks-cleanup" element={<ServiceQuickBooksCleanup />} />
            <Route path="/services/consulting" element={<ServiceConsulting />} />
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
          </Suspense>
        </Layout>
      </Router>
    </NotificationProvider>
  );
}

export default App;