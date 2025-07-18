// Paage_1.5.jsx
import './Paage_1.5.css';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

function Page() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="quote-wrapper">
      <AnimatePresence>
        {inView && (
          <motion.div
            className="background-fade"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      <div ref={ref} className="quote">
        <h1>
          Crafting data-driven solutions with a developer’s mind and a designer’s eye.
        </h1>
      </div>
    </div>
  );
}

export default Page;