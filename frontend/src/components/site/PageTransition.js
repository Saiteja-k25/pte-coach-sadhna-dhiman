import { AnimatePresence, motion } from 'framer-motion';

/** Full-viewport curtain that sweeps up when the page mounts. */
export const PageTransition = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="page-curtain"
          className="fixed inset-0 z-[100] pointer-events-none"
          style={{ background: '#1B1712', transformOrigin: 'top' }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
        />
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
};
