import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/lib/motion';

const highlights = [
  'IELTS, TOEFL, PTE & CELPIP band-specific coaching',
  'Personalised diagnostics before every plan',
  'Soft-skills & academic writing for university-bound learners',
  'Interview and public-speaking readiness',
];

export const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* LEFT — editorial image */}
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <Reveal>
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <motion.img
                src="https://images.pexels.com/photos/16088727/pexels-photo-16088727.jpeg"
                alt="Warm study space with books"
                className="w-full h-full object-cover"
                loading="lazy"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: [0.7, 0, 0.15, 1] }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="hidden md:flex flex-col justify-between absolute -bottom-6 -right-6 w-48 h-48 bg-ink text-ivory p-5">
              <div className="overline text-ivory/70">The mission</div>
              <p className="font-serif text-[15px] leading-snug">
                To make world-class English coaching feel personal, again.
              </p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — copy */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <div className="overline">About Sadhna</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-[2.4rem] sm:text-5xl lg:text-6xl tracking-tighter text-ink leading-[1.02]">
              A quiet mentor for
              <br />
              <em className="text-mocha font-light">loud ambitions.</em>
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-[15.5px] md:text-[17px] text-inkSoft leading-[1.85] max-w-xl">
            <Reveal delay={0.16}>
              <p>
                Sadhna Dhiman is an Academic Communication Specialist based in Chandigarh, India.
                With over <span className="text-ink">sixteen years</span> as a soft-skills trainer
                and language expert, she has coached professionals and students at{' '}
                <span className="text-ink">Planet Spark</span> and{' '}
                <span className="text-ink">LeapScholar</span>, guiding cohorts across the US,
                UK and Canada.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p>
                Her method is patient, diagnostic, and outcomes-driven — decoding what stands
                between a learner and their target score, then rebuilding grammar, fluency and
                confidence from the inside out.
              </p>
            </Reveal>
          </div>

          <motion.ul
            className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {highlights.map((h) => (
              <motion.li
                key={h}
                variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex items-start gap-3 text-ink text-[14px]"
              >
                <CheckCircle2 size={18} className="mt-1 text-mocha flex-shrink-0" />
                <span>{h}</span>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-ink/15 pt-8">
              {[
                { n: '16', label: 'Years teaching' },
                { n: '1.2k+', label: 'Learners coached' },
                { n: '4', label: 'Continents' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-4xl text-ink leading-none">{s.n}</div>
                  <div className="mt-2 text-[10px] tracking-[0.22em] uppercase text-inkSoft">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
