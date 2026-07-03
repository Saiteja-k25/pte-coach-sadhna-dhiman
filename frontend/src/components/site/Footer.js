import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { testIds } from '@/lib/testIds';
import { Reveal } from '@/lib/motion';

const marqueeItems = [
  'IELTS',
  'TOEFL',
  'PTE',
  'CELPIP',
  'Spoken English',
  'Public Speaking',
  'Creative Writing',
  'Interview Prep',
  'Study Abroad',
];

export const Footer = ({ calendlyUrl, contactEmail }) => {
  const marquee = [...marqueeItems, ...marqueeItems];
  return (
    <footer className="relative bg-sand border-t border-ink/10 overflow-hidden">
      {/* Marquee band */}
      <div className="relative border-b border-ink/10 py-6 md:py-8 select-none">
        <div className="marquee">
          <div className="marquee-track font-serif italic text-ink/40 text-2xl md:text-4xl whitespace-nowrap">
            {marquee.map((m, i) => (
              <span key={i} className="flex items-center gap-8">
                <span>{m}</span>
                <span className="text-mocha">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand block */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="overline">Academic Communication Specialist</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h3
                className="mt-4 font-serif text-ink tracking-tighter leading-[0.95]"
                style={{ fontSize: 'clamp(2.75rem, 9vw, 6.25rem)' }}
              >
                Sadhna
                <br />
                <em className="font-light text-mocha">Dhiman.</em>
              </h3>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 md:mt-6 text-inkSoft max-w-md leading-relaxed">
                Independent English coaching for the ambitious. Based in Chandigarh, teaching
                globally.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <motion.button
                data-testid={testIds.footer.book}
                onClick={() => window.open(calendlyUrl, '_blank', 'noopener,noreferrer')}
                whileHover={{ x: 2 }}
                className="btn-primary mt-8 md:mt-10 group"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
              </motion.button>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="overline text-ink/70">Sections</div>
            <ul className="mt-5 space-y-3 text-ink/80 text-[14px]">
              {[
                ['About', '#about'],
                ['Services', '#services'],
                ['Experience', '#experience'],
                ['Voices', '#testimonials'],
                ['FAQ', '#faq'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="link-underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="overline text-ink/70">Reach out</div>
            <ul className="mt-5 space-y-3 text-ink/80 text-[14px]">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  data-testid={testIds.footer.email}
                  className="link-underline break-all"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sadhna-dhiman-025151ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={testIds.footer.linkedin}
                  className="link-underline"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-inkSoft/80 text-[13px]">Chandigarh, India</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20 border-t border-ink/10 pt-6 md:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] md:text-[12px] text-inkSoft">
          <div>© {new Date().getFullYear()} Sadhna Dhiman. All rights reserved.</div>
          <div className="tracking-[0.28em] uppercase">Crafted with care · India</div>
        </div>
      </div>
    </footer>
  );
};
