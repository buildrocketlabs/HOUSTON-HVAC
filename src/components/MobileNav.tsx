import { Phone } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-secondary-container shadow-[0_-10px_30px_rgba(255,138,25,0.4)] h-20 flex justify-center items-center pb-safe">
      <a href="tel:3467727120" className="flex items-center justify-center gap-4 w-full h-full text-white font-black uppercase tracking-widest text-sm group active:scale-95 transition-transform">
        <Phone className="animate-pulse fill-current" size={28} />
        <div className="flex flex-col">
          <span className="text-[11px] font-bold leading-none opacity-90 mb-1">TAP TO CALL RON NOW</span>
          <span className="text-xl leading-none">(346) 772-7120</span>
        </div>
      </a>
    </nav>
  );
}
