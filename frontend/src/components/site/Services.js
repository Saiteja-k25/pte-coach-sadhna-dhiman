import { motion } from 'framer-motion';
import { testIds } from '@/lib/testIds';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/lib/motion';

const services = [
  { slug: 'ielts', name: 'IELTS', tag: 'Band 7 – 8+',
    desc: 'Structured Academic & General Training prep across all four modules, with mock tests and personalised feedback loops.' },
  { slug: 'toefl', name: 'TOEFL iBT', tag: 'Score 100+',
    desc: 'Integrated speaking & writing task workshops, note-taking frameworks, and time-boxed practice.' },
  { slug: 'pte', name: 'PTE Academic', tag: 'Score 79+',
    desc: 'Templates, scoring-engine strategy and micro-drills to master fill-in-the-blanks and repeat-sentence.' },
  { slug: 'celpip', name: 'CELPIP', tag: 'Level 9+',
    desc: 'Canada-focused coaching for immigration and university readiness — with mock speaking evaluations.' },
  { slug: 'spoken-english', name: 'Spoken English', tag: 'Basic → Advanced',
    desc: 'Rebuild fluency from the ground up. Pronunciation, everyday vocabulary, and conversational confidence.' },
  { slug: 'public-speaking', name: 'Public Speaking', tag: 'Poised & persuasive',
    desc: 'Stage presence, delivery mechanics and script polishing for interviews, presentations and pitches.' },
  { slug: 'creative-writing', name: 'Creative Writing', tag: 'Voice & craft',
    desc: 'Storytelling, essay structure and academic writing — for portfolios, applications and personal projects.' },
  { slug: 'language-certification', name: 'Language Certification', tag: 'Prep & mentorship',
    desc: 'End-to-end mentorship for language proficiency certifications, tailored around your target institution.' },
];

export const Services = ({ calendlyUrl }) => {
  const openCalendly = () => window.open(calendlyUrl, '_blank', 'noopener,noreferrer');

  return (
    <section id="services" className="relative py-20 md:py-32 lg:py-40 bg-ivory/70">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <Reveal className="max-w-2xl">
            <div className="overline">What Sadhna teaches</div>
            <h2 className="mt-4 font-serif text-[2.4rem] sm:text-5xl lg:text-6xl tracking-tighter text-ink leading-[1.02]">
              Coaching, crafted <em className="font-light text-mocha">around you.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-inkSoft leading-relaxed">
              Every plan begins with a diagnostic call. From band targets to confidence gaps,
              every programme is shaped to a single learner — never a syllabus.
            </p>
          </Reveal>
        </div>

        <motion.div
          data-testid={testIds.services.grid}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {services.map((s, i) => (
            <motion.article
              key={s.slug}
              data-testid={testIds.services.card(s.slug)}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.7, 0, 0.15, 1] } },
              }}
              whileHover={{ y: -4 }}
              className="relative p-7 md:p-10 bg-sand group hover:bg-ivory transition-colors duration-500 min-h-[240px] flex flex-col"
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] tracking-[0.28em] uppercase text-mocha font-medium">
                  0{i + 1}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-inkSoft text-right">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-6 md:mt-8 font-serif text-[1.9rem] md:text-4xl text-ink tracking-tight leading-none">
                {s.name}
              </h3>
              <p className="mt-4 md:mt-5 text-[14px] md:text-[14.5px] text-inkSoft leading-relaxed max-w-md flex-1">
                {s.desc}
              </p>
              <button
                onClick={openCalendly}
                className="mt-6 md:mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-ink link-underline w-fit"
              >
                Enquire
                <ArrowUpRight size={14} />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
