import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../constants';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';

interface ProjectsProps {
  id: string;
}

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      className="bg-light-secondary dark:bg-secondary p-8 rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-xl overflow-hidden relative group transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(244, 63, 94, 0.15), transparent 80%)`
        }}
      />
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        <a
          data-cursor-pointer
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 group-hover:text-accent group-hover:scale-110 transition-all duration-300 z-10"
          aria-label="GitHub link"
        >
          <FaGithub size={28} />
        </a>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full z-10">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <AnimatedSection id={id}>
      <SectionHeader title="Featured Projects" subtitle="My Work" />
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;