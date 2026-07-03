import { motion, useReducedMotion } from 'framer-motion';

// Subtle, editorial motion presets

export const easeOut = [0.7, 0, 0.15, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: easeOut },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: easeOut } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: easeOut } },
};

export const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const useSubtle = () => {
  const reduce = useReducedMotion();
  return reduce ? {} : undefined;
};

/** Reveal-on-scroll wrapper: fades + slides in when 15% in view. */
export const Reveal = ({ children, delay = 0, className = '', as: Comp = motion.div, y = 24 }) => {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 0 } : { opacity: 0, y };
  const animate = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };
  return (
    <Comp
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
    >
      {children}
    </Comp>
  );
};
