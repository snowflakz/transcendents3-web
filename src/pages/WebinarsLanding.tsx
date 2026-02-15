import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL, CONTACT_PHONE, WEBINAR_VIDEO_ID, WEBINAR_VIDEO_START } from '../constants';
import { Phone, Calendar, Mail, CheckCircle, Award, Shield, Zap, ArrowRight } from 'lucide-react';

const WebinarsLanding: React.FC = () => {
  const [showNoticeBar, setShowNoticeBar] = useState(true);
  const webinarEmbedUrl = `https://www.youtube.com/embed/${WEBINAR_VIDEO_ID}?rel=0&start=${WEBINAR_VIDEO_START}&autoplay=1&mute=1`;

  useEffect(() => {
    const handleScroll = () => {
      setShowNoticeBar(window.scrollY < 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="Bookkeeping Webinars | Free Training - Texas & USA Book Keeper | Transcendents3"
        description="Free bookkeeping webinars and training. Learn expert bookkeeping tips from Texas's leading book keeper. Watch our video series and schedule a free consultation today."
        keywords="bookkeeper Texas, book keeper USA, bookkeeping webinars, QuickBooks training, small business accounting, financial management"
        path="/resources/webinars"
      />
      <div className="min-h-screen bg-neutral-50">
        {/* Sticky CTA Bar - Hidden on scroll */}
        <div
          className={`sticky top-16 z-30 bg-secondary-500 text-white py-3 px-4 shadow-lg transition-transform duration-300 ${
            showNoticeBar ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="font-semibold text-center sm:text-left">
              👉 Book your free 15-min bookkeeping consultation today — limited spots!
            </p>
            <div className="flex gap-3">
              <a
                href={CALENDLY_CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white text-primary-800 font-bold rounded-lg hover:bg-primary-50 transition-colors text-sm"
              >
                Book Now
              </a>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center text-white font-semibold hover:underline">
                <Phone className="w-4 h-4 mr-1" />
                {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>

        {/* Hero Section - World-class */}
        <section className="relative bg-primary-800 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.pexels.com/photos/7550317/pexels-photo-7550317.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-secondary-500 text-white text-sm font-bold px-4 py-4 rounded-full mb-6 shadow-lg">
                  🎯 FREE Masterclass — No Credit Card Required
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
                  Stop Losing Money. Master Your Books Like a Pro.
                </h1>
                <p className="text-xl text-neutral-200 mb-8 max-w-lg">
                  Join 500+ Texas & USA business owners who took control of their finances. Learn the exact bookkeeping systems that save <strong className="text-secondary-400">$5M+</strong> in tax savings for our clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true} className="text-center font-bold shadow-xl">
                    <Calendar className="inline-block w-5 h-5 mr-2" />
                    Book My Free Consultation
                  </Button>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white/10 text-white border-2 border-white rounded-lg hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 text-neutral-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary-400" />
                    100% Free
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary-400" />
                    No Obligation
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary-400" />
                    15-Min Call
                  </span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional bookkeeper working with financial documents"
                  className="rounded-2xl shadow-2xl border-4 border-white/20"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 max-w-[200px]">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <p className="font-bold text-primary-800">50+</p>
                      <p className="text-sm text-neutral-600">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-white py-8 border-b border-neutral-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-neutral-600">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-800">50+</p>
                <p className="text-sm">Clients Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-800">$5M+</p>
                <p className="text-sm">Tax Savings Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-800">98%</p>
                <p className="text-sm">Client Retention</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-800">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Premium */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block bg-primary-100 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Watch Now
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                  Free Bookkeeping Masterclass — Watch & Learn
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Our certified book keepers reveal the proven systems that help Texas businesses save thousands and stay tax-ready year-round.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200">
                <div className="relative aspect-video bg-neutral-900">
                  <iframe
                    title="Bookkeeping Best Practices - Transcendents3"
                    className="w-full h-full"
                    src={webinarEmbedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-primary-800 mb-4">
                    What You'll Discover in This Masterclass
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      'QuickBooks setup & optimization for Texas businesses',
                      'Tax-ready financial reports that save you money',
                      'Common bookkeeping mistakes that cost thousands',
                      'How to streamline payroll & expense tracking',
                      'When to DIY vs. hire a professional book keeper',
                      'Free consultation — no obligation, ever',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true} className="font-bold">
                      <Calendar className="inline-block w-5 h-5 mr-2" />
                      Book Free 15-Min Consultation
                    </Button>
                    <Button variant="outline" size="lg" href="/contact" className="font-semibold">
                      <Mail className="inline-block w-5 h-5 mr-2" />
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business owner reviewing financial documents"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                  Tired of Bookkeeping Headaches?
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Messy books, missed deductions, tax-time stress — sound familiar? Our Texas book keepers specialize in helping businesses like yours get organized, compliant, and confident.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Full-service bookkeeping & payroll',
                    'QuickBooks setup, cleanup & training',
                    'Tax preparation & planning',
                    'Business consulting & advisory',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-secondary-500" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                  Get Free Assessment
                  <ArrowRight className="inline-block w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Professionalism */}
        <section className="py-20 bg-primary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Why Texas Businesses Trust Transcendents3
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Certified professionals. Proven systems. Results you can count on.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: 'Certified Professionals', desc: 'CPA-qualified and QuickBooks certified' },
                { icon: Award, title: 'Proven Track Record', desc: '$5M+ in tax savings delivered to clients' },
                { icon: Zap, title: 'Fast & Reliable', desc: 'Timely reports and responsive support' },
                { icon: CheckCircle, title: 'No Long-Term Contracts', desc: 'Flexible service — start with a free call' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Big CTA Section */}
        <section className="py-20 md:py-28 bg-primary-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="text-xl text-neutral-200 mb-10">
                Book a free 15-minute consultation. No pressure. No obligation. Just expert advice from Texas's trusted book keepers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true} className="font-bold shadow-xl px-8">
                  <Calendar className="inline-block w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-primary-800 rounded-lg hover:bg-primary-50 transition-colors font-bold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {CONTACT_PHONE}
                </a>
              </div>
              <p className="mt-6 text-neutral-300 text-sm">
                Limited spots available this week. Book now to secure your free assessment.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default WebinarsLanding;
