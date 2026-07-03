import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { testIds } from '@/lib/testIds';

const links = [
  { label: 'About', href: '#about', id: testIds.nav.about },
  { label: 'Services', href: '#services', id: testIds.nav.services },
  { label: 'Experience', href: '#experience', id: testIds.nav.experience },
  { label: 'Testimonials', href: '#testimonials', id: testIds.nav.testimonials },
  { label: 'FAQ', href: '#faq', id: testIds.nav.faq },
  { label: 'Contact', href: '#contact', id: testIds.nav.contact },
];

export const Navbar = ({ calendlyUrl }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBook = () => window.open(calendlyUrl, '_blank', 'noopener,noreferrer');

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-cream/85 border-b border-forest/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 h-[76px] flex items-center justify-between">
        <a
          href="#top"
          data-testid={testIds.nav.logo}
          className="font-serif text-2xl md:text-[26px] tracking-tighter text-forest leading-none"
        >
          Sadhna Dhiman
          <span className="hidden md:inline-block ml-2 text-terracotta font-sans text-[10px] tracking-[0.28em] uppercase align-middle">
            · ACS
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-[13px] text-forest/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.id}
              className="link-underline hover:text-forest transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid={testIds.nav.bookBtn}
            onClick={handleBook}
            className="hidden md:inline-flex btn-primary text-[11px] px-5 py-3"
          >
            Book Consultation
            <ArrowUpRight size={14} />
          </button>
          <button
            data-testid={testIds.nav.mobileToggle}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-forest"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-forest/10">
          <div className="px-6 py-6 flex flex-col gap-4 text-forest">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`mobile-${l.id}`}
                onClick={() => setOpen(false)}
                className="text-lg font-serif"
              >
                {l.label}
              </a>
            ))}
            <button
              data-testid={`mobile-${testIds.nav.bookBtn}`}
              onClick={() => {
                setOpen(false);
                handleBook();
              }}
              className="btn-primary mt-2 self-start"
            >
              Book Consultation
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
