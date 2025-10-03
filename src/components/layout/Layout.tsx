import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from '../ChatWidget';
import SimpleCookieBanner from '../SimpleCookieBanner';
import ScrollToTop from '../ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <SimpleCookieBanner />
    </div>
  );
};

export default Layout;