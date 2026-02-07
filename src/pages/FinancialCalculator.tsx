import React, { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL } from '../constants';
import { Calculator } from 'lucide-react';

const FinancialCalculator: React.FC = () => {
  const [revenue, setRevenue] = useState('');
  const [cogs, setCogs] = useState('');
  const [operatingExpenses, setOperatingExpenses] = useState('');
  const [result, setResult] = useState<{
    grossProfit: number;
    grossMargin: number;
    operatingIncome: number;
    netMargin: number;
  } | null>(null);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(val);

  const parseNum = (s: string) => Math.max(0, parseFloat(s.replace(/[^0-9.-]/g, '')) || 0);

  const calculate = () => {
    const rev = parseNum(revenue);
    const cost = parseNum(cogs);
    const opEx = parseNum(operatingExpenses);
    const grossProfit = rev - cost;
    const grossMargin = rev > 0 ? (grossProfit / rev) * 100 : 0;
    const operatingIncome = grossProfit - opEx;
    const netMargin = rev > 0 ? (operatingIncome / rev) * 100 : 0;
    setResult({ grossProfit, grossMargin, operatingIncome, netMargin });
  };

  const inputClass = 'w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500';

  return (
    <>
      <SEO
        title="Financial Calculator | Texas & USA Book Keeper | Transcendents3"
        description="Free business financial calculator. Calculate gross profit, margins, and operating income. Texas and USA compliant. Expert book keeper tools for small business."
        keywords="bookkeeper Texas, financial calculator, profit margin calculator, gross profit, business calculator, book keeper USA"
      />
      <div className="min-h-screen bg-neutral-50">
        <section className="bg-primary-800 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                Business Profit & Margin Calculator
              </h1>
              <p className="text-xl text-neutral-200">
                Calculate gross profit, margins, and operating income. Built for Texas and USA small business standards.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Total Revenue (Annual or Monthly)</label>
                    <input
                      type="text"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      placeholder="e.g. 50000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Cost of Goods Sold (COGS)</label>
                    <input
                      type="text"
                      value={cogs}
                      onChange={(e) => setCogs(e.target.value)}
                      placeholder="e.g. 20000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Operating Expenses</label>
                    <input
                      type="text"
                      value={operatingExpenses}
                      onChange={(e) => setOperatingExpenses(e.target.value)}
                      placeholder="e.g. 15000"
                      className={inputClass}
                    />
                  </div>
                  <Button variant="primary" size="lg" fullWidth onClick={calculate}>
                    <Calculator className="inline-block w-5 h-5 mr-2" />
                    Calculate
                  </Button>
                </div>

                {result && (
                  <div className="mt-8 pt-8 border-t border-neutral-200">
                    <h3 className="text-lg font-semibold text-primary-800 mb-4">Results</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                        <span className="text-neutral-700">Gross Profit</span>
                        <span className="font-bold text-primary-800">{formatCurrency(result.grossProfit)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                        <span className="text-neutral-700">Gross Margin</span>
                        <span className="font-bold text-primary-800">{result.grossMargin.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                        <span className="text-neutral-700">Operating Income</span>
                        <span className="font-bold text-primary-800">{formatCurrency(result.operatingIncome)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                        <span className="text-neutral-700">Net Profit Margin</span>
                        <span className="font-bold text-secondary-600">{result.netMargin.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-12 text-center">
                <p className="text-neutral-600 mb-4">Need help interpreting your numbers? Our Texas book keepers can help.</p>
                <Button variant="secondary" size="lg" href={CALENDLY_CONSULTATION_URL} external={true}>
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinancialCalculator;
