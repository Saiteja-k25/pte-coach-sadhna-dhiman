import { useReveal } from '@/hooks/useReveal';

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
  const ref = useReveal();
  return (
    <section id="experience" className="relative py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="overline">Experience</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter text-forest leading-[1.05]">
            Sixteen years,
            <br />
            <em className="font-light text-terracotta">four continents.</em>
          </h2>
          <p className="mt-6 text-moss leading-relaxed max-w-md">
            A career built quietly at the intersection of academic standards and real
            learner confidence.
          </p>

          <div className="mt-10 border-t border-forest/15 pt-6">
            <div className="overline text-forest/70">Learners from</div>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-forest">
              {regions.map((r) => (
                <li key={r} className="font-serif italic">{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="lg:col-span-8 relative">
          <span aria-hidden className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-forest/15" />
          {experience.map((e) => (
            <li key={e.role} className="relative pl-10 md:pl-14 pb-12 last:pb-0">
              <span
                aria-hidden
                className="absolute left-2 md:left-3 top-2 w-2.5 h-2.5 rounded-full bg-terracotta ring-4 ring-cream"
              />
              <div className="text-[11px] tracking-widest uppercase text-terracotta">{e.year}</div>
              <h3 className="mt-2 font-serif text-2xl md:text-3xl text-forest tracking-tight">
                {e.role}
              </h3>
              <div className="mt-1 text-[13px] text-moss italic">{e.place}</div>
              <p className="mt-4 text-[15px] text-moss leading-[1.8] max-w-2xl">{e.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
