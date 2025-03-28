export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: 'design' | 'development';
  tagline?: string;
  longDescription?: string;
  features?: string[];
  technologies?: string[];
  role?: string;
  projectType?: string;
  process?: {
    title: string;
    description: string;
  }[];
  impact?: {
    metric: string;
    value: string;
  }[];
  challenges?: {
    problem: string;
    solution: string;
  }[];
  demoLink?: string;
  githubLink?: string;
  relatedProjects?: {
    id: number;
    title: string;
    image: string;
  }[];
}