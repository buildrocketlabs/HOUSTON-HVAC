import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, TicketPercent, Zap } from 'lucide-react';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3.5 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenLeadPopup', 'true');
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header Image/Banner */}
            <div className="bg-gradient-to-br from-secondary to-secondary-container p-8 text-white text-center relative overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 opacity-10"
              >
                <Zap size={120} />
              </motion.div>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
              <TicketPercent size={48} className="mx-auto mb-4 text-white drop-shadow-md" />
              <h3 className="text-3xl font-black tracking-tight mb-2">Wait! Claim Your $50 Off</h3>
              <p className="text-white/90 font-medium">Valid for any repair or service call.</p>
            </div>

            {/* Form */}
            <div className="p-8 bg-surface-container-lowest">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                <div>
                  <input type="text" placeholder="Your Name" required className="w-full px-5 py-4 rounded-xl bg-surface-container-low border border-surface-container focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" required className="w-full px-5 py-4 rounded-xl bg-surface-container-low border border-surface-container focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium" />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors mt-2"
                >
                  SEND MY $50 VOUCHER
                </motion.button>
              </form>
              <div className="mt-6 text-center">
                <button onClick={() => setIsOpen(false)} className="text-sm text-on-surface-variant font-medium hover:text-primary transition-colors">
                  No thanks, I prefer paying full price
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
