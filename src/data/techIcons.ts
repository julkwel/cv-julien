/**
 * Logos for the skills section, resolved at build time (no client JS).
 * Monochrome paths drawn with currentColor, so they follow the light/dark theme.
 * Source: simple-icons (CC0); Playwright from devicon (MIT), absent from simple-icons.
 */
import {
  siAndroid, siAngular, siApache, siCaddy, siCircleci, siClaude, siCss, siDocker, siDrizzle, siElasticsearch,
  siElectron, siEslint, siFastify, siFirebase, siFlutter, siGithub, siGitlab, siGraphql, siHtml5, siJsonwebtokens,
  siKibana, siLetsencrypt, siLighthouse, siLinux, siModelcontextprotocol, siMongodb, siMysql, siNextdotjs,
  siNodedotjs, siOxc, siPhp, siPostgresql, siPrisma, siPwa, siPython, siRabbitmq, siReact, siRedis, siSymfony,
  siTailwindcss, siTypescript, siVitest, siVuedotjs, siZod,
} from 'simple-icons';

export type TechIcon = { path: string; viewBox: string };

const si = (icon: { path: string }): TechIcon => ({ path: icon.path, viewBox: '0 0 24 24' });

/** Keys are the exact item labels used in `skills` (src/data/profile.ts). */
export const techIcons: Record<string, TechIcon> = {
  'Claude Code': si(siClaude),
  'MCP (outils d’agents)': si(siModelcontextprotocol),
  TypeScript: si(siTypescript),
  'React 19': si(siReact),
  'Next.js 16 (App Router)': si(siNextdotjs),
  'Tailwind CSS': si(siTailwindcss),
  Angular: si(siAngular),
  'Vue.js': si(siVuedotjs),
  PWA: si(siPwa),
  HTML5: si(siHtml5),
  CSS: si(siCss),
  PHP: si(siPhp),
  Symfony: si(siSymfony),
  'Node.js': si(siNodedotjs),
  Fastify: si(siFastify),
  Prisma: si(siPrisma),
  Drizzle: si(siDrizzle),
  Zod: si(siZod),
  GraphQL: si(siGraphql),
  ElasticSearch: si(siElasticsearch),
  RabbitMQ: si(siRabbitmq),
  Python: si(siPython),
  PostgreSQL: si(siPostgresql),
  MySQL: si(siMysql),
  MongoDB: si(siMongodb),
  Redis: si(siRedis),
  Kibana: si(siKibana),
  'JWT (jose)': si(siJsonwebtokens),
  'Docker & Compose': si(siDocker),
  Linux: si(siLinux),
  Caddy: si(siCaddy),
  Apache: si(siApache),
  'Let’s Encrypt (Certbot)': si(siLetsencrypt),
  'GitLab CI': si(siGitlab),
  CircleCI: si(siCircleci),
  GitHub: si(siGithub),
  Vitest: si(siVitest),
  Playwright: {
    viewBox: '0 0 128 128',
    path: 'm72.086 86.132-.594-.144c-13.125-3.844-15.15-14.311-15.15-14.311l18.182 5.082L84.15 39.77l-.116-.031c-11.807-3.162-19.64-8.692-22.744-11.292-4.4-3.685-6.335-6.246-8.24-2.372-1.682 3.417-3.836 8.977-5.92 16.762-4.516 16.857-7.892 52.429 20.027 59.914l.572.129zm-18.807-30.85s4.4-6.843 11.862-4.722c7.467 2.121 8.045 10.376 8.045 10.376zm-8.517 23.451L31.787 82.41s1.41-8.029 10.968-11.212l-7.347-27.573-.635.193c-9.111 2.457-16.476 1.805-19.55 1.273-4.357-.751-6.636-1.708-6.422 1.606.186 2.923.882 7.454 2.477 13.44 3.45 12.961 14.854 37.937 36.405 32.132l.635-.199-3.555-13.337ZM19.548 60.315l15.316-4.035s-.446 5.892-6.188 7.405c-5.743 1.512-9.128-3.371-9.128-3.371zm89.824-18.979c-3.981.698-13.532 1.567-25.336-1.596-11.807-3.162-19.64-8.692-22.744-11.292-4.4-3.685-6.335-6.246-8.24-2.372-1.684 3.417-3.837 8.977-5.921 16.762-4.516 16.857-7.892 52.429 20.027 59.914 27.912 7.479 42.772-25.017 47.289-41.875 2.084-7.783 2.998-13.676 3.25-17.476.287-4.305-2.67-3.055-8.324-2.064zM53.28 55.282s4.4-6.843 11.862-4.722c7.467 2.121 8.045 10.376 8.045 10.376zm18.215 30.706c-13.125-3.845-15.15-14.311-15.15-14.311l35.259 9.858c0-.002-7.117 8.25-20.109 4.453zm12.466-21.51s4.394-6.838 11.854-4.711c7.46 2.124 8.048 10.379 8.048 10.379zM51.732 83.935v-7.179l-19.945 5.656s1.474-8.563 11.876-11.514c3.155-.894 5.846-.888 8.069-.459V40.995h9.987c-1.087-3.36-2.139-5.947-3.023-7.744-1.461-2.975-2.96-1.003-6.361 1.842-2.396 2.001-8.45 6.271-17.561 8.726-9.111 2.457-16.476 1.805-19.55 1.273-4.357-.752-6.636-1.708-6.422 1.605.186 2.923.882 7.455 2.477 13.44 3.45 12.962 14.854 37.937 36.405 32.132 5.629-1.517 9.603-4.515 12.357-8.336h-8.309Zm-32.185-23.62 15.316-4.035s-.446 5.892-6.188 7.405c-5.743 1.512-9.128-3.371-9.128-3.371z',
  },
  ESLint: si(siEslint),
  oxlint: si(siOxc),
  Lighthouse: si(siLighthouse),
  Electron: si(siElectron),
  Flutter: si(siFlutter),
  Android: si(siAndroid),
  'Firebase Cloud Messaging': si(siFirebase),
};
