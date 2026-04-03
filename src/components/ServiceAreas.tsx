import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServiceAreas() {
  const areas = [
    "Houston", "Sugar Land", "The Woodlands", "Katy", 
    "Pearland", "Cypress", "Clear Lake", "Humble"
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8" id="areas">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">Areas We Serve</h2>
            <p className="text-on-surface-variant text-lg">Bringing master-licensed expertise to the greater Houston area and surrounding communities.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center gap-3 font-semibold text-primary">
                <MapPin className="text-secondary" size={20} /> {area}
              </div>
            ))}
          </div>
          
          <div className="bg-surface-container-low p-8 rounded-3xl border border-surface-container">
            <h4 className="font-bold text-primary mb-2">Don't see your area?</h4>
            <p className="text-sm text-on-surface-variant mb-4">We often travel further for specialized projects. Give us a call to check availability.</p>
            <button className="bg-primary text-white px-6 py-2 rounded-xl font-bold hover:bg-primary-container transition-colors">
              CALL (346) 772-7120
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[450px] bg-surface-container rounded-3xl relative overflow-hidden shadow-xl border border-surface-container"
        >
          <div className="absolute inset-0 bg-slate-200">
            <img 
              alt="Map of Houston area" 
              className="w-full h-full object-cover grayscale opacity-50" 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-bounce">
              <MapPin className="text-secondary fill-secondary" size={24} />
              <span className="font-bold text-primary">Service Center: Houston, TX</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
