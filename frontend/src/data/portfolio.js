export const profile = {
  name: 'Billy Nankouman Keita',
  title: 'Développeur Full Stack',
  role: 'PDG de Djoma Tech',
  greeting: 'Bonjour, je suis',
  tagline:
    'Je conçois et développe des applications web et mobiles performantes, élégantes et centrées sur l\'expérience utilisateur.',
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
  professionalGoals:
    'Contribuer à des projets innovants en tant que développeur Full Stack, en alliant excellence technique, design soigné et impact business mesurable.',
  vision:
    'Créer des solutions numériques qui simplifient la vie des utilisateurs tout en repoussant les limites de la technologie.',
  values: ['Excellence', 'Innovation', 'Collaboration', 'Rigueur', 'Créativité'],
  objectives: [
    'Maîtriser les architectures cloud-native et microservices',
    'Contribuer à des projets open source significatifs',
    'Évoluer vers un rôle de lead developer',
  ],
};

export const stats = [
  { id: 'experience', label: "Années d'expérience", value: 2, suffix: '+' },
  { id: 'projects', label: 'Projets réalisés', value: 5, suffix: '+' },
  { id: 'technologies', label: 'Technologies maîtrisées', value: 10, suffix: '+' },
  { id: 'clients', label: 'Clients & collaborations', value: 5, suffix: '+' },
];

export const journey = [
  { year: '2018', title: 'Début en développement', description: 'Premiers pas en HTML, CSS et JavaScript.' },
  { year: '2020', title: 'Formation Full Stack', description: 'Spécialisation React, Node.js et bases de données.' },
  { year: '2022', title: 'Première expérience pro', description: 'Développement d\'applications web en entreprise.' },
  { year: '2024', title: 'Full Stack confirmé', description: 'Projets complexes, mobile et cloud.' },
];

export const fallbackSkills = [
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
  { id: 11, name: 'MongoDB', category: 'Base de données', level: 82, icon: 'database' },
  { id: 12, name: 'Redis', category: 'Base de données', level: 75, icon: 'database' },
  { id: 13, name: 'Git', category: 'Outils', level: 92, icon: 'git' },
  { id: 14, name: 'Docker', category: 'Outils', level: 80, icon: 'docker' },
  { id: 15, name: 'Figma', category: 'Outils', level: 78, icon: 'figma' },
  { id: 16, name: 'AWS', category: 'Cloud', level: 78, icon: 'cloud' },
  { id: 17, name: 'Firebase', category: 'Cloud', level: 82, icon: 'cloud' },
  { id: 18, name: 'Vercel', category: 'Cloud', level: 85, icon: 'cloud' },
];

export const skillCategories = [
  'Frontend',
  'Backend',
  'Mobile',
  'Base de données',
  'Outils',
  'Cloud',
];

export const techCloud = [
  'React', 'Node.js', 'TypeScript', 'Flutter', 'PostgreSQL', 'Docker',
  'AWS', 'Next.js', 'MongoDB', 'GraphQL', 'Redis', 'Tailwind',
  'Python', 'Firebase', 'Git', 'Figma', 'Express', 'Vite',
];

export const fallbackProjects = [
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
  {
    id: 4,
    title: 'API REST Microservices',
    description: 'Architecture microservices scalable avec authentification JWT et documentation Swagger.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    projectUrl: '#',
    githubUrl: '#',
    technologies: ['Node.js', 'Express', 'Docker', 'MongoDB'],
    featured: false,
    status: 'Terminé',
    date: '2024',
    category: 'Backend',
  },
];

export const projectFilters = [
  'Tous',
  'Frontend',
  'Backend',
  'Flutter',
  'Node.js',
  'React',
  'Autres',
];

export const services = [
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
  {
    id: 3,
    icon: 'smartphone',
    title: 'Applications Mobile',
    description: 'Apps cross-platform élégantes pour iOS et Android.',
    features: ['Flutter & React Native', 'UI native', 'Notifications push', 'Synchronisation cloud'],
  },
  {
    id: 4,
    icon: 'palette',
    title: 'UI/UX Design',
    description: 'Interfaces intuitives et esthétiques centrées utilisateur.',
    features: ['Wireframes', 'Prototypage', 'Design system', 'Tests utilisateurs'],
  },
  {
    id: 5,
    icon: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Déploiement, CI/CD et infrastructure cloud optimisée.',
    features: ['AWS & Firebase', 'Docker', 'CI/CD', 'Monitoring'],
  },
  {
    id: 6,
    icon: 'consulting',
    title: 'Conseil Technique',
    description: 'Accompagnement stratégique pour vos projets numériques.',
    features: ['Audit technique', 'Architecture', 'Code review', 'Formation équipe'],
  },
];

export const education = [
  {
    id: 1,
    institution: 'École Supérieure du Numérique',
    degree: 'Master Développement Full Stack',
    period: '2020 – 2022',
    description: 'Spécialisation en architectures web modernes, DevOps et gestion de projet agile.',
    icon: 'graduation',
  },
  {
    id: 2,
    institution: 'Université Paris-Saclay',
    degree: 'Licence Informatique',
    period: '2017 – 2020',
    description: 'Fondamentaux en algorithmique, structures de données et programmation orientée objet.',
    icon: 'university',
  },
  {
    id: 3,
    institution: 'OpenClassrooms',
    degree: 'Certification React & Node.js',
    period: '2021',
    description: 'Formation intensive sur l\'écosystème JavaScript moderne et les bonnes pratiques.',
    icon: 'certificate',
  },
];

export const experiences = [
  {
    id: 1,
    company: 'TechVision Solutions',
    position: 'Développeur Full Stack Senior',
    period: '2023 – Présent',
    logo: 'TV',
    responsibilities: [
      'Conception et développement d\'applications web complexes',
      'Encadrement technique d\'une équipe de 3 développeurs',
      'Mise en place de pipelines CI/CD et déploiements cloud',
      'Optimisation des performances (-40% temps de chargement)',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 2,
    company: 'DigitalCraft Agency',
    position: 'Développeur Full Stack',
    period: '2021 – 2023',
    logo: 'DC',
    responsibilities: [
      'Développement de sites et applications pour clients variés',
      'Intégration d\'APIs tierces (paiement, analytics, CRM)',
      'Collaboration étroite avec designers et chefs de projet',
      'Maintenance et évolution de projets existants',
    ],
    technologies: ['React', 'Express', 'MongoDB', 'Flutter', 'Firebase'],
  },
  {
    id: 3,
    company: 'StartUp Innovate',
    position: 'Développeur Junior',
    period: '2020 – 2021',
    logo: 'SI',
    responsibilities: [
      'Développement frontend de l\'application principale',
      'Création de composants réutilisables',
      'Tests unitaires et participation aux revues de code',
      'Documentation technique des fonctionnalités',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'MySQL'],
  },
];

export const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'services', label: 'Services' },
  { id: 'formation', label: 'Formation' },
  { id: 'experience', label: 'Expérience' },
  { id: 'contact', label: 'Contact' },
];

export function getSkillLevelLabel(level) {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Avancé';
  if (level >= 60) return 'Intermédiaire';
  return 'Débutant';
}
