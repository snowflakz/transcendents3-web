import React, { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { CALENDLY_CONSULTATION_URL } from '../constants';
import { Calculator, Printer, RotateCcw } from 'lucide-react';

const formatCurrency = (val: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(val);

const parseNum = (s: string) => Math.max(0, parseFloat(s.replace(/[^0-9.-]/g, '')) || 0);

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

  const reset = () => {
    setRevenue('');
    setCogs('');
    setOperatingExpenses('');
    setResult(null);
  };

  const handlePrint = () => {
    window.print();
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
        <div className="no-print">
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
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="primary" size="lg" className="flex-1" onClick={calculate}>
                      <Calculator className="inline-block w-5 h-5 mr-2" />
                      Calculate
                    </Button>
                    <Button variant="outline" size="lg" onClick={reset} className="flex-1">
                      <RotateCcw className="inline-block w-5 h-5 mr-2" />
                      Reset
                    </Button>
                  </div>
                </div>

                {result && (
                  <div className="mt-8 pt-8 border-t border-neutral-200">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <h3 className="text-lg font-semibold text-primary-800 flex-1">Results</h3>
                      <Button variant="secondary" size="md" onClick={handlePrint} className="print:hidden">
                        <Printer className="inline-block w-5 h-5 mr-2" />
                        Print
                      </Button>
                    </div>
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
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-800 leading-relaxed">
                        <strong>Disclaimer:</strong> This calculator provides an estimated calculation based on the values you entered. It is intended for informational and educational purposes only. Results do not constitute professional financial, accounting, or tax advice. For accurate interpretation of your personal or organizational finances, please consult a qualified professional accountant, bookkeeper, or financial advisor.
                      </p>
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

        {/* Print-only A4 layout - shown when printing */}
        {result && (
          <div className="hidden print-only bg-white p-8" style={{ minHeight: '297mm', width: '210mm', margin: '0 auto' }}>
            <img src="/other%20logo.png" alt="Transcendents3" className="h-14 mb-8" />
            <h1 className="text-2xl font-bold text-primary-800 mb-6">Profit & Margin Calculator — Results</h1>
            <div className="space-y-2 mb-8">
              <p><strong>Total Revenue:</strong> {formatCurrency(parseNum(revenue))}</p>
              <p><strong>Cost of Goods Sold:</strong> {formatCurrency(parseNum(cogs))}</p>
              <p><strong>Operating Expenses:</strong> {formatCurrency(parseNum(operatingExpenses))}</p>
            </div>
            <h2 className="text-lg font-semibold text-primary-800 mb-4">Results</h2>
            <table className="w-full border-collapse border border-neutral-300">
              <tbody>
                <tr className="border-b border-neutral-300"><td className="py-2">Gross Profit</td><td className="text-right font-bold">{formatCurrency(result.grossProfit)}</td></tr>
                <tr className="border-b border-neutral-300"><td className="py-2">Gross Margin</td><td className="text-right font-bold">{result.grossMargin.toFixed(1)}%</td></tr>
                <tr className="border-b border-neutral-300"><td className="py-2">Operating Income</td><td className="text-right font-bold">{formatCurrency(result.operatingIncome)}</td></tr>
                <tr><td className="py-2">Net Profit Margin</td><td className="text-right font-bold text-secondary-600">{result.netMargin.toFixed(1)}%</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-neutral-600 mt-8 leading-relaxed">
              Disclaimer: This calculator provides an estimated calculation based on the values entered. It is intended for informational purposes only. For accurate interpretation of your personal or organizational finances, please consult a qualified professional accountant, bookkeeper, or financial advisor.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FinancialCalculator;
