import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { testIds } from '@/lib/testIds';
import { Reveal } from '@/lib/motion';
import { motion } from 'framer-motion';

const faqs = [
  { q: 'Which exams do you personally prepare students for?',
    a: 'IELTS (Academic & General), TOEFL iBT, PTE Academic, and CELPIP. I also coach general Spoken English, public speaking, creative writing and business communication for working professionals.' },
  { q: 'Are the sessions one-to-one or group?',
    a: 'Most learners choose one-to-one coaching for the fastest results. Small-group cohorts (2–4 students) are offered on request when learners are at similar band levels.' },
  { q: 'How long does a typical prep plan take?',
    a: 'It depends entirely on your starting level and target band. Most students reach their goal in six to twelve weeks with 3–4 focused sessions per week, plus guided self-study.' },
  { q: 'Do you offer mock tests and feedback?',
    a: 'Yes. Every plan includes timed mock tests, written feedback on your writing and speaking responses, and a structured error-tracking sheet reviewed weekly.' },
  { q: 'How is the first consultation structured?',
    a: 'The first 20 minutes are complimentary. We diagnose your current level, identify the exact gaps, and outline the shortest possible path to your target score before any commitment is made.' },
  { q: 'Do you teach online?',
    a: 'Yes — all sessions are conducted online, so learners from anywhere in the world can join. Learners in Chandigarh and Mohali can arrange occasional in-person sessions on request.' },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="overline">Frequently asked</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-[2.4rem] sm:text-5xl lg:text-6xl tracking-tighter text-ink leading-[1.02]">
              Answers,
              <br />
              <em className="font-light text-mocha">before you book.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-inkSoft leading-relaxed max-w-md">
              Still curious about the approach, timelines or fee structure? Send a note in the
              contact section below — every enquiry gets a personal reply.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="lg:col-span-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.7, 0, 0.15, 1] } },
                }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  data-testid={testIds.faq.item(i)}
                  className="border-b border-ink/15"
                >
                  <AccordionTrigger className="text-left py-5 md:py-6 font-serif text-lg md:text-2xl text-ink tracking-tight hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-inkSoft leading-[1.85] pb-5 md:pb-6 text-[14.5px] md:text-[15px] max-w-3xl">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
