// Single source of truth for the portfolio content.
// Everything here comes from the previous site (profile.json) or from real projects.

export const SITE_URL = 'https://julkwel.netlify.app';

export const profile = {
  firstName: 'Julien',
  lastName: 'Rajerison',
  role: 'Développeur fullstack',
  headline: 'Symfony, TypeScript & Next.js',
  city: 'Antananarivo',
  country: 'Madagascar',
  email: 'julienrajerison5@gmail.com',
  phone: '+261 32 94 730 33',
  phoneHref: '+261329473033',
  cv: 'https://docs.google.com/document/d/1S-WBXOYYyaRa0ouOKUieaQQf_FWTSYTOUIlQg6pLPqg/edit?usp=sharing',
  description:
    'Julien Rajerison, développeur fullstack à Madagascar : PHP/Symfony, TypeScript, React et Next.js. Lead developer, fondateur de Techzara, je conçois des produits web robustes, du serveur au pixel.',
};

export const socials = [
  { label: 'GitHub', handle: '@julkwel', href: 'https://github.com/julkwel' },
  { label: 'LinkedIn', handle: 'julien-rajerison', href: 'https://www.linkedin.com/in/julien-rajerison-433715bb/' },
  { label: 'Stack Overflow', handle: 'julien-rajerison', href: 'https://stackoverflow.com/users/10462455/julien-rajerison' },
  { label: 'Facebook', handle: 'julkwel', href: 'https://facebook.com/julkwel' },
];

/** Words cycled in the hero: what Julien builds (all taken from real projects). */
export const builds = [
  'des librairies en ligne',
  'des plateformes de recrutement',
  'des apps de livraison',
  'des back offices',
  'des API robustes',
  'des produits avec des agents IA',
];

export const qualities = ['Autodidacte', 'Leadership', 'Vision', 'Écoute', 'Rigueur technique'];

export type SkillGroup = { id: string; title: string; blurb: string; items: string[]; accent?: boolean };

export const skills: SkillGroup[] = [
  {
    id: 'front',
    title: 'Front-end',
    blurb: 'Interfaces rapides, accessibles, pensées mobile-first.',
    items: ['TypeScript', 'React 19', 'Next.js 16 (App Router)', 'Server Actions', 'Tailwind CSS', 'Angular', 'Vue.js', 'PWA', 'HTML5 / CSS3'],
    accent: true,
  },
  {
    id: 'back',
    title: 'Back-end',
    blurb: 'Du monolithe Symfony aux API Node typées.',
    items: ['PHP', 'Symfony', 'Node.js', 'Fastify', 'Prisma', 'Zod', 'REST', 'GraphQL', 'ElasticSearch', 'RabbitMQ', 'Python'],
  },
  {
    id: 'data',
    title: 'Données',
    blurb: 'Modéliser juste, migrer sans casse.',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Migrations Prisma', 'Kibana'],
  },
  {
    id: 'security',
    title: 'Auth & paiements',
    blurb: 'Sessions sûres et flux d’argent fiables.',
    items: ['Cookies httpOnly + JWT (jose)', 'bcryptjs', 'NextAuth', 'Rôles USER / ADMIN', 'MVola', 'Orange Money', 'Airtel Money'],
  },
  {
    id: 'ops',
    title: 'DevOps',
    blurb: 'Livrer souvent, dormir tranquille.',
    items: ['Docker & Compose', 'Linux', 'Apache', 'Nginx', 'SSH', 'GitLab CI', 'CircleCI', 'GitHub', 'Netlify'],
  },
  {
    id: 'quality',
    title: 'Qualité & IA',
    blurb: 'Tests, lint, et des agents IA bien cadrés.',
    items: ['Vitest', 'ESLint', 'oxlint', 'SEO / Open Graph', 'Agents IA (Claude)', 'Revue de code'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    blurb: 'Quand le web ne suffit pas.',
    items: ['Flutter', 'Notifications push FCM', 'API mobile versionnée'],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  kind: string;
  url?: string;
  stack: string[];
  summary: string;
  caseStudy: {
    context: string;
    challenges: string[];
    solutions: string[];
    outcome: string[];
  };
  metrics?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: 'bloom-book',
    name: 'Bloom Book',
    tagline: 'La librairie en ligne pensée pour Madagascar',
    kind: 'E-commerce · location de livres',
    stack: ['TypeScript', 'Next.js 16', 'React 19', 'Server Actions', 'Prisma 6', 'SQLite', 'jose', 'bcryptjs', 'Vitest', 'ESLint'],
    summary:
      'Achat et location de livres avec paiement Mobile Money, un back office complet et un design pastel mobile-first.',
    caseStudy: {
      context:
        'À Madagascar, la carte bancaire est rare mais le Mobile Money est partout. Bloom Book devait permettre d’acheter et de louer des livres depuis un téléphone, avec les moyens de paiement que les lecteurs utilisent vraiment.',
      challenges: [
        'Trois opérateurs Mobile Money (MVola, Orange Money, Airtel Money) à intégrer dans un même parcours.',
        'Gérer la location en plus de la vente, avec le suivi des paiements.',
        'Séparer clairement l’espace lecteur et l’administration.',
        'Être trouvé sur Google et bien partagé sur les réseaux.',
      ],
      solutions: [
        'Next.js 16 App Router et server actions : la logique métier reste côté serveur, sans API à maintenir en double.',
        'Auth maison par cookie signé (jose) et mots de passe hachés (bcryptjs), rôles USER / ADMIN vérifiés côté serveur.',
        'Prisma 6 sur SQLite : un schéma typé de bout en bout, simple à déployer et à sauvegarder.',
        'Back office admin : livres, commandes, locations et paiements.',
        'Métadonnées SEO et Open Graph générées par page.',
        'Développement accéléré avec des agents IA, cadré par les tests et le lint.',
      ],
      outcome: [
        '75 tests Vitest sur la logique métier.',
        'Catalogue, favoris, commandes et espace « mon compte » dans une interface pastel mobile-first.',
        'Un code TypeScript strict, lint ESLint propre.',
      ],
    },
    metrics: [
      { value: '75', label: 'tests Vitest' },
      { value: '3', label: 'opérateurs Mobile Money' },
      { value: '2', label: 'rôles USER / ADMIN' },
    ],
  },
  {
    slug: 'entanago',
    name: 'EntanaGo',
    tagline: 'La livraison collaborative à Antananarivo',
    kind: 'Plateforme web + mobile',
    url: 'https://entanago.com',
    stack: ['Next.js 16', 'PWA', 'Fastify', 'PostgreSQL', 'Prisma', 'Flutter', 'Firebase FCM', 'Docker', 'Nginx'],
    summary:
      'On publie un colis, un livreur de la communauté le prend en charge. Web PWA, app Flutter et API Fastify.',
    caseStudy: {
      context:
        'Mettre en relation des particuliers qui envoient des colis et des livreurs qui passent déjà par le bon quartier.',
      challenges: [
        'Une même API pour le web et l’application mobile.',
        'Notifier en temps réel les livreurs, sur le web comme sur Android.',
        'Photos de colis lourdes sur des réseaux mobiles lents.',
      ],
      solutions: [
        'API Node + TypeScript sur Fastify (JWT, rate limiting, uploads), PostgreSQL via Prisma.',
        'Front Next.js 16 en PWA avec une couche BFF, app Flutter branchée sur la même API.',
        'Notifications push Firebase Cloud Messaging, web et Android.',
        'Compression des images côté client et côté serveur (sharp).',
      ],
      outcome: [
        'En production sur entanago.com, déployé en Docker derrière Nginx.',
        'Documentation complète : sécurité, architecture, exploitation, SEO.',
      ],
    },
  },
  {
    slug: 'asera',
    name: 'Asera',
    tagline: 'Trouver son prochain poste tech',
    kind: 'Job board',
    url: 'https://as-era.com',
    stack: ['Next.js', 'TypeScript', 'NextAuth', 'Prisma', 'PostgreSQL', 'Tiptap', 'Zod', 'Vitest', 'Docker'],
    summary:
      'Des offres sélectionnées dans des startups et équipes produit, côté candidat comme côté recruteur.',
    caseStudy: {
      context:
        'Un job board soigné pour relier talents tech et équipes produit, avec trois profils : candidat, recruteur, super-admin.',
      challenges: [
        'Des rôles aux droits très différents dans une même application.',
        'Des offres riches, faciles à rédiger pour les recruteurs.',
        'Préparer une application mobile sans dupliquer la logique.',
      ],
      solutions: [
        'NextAuth avec adaptateur Prisma, PostgreSQL, validation Zod partout.',
        'Éditeur riche Tiptap pour les offres, formulaires react-hook-form.',
        'API mobile JSON versionnée (v1) : enveloppe de réponse et codes d’erreur normalisés.',
      ],
      outcome: [
        'En ligne sur as-era.com, tests Vitest avec couverture.',
        'Déploiement Docker sur VPS, scripté.',
      ],
    },
  },
  {
    slug: 'fiarako',
    name: 'Fiarako',
    tagline: 'Le carnet d’entretien de vos véhicules',
    kind: 'Application web',
    stack: ['Next.js', 'TypeScript', 'Server Actions', 'Prisma', 'PostgreSQL', 'jose', 'Tailwind CSS', 'Docker'],
    summary:
      'Enregistrer et retrouver chaque intervention sur ses véhicules, depuis son téléphone.',
    caseStudy: {
      context:
        'Les factures de garage se perdent, l’historique d’un véhicule aussi. Fiarako garde tout au même endroit.',
      challenges: ['Saisie rapide sur mobile, au garage.', 'Données personnelles à protéger.'],
      solutions: [
        'Next.js App Router et server actions, Tailwind mobile-first.',
        'Auth JWT en cookie httpOnly (jose + bcryptjs), schémas Zod.',
        'Docker Compose pour le dev comme pour la prod.',
      ],
      outcome: ['Véhicules, entretiens et travaux suivis dans une interface simple.'],
    },
  },
  {
    slug: 'evolueoo',
    name: 'Evolueoo',
    tagline: 'Studio d’applications accéléré par l’IA',
    kind: 'Site vitrine',
    url: 'https://evolueoo.com',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend', 'Docker'],
    summary: 'Le site du studio basé à Antananarivo, avec formulaire de contact par e-mail transactionnel.',
    caseStudy: {
      context: 'Présenter une offre de création d’applications où l’IA accélère chaque étape.',
      challenges: ['Un site rapide et bien référencé.', 'Recevoir les demandes de façon fiable.'],
      solutions: ['Next.js et Tailwind, e-mails envoyés via Resend.', 'Conteneurisé avec Docker.'],
      outcome: ['La vitrine des projets du studio.'],
    },
  },
];

export type Job = { company: string; role: string; period?: string; stack: string[]; note?: string };

export const experience: Job[] = [
  {
    company: 'Freelance',
    role: 'Développeur PHP/Symfony & JavaScript',
    stack: ['PHP', 'Symfony', 'JavaScript', 'React', 'Next.js'],
  },
  {
    company: 'Bocasay',
    role: 'Lead PHP Developer',
    period: 'Depuis avril 2021',
    stack: ['Management d’équipe', 'Dispatch des tâches', 'Développement'],
    note: 'Encadrer l’équipe, répartir le travail et continuer à coder.',
  },
  {
    company: 'Bocasay',
    role: 'Développeur PHP & JavaScript',
    period: 'Juillet 2019',
    stack: ['PHP', 'Symfony', 'JavaScript', 'Python', 'MongoDB', 'MySQL', 'ElasticSearch', 'RabbitMQ'],
  },
  {
    company: 'Geofit',
    role: 'Consultant PHP (Joomla), en freelance',
    period: '6 mois',
    stack: ['PHP', 'Joomla', 'Symfony', 'JavaScript', 'MySQL'],
  },
  {
    company: 'Livenexx',
    role: 'Développeur PHP & JavaScript',
    stack: ['PHP', 'Symfony', 'jQuery', 'MySQL'],
  },
  {
    company: 'Telma',
    role: 'Développeur JavaScript (React)',
    stack: ['ReactJS', 'PostgreSQL', 'JavaScript'],
  },
  {
    company: 'Orange',
    role: 'Stage',
    period: '3 mois',
    stack: ['C#', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
];

export const education = [
  { title: 'Master II, Management des Systèmes d’Information', school: 'eMedia' },
  { title: 'DTS en Management', school: 'CNTEMAD' },
];

export const certificates = [
  { label: 'Bootstrap 4', href: 'https://skillvalue.com/fr/certificate/q7mDFFGYk2d6Yi9r30eh9EGa3b3bLib6esoaKXuu746LwzHspZfIWJjkfgkb' },
];
