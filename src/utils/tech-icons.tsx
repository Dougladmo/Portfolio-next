import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiDjango,
  SiFlask,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiRedis,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiAmazon,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiFramer,
  SiVite,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiJest,
  SiCypress,
  SiFigma,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiReactquery,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiSass,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";

// Mapeamento de tecnologias para ícones
const techIconMap: Record<string, IconType> = {
  // Frontend Frameworks
  React: SiReact,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  Next: SiNextdotjs,
  Vue: SiVuedotjs,
  "Vue.js": SiVuedotjs,
  Angular: SiAngular,
  Svelte: SiSvelte,

  // Languages
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,

  // Styling
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  SASS: SiSass,
  CSS: SiCss3,
  HTML: SiHtml5,

  // Backend
  "Node.js": SiNodedotjs,
  Node: SiNodedotjs,
  Express: SiExpress,
  "Express.js": SiExpress,
  NestJS: SiNestjs,
  Nest: SiNestjs,
  Django: SiDjango,
  Flask: SiFlask,

  // Databases
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Postgres: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,

  // APIs & Query
  GraphQL: SiGraphql,
  "React Query": SiReactquery,

  // State Management & Animation
  Redux: SiRedux,
  "Framer Motion": SiFramer,
  Framer: SiFramer,

  // Build Tools
  Vite: SiVite,
  Webpack: SiWebpack,
  Babel: SiBabel,

  // Quality & Testing
  ESLint: SiEslint,
  Prettier: SiPrettier,
  Jest: SiJest,
  Cypress: SiCypress,

  // DevOps & Deployment
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  AWS: SiAmazon,

  // Backend Services
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  Prisma: SiPrisma,
  "Socket.io": SiSocketdotio,
  Stripe: SiStripe,

  // Design
  Figma: SiFigma,
};

// Função para obter ícone de uma tecnologia
export const getTechIcon = (techName: string): IconType => {
  // Normalizar o nome (remover espaços extras, case insensitive)
  const normalizedTech = techName.trim();

  // Buscar no mapeamento (case-sensitive primeiro, depois case-insensitive)
  if (techIconMap[normalizedTech]) {
    return techIconMap[normalizedTech];
  }

  // Busca case-insensitive
  const lowerTech = normalizedTech.toLowerCase();
  const foundKey = Object.keys(techIconMap).find(
    (key) => key.toLowerCase() === lowerTech
  );

  if (foundKey) {
    return techIconMap[foundKey];
  }

  // Retornar ícone padrão se não encontrado
  return FaCode;
};

// Função para verificar se uma tecnologia tem ícone customizado
export const hasTechIcon = (techName: string): boolean => {
  const normalizedTech = techName.trim();
  if (techIconMap[normalizedTech]) return true;

  const lowerTech = normalizedTech.toLowerCase();
  return Object.keys(techIconMap).some(
    (key) => key.toLowerCase() === lowerTech
  );
};
