
import {
  SiPython, SiApachespark, SiDatabricks, SiGooglecloud,
  SiGit, SiLinux, SiApacheairflow
} from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa';
import { VscTerminalCmd } from 'react-icons/vsc';
import { GoDatabase } from "react-icons/go";
import type { Skill, ExperienceItem, Project, EducationItem } from './types';

export const SKILLS: Skill[] = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'SQL', icon: GoDatabase, color: '#4479A1' },
  { name: 'PySpark', icon: SiApachespark, color: '#E25A1C' },
  { name: 'Apache Spark', icon: SiApachespark, color: '#E25A1C' },
  { name: 'Airflow', icon: SiApacheairflow, color: '#017CEE' },
  { name: 'Databricks', icon: SiDatabricks, color: '#FF3621' },
  { name: 'Azure', icon: FaMicrosoft, color: '#0089D6' },
  { name: 'AWS', icon: FaAws, color: '#232F3E' },
  { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'REST APIs', icon: VscTerminalCmd, color: '#4CC9E4' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Lead Software Engineer',
    company: 'Persistent Systems',
    period: 'Jan 2026 - Present',
    description: [
      'Leading the migration of an on-premises Python-based data platform to Azure Databricks, enabling scalable cloud architecture, improved fault tolerance, and optimized distributed Spark processing.',
      'Defined cloud-ready architecture patterns for large-scale distributed data processing and batch analytics workloads on Azure.',
      'Led the migration of the client’s Azure subscription from Enterprise Agreement (EA) to Microsoft Customer Agreement (MCA), ensuring seamless transition and continuity of billing and cost management processes.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Persistent Systems',
    period: 'Jun 2024 - Dec 2025',
    description: [
      'Optimized and modernized PySpark-based data pipelines for 20+ enterprise clients by upgrading Python and key libraries, migrating legacy servers to modern AWS instances, and introducing Spark worker nodes for parallel processing. Designed a cluster management layer to orchestrate Spark-based ETL workloads, increasing overall pipeline performance by ~50% on average (up to 70% for large-scale workloads).',
      'Engineered a dynamic truncation framework for deletion scripts, reducing cache overloading and significantly improving the stability and performance of daily ETL processes.',
      'Integrated additional cloud provider APIs to enhance visibility into Savings Plans, credits, and usage analytics, improving accuracy in cloud cost analysis and enabling more effective cost optimization strategies.',
      'Spearheaded the implementation of the FinOps FOCUS schema across AWS, Azure, and GCP, standardizing cost and usage datasets and enabling consistent cross-cloud financial reporting and analytics.',
      'Produced comprehensive technical documentation for system architecture, workflows, and operational procedures, streamlining onboarding and contributing to zero client escalations.',
      'Conducted 25+ internal knowledge-sharing sessions on cloud technologies and data engineering practices, improving team capability and delivery efficiency.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Persistent Systems',
    period: 'Jun 2022 - Jun 2024',
    description: [
      'Migrated deprecated Usage Details API to Azure Cost Management APIs to ensure continuous operations.',
      'Normalized ETL scripts across multiple clients by abstracting common logic, isolating only client-specific business rules into modular components—enhancing reusability, scalability, and maintenance efficiency.',
      'Developed 10+ POCs to enhance platform capabilities, with anonymized client data for secure demos and pre-sales enablement.',
      'Built internal monitoring tools to track ETL job health, enabling early detection of failures and improving pipeline reliability and observability.',
      'Developed vendor credential validation utilities to automate and simplify onboarding, reducing manual errors and accelerating integration timelines.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Finops cost usage report analysis using azure databricks',
    description: 'Analyzing FOCUS cost data vs actual cloud cost, calculating cost variance and building analytical dashboards for financial visibility.',
    tags: ['Azure', 'Databricks', 'FinOps', 'FOCUS'],
    githubUrl: 'https://github.com/vishalh016/finops-cost-analysis.git',
  },
  {
    title: 'Football ETL Data Analysis',
    description: 'An end-to-end ETL pipeline for analyzing football match data from various APIs. The project involves data extraction, transformation using Spark, and loading into a data lake for analytical queries.',
    tags: ['Python', 'Spark', 'ETL', 'API'],
    githubUrl: 'https://github.com/vishalh016/footballAPI_ETL_data_analysis',
  },
  {
    title: 'Code Summary using GENAI',
    description: 'A tool that generates concise code summaries and documentation using generative AI. It scans a repository and produces natural-language summaries for files and modules to improve code discoverability and onboarding.',
    tags: ['Generative AI', 'NLP', 'Python'],
    githubUrl: 'https://github.com/vishalh016/Code-Summary-using-GENAI',
  },
  {
    title: 'Image Generation Using AI',
    description: 'Generative image synthesis project that implements models to create images from text prompts and datasets. Includes training and inference pipelines for experimentation and demoing.',
    tags: ['Generative AI', 'Diffusion', 'Python'],
    githubUrl: 'https://github.com/vishalh016/ImageGenerationUsingAI',
  },
  {
    title: 'YouTube AI Assistant',
    description: 'An AI assistant for YouTube that generates summaries, extracts transcripts, and provides content suggestions from video URLs using speech-to-text and language models.',
    tags: ['NLP', 'RAG', 'YouTube', 'Python'],
    githubUrl: 'https://github.com/vishalh016/Youtube-AI-assistant',
  },
  {
    title: 'Face Detection',
    description: 'Real-time face detection and recognition demo using OpenCV and deep learning models. Supports detection, tracking, and basic recognition workflows for demos and prototyping.',
    tags: ['Computer Vision', 'OpenCV', 'Face Recognition', 'Python'],
    githubUrl: 'https://github.com/vishalh016/FaceDetection',
  },
];

export const EDUCATION: EducationItem = {
  degree: 'B.Tech in Electronics and Communication Engineering',
  institution: 'Academy of Technology',
  year: 2022,
  cgpa: '8.78 / 10.0'
};