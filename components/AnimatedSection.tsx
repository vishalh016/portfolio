import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;
  // FIX: Add optional id prop to allow sections to be targeted (e.g., for scrolling), resolving the type error in Contact.tsx.
  id?: string;
}

const AnimatedSection: React.FC<Props> = ({ children, className = '', id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
