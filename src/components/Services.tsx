import { Snowflake, Flame, Wind, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function Services() {
  const services = [
    {
      title: "AC Repair & Install",
      icon: <Snowflake size={40} className="text-secondary" />,
      description: "Beat the Houston heat with rapid, reliable AC repairs and high-efficiency installations.",
      features: ["24/7 Emergency Repair", "System Replacements", "Freon Leak Detection"]
    },
    {
      title: "Heating Solutions",
      icon: <Flame size={40} className="text-secondary" />,
      description: "Keep your home cozy during winter freezes with our comprehensive heating services.",
      features: ["Furnace Repair", "Heat Pump Service", "Preventative Maintenance"]
    },
    {
      title: "Indoor Air Quality",
      icon: <Wind size={40} className="text-secondary" />,
      description: "Breathe easier with advanced filtration and purification systems for your home.",
      features: ["Whole-Home Purifiers", "Duct Cleaning", "Humidity Control"]
    }
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">Expert Services for Houston Homes</h2>
          <p className="text-xl text-on-surface-variant">From emergency AC repairs in July to furnace tune-ups in December, we have you covered.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              className="bg-surface-container-lowest border border-surface-container rounded-3xl p-8 shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">{service.title}</h3>
              <p className="text-on-surface-variant mb-8 flex-grow">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-primary/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="inline-flex items-center gap-2 font-bold text-secondary hover:text-secondary-fixed transition-colors mt-auto group/link">
                Learn More 
                <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
