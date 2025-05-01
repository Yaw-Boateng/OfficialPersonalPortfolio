import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 95 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", proficiency: 85 },
      { name: "Python", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 75 }
    ]
  }
];