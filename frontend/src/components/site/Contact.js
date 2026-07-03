import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
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
import { Reveal } from '@/lib/motion';

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
    <section id="contact" className="relative py-20 md:py-32 lg:py-40 bg-ink text-ivory overflow-hidden">
      <div aria-hidden className="absolute inset-0 grain opacity-40" />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #8B6F4E, transparent 70%)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.8 }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #5E2F3D, transparent 70%)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.8, delay: 0.2 }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* LEFT — pitch */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="overline text-ivory/60">Reach out</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-[2.4rem] sm:text-5xl lg:text-6xl tracking-tighter leading-[1.02] text-ivory">
              Let&rsquo;s map out
              <br />
              <em className="font-light text-mocha">your path.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-ivory/75 leading-[1.85] max-w-md">
              Book a complimentary 20-minute consultation to discuss your target exam, timeline
              and current strengths. Or send a note — every message is read and replied to
              personally.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <button
              data-testid={testIds.contact.calendlyBtn}
              onClick={openCalendly}
              className="mt-9 md:mt-10 inline-flex items-center gap-2 bg-ivory text-ink px-6 md:px-7 py-3.5 md:py-4 text-[12px] md:text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-mocha hover:text-ivory transition-all duration-500 group"
            >
              Book on Calendly
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 md:mt-14 border-t border-ivory/15 pt-7 md:pt-8 space-y-4 text-ivory/85">
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 group">
                <Mail size={18} className="text-mocha" />
                <span className="link-underline break-all">{contactEmail}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sadhna-dhiman-025151ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Linkedin size={18} className="text-mocha" />
                <span className="link-underline">LinkedIn Profile</span>
              </a>
              <p className="text-[13px] text-ivory/60 pt-2 max-w-sm">
                Direct phone details are shared privately once you confirm a booking or submit
                an enquiry.
              </p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — form */}
        <Reveal delay={0.2} className="lg:col-span-7">
          <form
            data-testid={testIds.contact.form}
            onSubmit={submit}
            className="bg-sand text-ink p-7 md:p-10 lg:p-12 space-y-5 md:space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <label className="block">
                <span className="overline text-ink/70">Your name</span>
                <input
                  data-testid={testIds.contact.name}
                  type="text"
                  value={form.name}
                  onChange={onChange('name')}
                  required
                  placeholder="Full name"
                  className="mt-3 w-full bg-transparent border-b border-ink/25 py-3 focus:border-mocha focus:outline-none placeholder-ink/30 text-ink transition-colors"
                />
              </label>
              <label className="block">
                <span className="overline text-ink/70">Email</span>
                <input
                  data-testid={testIds.contact.email}
                  type="email"
                  value={form.email}
                  onChange={onChange('email')}
                  required
                  placeholder="you@example.com"
                  className="mt-3 w-full bg-transparent border-b border-ink/25 py-3 focus:border-mocha focus:outline-none placeholder-ink/30 text-ink transition-colors"
                />
              </label>
            </div>

            <div>
              <span className="overline text-ink/70">Target exam or focus</span>
              <div className="mt-3">
                <Select
                  value={form.target_exam}
                  onValueChange={(v) => setForm((f) => ({ ...f, target_exam: v }))}
                >
                  <SelectTrigger
                    data-testid={testIds.contact.exam}
                    className="w-full rounded-none border-0 border-b border-ink/25 focus:border-mocha focus:ring-0 bg-transparent px-0 py-3 text-ink h-auto"
                  >
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent className="bg-sand border-ink/15">
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
              <span className="overline text-ink/70">A short message</span>
              <textarea
                data-testid={testIds.contact.message}
                value={form.message}
                onChange={onChange('message')}
                required
                rows={5}
                placeholder="Where you are today, where you want to be, when you'd like to start…"
                className="mt-3 w-full bg-transparent border-b border-ink/25 py-3 focus:border-mocha focus:outline-none resize-none placeholder-ink/30 text-ink transition-colors"
              />
            </label>

            <div className="flex flex-col md:flex-row md:items-center gap-4 pt-2 md:pt-4">
              <button
                type="submit"
                data-testid={testIds.contact.submit}
                disabled={loading}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed w-full md:w-auto justify-center"
              >
                <span>{loading ? 'Sending…' : 'Send Enquiry'}</span>
                <ArrowUpRight size={16} />
              </button>
              {submitted && (
                <motion.div
                  data-testid={testIds.contact.success}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-ink text-sm"
                >
                  <CheckCircle2 size={18} className="text-mocha" />
                  Reply will land in your inbox shortly.
                </motion.div>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
