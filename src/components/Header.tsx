import { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Main Nav */}
      <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm flex justify-between items-center px-4 md:px-8 py-4 max-w-full">
        <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <ShieldCheck className="text-secondary-container fill-secondary-container/20" size={28} />
          <span className="tracking-tighter">HOUSTON HVAC</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a className="text-secondary-container border-b-2 border-secondary-container pb-1 font-semibold text-sm" href="#">Home</a>
          <a className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-semibold text-sm" href="#services">Services</a>
          <a className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-semibold text-sm" href="#about">About Ron</a>
          <a className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-semibold text-sm" href="#areas">Service Areas</a>
          <a className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-semibold text-sm" href="#reviews">Reviews</a>
          <a className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-semibold text-sm" href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden lg:block font-bold text-secondary text-lg">(346) 772-7120</span>
          <button className="hidden md:block bg-secondary-container hover:bg-secondary text-white px-6 py-2.5 rounded-xl font-bold tracking-tight transition-transform scale-95 active:scale-90 shadow-lg shadow-secondary-container/30">
            CALL NOW
          </button>
          <button className="md:hidden p-2 text-slate-900 dark:text-white" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-slate-900 z-50 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-lg dark:text-white">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full dark:text-white">
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-6 text-lg font-semibold">
                <a onClick={() => setIsOpen(false)} className="text-secondary-container" href="#">Home</a>
                <a onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300" href="#services">Services</a>
                <a onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300" href="#about">About Ron</a>
                <a onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300" href="#areas">Service Areas</a>
                <a onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300" href="#reviews">Reviews</a>
                <a onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300" href="#contact">Contact</a>
              </div>
              <div className="mt-auto p-6">
                <button className="w-full bg-secondary-container text-white py-4 rounded-xl font-bold text-lg shadow-lg">
                  CALL (346) 772-7120
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Emergency Banner */}
      <div className="bg-primary text-white text-center py-2.5 text-sm font-bold tracking-wide">
        🔧 24/7 Emergency Service Available — Call or Text Anytime
      </div>
    </header>
  );
}
