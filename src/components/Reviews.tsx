import { Star, ExternalLink, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reviews() {
  const reviews = [
    {
      text: `"Ron was incredibly thorough. He didn't just fix the leak; he explained why it happened and how to prevent it. High trust!"`,
      author: "Jack Meyer",
      location: "77086 Area",
      avatar: "https://i.pravatar.cc/150?u=jack"
    },
    {
      text: `"Emergency service at 11 PM on a Saturday. Ron arrived in 30 mins and had our AC back up in no time. Lifesaver."`,
      author: "Sarah Williams",
      location: "Sugar Land",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      text: `"Best pricing in Houston. No hidden fees, no sales tactics. Just honest, high-quality work from a Master technician."`,
      author: "Marcus Chen",
      location: "The Woodlands",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      text: `"I've used Ron for 10 years. He is the most knowledgeable HVAC person I've ever met. Truly an expert in his field."`,
      author: "Linda Perez",
      location: "Katy, TX",
      avatar: "https://i.pravatar.cc/150?u=linda"
    }
  ];

  return (
    <section className="bg-surface-container-low py-24 overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">Verified Local Excellence</h2>
          
          {/* Google Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-6 bg-white px-8 py-4 rounded-full shadow-xl border border-surface-container mb-8"
          >
            <div className="text-5xl font-black text-primary">5.0</div>
            <div className="text-left">
              <div className="flex text-secondary mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-current" />
                ))}
              </div>
              <div className="text-sm font-bold text-on-surface-variant">Based on 1000+ Google Reviews</div>
            </div>
          </motion.div>
          
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">We take pride in every repair. Here's what your neighbors are saying.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg space-y-6 border border-surface-container flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
            >
              <div>
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-current" />
                  ))}
                </div>
                <p className="text-on-surface-variant italic text-base leading-relaxed">{review.text}</p>
              </div>
              <div className="flex items-center gap-4 pt-6 mt-4 border-t border-surface-container-low">
                <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full border-2 border-surface-container object-cover" />
                <div>
                  <div className="font-bold text-primary flex items-center gap-1">
                    {review.author} <BadgeCheck size={16} className="text-blue-500" />
                  </div>
                  <div className="text-xs text-on-surface-variant font-medium">{review.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="inline-flex items-center gap-2 font-bold text-primary hover:text-secondary border-b-2 border-primary/20 hover:border-secondary transition-all pb-1 text-lg">
            READ ALL REVIEWS ON GOOGLE
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
