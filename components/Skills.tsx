import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../constants';
import type { Skill } from '../types';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon;

  const cardVariants: Variants = {
    rest: {
      y: 0,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
      y: -5,
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)'
    }
  };

  const iconVariants: Variants = {
    rest: {
      rotate: 0
    },
    hover: {
      rotate: [0, 15, -15, 15, 0],
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      data-cursor-pointer
      className="bg-light-secondary dark:bg-secondary p-6 rounded-lg flex flex-col items-center justify-center gap-4 border border-gray-200 dark:border-gray-700/50"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <motion.div variants={iconVariants}>
        <Icon size={48} style={{ color: skill.color }} />
      </motion.div>
      <p className="font-semibold text-gray-800 dark:text-white">{skill.name}</p>
    </motion.div>
  );
};

interface SkillsProps {
  id: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <AnimatedSection id={id}>
      <SectionHeader title="Technical Skills" subtitle="My Expertise" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;