import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import clsx from 'clsx';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-charcoal-900 border border-charcoal-800 rounded-xl shadow-2xl overflow-hidden mb-4 w-[90vw] md:w-[450px] shadow-black/50 animate-in slide-in-from-bottom-2">
          <div className="bg-charcoal-950 p-4 border-b border-charcoal-800 flex justify-between items-center text-[#F5F5F5]">
            <div className="font-bold tracking-widest text-[11px] uppercase text-gold-500 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Genid Group AI
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gold-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full overflow-hidden bg-charcoal-950" style={{ height: '70vh', minHeight: '500px', maxHeight: '700px' }}>
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/O2yF2CKGeMFtiMz3s7ylf"
                width="100%"
                style={{ height: '100%', minHeight: '100%' }}
                frameBorder="0"
                allow="microphone"
                className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
          isOpen ? "bg-charcoal-800 text-gold-500 border border-charcoal-700" : "bg-gold-500 hover:bg-gold-400 text-black shadow-gold-500/20"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
