import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, ArrowUpRight, CheckCircle2, Linkedin } from 'lucide-react';
import { testIds } from '@/lib/testIds';
import { useReveal } from '@/hooks/useReveal';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const exams = [
  'IELTS',
  'TOEFL',
  'PTE',
  'CELPIP',
  'Spoken English',
  'Public Speaking',
  'Creative Writing',
  'Other',
];

export const Contact = ({ calendlyUrl, contactEmail }) => {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', target_exam: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const openCalendly = () => window.open(calendlyUrl, '_blank', 'noopener,noreferrer');

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.target_exam || !form.message) {
      toast.error('Please fill in every field before sending.');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      setSubmitted(true);
      toast.success('Thank you — your message is with Sadhna.');
      setForm({ name: '', email: '', target_exam: '', message: '' });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === 'string' ? detail : 'Could not send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => setSubmitted(false), 8000);
      return () => clearTimeout(t);
    }
  }, [submitted]);

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-forest text-cream overflow-hidden">
      <div aria-hidden className="absolute inset-0 grain opacity-30" />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #A45D44, transparent 70%)' }}
      />
      <div ref={ref} className="reveal relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-16">
        {/* LEFT — pitch */}
        <div className="lg:col-span-5">
          <div className="overline text-cream/60">Reach out</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05]">
            Let&rsquo;s map out
            <br />
            <em className="font-light text-terracotta">your path.</em>
          </h2>
          <p className="mt-6 text-cream/75 leading-[1.85] max-w-md">
            Book a complimentary 20-minute consultation to discuss your target exam, timeline
            and current strengths. Or send a note — every message is read and replied to
            personally.
          </p>

          <button
            data-testid={testIds.contact.calendlyBtn}
            onClick={openCalendly}
            className="mt-10 inline-flex items-center gap-2 bg-cream text-forest px-7 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-terracotta hover:text-cream transition-all"
          >
            Book on Calendly
            <ArrowUpRight size={16} />
          </button>

          <div className="mt-14 border-t border-cream/15 pt-8 space-y-4 text-cream/80">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-3 group"
            >
              <Mail size={18} className="text-terracotta" />
              <span className="link-underline">{contactEmail}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sadhna-dhiman-025151ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <Linkedin size={18} className="text-terracotta" />
              <span className="link-underline">LinkedIn Profile</span>
            </a>
            <p className="text-[13px] text-cream/60 pt-2 max-w-sm">
              Direct phone details are shared privately once you confirm a booking or submit
              an enquiry.
            </p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="lg:col-span-7">
          <form
            data-testid={testIds.contact.form}
            onSubmit={submit}
            className="bg-cream text-forest p-8 md:p-12 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <label className="block">
                <span className="overline text-forest/70">Your name</span>
                <input
                  data-testid={testIds.contact.name}
                  type="text"
                  value={form.name}
                  onChange={onChange('name')}
                  required
                  placeholder="Full name"
                  className="mt-3 w-full bg-transparent border-b border-forest/25 py-3 focus:border-terracotta focus:outline-none placeholder-forest/30 text-forest"
                />
              </label>
              <label className="block">
                <span className="overline text-forest/70">Email</span>
                <input
                  data-testid={testIds.contact.email}
                  type="email"
                  value={form.email}
                  onChange={onChange('email')}
                  required
                  placeholder="you@example.com"
                  className="mt-3 w-full bg-transparent border-b border-forest/25 py-3 focus:border-terracotta focus:outline-none placeholder-forest/30 text-forest"
                />
              </label>
            </div>

            <div>
              <span className="overline text-forest/70">Target exam or focus</span>
              <div className="mt-3">
                <Select
                  value={form.target_exam}
                  onValueChange={(v) => setForm((f) => ({ ...f, target_exam: v }))}
                >
                  <SelectTrigger
                    data-testid={testIds.contact.exam}
                    className="w-full rounded-none border-0 border-b border-forest/25 focus:border-terracotta focus:ring-0 bg-transparent px-0 py-3 text-forest h-auto"
                  >
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent className="bg-cream border-forest/15">
                    {exams.map((e) => (
                      <SelectItem key={e} value={e} data-testid={`exam-option-${e}`}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <label className="block">
              <span className="overline text-forest/70">A short message</span>
              <textarea
                data-testid={testIds.contact.message}
                value={form.message}
                onChange={onChange('message')}
                required
                rows={5}
                placeholder="Where you are today, where you want to be, when you'd like to start…"
                className="mt-3 w-full bg-transparent border-b border-forest/25 py-3 focus:border-terracotta focus:outline-none resize-none placeholder-forest/30 text-forest"
              />
            </label>

            <div className="flex flex-col md:flex-row md:items-center gap-4 pt-4">
              <button
                type="submit"
                data-testid={testIds.contact.submit}
                disabled={loading}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Send Enquiry'}
                <ArrowUpRight size={16} />
              </button>
              {submitted && (
                <div
                  data-testid={testIds.contact.success}
                  className="flex items-center gap-2 text-forest text-sm"
                >
                  <CheckCircle2 size={18} className="text-terracotta" />
                  Reply will land in your inbox shortly.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
