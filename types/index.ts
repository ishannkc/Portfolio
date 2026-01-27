// Type definitions for the portfolio website

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  tagline: string;
  resumeUrl: string;
  profileImage: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 0-100
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  position: string;
  organization: string;
  date: string;
  location: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  status: 'Live' | 'Completed' | 'In Progress' | 'Hackathon Winner';
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
  image: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  credentialUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface HeroSubtitle {
  text: string;
}

export interface AboutParagraph {
  text: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
