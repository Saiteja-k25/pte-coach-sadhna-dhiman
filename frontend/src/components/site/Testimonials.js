import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testIds } from '@/lib/testIds';
import { Reveal } from '@/lib/motion';

const items = [
  {
    quote:
      'Sadhna helped me climb from a 6.0 to an 8.0 in IELTS speaking in ten weeks. Her feedback was surgical — I finally understood what I was doing wrong.',
    name: 'Anmol K.',
    detail: 'IELTS · Chandigarh → University of Toronto',
  },
  {
    quote:
      'I had failed PTE twice before finding her. She rebuilt my strategy from the templates up. I hit 82 on my very next attempt.',
    name: 'Rahul S.',
    detail: 'PTE Academic · Mohali → PR Australia',
  },
  {
    quote:
      'The way she teaches writing is unlike any coaching I have ever paid for. Structured, patient, and honest.',
    name: 'Manveer B.',
    detail: 'TOEFL iBT · Score 108',
  },
  {
    quote:
      'For someone who was terrified of speaking in English at work, this coaching genuinely changed my life. My team notices the confidence.',
    name: 'Priya N.',
    detail: 'Spoken English · Working professional',
  },
  {
    quote:
      'She treats every student individually. No batches, no scripts — every session was tailored to what I needed that week.',
    name: 'Harkirat D.',
    detail: 'CELPIP · Level 10',
  },
];

export const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const total = items.length;
  const t = items[idx];

  const go = (n) => {
    setDir(n > idx ? 1 : -1);
    setIdx((n + total) % total);
  };

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 lg:py-40 bg-ivory/70">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Reveal>
              <div className="overline">Student voices</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-serif text-[2.2rem] sm:text-5xl lg:text-6xl tracking-tighter text-ink leading-[1.02] max-w-3xl">
                What learners <em className="font-light text-mocha">quietly say</em> after their scores arrive.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="flex items-center gap-3">
              <button
                data-testid={testIds.testimonials.prev}
                onClick={() => go(idx - 1)}
                aria-label="Previous testimonial"
                className="w-11 h-11 md:w-12 md:h-12 border border-ink/25 flex items-center justify-center hover:bg-ink hover:text-ivory transition-all duration-500"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                data-testid={testIds.testimonials.next}
                onClick={() => go(idx + 1)}
                aria-label="Next testimonial"
                className="w-11 h-11 md:w-12 md:h-12 border border-ink/25 flex items-center justify-center hover:bg-ink hover:text-ivory transition-all duration-500"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>

        <div data-testid={testIds.testimonials.track} className="mt-12 md:mt-14 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 min-h-[280px] md:min-h-[340px]">
            <Reveal>
              <Quote size={48} className="text-mocha/70" strokeWidth={1} />
            </Reveal>
            <div className="relative mt-6">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={idx}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.7, 0, 0.15, 1] }}
                  className="font-serif text-[1.7rem] sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.25] tracking-tight text-ink"
                >
                  &ldquo;{t.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`meta-${idx}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="w-12 h-px bg-ink/50" />
                <div>
                  <div className="font-serif text-xl text-ink">{t.name}</div>
                  <div className="text-[11px] tracking-[0.22em] uppercase text-inkSoft mt-1">
                    {t.detail}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 md:mt-10 text-[11px] tracking-[0.25em] uppercase text-inkSoft">
              {String(idx + 1).padStart(2, '0')}{' '}
              <span className="text-ink/30">/ {String(total).padStart(2, '0')}</span>
            </div>
          </div>

          <Reveal delay={0.1} className="lg:col-span-4 border border-ink/15 p-7 md:p-8 bg-sand">
            <div className="overline">Trusted at</div>
            <div className="mt-5 md:mt-6 space-y-3 md:space-y-4 text-ink font-serif italic text-lg leading-snug">
              <div>Planet Spark</div>
              <div className="w-8 h-px bg-ink/30" />
              <div>LeapScholar</div>
              <div className="w-8 h-px bg-ink/30" />
              <div>Independent Learners · US · UK · Canada</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
