import React from 'react';
import { MdWork } from 'react-icons/md';
import { motion, Variants } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';

interface ExperienceProps {
  id: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
};

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <AnimatedSection id={id}>
      <SectionHeader title="Work Experience" subtitle="My Career Journey" />
      <motion.div
        className="relative border-l-2 border-accent/30 pl-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {EXPERIENCE.map((item, index) => (
          <motion.div key={index} className="mb-10 last:mb-0" variants={itemVariants}>
            <div className="absolute -left-4 top-1 w-8 h-8 bg-light-secondary dark:bg-secondary rounded-full border-2 border-accent flex items-center justify-center">
              <MdWork className="text-accent" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{item.role}</h3>
            <h4 className="text-md font-semibold text-accent">{item.company}</h4>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Experience;