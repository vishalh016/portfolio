import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { EDUCATION } from '../constants';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';

interface EducationProps {
  id: string;
}

const Education: React.FC<EducationProps> = ({ id }) => {
  return (
    <AnimatedSection id={id}>
      <SectionHeader title="Education" subtitle="My Academic Background" />
      <div className="max-w-2xl mx-auto bg-light-secondary dark:bg-secondary p-8 rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-xl flex items-center gap-6">
        <div className="text-accent">
          <FaGraduationCap size={48} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{EDUCATION.degree}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{EDUCATION.institution}, Graduated {EDUCATION.year}</p>
          <p className="text-accent font-semibold mt-2">CGPA: {EDUCATION.cgpa}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;