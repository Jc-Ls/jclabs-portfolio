export interface Project {
  id: string;
  name: string;
  type: string;
  status: 'Deployed' | 'Acquisition Open' | 'Seeking Partner' | 'Operational' | 'Archived' | 'Venture';
  description: string;
  tech: string[];
  image: string;
  link?: string; // Optional live link
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface Skill {
  category: string;
  skills: string[];
  accent: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
