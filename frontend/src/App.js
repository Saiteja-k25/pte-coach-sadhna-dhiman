import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';

import { PageTransition } from '@/components/site/PageTransition';
import { Navbar } from '@/components/site/Navbar';
import { Hero } from '@/components/site/Hero';
import { About } from '@/components/site/About';
import { Services } from '@/components/site/Services';
import { Experience } from '@/components/site/Experience';
import { Stats } from '@/components/site/Stats';
import { Testimonials } from '@/components/site/Testimonials';
import { FAQ } from '@/components/site/FAQ';
import { Contact } from '@/components/site/Contact';
import { Footer } from '@/components/site/Footer';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const DEFAULT_CONFIG = {
  calendly_url: 'https://calendly.com/sadhna-dhiman',
  contact_email: 'er.sadhnadhiman@gmail.com',
};

const Landing = () => {
  const [cfg, setCfg] = useState(DEFAULT_CONFIG);

  useEffect(() => {
    axios
      .get(`${API}/config`)
      .then((r) => setCfg(r.data))
      .catch(() => {});
    document.title = 'Sadhna Dhiman — Academic Communication Specialist';
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-sand text-ink">
        <Navbar calendlyUrl={cfg.calendly_url} />
        <main>
          <Hero calendlyUrl={cfg.calendly_url} />
          <About />
          <Services calendlyUrl={cfg.calendly_url} />
          <Experience />
          <Stats />
          <Testimonials />
          <FAQ />
          <Contact calendlyUrl={cfg.calendly_url} contactEmail={cfg.contact_email} />
        </main>
        <Footer calendlyUrl={cfg.calendly_url} contactEmail={cfg.contact_email} />
        <Toaster position="top-right" richColors />
      </div>
    </PageTransition>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
