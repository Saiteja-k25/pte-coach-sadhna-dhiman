import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { testIds } from '@/lib/testIds';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    q: 'Which exams do you personally prepare students for?',
    a: 'IELTS (Academic & General), TOEFL iBT, PTE Academic, and CELPIP. I also coach general Spoken English, public speaking, creative writing and business communication for working professionals.',
  },
  {
    q: 'Are the sessions one-to-one or group?',
    a: 'Most learners choose one-to-one coaching for the fastest results. Small-group cohorts (2–4 students) are offered on request when learners are at similar band levels.',
  },
  {
    q: 'How long does a typical prep plan take?',
    a: 'It depends entirely on your starting level and target band. Most students reach their goal in six to twelve weeks with 3–4 focused sessions per week, plus guided self-study.',
  },
  {
    q: 'Do you offer mock tests and feedback?',
    a: 'Yes. Every plan includes timed mock tests, written feedback on your writing and speaking responses, and a structured error-tracking sheet reviewed weekly.',
  },
  {
    q: 'How is the first consultation structured?',
    a: 'The first 20 minutes are complimentary. We diagnose your current level, identify the exact gaps, and outline the shortest possible path to your target score before any commitment is made.',
  },
  {
    q: 'Do you teach online?',
    a: 'Yes — all sessions are conducted online, so learners from anywhere in the world can join. Learners in Chandigarh and Mohali can arrange occasional in-person sessions on request.',
  },
];

export const FAQ = () => {
  const ref = useReveal();
  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="overline">Frequently asked</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter text-forest leading-[1.05]">
            Answers,
            <br />
            <em className="font-light text-terracotta">before you book.</em>
          </h2>
          <p className="mt-6 text-moss leading-relaxed max-w-md">
            Still curious about the approach, timelines or fee structure? Send a note in the
            contact section below — every enquiry gets a personal reply.
          </p>
        </div>

        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                data-testid={testIds.faq.item(i)}
                className="border-b border-forest/15"
              >
                <AccordionTrigger className="text-left py-6 font-serif text-xl md:text-2xl text-forest tracking-tight hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-moss leading-[1.85] pb-6 text-[15px] max-w-3xl">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
