import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const blogPosts = [
  {
    id: '1',
    title: '5 Tax-Saving Strategies for Small Business Owners',
    date: 'May 15, 2023',
    author: 'Michael Rodriguez',
    imageSrc: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: (
      <>
        <p className="text-lg text-neutral-700 mb-6">Running a small business comes with its own set of challenges, but overpaying on taxes shouldn't be one of them. By implementing smart tax-saving strategies, you can keep more of your profits and invest back into your business's growth. Here are five proven ways to reduce your tax burden and maximize your financial success.</p>
        
        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Maximize Your Deductions</h2>
        <p className="text-neutral-700 mb-4">Every business expense counts! From office supplies to software subscriptions, make sure you're tracking and claiming all eligible deductions. Don't forget about home office expenses if you work remotely.</p>
        <ul className="list-disc pl-6 mb-6 text-neutral-700">
          <li>Office supplies and equipment</li>
          <li>Software subscriptions and digital tools</li>
          <li>Home office expenses (if applicable)</li>
          <li>Professional development and training</li>
          <li>Business meals and entertainment (50% deductible)</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Take Advantage of Retirement Plans</h2>
        <p className="text-neutral-700 mb-4">Contributing to a retirement plan not only secures your future but also reduces your taxable income. Consider options like SEP IRAs or Solo 401(k)s designed for small business owners.</p>
        <p className="text-neutral-700 mb-4">A SEP IRA allows you to contribute up to 25% of your net earnings, while a Solo 401(k) lets you contribute both as an employee and employer, potentially saving thousands in taxes annually.</p>

        <div className="bg-primary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Ready to Optimize Your Tax Strategy?</h3>
          <p className="text-neutral-700 mb-4">Our tax experts can help you identify additional deductions and create a comprehensive tax plan tailored to your business needs.</p>
          <Button variant="secondary" size="lg" href="/contact">Get Free Tax Consultation</Button>
        </div>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Track Vehicle and Travel Expenses</h2>
        <p className="text-neutral-700 mb-4">If you use your vehicle for business, keep detailed records of mileage and expenses. Business travel, including meals and lodging, can also be deductible.</p>
        <p className="text-neutral-700 mb-4">The IRS allows you to deduct either actual vehicle expenses or use the standard mileage rate (currently 65.5 cents per mile for 2023). Choose the method that gives you the larger deduction.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Invest in Professional Advice</h2>
        <p className="text-neutral-700 mb-4">Tax laws change frequently. Working with a qualified accountant or tax advisor can help you uncover deductions you might miss and ensure compliance with the latest regulations.</p>
        <p className="text-neutral-700 mb-4">A good tax professional can save you more money than they cost, especially when dealing with complex business structures or significant income changes.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Consider Incorporation Options</h2>
        <p className="text-neutral-700 mb-4">The structure of your business (LLC, S-Corp, etc.) can impact your tax liability. Review your options annually to ensure you're using the most tax-efficient structure for your situation.</p>
        <p className="text-neutral-700 mb-4">S-Corporations can help reduce self-employment taxes, while LLCs offer flexibility and pass-through taxation. The right choice depends on your specific circumstances.</p>

        <div className="bg-secondary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Take Action Today</h3>
          <p className="text-neutral-700 mb-4">Don't wait until tax season to start planning. Contact our team for a comprehensive tax strategy review and start saving money immediately.</p>
          <Button variant="primary" size="lg" href="/contact">Schedule Your Tax Review</Button>
        </div>
      </>
    ),
  },
  {
    id: '2',
    title: 'QuickBooks Tips: How to Streamline Your Bookkeeping Process',
    date: 'April 28, 2023',
    author: 'Sarah Chen',
    imageSrc: 'https://images.pexels.com/photos/4475524/pexels-photo-4475524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: (
      <>
        <p className="text-lg text-neutral-700 mb-6">QuickBooks is a powerful tool for small business bookkeeping, but it can be overwhelming without the right approach. Here are expert tips to help you streamline your bookkeeping process, save time, and maintain accurate financial records that will help your business thrive.</p>
        
        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Automate Recurring Transactions</h2>
        <p className="text-neutral-700 mb-4">Set up recurring invoices and bills to save time and reduce manual entry errors. This feature is a game-changer for businesses with regular monthly expenses or recurring revenue.</p>
        <ul className="list-disc pl-6 mb-6 text-neutral-700">
          <li>Monthly rent payments</li>
          <li>Subscription services</li>
          <li>Regular client invoices</li>
          <li>Insurance premiums</li>
          <li>Utility bills</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Reconcile Accounts Regularly</h2>
        <p className="text-neutral-700 mb-4">Monthly reconciliations help you catch discrepancies early and keep your books accurate. This process ensures your QuickBooks data matches your bank statements exactly.</p>
        <p className="text-neutral-700 mb-4">Set aside time each month to reconcile all accounts. This habit will save you hours of work during tax season and help you maintain accurate financial records year-round.</p>

        <div className="bg-primary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Need Help with QuickBooks Setup?</h3>
          <p className="text-neutral-700 mb-4">Our QuickBooks experts can help you optimize your setup, train your team, and ensure you're getting the most out of your accounting software.</p>
          <Button variant="secondary" size="lg" href="/contact">Get QuickBooks Support</Button>
        </div>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Use Bank Feeds</h2>
        <p className="text-neutral-700 mb-4">Connect your bank accounts to QuickBooks for automatic transaction imports and easier categorization. This feature significantly reduces manual data entry and minimizes errors.</p>
        <p className="text-neutral-700 mb-4">Review imported transactions regularly and categorize them properly. This will give you real-time insights into your business's financial health.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Customize Reports</h2>
        <p className="text-neutral-700 mb-4">Take advantage of QuickBooks' customizable reports to gain insights into your business's financial health. Create reports that matter most to your business operations.</p>
        <p className="text-neutral-700 mb-4">Key reports to focus on include Profit & Loss, Cash Flow, Accounts Receivable Aging, and Budget vs. Actual reports.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Seek Professional Support</h2>
        <p className="text-neutral-700 mb-4">If you're unsure about certain features, consider working with a QuickBooks ProAdvisor for personalized guidance. Professional support can help you avoid costly mistakes and maximize your software investment.</p>
        <p className="text-neutral-700 mb-4">A QuickBooks ProAdvisor can help you with setup, training, troubleshooting, and advanced features that can transform your bookkeeping process.</p>

        <div className="bg-secondary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Transform Your Bookkeeping Today</h3>
          <p className="text-neutral-700 mb-4">Ready to streamline your bookkeeping process? Our team of QuickBooks experts is here to help you save time and improve accuracy.</p>
          <Button variant="primary" size="lg" href="/contact">Schedule QuickBooks Consultation</Button>
        </div>
      </>
    ),
  },
  {
    id: '3',
    title: 'Understanding Cash Flow: The Lifeblood of Your Business',
    date: 'April 10, 2023',
    author: 'David Wilson',
    imageSrc: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: (
      <>
        <p className="text-lg text-neutral-700 mb-6">Cash flow is the lifeblood of any business. Without proper cash flow management, even profitable companies can face financial difficulties. Understanding and managing your cash flow effectively is crucial for business survival and growth. Here's how to keep your business financially healthy and thriving.</p>
        
        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Monitor Cash Flow Regularly</h2>
        <p className="text-neutral-700 mb-4">Use cash flow statements and forecasts to stay on top of your business's financial position. Regular monitoring helps you identify potential problems before they become crises.</p>
        <p className="text-neutral-700 mb-4">Create a 13-week rolling cash flow forecast to anticipate future cash needs and plan accordingly. This tool is invaluable for making informed business decisions.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Speed Up Receivables</h2>
        <p className="text-neutral-700 mb-4">Encourage prompt payment from customers by offering incentives or using automated reminders. The faster you collect receivables, the better your cash position.</p>
        <ul className="list-disc pl-6 mb-6 text-neutral-700">
          <li>Offer early payment discounts (2% for payment within 10 days)</li>
          <li>Implement automated invoice reminders</li>
          <li>Require deposits for large orders</li>
          <li>Use electronic payment methods</li>
          <li>Set clear payment terms and enforce them</li>
        </ul>

        <div className="bg-primary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Struggling with Cash Flow?</h3>
          <p className="text-neutral-700 mb-4">Our financial experts can help you analyze your cash flow patterns and implement strategies to improve your business's financial health.</p>
          <Button variant="secondary" size="lg" href="/contact">Get Cash Flow Analysis</Button>
        </div>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Manage Payables Strategically</h2>
        <p className="text-neutral-700 mb-4">Negotiate favorable terms with suppliers and avoid late fees by paying bills on time. Strategic payables management can significantly improve your cash flow.</p>
        <p className="text-neutral-700 mb-4">Take advantage of early payment discounts when possible, but don't pay too early if you need the cash for other critical expenses.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Build a Cash Reserve</h2>
        <p className="text-neutral-700 mb-4">Set aside funds for emergencies or unexpected expenses to keep your business resilient. A healthy cash reserve provides peace of mind and financial stability.</p>
        <p className="text-neutral-700 mb-4">Aim to maintain 3-6 months of operating expenses in your cash reserve. This buffer will help you weather unexpected challenges and take advantage of opportunities.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Review Expenses Regularly</h2>
        <p className="text-neutral-700 mb-4">Identify areas where you can cut costs without sacrificing quality or growth. Regular expense reviews help optimize your cash flow and improve profitability.</p>
        <p className="text-neutral-700 mb-4">Look for subscription services you no longer use, negotiate better rates with suppliers, and eliminate unnecessary expenses that don't contribute to your bottom line.</p>

        <div className="bg-secondary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Optimize Your Cash Flow Today</h3>
          <p className="text-neutral-700 mb-4">Ready to take control of your cash flow? Our team can help you implement proven strategies to improve your business's financial health.</p>
          <Button variant="primary" size="lg" href="/contact">Start Cash Flow Optimization</Button>
        </div>
      </>
    ),
  },
  {
    id: '4',
    title: 'Payroll Compliance: Avoiding Common Mistakes and Penalties',
    date: 'March 22, 2023',
    author: 'Jennifer Thompson',
    imageSrc: 'https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: (
      <>
        <p className="text-lg text-neutral-700 mb-6">Payroll compliance is essential for every business. Mistakes can lead to costly penalties and unhappy employees. Understanding payroll regulations and implementing proper processes can save your business thousands of dollars and protect you from legal issues. Here's how to stay compliant and avoid common payroll pitfalls.</p>
        
        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Classify Employees Correctly</h2>
        <p className="text-neutral-700 mb-4">Ensure you're distinguishing between employees and independent contractors to avoid misclassification penalties. This is one of the most common and costly payroll mistakes.</p>
        <p className="text-neutral-700 mb-4">The IRS uses a 20-factor test to determine worker classification. When in doubt, consult with a payroll expert to ensure proper classification and avoid costly penalties.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Stay Up-to-Date on Tax Laws</h2>
        <p className="text-neutral-700 mb-4">Payroll tax regulations change frequently. Stay informed to ensure accurate withholdings and filings. Federal, state, and local tax laws can all impact your payroll obligations.</p>
        <p className="text-neutral-700 mb-4">Subscribe to payroll newsletters, attend webinars, and work with professionals who stay current on changing regulations to protect your business.</p>

        <div className="bg-primary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Need Payroll Compliance Help?</h3>
          <p className="text-neutral-700 mb-4">Our payroll experts can help you navigate complex regulations and ensure your business stays compliant while avoiding costly penalties.</p>
          <Button variant="secondary" size="lg" href="/contact">Get Payroll Compliance Review</Button>
        </div>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Maintain Accurate Records</h2>
        <p className="text-neutral-700 mb-4">Keep detailed payroll records for each employee, including hours worked, wages paid, and tax withholdings. Proper record-keeping is essential for compliance and audits.</p>
        <p className="text-neutral-700 mb-4">Maintain records for at least 4 years and ensure they're easily accessible for potential audits or employee inquiries.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. File and Pay Taxes on Time</h2>
        <p className="text-neutral-700 mb-4">Missing deadlines can result in fines. Set reminders for all payroll tax due dates and consider using automated systems to ensure timely payments.</p>
        <p className="text-neutral-700 mb-4">Late payment penalties can be substantial, so it's worth investing in systems and processes that ensure timely compliance.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Use Payroll Software</h2>
        <p className="text-neutral-700 mb-4">Automate calculations and filings with reliable payroll software to reduce errors and save time. Modern payroll systems handle complex calculations and ensure compliance.</p>
        <p className="text-neutral-700 mb-4">Choose software that automatically updates tax tables and stays current with changing regulations to minimize compliance risks.</p>

        <div className="bg-secondary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Ensure Payroll Compliance Today</h3>
          <p className="text-neutral-700 mb-4">Don't risk costly penalties. Let our payroll experts help you implement compliant processes and protect your business.</p>
          <Button variant="primary" size="lg" href="/contact">Schedule Payroll Review</Button>
        </div>
      </>
    ),
  },
  {
    id: '5',
    title: 'Year-End Financial Checklist for Business Owners',
    date: 'March 5, 2023',
    author: 'Michael Rodriguez',
    imageSrc: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: (
      <>
        <p className="text-lg text-neutral-700 mb-6">As the year draws to a close, it's crucial for business owners to ensure their financial records are accurate and ready for tax season. This comprehensive checklist will help you wrap up your year with confidence and set the stage for a successful new year. Follow these steps to ensure your business is financially prepared for the year ahead.</p>
        
        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Reconcile All Accounts</h2>
        <p className="text-neutral-700 mb-4">Make sure your bank, credit card, and loan accounts are fully reconciled. This helps catch errors and ensures your records match your statements exactly.</p>
        <p className="text-neutral-700 mb-4">Reconciliation is the foundation of accurate financial reporting. Any discrepancies should be investigated and resolved before year-end closing.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Review Outstanding Invoices & Bills</h2>
        <p className="text-neutral-700 mb-4">Follow up on unpaid invoices and settle outstanding bills to improve your cash flow and close the year strong. This also helps with accurate financial reporting.</p>
        <p className="text-neutral-700 mb-4">Consider offering early payment discounts to encourage customers to pay before year-end, improving your cash position for the new year.</p>

        <div className="bg-primary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Need Year-End Financial Help?</h3>
          <p className="text-neutral-700 mb-4">Our financial experts can help you complete your year-end checklist and ensure your business is ready for tax season and the new year.</p>
          <Button variant="secondary" size="lg" href="/contact">Get Year-End Support</Button>
        </div>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Update Fixed Asset & Inventory Records</h2>
        <p className="text-neutral-700 mb-4">Take inventory and update your asset records for accurate depreciation and asset management. This ensures proper tax treatment and business valuation.</p>
        <p className="text-neutral-700 mb-4">Conduct a physical inventory count and compare it to your records. Any discrepancies should be investigated and adjusted accordingly.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Prepare Year-End Financial Statements</h2>
        <p className="text-neutral-700 mb-4">Generate and review your balance sheet, income statement, and cash flow statement to assess your business's financial health and plan for the future.</p>
        <p className="text-neutral-700 mb-4">These statements provide valuable insights into your business performance and help identify areas for improvement in the coming year.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Meet with Your Accountant</h2>
        <p className="text-neutral-700 mb-4">Schedule a year-end review with your accountant to discuss tax planning opportunities and ensure compliance with all regulations.</p>
        <p className="text-neutral-700 mb-4">Early planning can help minimize your tax burden and ensure you're taking advantage of all available deductions and credits.</p>

        <div className="bg-secondary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Complete Your Year-End Checklist</h3>
          <p className="text-neutral-700 mb-4">Don't let year-end tasks overwhelm you. Our team can help you complete your financial checklist and start the new year strong.</p>
          <Button variant="primary" size="lg" href="/contact">Start Year-End Planning</Button>
        </div>
      </>
    ),
  },
  {
    id: '6',
    title: 'The Benefits of Outsourcing Your Financial Operations',
    date: 'February 18, 2023',
    author: 'Sarah Chen',
    imageSrc: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: (
      <>
        <p className="text-lg text-neutral-700 mb-6">Outsourcing financial operations like bookkeeping, payroll, and reporting can save your business time, money, and stress. More businesses are choosing to outsource these critical tasks to focus on what they do best. Here's why outsourcing your financial operations might be the smartest business decision you make this year.</p>
        
        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Cost Savings</h2>
        <p className="text-neutral-700 mb-4">Reduce overhead by eliminating the need for in-house staff and only paying for the services you need. Outsourcing often costs 30-50% less than hiring full-time employees.</p>
        <p className="text-neutral-700 mb-4">You avoid costs like salaries, benefits, training, office space, and equipment. Plus, you only pay for the work that's actually done.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Access to Expertise</h2>
        <p className="text-neutral-700 mb-4">Work with experienced professionals who stay up-to-date on the latest regulations and best practices. You get access to specialized knowledge without the cost of training.</p>
        <p className="text-neutral-700 mb-4">Financial service providers invest in ongoing education and technology, ensuring you always have access to current best practices and compliance requirements.</p>

        <div className="bg-primary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Ready to Outsource Your Finances?</h3>
          <p className="text-neutral-700 mb-4">Discover how outsourcing your financial operations can transform your business. Our experts are ready to help you get started.</p>
          <Button variant="secondary" size="lg" href="/contact">Explore Outsourcing Options</Button>
        </div>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Improved Accuracy</h2>
        <p className="text-neutral-700 mb-4">Minimize errors and ensure your financial records are always accurate and compliant. Professional service providers have systems and processes designed to prevent mistakes.</p>
        <p className="text-neutral-700 mb-4">Multiple layers of review and quality control ensure your financial data is reliable and ready for decision-making, tax preparation, and audits.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. More Time to Focus on Growth</h2>
        <p className="text-neutral-700 mb-4">Free up your time to focus on running and growing your business, rather than managing day-to-day financial tasks. This is often the most valuable benefit of outsourcing.</p>
        <p className="text-neutral-700 mb-4">Time spent on financial tasks is time not spent on sales, marketing, product development, or customer service - activities that directly impact your bottom line.</p>

        <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Scalability</h2>
        <p className="text-neutral-700 mb-4">Easily scale your financial operations as your business grows, without the hassle of hiring and training new staff. Outsourced services can adapt to your changing needs.</p>
        <p className="text-neutral-700 mb-4">Whether you're experiencing rapid growth or seasonal fluctuations, outsourced financial services can adjust to meet your current requirements.</p>

        <div className="bg-secondary-50 p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-2">Transform Your Business Today</h3>
          <p className="text-neutral-700 mb-4">Ready to experience the benefits of outsourcing? Let our team handle your financial operations so you can focus on what matters most.</p>
          <Button variant="primary" size="lg" href="/contact">Start Your Outsourcing Journey</Button>
        </div>
      </>
    ),
  },
];

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
        <Button variant="primary" href="/blog">Back to Blog</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link to="/blog" className="text-primary-600 hover:underline mb-6 inline-block">&larr; Back to Blog</Link>
      <h1 className="text-4xl font-bold font-heading text-primary-800 mb-4">{post.title}</h1>
      <div className="flex items-center text-neutral-500 text-sm mb-6">
        <span>{post.date}</span>
        <span className="mx-2">|</span>
        <span>By {post.author}</span>
      </div>
      <img src={post.imageSrc} alt={post.title} className="rounded-lg shadow-md mb-8 w-full h-72 object-cover" />
      <div className="prose prose-lg max-w-none mb-12">{post.content}</div>
      
      {/* Bottom Navigation */}
      <div className="flex justify-between items-center mb-8">
        <Link to="/blog" className="text-primary-600 hover:underline inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>
        <div className="flex space-x-4">
          <Button variant="outline" size="sm" href="/contact">
            Contact Us
          </Button>
          <Button variant="secondary" size="sm" href="/services">
            Our Services
          </Button>
        </div>
      </div>
      
      <div className="bg-primary-50 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-primary-800 mb-2">Ready to take the next step?</h2>
        <p className="mb-4 text-neutral-700">Contact us today for a personalized consultation and discover how we can help your business thrive.</p>
        <Button variant="secondary" size="lg" href="/contact">Contact Us</Button>
      </div>
    </div>
  );
};

export default BlogDetail;
