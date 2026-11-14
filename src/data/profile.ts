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
    'Julien Rajerison, développeur fullstack à Madagascar : PHP/Symfony, TypeScript, React et Next.js. Lead developer, fondateur de Techzara, créateur de Boubou : je conçois des produits web robustes et des plateformes d’agents IA.',
};

export const socials = [
  { label: 'GitHub', handle: '@julkwel', href: 'https://github.com/julkwel' },
  { label: 'LinkedIn', handle: 'julien-rajerison', href: 'https://www.linkedin.com/in/julien-rajerison-433715bb/' },
  { label: 'Stack Overflow', handle: 'julien-rajerison', href: 'https://stackoverflow.com/users/10462455/julien-rajerison' },
  { label: 'Facebook', handle: 'julkwel', href: 'https://facebook.com/julkwel' },
];

/** Words cycled in the hero: what Julien builds (all taken from real projects). */
export const builds = [
  'des équipes d’agents IA',
  'des plateformes de recrutement',
  'des apps de livraison',
  'des apps desktop',
  'des API robustes',
  'des back offices',
];

export const qualities = ['Autodidacte', 'Leadership', 'Vision', 'Écoute', 'Rigueur technique'];

/** Items with an entry in `techIcons` (src/data/techIcons.ts) render as logos, the rest as text chips. */
export type SkillGroup = { id: string; title: string; blurb: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    id: 'ai',
    title: 'IA & agents',
    blurb: 'Des agents IA qui codent, encadrés par la plateforme.',
    items: ['Claude Code', 'MCP (outils d’agents)', 'Orchestration multi-agents', 'Sandbox Docker', 'Policy engine', 'Revue automatisée'],
  },
  {
    id: 'front',
    title: 'Front-end',
    blurb: 'Interfaces rapides, accessibles, pensées mobile-first.',
    items: ['TypeScript', 'React 19', 'Next.js 16 (App Router)', 'Server Actions', 'Tailwind CSS', 'Angular', 'Vue.js', 'PWA', 'HTML5', 'CSS'],
  },
  {
    id: 'back',
    title: 'Back-end',
    blurb: 'Du monolithe Symfony aux API Node typées.',
    items: ['PHP', 'Symfony', 'Node.js', 'Fastify', 'Prisma', 'Drizzle', 'Zod', 'SSE', 'REST', 'GraphQL', 'ElasticSearch', 'RabbitMQ', 'Python'],
  },
  {
    id: 'data',
    title: 'Données',
    blurb: 'Modéliser juste, migrer sans casse.',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'BullMQ', 'Kibana'],
  },
  {
    id: 'security',
    title: 'Auth & sécurité',
    blurb: 'Sessions sûres, secrets chiffrés, droits explicites.',
    items: ['JWT (jose)', 'Cookies httpOnly', 'bcryptjs', 'NextAuth', 'Rôles & permissions', 'AES-256-GCM', 'Journal d’audit'],
  },
  {
    id: 'ops',
    title: 'DevOps',
    blurb: 'Livrer souvent, dormir tranquille.',
    items: ['Docker & Compose', 'Linux', 'Caddy', 'Apache', 'Let’s Encrypt (Certbot)', 'SSH', 'GitLab CI', 'CircleCI', 'GitHub'],
  },
  {
    id: 'quality',
    title: 'Qualité',
    blurb: 'Tests, lint et SEO, à chaque livraison.',
    items: ['Vitest', 'Playwright', 'ESLint', 'oxlint', 'SEO / Open Graph', 'Lighthouse'],
  },
  {
    id: 'mobile',
    title: 'Desktop & mobile',
    blurb: 'Quand le navigateur ne suffit pas.',
    items: ['Electron', 'Flutter', 'Android', 'Firebase Cloud Messaging', 'API mobile versionnée'],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  kind: string;
  url?: string;
  /** Illustrative mockup shown for featured projects. */
  visual?: 'boubou' | 'asera';
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

export const featured: Project[] = [
  {
    slug: 'boubou',
    name: 'Boubou',
    tagline: 'Une équipe d’ingénieurs IA, auto-hébergée',
    kind: 'Plateforme · web, desktop, mobile',
    visual: 'boubou',
    stack: ['TypeScript', 'Next.js', 'Fastify', 'PostgreSQL', 'Drizzle', 'Redis', 'BullMQ', 'Docker', 'Caddy', 'Claude Code', 'MCP', 'Electron', 'Flutter'],
    summary:
      'Chaque projet a son canal et son agent IA. Boubou gère tout ce qu’on ne confie pas à un agent : identité, droits, secrets, isolation et audit.',
    caseStudy: {
      context:
        'Faire travailler des agents IA sur de vrais projets, sans jamais avoir à leur faire confiance. Boubou est le plan de contrôle autour de l’agent.',
      challenges: [
        'Laisser un agent coder, ouvrir des pull requests ou opérer un serveur, sans lui donner les clés.',
        'Suivre en temps réel le travail de plusieurs agents, projet par projet.',
        'Garder la main : chaque action sensible doit être autorisée, tracée, réversible.',
      ],
      solutions: [
        'Un canal par projet, messages et progression des tâches en temps réel (Server-Sent Events, Redis pub/sub).',
        'Agents spécialisés : développeur, DevOps (via SSH) et auditeur sécurité ; un Tech Lead relit, un CTO tranche.',
        'Chaque tâche tourne dans un sandbox Docker durci, sans aucun secret ; les outils MCP passent par un broker et un moteur de règles.',
        'Autonomie graduée : de conseiller à pull request. Merge, déploiement et accès aux identifiants sont toujours refusés et audités.',
        'Secrets chiffrés au repos (AES-256-GCM), injectés par la plateforme et masqués dans toutes les sorties.',
        'Une app desktop Electron (canaux, jusqu’à 4 panneaux de bots, dictée vocale) et une app Android Flutter sur la même API.',
      ],
      outcome: [
        'Monorepo TypeScript : API Fastify, worker d’orchestration, UI Next.js, paquets partagés testés avec Vitest.',
        'Déploiement en une commande avec Docker Compose et HTTPS automatique (Caddy).',
        'Un journal d’audit complet des actions humaines et des agents.',
      ],
    },
    metrics: [
      { value: '3', label: 'agents spécialisés' },
      { value: '4', label: 'bots en parallèle sur desktop' },
      { value: '0', label: 'secret dans le sandbox' },
    ],
  },
  {
    slug: 'asera',
    name: 'Asera',
    tagline: 'Trouver son prochain poste tech',
    kind: 'Job board · web + API mobile',
    url: 'https://as-era.com',
    visual: 'asera',
    stack: ['Next.js', 'TypeScript', 'NextAuth', 'Prisma', 'PostgreSQL', 'Tiptap', 'react-hook-form', 'Zod', 'Vitest', 'Docker'],
    summary: 'Des offres sélectionnées dans des startups et des équipes produit, côté candidat comme côté recruteur.',
    caseStudy: {
      context:
        'Un job board soigné pour relier talents tech et équipes produit, avec trois profils : candidat, recruteur et super-admin.',
      challenges: [
        'Des rôles aux droits très différents dans une même application.',
        'Des offres riches, faciles à rédiger pour les recruteurs.',
        'Préparer une application mobile sans dupliquer la logique métier.',
      ],
      solutions: [
        'NextAuth avec adaptateur Prisma sur PostgreSQL, validation Zod de bout en bout.',
        'Éditeur riche Tiptap pour les offres, formulaires react-hook-form.',
        'API mobile JSON versionnée (v1) : enveloppe de réponse, pagination et codes d’erreur normalisés, schémas Zod comme source de vérité.',
        'L’administration reste web, réservée au super-admin.',
      ],
      outcome: ['En ligne sur as-era.com.', 'Tests Vitest avec couverture.', 'Déploiement Docker sur VPS, scripté.'],
    },
    metrics: [
      { value: '3', label: 'rôles : candidat, recruteur, admin' },
      { value: 'v1', label: 'API mobile versionnée' },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'entanago',
    name: 'EntanaGo',
    tagline: 'La livraison collaborative à Antananarivo',
    kind: 'Plateforme web + mobile',
    url: 'https://entanago.com',
    stack: ['Next.js 16', 'React 19', 'PWA', 'Fastify', 'PostgreSQL', 'Prisma', 'Flutter', 'Firebase FCM', 'Leaflet', 'Docker', 'Apache'],
    summary:
      'Un vendeur publie un colis, un voisin qui fait le trajet le livre. Web PWA, app Android Flutter et API Fastify.',
    caseStudy: {
      context:
        'Mettre en relation, à Antananarivo, des personnes qui envoient un colis et des livreurs particuliers qui passent déjà par là.',
      challenges: [
        'Sécuriser la remise d’un colis entre inconnus.',
        'Une même API pour le web et l’application mobile.',
        'Prévenir les livreurs en temps réel, sur le web comme sur Android.',
      ],
      solutions: [
        'Deux codes PIN valident la récupération puis la remise ; un cycle de vie du colis strict, côté serveur.',
        'API Node + TypeScript sur Fastify (JWT, rate limiting, uploads), PostgreSQL via Prisma.',
        'Front Next.js 16 en PWA avec une couche BFF ; app Flutter sur la même API ; carte « près de moi » (Leaflet).',
        'Notifications push Firebase Cloud Messaging ; commissions suivies avec paiement Mobile Money.',
      ],
      outcome: [
        'En production sur entanago.com, en Docker derrière Apache.',
        'Documentation complète : fonctionnement, sécurité, architecture, exploitation, SEO.',
      ],
    },
  },
  {
    slug: 'fiarako',
    name: 'Fiarako',
    tagline: 'Le carnet d’entretien de vos véhicules',
    kind: 'Application web',
    stack: ['Next.js', 'TypeScript', 'Server Actions', 'Prisma', 'PostgreSQL', 'jose', 'Tailwind CSS', 'Docker'],
    summary: 'Enregistrer et retrouver chaque intervention sur ses véhicules, depuis son téléphone.',
    caseStudy: {
      context: 'Les factures de garage se perdent, l’historique d’un véhicule aussi. Fiarako garde tout au même endroit.',
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
