import { ArrowUpRight, ArrowDown, Star } from 'lucide-react';
import { testIds } from '@/lib/testIds';

export const Hero = ({ calendlyUrl }) => {
  const openCalendly = () => window.open(calendlyUrl, '_blank', 'noopener,noreferrer');

  return (
    <section id="top" className="relative overflow-hidden pt-[130px] md:pt-[150px] pb-16 md:pb-24">
      {/* soft warm background arc */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[720px] h-[720px] rounded-full opacity-70 pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #F4EBE1, transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LEFT — text */}
        <div className="lg:col-span-7 relative">
          <div className="overline mb-6">Academic Communication Specialist</div>
          <h1
            data-testid={testIds.hero.heading}
            className="font-serif tracking-tighter text-forest leading-[0.95]"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
          >
            Sadhna
            <br />
            <span className="italic font-light text-terracotta">Dhiman</span>
          </h1>

          <p className="mt-8 max-w-xl text-[17px] md:text-[19px] text-moss leading-[1.7] font-light">
            Sixteen years of shaping confident English speakers, test-takers, and public
            communicators — from Chandigarh to campuses across the US, UK &amp; Canada.
            Preparation crafted for <span className="text-forest font-normal">IELTS, TOEFL, PTE, CELPIP</span>{' '}
            and beyond.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <button
              data-testid={testIds.hero.bookBtn}
              onClick={openCalendly}
              className="btn-primary"
            >
              Book a Free Consultation
              <ArrowUpRight size={16} />
            </button>
            <a
              data-testid={testIds.hero.servicesBtn}
              href="#services"
              className="btn-ghost"
            >
              Explore Services
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="mt-14 flex items-center gap-6 text-sm text-moss">
            <div className="flex items-center gap-1 text-terracotta">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-sans">
              <span className="text-forest font-medium">1,200+ students</span> trained across
              4 continents
            </span>
          </div>
        </div>

        {/* RIGHT — portrait */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[440px]">
            {/* terracotta backdrop shape */}
            <div
              aria-hidden
              className="absolute -left-6 -bottom-6 w-full h-full bg-terracotta/90"
              style={{ borderRadius: '2px' }}
            />
            <div
              aria-hidden
              className="absolute -right-4 -top-4 w-24 h-24 border border-forest/40"
            />
            <div className="relative overflow-hidden bg-creamAlt grain" style={{ aspectRatio: '4/5' }}>
              <img
                src="/images/sadhna.png"
                alt="Portrait of Sadhna Dhiman"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
            {/* callout card */}
            <div className="absolute -left-4 md:-left-10 bottom-6 md:bottom-10 bg-cream border border-forest/15 px-5 py-4 shadow-[0_20px_50px_-20px_rgba(26,54,45,0.35)]">
              <div className="overline text-forest/70 text-[9px]">Since 2009</div>
              <div className="font-serif text-3xl text-forest leading-none mt-1">16 yrs</div>
              <div className="text-[11px] text-moss mt-1 tracking-wide">of teaching mastery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
