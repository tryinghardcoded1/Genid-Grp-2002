import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

export default function MortgageCalculator() {
  const [homeValue, setHomeValue] = useState(850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTaxYearly, setPropertyTaxYearly] = useState(12000);
  const [homeInsuranceYearly, setHomeInsuranceYearly] = useState(1500);

  const downPaymentAmount = (homeValue * downPaymentPercent) / 100;
  const loanAmount = homeValue - downPaymentAmount;

  // Monthly Calculations
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  const principalAndInterest = useMemo(() => {
    if (monthlyInterestRate === 0) return loanAmount / numberOfPayments;
    const factor = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    return (loanAmount * monthlyInterestRate * factor) / (factor - 1);
  }, [loanAmount, monthlyInterestRate, numberOfPayments]);

  const monthlyPropertyTax = propertyTaxYearly / 12;
  const monthlyHomeInsurance = homeInsuranceYearly / 12;
  const totalMonthlyPayment = principalAndInterest + monthlyPropertyTax + monthlyHomeInsurance;

  const chartData = [
    { name: 'Principal & Interest', value: principalAndInterest, color: '#D4AF37' }, // Gold
    { name: 'Property Tax', value: monthlyPropertyTax, color: '#2D2D2D' }, // Charcoal
    { name: 'Home Insurance', value: monthlyHomeInsurance, color: '#9CA3AF' }, // Gray
  ];

  return (
    <>
      <Helmet>
        <title>New Jersey Mortgage Calculator | The Genid Group</title>
        <meta name="description" content="Calculate your monthly mortgage payments in NJ, including interest rates, down payments, and estimated property taxes." />
      </Helmet>

      <div className="bg-[#0A0A0A] py-24 min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-[#F5F5F5] mb-4">Mortgage Calculator</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Estimate your monthly payment with live rates and New Jersey property tax estimates.
            </p>
          </div>

          <div className="bg-charcoal-900 border border-charcoal-800 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            {/* Input Controls */}
            <div className="lg:w-1/2 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-charcoal-800">
              <div className="space-y-8">
                {/* Home Price */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5]">Home Price</label>
                    <span className="text-lg font-serif font-bold text-gold-500">${homeValue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100000" 
                    max="5000000" 
                    step="10000"
                    value={homeValue} 
                    onChange={(e) => setHomeValue(Number(e.target.value))}
                    className="w-full h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>$100k</span>
                    <span>$5M+</span>
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5]">Down Payment ({downPaymentPercent}%)</label>
                    <span className="text-lg font-serif font-bold text-gold-500">${downPaymentAmount.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="1"
                    value={downPaymentPercent} 
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                </div>

                {/* Interest Rate & Loan Term */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5] block mb-2">Interest Rate (%)</label>
                    <input 
                      type="number" 
                      step="0.1"
                      value={interestRate} 
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full border border-charcoal-800 bg-charcoal-950 text-[#F5F5F5] rounded px-4 py-3 text-lg font-bold outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5] block mb-2">Loan Term</label>
                    <select 
                      value={loanTerm} 
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full border border-charcoal-800 bg-charcoal-950 text-[#F5F5F5] rounded px-4 py-3 text-lg font-bold outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value={30}>30 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={15}>15 Years</option>
                      <option value={10}>10 Years</option>
                    </select>
                  </div>
                </div>

                {/* Taxes and Insurance */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-charcoal-800">
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5] block mb-2">Yearly Taxes</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input 
                        type="number" 
                        value={propertyTaxYearly} 
                        onChange={(e) => setPropertyTaxYearly(Number(e.target.value))}
                        className="w-full border border-charcoal-800 bg-charcoal-950 text-[#F5F5F5] rounded pl-8 pr-4 py-3 text-lg font-bold outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-[#F5F5F5] block mb-2">Yearly Insurance</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input 
                        type="number" 
                        value={homeInsuranceYearly} 
                        onChange={(e) => setHomeInsuranceYearly(Number(e.target.value))}
                        className="w-full border border-charcoal-800 bg-charcoal-950 text-[#F5F5F5] rounded pl-8 pr-4 py-3 text-lg font-bold outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Visual Output */}
            <div className="lg:w-1/2 bg-charcoal-950 text-white p-8 lg:p-12 flex flex-col">
              <h3 className="text-center uppercase tracking-widest font-bold text-gray-400 mb-2">Estimated Monthly Payment</h3>
              <p className="text-center text-5xl font-serif text-gold-500 font-bold mb-8">
                ${Math.round(totalMonthlyPayment).toLocaleString()}
              </p>

              <div className="flex-grow flex items-center justify-center min-h-[250px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                      formatter={(value: number) => `$${Math.round(value).toLocaleString()}`}
                      contentStyle={{ backgroundColor: '#1A1A1A', border: 'none', borderRadius: '4px', color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4 mt-8">
                {chartData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: item.color }}></span>
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="font-bold">${Math.round(item.value).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full border border-gold-500 hover:bg-gold-500 hover:text-black text-gold-500 font-bold py-4 px-8 rounded transition-colors uppercase tracking-widest text-[11px] shadow-lg shadow-gold-500/10">
                Get Pre-Approved For This Rate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
