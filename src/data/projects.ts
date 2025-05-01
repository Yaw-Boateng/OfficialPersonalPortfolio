import { Project, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'graphic',
    title: 'Graphic Design Portfolio',
    description: 'A collection of branding, print, and digital design work showcasing creative solutions for various clients.',
    color: 'from-pink-500 to-red-500',
    icon: 'PenTool'
  },
  {
    id: 'uiux',
    title: 'UI/UX Design Projects',
    description: 'User-centered digital experiences with intuitive interfaces and smooth interactions.',
    color: 'from-blue-500 to-indigo-500',
    icon: 'Layers'
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern web applications built with React, focusing on performance and user experience.',
    color: 'from-green-500 to-emerald-500',
    icon: 'Code'
  }
];

export const projects: Project[] = [
  // Graphic Design Projects
  {
    id: 'brand-identity-1',
    title: 'Corporate Brand Identity',
    description: 'Complete brand identity system for a tech startup, including logo, color palette, typography, and brand guidelines.',
    image: 'https://images.pexels.com/photos/5849560/pexels-photo-5849560.jpeg',
    link: 'https://www.instagram.com/p/CmPJus-sq05/',
    category: 'graphic',
    tech: ['Photoshop', 'Illustrator', 'InDesign']
  },
  {
    id: 'print-design-1',
    title: 'Magazine Layout Design',
    description: 'Editorial design for a fashion magazine, featuring custom typography and photography direction.',
    image: 'https://images.pexels.com/photos/4132336/pexels-photo-4132336.jpeg',
    link: 'https://www.instagram.com/p/CmPJus-sq05/',
    category: 'graphic',
    tech: ['InDesign', 'Photoshop', 'Typography']
  },
  {
    id: 'packaging-1',
    title: 'Product Packaging Design',
    description: 'Custom packaging design for an organic food brand, focusing on sustainability and clean aesthetics.',
    image: 'https://images.pexels.com/photos/4467457/pexels-photo-4467457.jpeg',
    link: 'https://www.instagram.com/p/CmPJus-sq05/',
    category: 'graphic',
    tech: ['Illustrator', '3D Mockup', 'Photoshop']
  },
  {
    id: 'poster-1',
    title: 'Event Poster Series',
    description: 'Set of promotional posters for a music festival, featuring bold typography and vibrant colors.',
    image: 'https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg',
    link: 'https://www.instagram.com/p/CmPJus-sq05/',
    category: 'graphic',
    tech: ['Photoshop', 'Illustrator', 'Digital Painting']
  },

  // UI/UX Design Projects
  {
    id: 'mobile-app-1',
    title: 'Health & Fitness Mobile App',
    description: 'User-centered design for a health tracking application with activity monitoring and nutrition logging features.',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg',
    link: 'https://www.figma.com/proto/L3JlP3d2E43gjUoLEyObDs/group-9',
    category: 'uiux',
    tech: ['Figma', 'Prototyping', 'User Research']
  },
  {
    id: 'website-redesign-1',
    title: 'E-commerce Website Redesign',
    description: 'Complete overhaul of an e-commerce platform, focusing on conversion optimization and user experience improvements.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    link: 'https://www.figma.com/proto/L3JlP3d2E43gjUoLEyObDs/group-9',
    category: 'uiux',
    tech: ['Figma', 'User Testing', 'Wireframing']
  },
  {
    id: 'dashboard-1',
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard for a marketing platform, displaying key metrics and actionable insights.',
    image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg',
    link: 'https://www.figma.com/proto/L3JlP3d2E43gjUoLEyObDs/group-9',
    category: 'uiux',
    tech: ['Figma', 'Data Visualization', 'UX Research']
  },
  {
    id: 'design-system-1',
    title: 'Design System Development',
    description: 'Comprehensive design system for a fintech company, including components, patterns, and documentation.',
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg',
    link: 'https://www.figma.com/proto/L3JlP3d2E43gjUoLEyObDs/group-9',
    category: 'uiux',
    tech: ['Figma', 'Documentation', 'Component Design']
  },

  // Frontend Development Projects
  {
    id: 'react-app-1',
    title: 'Task Management Application',
    description: 'Feature-rich task management app built with React, featuring drag-and-drop functionality and team collaboration tools.',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg',
    link: 'https://github.com/yourusername',
    category: 'frontend',
    tech: ['React', 'TypeScript', 'Redux']
  },
  {
    id: 'ecommerce-frontend-1',
    title: 'E-commerce Frontend',
    description: 'High-performance e-commerce frontend built with modern JavaScript tools, featuring cart functionality and payment integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    link: 'https://github.com/yourusername',
    category: 'frontend',
    tech: ['React', 'Next.js', 'Tailwind CSS']
  },
  {
    id: 'portfolio-site-1',
    title: 'Interactive Portfolio Website',
    description: 'Personal portfolio website with advanced animations and interactive elements showcasing creative work.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    link: 'https://github.com/yourusername',
    category: 'frontend',
    tech: ['React', 'Three.js', 'GSAP']
  },
  {
    id: 'dashboard-frontend-1',
    title: 'Real-time Analytics Dashboard',
    description: 'Data visualization dashboard with real-time updates and interactive charts for a business intelligence tool.',
    image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg',
    link: 'https://github.com/yourusername',
    category: 'frontend',
    tech: ['React', 'D3.js', 'WebSockets']
  }
];