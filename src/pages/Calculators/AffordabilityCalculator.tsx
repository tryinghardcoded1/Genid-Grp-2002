import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(150000);
  const [monthlyDebts, setMonthlyDebts] = useState(1000);
  const [downPayment, setDownPayment] = useState(100000);
  const [comfortLevel, setComfortLevel] = useState<'conservative' | 'moderate' | 'aggressive'>('moderate');

  // Basic logic for affordability
  const maxDtiMap = {
    conservative: 0.28,
    moderate: 0.36,
    aggressive: 0.43
  };

  const maxDti = maxDtiMap[comfortLevel];
  const monthlyIncome = annualIncome / 12;

  // Maximum monthly payment allowed by DTI (Principal + Interest + Taxes + Insurance)
  const maxMonthlyPayment = (monthlyIncome * maxDti) - monthlyDebts;

  // Simplified reverse calculation assuming 6.5% interest rate, 30 years, and roughly 2.5% of value for taxes+insurance yearly
  const interestRate = 0.065;
  const monthlyRate = interestRate / 12;
  const numPayments = 360; // 30 years
  
  const estimatedAffordability = useMemo(() => {
    if (maxMonthlyPayment <= 0) return 0;

    // We want: maxMonthlyPayment = P*monthlyRate*(1+monthlyRate)^n / ((1+monthlyRate)^n - 1) + P*(0.025/12)
    // Factoring out P (Loan Amount):
    // maxMonthlyPayment = P * [ (monthlyRate*(1+monthlyRate)^n / ((1+monthlyRate)^n - 1)) + 0.0208 ]
    const mortgageFactor = (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const taxInsuranceFactor = 0.025 / 12;

    const maxLoanAmount = maxMonthlyPayment / (mortgageFactor + taxInsuranceFactor);
    return Math.max(0, maxLoanAmount + downPayment);
  }, [maxMonthlyPayment, downPayment]);

  return (
    <>
      <Helmet>
        <title>Affordability Calculator | The Genid Group</title>
        <meta name="description" content="Find out how much house you can comfortably afford in New Jersey based on your income and debts." />
      </Helmet>

      <div className="bg-[#0A0A0A] py-24 min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-[#F5F5F5] mb-4">Affordability Calculator</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              How much home can you actually afford? Let's look at your lifestyle and income to find your comfortable price range.
            </p>
          </div>

          <div className="bg-charcoal-950 border border-b-0 border-charcoal-800 text-white rounded-t-xl p-8 lg:p-12 text-center relative overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 0, transparent 1px)', backgroundSize: '24px 24px' }}></div>
             <div className="relative z-10">
                <h2 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-4">You can comfortably afford a home up to</h2>
                <p className="text-5xl md:text-7xl font-serif font-bold text-gold-500 mb-6">
                  ${Math.round(estimatedAffordability).toLocaleString()}
                </p>
                {estimatedAffordability > 0 && (
                  <p className="text-gray-300">
                    Assuming a ${Math.round(downPayment).toLocaleString()} down payment and {comfortLevel} debt-to-income ratio.
                  </p>
                )}
             </div>
          </div>

          <div className="bg-charcoal-900 rounded-b-xl border border-charcoal-800 shadow-2xl p-8 lg:p-12 mb-16">
            <div className="space-y-8">
              
              {/* Annual Income */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5]">Gross Annual Income</label>
                  <span className="text-lg font-serif font-bold text-gold-500">${annualIncome.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="30000" 
                  max="1000000" 
                  step="5000"
                  value={annualIncome} 
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
              </div>

              {/* Monthly Debts */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5]">Monthly Debts (Car, Cards, Loans)</label>
                  <span className="text-lg font-serif font-bold text-gold-500">${monthlyDebts.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="10000" 
                  step="100"
                  value={monthlyDebts} 
                  onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                  className="w-full h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
              </div>

              {/* Down Payment Total */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5]">Available Down Payment</label>
                  <span className="text-lg font-serif font-bold text-gold-500">${downPayment.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="500000" 
                  step="5000"
                  value={downPayment} 
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
              </div>

              <hr className="border-charcoal-800" />

              {/* Comfort Slider */}
              <div>
                <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5] block mb-4 text-center">Your Comfort Zone</label>
                <div className="flex justify-between gap-4">
                  <button 
                    onClick={() => setComfortLevel('conservative')}
                    className={`flex-1 py-4 px-2 rounded font-bold uppercase tracking-wider text-xs border transition-colors ${comfortLevel === 'conservative' ? 'bg-charcoal-950 border-charcoal-800 text-gold-500' : 'bg-transparent border-charcoal-800 text-gray-500 hover:border-gold-500 hover:text-gold-500'}`}
                  >
                    Conservative
                  </button>
                  <button 
                    onClick={() => setComfortLevel('moderate')}
                    className={`flex-1 py-4 px-2 rounded font-bold uppercase tracking-wider text-xs border transition-colors ${comfortLevel === 'moderate' ? 'bg-gold-500 border-gold-500 text-black' : 'bg-transparent border-charcoal-800 text-gray-500 hover:border-gold-500 hover:text-gold-500'}`}
                  >
                    Moderate
                  </button>
                  <button 
                    onClick={() => setComfortLevel('aggressive')}
                    className={`flex-1 py-4 px-2 rounded font-bold uppercase tracking-wider text-xs border transition-colors ${comfortLevel === 'aggressive' ? 'bg-red-900/50 border-red-500 text-red-500' : 'bg-transparent border-charcoal-800 text-gray-500 hover:border-red-500 hover:text-red-500'}`}
                  >
                    Aggressive
                  </button>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 font-light">
                  {comfortLevel === 'conservative' && 'Keeps plenty of room in your budget for travel and savings.'}
                  {comfortLevel === 'moderate' && 'The standard recommendation for most home buyers.'}
                  {comfortLevel === 'aggressive' && 'Maximizes your buying power. Less budget flexibility.'}
                </p>
              </div>

            </div>
          </div>

          {/* Action Area */}
          <div className="text-center">
            <h3 className="text-2xl font-serif text-[#F5F5F5] mb-6">Ready to see matches in this range?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-8 rounded flex items-center justify-center transition-colors uppercase tracking-widest text-[11px]">
                View Homes Up To ${Math.round(estimatedAffordability).toLocaleString()}
              </button>
              <button className="bg-transparent border border-gold-500 text-gold-500 font-bold py-4 px-8 rounded flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors uppercase tracking-widest text-[11px]">
                Connect With an Agent
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
