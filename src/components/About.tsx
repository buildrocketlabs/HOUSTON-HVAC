import { Award, GraduationCap, PenTool } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD34m7_x7B9aI_m9gC0W0cKjQh0QZ_t9R5w8K9L_a8n8W0M7p4I_b6y-v2e9q1t8Y_u6i5o4p3l2k1j0h9g8f7e6d5c4b3a2Z1Y0X9W8V7U6T5S4R3Q2P1O0N9M8L7K6J5I4H3G2F1E0D9C8B7A6z5y4x3w2v1u0t9s8r7q6p5o4n3m2l1k0j9i8h7g6f5e4d3c2b1a0Z" 
                alt="Ron, Master HVAC Technician" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-3xl font-black">Ron Smith</div>
                <div className="text-secondary-fixed font-bold tracking-wider uppercase text-sm">Owner & Master Technician</div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -right-8 top-12 bg-white p-6 rounded-2xl shadow-xl border border-surface-container hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                  <Award size={32} />
                </div>
                <div>
                  <div className="text-2xl font-black text-primary">State Licensed</div>
                  <div className="text-sm font-bold text-on-surface-variant">TACLA123456C</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">Not Just a Tech.<br/>An Industry Educator.</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                With over 30 years in the HVAC industry, Ron doesn't just fix air conditioners—he teaches others how to do it. As a former instructor at the Houston HVAC Institute, Ron brings an unmatched level of precision and diagnostic expertise to every service call.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                "I started this company because I was tired of seeing homeowners get sold equipment they didn't need. We diagnose the real issue, explain it clearly, and fix it right the first time."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-surface-container">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-secondary mt-1" size={28} />
                <div>
                  <h4 className="font-black text-primary text-lg">Former Instructor</h4>
                  <p className="text-sm text-on-surface-variant">Taught advanced diagnostics to hundreds of local techs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PenTool className="text-secondary mt-1" size={28} />
                <div>
                  <h4 className="font-black text-primary text-lg">Precision Focus</h4>
                  <p className="text-sm text-on-surface-variant">We use digital manifolds and advanced tools for exact tuning.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" alt="Signature" className="h-16 opacity-40 dark:invert" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
