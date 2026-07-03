import { useReveal } from '@/hooks/useReveal';
import { testIds } from '@/lib/testIds';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    slug: 'ielts',
    name: 'IELTS',
    tag: 'Band 7 – 8+',
    desc: 'Structured Academic & General Training prep across all four modules, with mock tests and personalised feedback loops.',
    feature: true,
  },
  {
    slug: 'toefl',
    name: 'TOEFL iBT',
    tag: 'Score 100+',
    desc: 'Integrated speaking & writing task workshops, note-taking frameworks, and time-boxed practice.',
  },
  {
    slug: 'pte',
    name: 'PTE Academic',
    tag: 'Score 79+',
    desc: 'Templates, scoring-engine strategy and micro-drills to master fill-in-the-blanks and repeat-sentence.',
  },
  {
    slug: 'celpip',
    name: 'CELPIP',
    tag: 'Level 9+',
    desc: 'Canada-focused coaching for immigration and university readiness — with mock speaking evaluations.',
  },
  {
    slug: 'spoken-english',
    name: 'Spoken English',
    tag: 'Basic → Advanced',
    desc: 'Rebuild fluency from the ground up. Pronunciation, everyday vocabulary, and conversational confidence.',
  },
  {
    slug: 'public-speaking',
    name: 'Public Speaking',
    tag: 'Poised & persuasive',
    desc: 'Stage presence, delivery mechanics and script polishing for interviews, presentations and pitches.',
  },
  {
    slug: 'creative-writing',
    name: 'Creative Writing',
    tag: 'Voice & craft',
    desc: 'Storytelling, essay structure and academic writing — for portfolios, applications and personal projects.',
  },
  {
    slug: 'language-certification',
    name: 'Language Certification',
    tag: 'Prep & mentorship',
    desc: 'End-to-end mentorship for language proficiency certifications, tailored around your target institution.',
  },
];

export const Services = ({ calendlyUrl }) => {
  const ref = useReveal();
  const openCalendly = () => window.open(calendlyUrl, '_blank', 'noopener,noreferrer');

  return (
    <section id="services" className="relative py-24 md:py-36 bg-creamAlt/60">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="overline">What Sadhna teaches</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter text-forest leading-[1.05]">
              Coaching, crafted <em className="font-light text-terracotta">around you.</em>
            </h2>
          </div>
          <p className="max-w-md text-moss leading-relaxed">
            Every plan begins with a diagnostic call. From band targets to confidence gaps, every
            programme is shaped to a single learner — never a syllabus.
          </p>
        </div>

        <div
          data-testid={testIds.services.grid}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-forest/15"
        >
          {services.map((s, i) => (
            <article
              key={s.slug}
              data-testid={testIds.services.card(s.slug)}
              className={`relative p-8 md:p-10 bg-cream group hover:bg-white transition-colors duration-500 ${
                s.feature ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] tracking-[0.25em] uppercase text-terracotta font-medium">
                  0{i + 1}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-moss">{s.tag}</span>
              </div>
              <h3 className="mt-8 font-serif text-3xl md:text-4xl text-forest tracking-tight leading-none">
                {s.name}
              </h3>
              <p className="mt-5 text-[14.5px] text-moss leading-relaxed max-w-md">{s.desc}</p>
              <button
                onClick={openCalendly}
                className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-widest uppercase text-forest link-underline"
              >
                Enquire
                <ArrowUpRight size={14} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
