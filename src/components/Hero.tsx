import { Star, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative px-4 md:px-8 py-20 md:py-32 mx-auto overflow-hidden max-w-none w-full mt-28">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Houston Skyline" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA88ZDllU8lvg98hmQPBs1QUtwE0EbCXuFvOdWqME_pBryoiREGDBoggxkXr1e0dKYH3snCSG_bufpqAGcJv6o92WB3UC6f_rViDIWd0FhNxXypvVs_C7ZfQmD7LqDMjssKXIBTTUmI28t_ujuVKjzMU6ohH4UWWdeJzQr8wVsBMwpOp4Z8s5Xz5EmDen6jiEeSGtBBaDbXojuU_9Yz3avISljWepv3Kj-gYhDYUhjz7P7y5U6nZzQA3wiscPc2if3Db0wDQRxHzsjZ"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/95"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-secondary/90 backdrop-blur-sm text-white font-black text-xs tracking-widest uppercase shadow-lg border border-white/10">
            SERVING HOUSTON SINCE 1993
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-black text-white leading-[1.05] tracking-tighter">
            Houston's Most Trusted HVAC Expert — <span className="text-secondary-fixed">30+ Years</span> of Honest Service
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl leading-relaxed font-light">
            Led by a <span className="font-bold text-white">Master-Licensed technician</span> and former industry instructor. We don't just fix your AC; we provide precision engineering for your home's comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button 
              animate={{ 
                scale: [1, 1.03, 1],
                boxShadow: ["0px 0px 0px rgba(255,138,25,0)", "0px 0px 30px rgba(255,138,25,0.4)", "0px 0px 0px rgba(255,138,25,0)"]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-lg hover:brightness-110 transition-all"
            >
              GET A FREE ESTIMATE
            </motion.button>
            <button className="border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all backdrop-blur-sm">
              CALL (346) 772-7120
            </button>
          </div>

          {/* Trust Strip */}
          <div className="pt-10">
            <div className="inline-flex flex-wrap gap-8 items-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex text-secondary-fixed">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="fill-current" />
                  ))}
                </div>
                <span className="font-black text-white text-lg">5.0 Google Rating</span>
              </div>
              <div className="w-px h-10 bg-white/20 hidden md:block"></div>
              <div className="flex items-center gap-3 text-white font-black text-lg">
                <BadgeCheck className="text-secondary-fixed" size={28} />
                <span>Master Licensed</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white/10">
            <img 
              alt="Professional HVAC Technician working on AC unit" 
              className="w-full h-[550px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANoDOjOOwwS7ycWx4trCoKmVIp8t5tyBFlnyc0OuPpxiCpLeZEZC2KDD3W592mucv_Xmrfr_LOp7V8_yZQW1TlUYPDM8fADK_2JTkBz0Ute0p7z_p4dGfrnVCEcfl3e4WukJVKov7QfJ7j2b5GY1Xa6M1DHiqMC23f-amTNy8cq4tbBXu13Dv9VaZClRRTznWdfX4mqUqE736KhFZfPEVhUgCISVaMJlZCEokbOzUim4_cy4G-G8Kmsr45J5ckWuxNOwAkw3zaQau6"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>
          
          {/* Status Plate Floating */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-2xl border-l-8 border-secondary hidden md:block"
          >
            <div className="text-sm font-bold text-on-surface-variant uppercase mb-1 tracking-wider">System Diagnostic</div>
            <div className="text-2xl font-black text-primary">Precision Confirmed</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
