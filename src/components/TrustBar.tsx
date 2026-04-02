import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

function AnimatedCounter({ to, duration, suffix = "", decimals = 0 }: { to: number, duration: number, suffix?: string, decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(easeOutQuart * to);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, to, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

export default function TrustBar() {
  const stats = [
    { value: 30, suffix: "+", label: "Years Experience", decimals: 0 },
    { value: 5.0, suffix: "★", label: "Google Rating", decimals: 1 },
    { value: 1000, suffix: "+", label: "Jobs Completed", decimals: 0 },
    { value: 24, suffix: "/7", label: "Emergency Service", decimals: 0 },
  ];

  return (
    <section className="bg-surface-container-low py-16 border-b border-surface-container">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left space-y-2 border-l-4 border-secondary pl-6">
              <div className="text-4xl md:text-5xl font-black text-primary-container">
                <AnimatedCounter to={stat.value} duration={2.5} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
