import { Tag, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Offers() {
  const offers = [
    {
      title: "$49 AC Tune-Up",
      description: "Comprehensive 21-point inspection and cleaning to ensure peak summer performance.",
      features: ["Check refrigerant levels", "Inspect electrical components", "Clean condenser coils"],
      popular: true
    },
    {
      title: "$500 Off New System",
      description: "Upgrade to a high-efficiency 16+ SEER system and save instantly on installation.",
      features: ["Free in-home estimate", "10-year parts warranty", "0% Financing available"],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Exclusive Houston Offers</h2>
          <p className="text-xl text-primary-container">Premium service doesn't have to break the bank. Take advantage of our seasonal specials.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className={`bg-white text-slate-900 rounded-3xl p-8 shadow-2xl relative ${offer.popular ? 'border-4 border-secondary' : ''}`}
            >
              {offer.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-2 rounded-full font-black text-sm tracking-widest uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                  <Tag size={32} />
                </div>
                <h3 className="text-3xl font-black text-primary">{offer.title}</h3>
              </div>
              
              <p className="text-slate-600 text-lg mb-8">{offer.description}</p>
              
              <ul className="space-y-4 mb-8">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                    <CheckCircle2 className="text-secondary" size={24} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl font-black text-lg transition-colors">
                CLAIM OFFER
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
