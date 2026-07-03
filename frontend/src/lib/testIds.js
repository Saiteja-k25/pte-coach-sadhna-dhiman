export const testIds = {
  nav: {
    logo: 'nav-logo',
    about: 'nav-link-about',
    services: 'nav-link-services',
    experience: 'nav-link-experience',
    testimonials: 'nav-link-testimonials',
    faq: 'nav-link-faq',
    contact: 'nav-link-contact',
    bookBtn: 'nav-book-consultation-btn',
    mobileToggle: 'nav-mobile-toggle',
  },
  hero: {
    bookBtn: 'hero-book-consultation-btn',
    servicesBtn: 'hero-view-services-btn',
    heading: 'hero-heading',
  },
  services: {
    grid: 'services-grid',
    card: (slug) => `service-card-${slug}`,
  },
  stats: 'success-stats-strip',
  testimonials: {
    track: 'testimonials-track',
    prev: 'testimonials-prev',
    next: 'testimonials-next',
  },
  faq: {
    item: (i) => `faq-item-${i}`,
  },
  contact: {
    form: 'contact-form',
    name: 'contact-name-input',
    email: 'contact-email-input',
    exam: 'contact-exam-select',
    message: 'contact-message-textarea',
    submit: 'contact-submit-btn',
    calendlyBtn: 'contact-calendly-btn',
    success: 'contact-success-msg',
  },
  footer: {
    email: 'footer-email-link',
    linkedin: 'footer-linkedin-link',
    book: 'footer-book-btn',
  },
};
