import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <AnimatedSection id={id}>
      <SectionHeader title="About Me" subtitle="My Introduction" />
      <div className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
        <p>
          Data Engineer with 3+ years of experience building and optimizing large-scale data platforms and Spark-based ETL/ELT pipelines processing ~1.5 TB of data daily.
        </p>
        <p className="mt-4">
          Experienced in Apache Spark, PySpark, Azure Databricks, and cloud data architectures, with hands-on expertise in migrating legacy on-prem data platforms to scalable Azure environments.
        </p>
        <p className="mt-4">
          Proven track record of improving pipeline performance by 50–70%, standardizing multi-client data workflows, and implementing cross-cloud FinOps data models. Recognized for strong ownership, technical leadership, and driving scalable, cost-efficient analytics solutions across enterprise environments.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default About;