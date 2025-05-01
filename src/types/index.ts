// export interface Project {
//   id: number;
//   title: string;
//   description: string;
//   techStack: string[];
//   imageUrl: string;
//   demoUrl?: string;
//   githubUrl?: string;
// }

export interface Project {
  id:  string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: 'graphic' | 'uiux' | 'frontend';
  tech: string[];
}

export interface Skill {
  category: string;
  items: {
    name: string;
    proficiency: number;
  }[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}



export type Category = 'graphic' | 'uiux' | 'frontend';

export interface CategoryInfo {
  id: Category;
  title: string;
  description: string;
  color: string;
  icon: string;
}