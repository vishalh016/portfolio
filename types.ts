
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    year: number;
    cgpa: string;
}
