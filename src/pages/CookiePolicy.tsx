import React from 'react';
import { Cookie, Shield, Eye, Settings, Calendar, Users, Lock } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const cookieTypes = [
    {
      icon: <Shield className="h-6 w-6" />,
      name: "Necessary Cookies",
      description: "Essential for the website to function properly",
      retention: "Session or 30 days",
      examples: [
        "Session management and user authentication",
        "Security features and fraud prevention",
        "Load balancing and website performance",
        "Remembering your cookie preferences"
      ]
    },
    {
      icon: <Eye className="h-6 w-6" />,
      name: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      retention: "2 years",
      examples: [
        "Google Analytics for website traffic analysis",
        "Page views and user behavior tracking",
        "Performance monitoring and error tracking",
        "A/B testing and user experience optimization"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements",
      retention: "1 year",
      examples: [
        "Social media advertising pixels (Facebook, LinkedIn)",
        "Google Ads and remarketing",
        "Email marketing campaign tracking",
        "Affiliate marketing and referral tracking"
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      name: "Preference Cookies",
      description: "Remember your choices and preferences",
      retention: "1 year",
      examples: [
        "Language and region preferences",
        "Theme and display settings",
        "Form data and user inputs",
        "Personalized content recommendations"
      ]
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-800 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary-100 p-4 rounded-full mr-4">
                <Cookie className="h-8 w-8 text-primary-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
                Cookie Policy
              </h1>
            </div>
            <p className="text-xl text-neutral-200">
              How we use cookies and similar technologies to enhance your experience
            </p>
            <p className="text-sm text-neutral-300 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-heading text-primary-800 mb-6">What Are Cookies?</h2>
              <div className="bg-primary-50 p-6 rounded-lg mb-6">
                <p className="text-neutral-700 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </div>
              <p className="text-neutral-700 mb-4">
                Transcendents3 ("we," "our," or "us") uses cookies and similar technologies to enhance your browsing experience, improve our website performance, and provide personalized content relevant to your financial needs.
              </p>
            </section>

            {/* Legal Basis */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-heading text-primary-800 mb-6">Legal Basis for Processing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">GDPR Compliance (EU)</h3>
                  <p className="text-neutral-700">
                    Under the General Data Protection Regulation (GDPR), we process cookies based on:
                  </p>
                  <ul className="mt-3 space-y-2 text-neutral-700">
                    <li>• <strong>Consent:</strong> For non-essential cookies</li>
                    <li>• <strong>Legitimate Interest:</strong> For website functionality</li>
                    <li>• <strong>Contract Performance:</strong> For service delivery</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary-600">
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">US Privacy Laws</h3>
                  <p className="text-neutral-700">
                    We comply with applicable US privacy laws including:
                  </p>
                  <ul className="mt-3 space-y-2 text-neutral-700">
                    <li>• <strong>CCPA:</strong> California Consumer Privacy Act</li>
                    <li>• <strong>COPPA:</strong> Children's Online Privacy Protection Act</li>
                    <li>• <strong>State Laws:</strong> Various state privacy regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookie Types */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-heading text-primary-800 mb-6">Types of Cookies We Use</h2>
              <div className="grid gap-6">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start mb-4">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                        {type.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-primary-800 mb-2">
                          {type.name}
                        </h3>
                        <p className="text-neutral-700 mb-3">
                          {type.description}
                        </p>
                        <div className="flex items-center text-sm text-neutral-600 mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span><strong>Retention Period:</strong> {type.retention}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-2">Examples of what we track:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="text-neutral-700 flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-heading text-primary-800 mb-6">Third-Party Services</h2>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  We use the following third-party services that may set cookies:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Analytics & Performance</h4>
                    <ul className="space-y-1 text-neutral-700">
                      <li>• Google Analytics</li>
                      <li>• Google Tag Manager</li>
                      <li>• Hotjar (if enabled)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Marketing & Advertising</h4>
                    <ul className="space-y-1 text-neutral-700">
                      <li>• Facebook Pixel</li>
                      <li>• LinkedIn Insight Tag</li>
                      <li>• Google Ads</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-heading text-primary-800 mb-6">Your Rights and Choices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">Cookie Management</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Accept or reject cookies via our cookie banner</li>
                    <li>• Modify preferences at any time</li>
                    <li>• Clear cookies through your browser settings</li>
                    <li>• Use browser extensions to block cookies</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">Data Protection Rights</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Right to access your personal data</li>
                    <li>• Right to rectification of inaccurate data</li>
                    <li>• Right to erasure ("right to be forgotten")</li>
                    <li>• Right to data portability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Browser Settings */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-heading text-primary-800 mb-6">Managing Cookies in Your Browser</h2>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  Most web browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Chrome</h4>
                    <p className="text-sm text-neutral-700">
                      Settings → Privacy and Security → Cookies and other site data
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Firefox</h4>
                    <p className="text-sm text-neutral-700">
                      Options → Privacy & Security → Cookies and Site Data
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Safari</h4>
                    <p className="text-sm text-neutral-700">
                      Preferences → Privacy → Manage Website Data
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-heading text-primary-800 mb-6">Data Security</h2>
              <div className="flex items-start bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <Lock className="h-6 w-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">We Protect Your Data</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• All data transmission is encrypted using SSL/TLS</li>
                    <li>• We implement industry-standard security measures</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Limited access to personal data on a need-to-know basis</li>
                    <li>• Secure data storage and backup procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-heading text-primary-800 mb-6">Contact Us</h2>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  If you have questions about this Cookie Policy or our use of cookies, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Transcendents3</h4>
                    <p className="text-neutral-700">
                      5614 W Grand Pkwy, S Ste 102<br />
                      Richmond, TX 77407<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Contact Information</h4>
                    <p className="text-neutral-700">
                      Phone: +1 (540) 929 9002<br />
                      Email: info@transcendents3.com<br />
                      Website: transcendents3.com
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-heading text-primary-800 mb-6">Updates to This Policy</h2>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="text-neutral-700">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
                </p>
                <p className="text-neutral-700 mt-4">
                  We encourage you to review this policy periodically to stay informed about how we use cookies and protect your information.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
