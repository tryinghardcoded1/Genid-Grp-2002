import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Samir Genid',
    role: 'Team Leader',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Agnes Rousen',
    role: 'Agent',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Ahmad Siam',
    role: 'Agent',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Eva Winograd',
    role: 'Broker Associate',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Ezio Montorio',
    role: 'Agent',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Geoffrey Bass',
    role: 'Agent',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Janine Amado',
    role: 'Agent',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Justine Anderson',
    role: 'Agent',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=600&auto=format&fit=crop'
  }
];

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | GENID GROUP SAMPLE SITE</title>
        <meta name="description" content="Meet the team at The Genid Group, your trusted real estate experts in Northern New Jersey." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F5F5F5] mb-6">
                The Genid <span className="text-gold-500 italic">Group</span>
              </h1>
              <div className="h-1 w-20 bg-gold-500 mb-8"></div>
              
              <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                <p>
                  Meet the team at The Genid Group, your trusted real estate experts in Northern New Jersey. Led by Samir Genid, a seasoned real estate professional with 7 years of experience in the industry, our team has served hundreds of satisfied clients.
                </p>
                <p>
                  With a diverse team of 13 dedicated real estate professionals, we have the knowledge, expertise, and resources to help you achieve your real estate goals. Whether you're buying, selling, or renting, we have the skills and experience to guide you through the process and ensure a smooth and successful transaction.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px]"
            >
              <div className="absolute inset-0 border border-gold-500 translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                alt="Genid Group Team at Work" 
                className="w-full h-full object-cover relative z-10 opacity-90"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0A0A0A] border-b border-charcoal-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-charcoal-800">
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">400M+</h4>
              <p className="uppercase tracking-widest font-semibold text-gray-400 text-[10px]">Value of Real Estate Sold</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">1000+</h4>
              <p className="uppercase tracking-widest font-semibold text-gray-400 text-[10px]">Number of Properties Sold</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">290+</h4>
              <p className="uppercase tracking-widest font-semibold text-gray-400 text-[10px]">Five Star Reviews</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">16</h4>
              <p className="uppercase tracking-widest font-semibold text-gray-400 text-[10px]">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.4em] text-gold-500 uppercase">Trusted Advisors</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F5F5F5] mt-4">Our Real Estate Professionals</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-charcoal-900 border border-charcoal-800">
                  <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 m-2"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold-500 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 m-2"></div>
                </div>
                
                <h3 className="text-lg font-bold text-[#F5F5F5] uppercase tracking-wider">{member.name}</h3>
                <p className="text-[11px] text-gray-500 font-semibold tracking-widest uppercase mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
