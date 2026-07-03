import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { testIds } from '@/lib/testIds';

const stats = [
  { n: 1200, suffix: '+', label: 'Students trained' },
  { n: 16, suffix: ' yrs', label: 'Teaching experience' },
  { n: 7.5, suffix: '+', label: 'Avg. IELTS band achieved', decimals: 1 },
  { n: 85, suffix: '+', label: 'Avg. PTE score achieved' },
  { n: 96, suffix: '%', label: 'Satisfaction rate' },
  { n: 4, suffix: '', label: 'Continents reached' },
];

function useCountUp(target, decimals = 0, start = false, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(eased * target);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, decimals, start, duration]);
  return decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString();
}

const StatCell = ({ s, inView }) => {
  const v = useCountUp(s.n, s.decimals || 0, inView);
  return (
    <div className="border-l border-ivory/25 pl-5 md:pl-6">
      <div className="font-serif text-5xl md:text-6xl tracking-tighter text-ivory leading-none">
        {v}
        <span className="text-mocha">{s.suffix}</span>
      </div>
      <div className="mt-3 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ivory/70">
        {s.label}
      </div>
    </div>
  );
};

export const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      data-testid={testIds.stats}
      className="relative bg-ink text-ivory overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grain opacity-40" />
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #8B6F4E, transparent 70%)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.8 }}
      />
      <motion.div
        className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-14 gap-x-6 md:gap-x-10">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.7, 0, 0.15, 1] } },
              }}
            >
              <StatCell s={s} inView={inView} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
