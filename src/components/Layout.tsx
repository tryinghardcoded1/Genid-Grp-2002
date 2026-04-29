import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import ChatBot from './ChatBot';

function Dropdown({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 py-4 text-sm tracking-widest font-semibold hover:text-gold-500 transition-colors uppercase">
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      <div 
        className={clsx(
          "absolute top-full left-0 mt-4 w-56 bg-charcoal-900 border border-charcoal-800 shadow-2xl py-4 transition-all duration-200 z-50",
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        )}
      >
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block px-6 py-2 text-[11px] text-[#F5F5F5] hover:bg-charcoal-800 hover:text-gold-500 uppercase tracking-widest transition-colors font-semibold"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header 
        className={clsx(
          "fixed w-full z-50 transition-all duration-300 border-b border-charcoal-800",
          isScrolled || !isHome ? "bg-charcoal-950 py-2 text-[#F5F5F5]" : "bg-charcoal-950/80 py-4 text-[#F5F5F5]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className={clsx(
                "text-lg font-bold tracking-widest uppercase",
                isScrolled || !isHome ? "text-[#F5F5F5]" : "text-[#F5F5F5]"
              )}>
                GENID<span className="text-gold-500">GROUP</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center text-[11px] uppercase tracking-widest font-semibold">
              <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
              <Dropdown 
                title="Buy a Property" 
                items={[
                  { label: "Search All Listings", to: "/buy/all-listings" },
                  { label: "Mortgage Calculator", to: "/buy/mortgage-calculator" },
                  { label: "Affordability Calculator", to: "/buy/affordability-calculator" },
                  { label: "New Construction", to: "/buy/new-construction" },
                ]} 
              />
              <Link to="/live-house-tour" className="hover:text-gold-500 transition-colors">Live Tour</Link>
              <Link to="/sell" className="hover:text-gold-500 transition-colors">Sell</Link>
              <Dropdown 
                title="About" 
                items={[
                  { label: "Our Team", to: "/about/team" },
                  { label: "Reviews", to: "/about/reviews" },
                  { label: "Blogs", to: "/about/blogs" },
                ]} 
              />
              <Link to="/join" className="hover:text-gold-500 transition-colors">Join Us</Link>
              
              <Link to="/sell" className="ml-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-bold uppercase tracking-widest transition-all px-6 py-2 text-xs">
                What's My Home Worth?
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-inherit hover:text-gold-500 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-charcoal-900 border-t border-charcoal-800 absolute w-full shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-[#F5F5F5]">
              <Link to="/" className="block px-3 py-2 text-[11px] font-semibold hover:text-gold-500 uppercase tracking-widest">Home</Link>
              <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-widest border-b border-charcoal-800">Buy a Property</div>
              <Link to="/buy/all-listings" className="block pl-6 py-2 text-[11px] font-semibold text-gray-400 hover:text-gold-500 uppercase tracking-widest">All Listings</Link>
              <Link to="/buy/mortgage-calculator" className="block pl-6 py-2 text-[11px] font-semibold text-gray-400 hover:text-gold-500 uppercase tracking-widest">Mortgage Calculator</Link>
              <Link to="/buy/affordability-calculator" className="block pl-6 py-2 text-[11px] font-semibold text-gray-400 hover:text-gold-500 uppercase tracking-widest">Affordability Calculator</Link>
              <Link to="/live-house-tour" className="block px-3 py-2 text-[11px] font-semibold text-gold-500 uppercase tracking-widest">Live House Tour</Link>
              <Link to="/sell" className="block px-3 py-2 text-[11px] font-semibold hover:text-gold-500 uppercase tracking-widest">Sell Your Property</Link>
              <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-widest border-b border-charcoal-800 mt-2">About Us</div>
              <Link to="/about/team" className="block pl-6 py-2 text-[11px] font-semibold text-gray-400 hover:text-gold-500 uppercase tracking-widest">Our Team</Link>
              <Link to="/about/reviews" className="block pl-6 py-2 text-[11px] font-semibold text-gray-400 hover:text-gold-500 uppercase tracking-widest">Reviews</Link>
              <Link to="/join" className="block px-3 py-2 text-[11px] font-semibold hover:text-gold-500 uppercase tracking-widest mt-2">Join Our Team</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="h-12 w-full border-t border-charcoal-800 flex items-center justify-between px-10 text-[9px] uppercase tracking-widest text-gray-600 mt-auto bg-charcoal-950">
        <div>© 2022 - 2023 GENID GROUP SITE SAMPLE. All rights reserved. Licensed in NJ.</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/buy/all-listings" className="hover:text-gray-400">MLS Search</Link>
          <Link to="#" className="hover:text-gray-400">School Districts</Link>
          <Link to="#" className="hover:text-gray-400">Neighborhood Data</Link>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
}
