import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { testIds } from '@/lib/testIds';

const links = [
  { label: 'About', href: '#about', id: testIds.nav.about },
  { label: 'Services', href: '#services', id: testIds.nav.services },
  { label: 'Experience', href: '#experience', id: testIds.nav.experience },
  { label: 'Voices', href: '#testimonials', id: testIds.nav.testimonials },
  { label: 'FAQ', href: '#faq', id: testIds.nav.faq },
  { label: 'Contact', href: '#contact', id: testIds.nav.contact },
];

export const Navbar = ({ calendlyUrl }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 20));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleBook = () => window.open(calendlyUrl, '_blank', 'noopener,noreferrer');

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.15, 1], delay: 0.9 }}
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
          scrolled
            ? 'bg-sand/85 backdrop-blur-xl border-b border-ink/10 py-2'
            : 'bg-transparent border-b border-transparent py-3'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 h-[60px] md:h-[68px] flex items-center justify-between">
          <a
            href="#top"
            data-testid={testIds.nav.logo}
            className="group flex items-center gap-2 leading-none"
          >
            <motion.span
              className="font-serif text-[22px] md:text-[26px] tracking-tighter text-ink"
              whileHover={{ letterSpacing: '-0.005em' }}
              transition={{ duration: 0.4 }}
            >
              Sadhna Dhiman
            </motion.span>
            <span className="hidden md:inline-block text-mocha font-sans text-[9px] tracking-[0.3em] uppercase align-middle mt-0.5">
              · ACS
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] text-ink/80">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                data-testid={l.id}
                className="link-underline hover:text-ink transition-colors"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05 + i * 0.05, duration: 0.4 }}
              >
                {l.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              data-testid={testIds.nav.bookBtn}
              onClick={handleBook}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.35, duration: 0.5 }}
              className="hidden md:inline-flex btn-primary text-[10px] px-5 py-3"
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={14} />
            </motion.button>

            <button
              data-testid={testIds.nav.mobileToggle}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-ink relative w-10 h-10 flex items-center justify-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.55, ease: [0.7, 0, 0.15, 1] }}
            className="lg:hidden fixed inset-0 top-0 z-40 bg-sand pt-24 px-6 flex flex-col"
          >
            <div className="overline mb-8">Menu</div>
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  data-testid={`mobile-${l.id}`}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl text-ink py-3 border-b border-ink/10 flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                >
                  <span>{l.label}</span>
                  <ArrowUpRight size={20} className="text-mocha" />
                </motion.a>
              ))}
            </nav>
            <motion.button
              data-testid={`mobile-${testIds.nav.bookBtn}`}
              onClick={() => {
                setOpen(false);
                handleBook();
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="btn-primary mt-10 self-start"
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={14} />
            </motion.button>
            <div className="mt-auto pb-10 text-[11px] tracking-[0.25em] uppercase text-inkSoft">
              Chandigarh · India
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
