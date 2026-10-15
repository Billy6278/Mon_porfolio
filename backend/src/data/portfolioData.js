const profile = {
  name: 'Billy Nankouman Keita',
  title: 'Développeur Full Stack',
  greeting: 'Bonjour, je suis',
  tagline: 'Je conçois et développe des applications web et mobiles performantes, élégantes et centrées sur l’expérience utilisateur.',
  age: 26,
  location: 'Paris, France',
  email: 'contact@bnk-dev.com',
  phone: '+33 6 00 00 00 00',
  whatsapp: '+33 6 00 00 00 00',
  address: 'Paris, Île-de-France, France',
  languages: ['Français (natif)', 'Anglais (courant)', 'Espagnol (intermédiaire)'],
  github: 'https://github.com/bnk-dev',
  linkedin: 'https://linkedin.com/in/bnk-dev',
  cvUrl: '/cv.pdf',
  professionalGoals: 'Contribuer à des projets innovants en tant que développeur Full Stack, en alliant excellence technique, design soigné et impact business mesurable.',
  vision: 'Créer des solutions numériques qui simplifient la vie des utilisateurs tout en repoussant les limites de la technologie.',
  values: ['Excellence', 'Innovation', 'Collaboration', 'Rigueur', 'Créativité'],
  objectives: [
    'Maîtriser les architectures cloud-native et microservices',
    'Contribuer à des projets open source significatifs',
    'Évoluer vers un rôle de lead developer',
  ],
};

const skills = [
  { id: 1, name: 'React', category: 'Frontend', level: 92, icon: 'react' },
  { id: 2, name: 'TypeScript', category: 'Frontend', level: 88, icon: 'typescript' },
  { id: 3, name: 'Tailwind CSS', category: 'Frontend', level: 90, icon: 'tailwind' },
  { id: 4, name: 'Next.js', category: 'Frontend', level: 85, icon: 'nextjs' },
  { id: 5, name: 'Node.js', category: 'Backend', level: 90, icon: 'nodejs' },
  { id: 6, name: 'Express', category: 'Backend', level: 88, icon: 'express' },
  { id: 7, name: 'Python', category: 'Backend', level: 82, icon: 'python' },
  { id: 8, name: 'Flutter', category: 'Mobile', level: 80, icon: 'flutter' },
  { id: 9, name: 'React Native', category: 'Mobile', level: 78, icon: 'react' },
  { id: 10, name: 'PostgreSQL', category: 'Base de données', level: 85, icon: 'database' },
];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Premium',
    description: 'Plateforme e-commerce complète avec panier, paiement Stripe et tableau de bord de gestion.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    projectUrl: '#',
    githubUrl: '#',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    featured: true,
    status: 'Terminé',
    date: '2025',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord temps réel avec graphiques interactifs et export de données.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    projectUrl: '#',
    githubUrl: '#',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    featured: true,
    status: 'Terminé',
    date: '2024',
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'App Mobile Fitness',
    description: 'Application mobile de suivi fitness avec synchronisation cloud et notifications.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    projectUrl: '#',
    githubUrl: '#',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    featured: false,
    status: 'En cours',
    date: '2025',
    category: 'Flutter',
  },
];

const services = [
  {
    id: 1,
    icon: 'code',
    title: 'Développement Web',
    description: 'Sites et applications web modernes, performants et responsive.',
    features: ['SPA & SSR', 'Design responsive', 'Optimisation SEO', 'Accessibilité WCAG'],
  },
  {
    id: 2,
    icon: 'server',
    title: 'Développement Backend',
    description: 'APIs robustes, sécurisées et scalables pour vos applications.',
    features: ['REST & GraphQL', 'Authentification', 'Base de données', 'Documentation API'],
  },
];

const education = [
  {
    id: 1,
    institution: 'École Supérieure du Numérique',
    degree: 'Master Développement Full Stack',
    period: '2020 – 2022',
    description: 'Spécialisation en architectures web modernes, DevOps et gestion de projet agile.',
    icon: 'graduation',
  },
];

const experiences = [
  {
    id: 1,
    company: 'TechVision Solutions',
    position: 'Développeur Full Stack Senior',
    period: '2023 – Présent',
    logo: 'TV',
    responsibilities: [
      'Conception et développement d’applications web complexes',
      'Encadrement technique d’une équipe de 3 développeurs',
      'Mise en place de pipelines CI/CD et déploiements cloud',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
];

module.exports = {
  profile,
  skills,
  projects,
  services,
  education,
  experiences,
};
