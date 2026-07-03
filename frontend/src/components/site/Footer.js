import { ArrowUpRight } from 'lucide-react';
import { testIds } from '@/lib/testIds';

export const Footer = ({ calendlyUrl, contactEmail }) => {
  return (
    <footer className="relative bg-cream border-t border-forest/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 pt-20 pb-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="overline">Academic Communication Specialist</div>
            <h3
              className="mt-4 font-serif text-forest tracking-tighter leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              Sadhna
              <br />
              <em className="font-light text-terracotta">Dhiman.</em>
            </h3>
            <p className="mt-6 text-moss max-w-md leading-relaxed">
              Independent English coaching for the ambitious. Based in Chandigarh, teaching
              globally.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="overline text-forest/70">Sections</div>
            <ul className="mt-5 space-y-3 text-forest/80 text-[14px]">
              <li><a href="#about" className="link-underline">About</a></li>
              <li><a href="#services" className="link-underline">Services</a></li>
              <li><a href="#experience" className="link-underline">Experience</a></li>
              <li><a href="#testimonials" className="link-underline">Testimonials</a></li>
              <li><a href="#faq" className="link-underline">FAQ</a></li>
              <li><a href="#contact" className="link-underline">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="overline text-forest/70">Reach out</div>
            <ul className="mt-5 space-y-3 text-forest/80 text-[14px]">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  data-testid={testIds.footer.email}
                  className="link-underline"
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
              <li className="text-moss/70 text-[13px]">Chandigarh, India</li>
            </ul>

            <button
              data-testid={testIds.footer.book}
              onClick={() => window.open(calendlyUrl, '_blank', 'noopener,noreferrer')}
              className="btn-ghost mt-8 text-[11px]"
            >
              Book Consultation
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        <div className="mt-20 border-t border-forest/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-moss">
          <div>© {new Date().getFullYear()} Sadhna Dhiman. All rights reserved.</div>
          <div className="tracking-widest uppercase">Crafted with care · India</div>
        </div>
      </div>
    </footer>
  );
};
