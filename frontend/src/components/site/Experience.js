import { motion } from 'framer-motion';
import { Reveal } from '@/lib/motion';

const experience = [
  {
    year: '2023 — Present',
    role: 'Academic Communication Specialist · Freelance',
    place: 'Chandigarh, India · Global',
    body:
      'Independent one-to-one and small-group coaching for IELTS, TOEFL, PTE and CELPIP aspirants, alongside soft-skills mentoring for working professionals.',
  },
  {
    year: 'Recent',
    role: 'Senior English Trainer',
    place: 'LeapScholar · US · UK · Canada',
    body:
      'Supported study-abroad cohorts with tailored coaching to help learners meet university-level English requirements and interview standards.',
  },
  {
    year: 'Recent',
    role: 'English Communication Coach',
    place: 'Planet Spark',
    body:
      'Delivered communication and public-speaking curricula for young learners, focusing on confidence, fluency and structured expression.',
  },
  {
    year: 'Since 2009',
    role: 'Language Educator',
    place: 'Chandigarh region',
    body:
      'Sixteen years of continuous teaching — from foundational spoken English classes to advanced test preparation and creative writing labs.',
  },
];

const regions = ['United States', 'United Kingdom', 'Canada', 'India', 'UAE', 'Australia'];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="overline">Experience</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-[2.4rem] sm:text-5xl lg:text-6xl tracking-tighter text-ink leading-[1.02]">
              Sixteen years,
              <br />
              <em className="font-light text-mocha">four continents.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-inkSoft leading-relaxed max-w-md">
              A career built quietly at the intersection of academic standards and real
              learner confidence.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 border-t border-ink/15 pt-6">
              <div className="overline text-ink/70">Learners from</div>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-ink">
                {regions.map((r) => (
                  <li key={r} className="font-serif italic">{r}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <motion.ol
          className="lg:col-span-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            aria-hidden
            className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-ink/20 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.6, ease: [0.7, 0, 0.15, 1] }}
          />
          {experience.map((e) => (
            <motion.li
              key={e.role}
              variants={{
                hidden: { opacity: 0, x: 24 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.7, 0, 0.15, 1] } },
              }}
              className="relative pl-10 md:pl-14 pb-10 md:pb-12 last:pb-0"
            >
              <motion.span
                aria-hidden
                className="absolute left-2 md:left-3 top-2 w-2.5 h-2.5 rounded-full bg-mocha ring-4 ring-sand"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <div className="text-[10px] tracking-[0.25em] uppercase text-mocha">{e.year}</div>
              <h3 className="mt-2 font-serif text-2xl md:text-3xl text-ink tracking-tight">
                {e.role}
              </h3>
              <div className="mt-1 text-[13px] text-inkSoft italic">{e.place}</div>
              <p className="mt-4 text-[14.5px] md:text-[15px] text-inkSoft leading-[1.8] max-w-2xl">
                {e.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};
