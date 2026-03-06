import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      {subtitle && <p className="text-accent font-semibold text-sm uppercase tracking-widest">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">{title}</h2>
      <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded"></div>
    </div>
  );
};

export default SectionHeader;