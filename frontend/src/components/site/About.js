import { useReveal } from '@/hooks/useReveal';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'IELTS, TOEFL, PTE & CELPIP band-specific coaching',
  'Personalised diagnostics before every plan',
  'Soft-skills & academic writing for university-bound learners',
  'Interview and public-speaking readiness',
];

export const About = () => {
  const ref = useReveal();
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* LEFT — editorial image */}
        <div className="lg:col-span-5 relative">
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
            <img
              src="https://images.pexels.com/photos/16088727/pexels-photo-16088727.jpeg"
              alt="Warm, book-filled study space"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="hidden md:block absolute -bottom-6 -right-6 w-40 h-40 bg-forest text-cream p-6">
            <div className="overline text-cream/70">The mission</div>
            <p className="font-serif text-lg leading-snug mt-2">
              To make world-class English coaching feel personal, again.
            </p>
          </div>
        </div>

        {/* RIGHT — copy */}
        <div className="lg:col-span-7">
          <div className="overline">About Sadhna</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter text-forest leading-[1.05]">
            A quiet mentor for
            <br />
            <em className="text-terracotta font-light">loud ambitions.</em>
          </h2>

          <div className="mt-8 space-y-5 text-[16px] md:text-[17px] text-moss leading-[1.85] max-w-xl">
            <p>
              Sadhna Dhiman is an Academic Communication Specialist based in Chandigarh, India.
              With over <span className="text-forest">sixteen years</span> as a soft-skills trainer
              and language expert, she has coached professionals and students at{' '}
              <span className="text-forest">Planet Spark</span> and{' '}
              <span className="text-forest">LeapScholar</span>, guiding cohorts across the US,
              UK and Canada.
            </p>
            <p>
              Her method is patient, diagnostic, and outcomes-driven — decoding what stands
              between a learner and their target score, then rebuilding grammar, fluency and
              confidence from the inside out.
            </p>
          </div>

          <ul className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-forest text-[14px]">
                <CheckCircle2 size={18} className="mt-1 text-terracotta flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Micro stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-forest/15 pt-8">
            {[
              { n: '16', label: 'Years teaching' },
              { n: '1.2k+', label: 'Learners coached' },
              { n: '4', label: 'Continents' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-4xl text-forest leading-none">{s.n}</div>
                <div className="mt-2 text-[11px] tracking-widest uppercase text-moss">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
