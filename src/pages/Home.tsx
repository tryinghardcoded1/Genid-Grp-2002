import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, MapPin, Home as HomeIcon, Calculator, TrendingUp, Star, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GENID GROUP SAMPLE SITE</title>
        <meta name="description" content="The #1 Ranked Team for Realty One Group Legend. Expert guidance for Northern NJ buyers, sellers, and investors. Browse listings and virtual tours." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Video / Image Fallback */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-charcoal-950/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
            alt="Luxury Home Exterior" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              Premium Real Estate in <br/>
              <span className="text-gold-500 italic">Northern New Jersey</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
              The #1 Ranked Team for Realty One Group Legend. We don't just find houses; we build futures.
            </p>
          </motion.div>

          {/* Virtual House Tour CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link 
              to="/live-house-tour"
              className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-10 rounded flex items-center justify-center transition-all uppercase tracking-widest text-[13px] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-1"
            >
              <Eye className="w-5 h-5 mr-3" />
              Virtual House Tour
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Financial Suite (Quick Action Cards) */}
      <section className="relative z-30 -mt-20 px-4 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/live-house-tour" className="group bg-charcoal-900 p-8 rounded shadow-xl border border-charcoal-800 hover:border-gold-500 transition-all hover:bg-black">
            <div className="w-12 h-12 bg-black rounded flex items-center justify-center mb-6 border border-charcoal-800 group-hover:border-gold-500 transition-colors">
              <Eye className="w-6 h-6 text-gold-500" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#F5F5F5]">Virtual House Tour</h3>
            <p className="text-gray-400 mb-6 font-light">Experience real estate in 360°. Walk through our premier listings virtually.</p>
            <span className="text-gold-500 font-semibold tracking-wider text-sm flex items-center uppercase text-[10px]">
              Start Tour <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link to="/buy/mortgage-calculator" className="group bg-charcoal-900 p-8 rounded shadow-xl border border-charcoal-800 hover:border-gold-500 transition-all hover:bg-black">
            <div className="w-12 h-12 bg-black rounded flex items-center justify-center mb-6 border border-charcoal-800 group-hover:border-gold-500 transition-colors">
              <Calculator className="w-6 h-6 text-gold-500" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#F5F5F5]">Mortgage Calculator</h3>
            <p className="text-gray-400 mb-6 font-light">Estimate your monthly payment with live New Jersey rates and taxes.</p>
            <span className="text-gold-500 font-semibold tracking-wider text-sm flex items-center uppercase text-[10px]">
              Calculate Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link to="/buy/affordability-calculator" className="group bg-charcoal-900 p-8 rounded shadow-xl border border-charcoal-800 hover:border-gold-500 transition-all hover:bg-black">
            <div className="w-12 h-12 bg-black rounded flex items-center justify-center mb-6 border border-charcoal-800 group-hover:border-gold-500 transition-colors">
              <TrendingUp className="w-6 h-6 text-gold-500" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#F5F5F5]">Affordability Tool</h3>
            <p className="text-gray-400 mb-6 font-light">Find out exactly how much house your income can comfortably buy.</p>
            <span className="text-gold-500 font-semibold tracking-wider text-sm flex items-center uppercase text-[10px]">
              Start Assessment <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* Curated Listings Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F5] mb-4">Curated Collection</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dummy Listing 1 */}
            <div className="bg-charcoal-900 border border-charcoal-800 group cursor-pointer overflow-hidden shadow-lg hover:border-gold-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden border-b border-charcoal-800">
                <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-charcoal-900 shadow">Condo for sale</div>
                <img src="https://ap.rdcpix.com/6ad15712d0bab259c7e3b3b66dfa6b31l-m1458518409rd-w1280_h960.webp" alt="761 Avenue A Apt B2" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <p className="text-2xl font-serif text-gold-500 mb-2">$179,000</p>
                <h3 className="text-lg font-bold text-[#F5F5F5] mb-1">761 Avenue A Apt B2</h3>
                <p className="text-gray-400 text-sm mb-4">Bayonne, NJ 07002</p>
                <div className="flex border-t border-charcoal-800 pt-4 text-sm text-gray-400">
                  <div className="flex-1"><strong>3</strong> Beds</div>
                  <div className="flex-1 border-l border-charcoal-800 pl-4"><strong>1</strong> Baths</div>
                  <div className="flex-1 border-l border-charcoal-800 pl-4"><strong>1,180</strong> Sq.Ft.</div>
                </div>
              </div>
            </div>

            {/* Dummy Listing 2 */}
            <div className="bg-charcoal-900 border border-charcoal-800 group cursor-pointer overflow-hidden shadow-lg hover:border-gold-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden border-b border-charcoal-800">
                <div className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow border border-charcoal-800">Luxury</div>
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" alt="Luxury home in Paramus NJ" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <p className="text-2xl font-serif text-gold-500 mb-2">$2,850,000</p>
                <h3 className="text-lg font-bold text-[#F5F5F5] mb-1">88 Alpine Dr</h3>
                <p className="text-gray-400 text-sm mb-4">Paramus, NJ 07652</p>
                <div className="flex border-t border-charcoal-800 pt-4 text-sm text-gray-400">
                  <div className="flex-1"><strong>6</strong> Beds</div>
                  <div className="flex-1 border-l border-charcoal-800 pl-4"><strong>5</strong> Baths</div>
                  <div className="flex-1 border-l border-charcoal-800 pl-4"><strong>6,500</strong> Sq.Ft.</div>
                </div>
              </div>
            </div>

            {/* Dummy Listing 3 */}
            <div className="bg-charcoal-900 border border-charcoal-800 group cursor-pointer overflow-hidden shadow-lg hover:border-gold-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden border-b border-charcoal-800">
                <div className="absolute top-4 left-4 z-10 bg-gold-500 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider shadow">Open House</div>
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="House for sale in Nutley NJ" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <p className="text-2xl font-serif text-gold-500 mb-2">$850,000</p>
                <h3 className="text-lg font-bold text-[#F5F5F5] mb-1">45 Maple Ave</h3>
                <p className="text-gray-400 text-sm mb-4">Nutley, NJ 07110</p>
                <div className="flex border-t border-charcoal-800 pt-4 text-sm text-gray-400">
                  <div className="flex-1"><strong>3</strong> Beds</div>
                  <div className="flex-1 border-l border-charcoal-800 pl-4"><strong>2</strong> Baths</div>
                  <div className="flex-1 border-l border-charcoal-800 pl-4"><strong>2,100</strong> Sq.Ft.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/buy/all-listings" className="inline-block border border-gold-500 text-gold-500 font-bold uppercase tracking-widest px-8 py-3 text-xs hover:bg-gold-500 hover:text-black transition-colors">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Section (Stats) */}
      <section className="bg-charcoal-950 py-20 text-white relative">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 0, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-charcoal-800">
            <div className="pt-6 md:pt-0">
              <h4 className="text-5xl lg:text-6xl font-serif text-gold-500 mb-2">$500M+</h4>
              <p className="uppercase tracking-widest font-semibold text-gray-300 text-sm">Total Sales Volume</p>
            </div>
            <div className="pt-6 md:pt-0">
              <h4 className="text-5xl lg:text-6xl font-serif text-gold-500 mb-2">1,200+</h4>
              <p className="uppercase tracking-widest font-semibold text-gray-300 text-sm">Families Served</p>
            </div>
            <div className="pt-6 md:pt-0 flex flex-col items-center">
              <div className="flex text-gold-500 mb-4 mt-2">
                <Star className="fill-current w-8 h-8" />
                <Star className="fill-current w-8 h-8" />
                <Star className="fill-current w-8 h-8" />
                <Star className="fill-current w-8 h-8" />
                <Star className="fill-current w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-white mb-1">5.0 Google Rating</h4>
              <p className="uppercase tracking-widest font-semibold text-gray-300 text-sm">Based on 500+ Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section (Local Authority) */}
      <section className="py-24 bg-[#0A0A0A] border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F5] mb-4">Explore Northern NJ</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">Expertise in every zip code. Discover the neighborhoods we dominate.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: 'Montclair', image: 'https://www.daisylimo.com/blog/wp-content/uploads/2023/02/image.png' },
              { name: 'Jersey City', image: 'https://i.ytimg.com/vi/ZmQKTHBjsBM/maxresdefault.jpg' },
              { name: 'Paramus', image: 'https://www.paramusborough.gov/ImageRepository/Document?documentID=1301' },
              { name: 'Clifton', image: 'https://i.ytimg.com/vi/cO4SSBtVXug/maxresdefault.jpg' },
              { name: 'Nutley', image: 'https://photos.zillowstatic.com/fp/09a7a077f68877b68a7e7d0b7898b31e-cc_ft_960.jpg' }
            ].map((town) => (
              <div key={town.name} className="relative h-64 group overflow-hidden cursor-pointer rounded-lg border border-charcoal-800">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors z-10 duration-300"></div>
                <img src={town.image} alt={`${town.name} Real Estate`} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
                <h3 className="absolute inset-0 z-20 flex items-center justify-center text-white text-xl uppercase tracking-widest font-semibold text-shadow-sm">{town.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
