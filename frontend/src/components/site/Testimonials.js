import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testIds } from '@/lib/testIds';
import { useReveal } from '@/hooks/useReveal';

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
  const ref = useReveal();
  const [idx, setIdx] = useState(0);
  const total = items.length;
  const t = items[idx];

  return (
    <section id="testimonials" className="relative py-24 md:py-36 bg-creamAlt/60">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="overline">Student voices</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter text-forest leading-[1.05] max-w-3xl">
              What learners <em className="font-light text-terracotta">quietly say</em> after their scores arrive.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              data-testid={testIds.testimonials.prev}
              onClick={() => setIdx((i) => (i - 1 + total) % total)}
              aria-label="Previous testimonial"
              className="w-12 h-12 border border-forest/25 flex items-center justify-center hover:bg-forest hover:text-cream transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              data-testid={testIds.testimonials.next}
              onClick={() => setIdx((i) => (i + 1) % total)}
              aria-label="Next testimonial"
              className="w-12 h-12 border border-forest/25 flex items-center justify-center hover:bg-forest hover:text-cream transition-all"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          data-testid={testIds.testimonials.track}
          className="mt-14 grid lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-8">
            <Quote size={56} className="text-terracotta/70" strokeWidth={1} />
            <blockquote className="mt-6 font-serif text-3xl md:text-4xl lg:text-[44px] leading-[1.25] tracking-tight text-forest">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-forest/50" />
              <div>
                <div className="font-serif text-xl text-forest">{t.name}</div>
                <div className="text-[12px] tracking-widest uppercase text-moss mt-1">
                  {t.detail}
                </div>
              </div>
            </div>
            <div className="mt-10 text-[12px] tracking-widest uppercase text-moss">
              {String(idx + 1).padStart(2, '0')} <span className="text-forest/30">/ {String(total).padStart(2, '0')}</span>
            </div>
          </div>

          {/* side card — other pull quote */}
          <div className="lg:col-span-4 border border-forest/15 p-8 bg-cream">
            <div className="overline">Trusted at</div>
            <div className="mt-6 space-y-4 text-forest font-serif italic text-lg leading-snug">
              <div>Planet Spark</div>
              <div className="w-8 h-px bg-forest/30" />
              <div>LeapScholar</div>
              <div className="w-8 h-px bg-forest/30" />
              <div>Independent Learners · US · UK · Canada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
