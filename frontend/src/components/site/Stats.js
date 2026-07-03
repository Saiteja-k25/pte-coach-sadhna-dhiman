import { testIds } from '@/lib/testIds';

const stats = [
  { n: '1,200+', label: 'Students trained' },
  { n: '16 yrs', label: 'Teaching experience' },
  { n: '7.5+', label: 'Avg. IELTS band achieved' },
  { n: '85+', label: 'Avg. PTE score achieved' },
  { n: '96%', label: 'Satisfaction rate' },
  { n: '4', label: 'Continents reached' },
];

export const Stats = () => {
  return (
    <section
      data-testid={testIds.stats}
      className="relative bg-forest text-cream overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="grid md:grid-cols-3 gap-y-14 gap-x-10">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-cream/20 pl-6">
              <div className="font-serif text-5xl md:text-6xl tracking-tighter text-cream leading-none">
                {s.n}
              </div>
              <div className="mt-3 text-[11px] tracking-[0.25em] uppercase text-cream/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
