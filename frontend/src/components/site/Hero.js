import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { testIds } from '@/lib/testIds';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.6 } },
};
const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.7, 0, 0.15, 1] } },
};

export const Hero = ({ calendlyUrl }) => {
  const openCalendly = () => window.open(calendlyUrl, '_blank', 'noopener,noreferrer');

  return (
    <section id="top" className="relative overflow-hidden pt-[110px] md:pt-[140px] pb-16 md:pb-28">
      {/* soft warm background wash */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 2, delay: 0.7, ease: 'easeOut' }}
        className="absolute -top-56 -right-40 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #D9C4A5, transparent 70%)' }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2.4, delay: 0.7 }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #F4C7A1, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LEFT — text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 relative order-1"
        >
          <motion.div variants={child} className="overline mb-6">
            Academic Communication Specialist
          </motion.div>

          <motion.h1
            variants={child}
            data-testid={testIds.hero.heading}
            className="font-serif tracking-tighter text-ink leading-[0.95]"
            style={{ fontSize: 'clamp(2.75rem, 9vw, 6.75rem)' }}
          >
            Sadhna
            <br />
            <motion.span
              className="italic font-light text-mocha inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 1.05, ease: [0.7, 0, 0.15, 1] }}
            >
              Dhiman.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={child}
            className="mt-7 md:mt-8 max-w-xl text-[16px] md:text-[19px] text-inkSoft leading-[1.75] font-light"
          >
            Sixteen years of shaping confident English speakers, test-takers, and public
            communicators — from Chandigarh to campuses across the US, UK &amp; Canada.
            Preparation crafted for{' '}
            <span className="text-ink font-normal">IELTS, TOEFL, PTE, CELPIP</span> and beyond.
          </motion.p>

          <motion.div variants={child} className="mt-9 md:mt-10">
            <button
              data-testid={testIds.hero.bookBtn}
              onClick={openCalendly}
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <span>Book a Free Consultation</span>
              <ArrowUpRight size={16} />
            </button>
          </motion.div>

          <motion.div
            variants={child}
            className="mt-12 md:mt-14 flex items-center gap-4 text-sm text-inkSoft"
          >
            <div className="flex items-center gap-1 text-mocha">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.08, duration: 0.4 }}
                >
                  <Star size={14} fill="currentColor" strokeWidth={0} />
                </motion.span>
              ))}
            </div>
            <span className="font-sans">
              <span className="text-ink font-medium">1,200+ students</span> trained across 4 continents
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT — portrait */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.75, ease: [0.7, 0, 0.15, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end order-2 mt-8 lg:mt-0"
        >
          <div className="relative w-[80%] max-w-[420px] lg:w-full">
            {/* mocha backdrop shape */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, x: -12, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.3, delay: 1.0, ease: [0.7, 0, 0.15, 1] }}
              className="absolute -left-4 -bottom-4 md:-left-6 md:-bottom-6 w-full h-full bg-mocha/90"
              style={{ borderRadius: '2px' }}
            />
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              className="hidden md:block absolute -right-4 -top-4 w-24 h-24 border border-ink/40"
            />
            <div
              className="relative overflow-hidden bg-tan grain"
              style={{ aspectRatio: '4/5' }}
            >
              <motion.img
                src="/images/sadhna.png"
                alt="Portrait of Sadhna Dhiman"
                className="w-full h-full object-cover object-top"
                loading="eager"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.8, ease: 'easeOut' }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: [0.7, 0, 0.15, 1] }}
              className="absolute -left-3 md:-left-8 bottom-4 md:bottom-8 bg-ivory border border-ink/15 px-4 md:px-5 py-3 md:py-4 shadow-[0_20px_50px_-20px_rgba(27,23,18,0.35)]"
            >
              <div className="overline text-ink/70 text-[9px]">Since 2009</div>
              <div className="font-serif text-2xl md:text-3xl text-ink leading-none mt-1">16 yrs</div>
              <div className="text-[10px] md:text-[11px] text-inkSoft mt-1 tracking-wide">
                of teaching mastery
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
