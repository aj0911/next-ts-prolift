export interface Project {
  title: string;
  category: string;
  company: string;
  mentor: string;
  technologies: string[];
  subtitle?: string;
  matchPercentage?: number;
  problemStatement?: string;
  objectives?: string[];
  requiredSkills?: {
    name: string;
    level: number;
  }[];
  timeline?: {
    totalWeeks: number;
    hoursPerWeek: number;
    teamSize: number;
    level: string;
  };
  evaluationCriteria?: string[];
  phases?: {
    name: string;
    duration: string;
  }[];
}

export interface ProjectCardProps {
  project: Project;
}

export interface SkillBarProps {
  name: string;
  level: number;
}

