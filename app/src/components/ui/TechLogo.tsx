import React from 'react';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiCloudflare,
  SiVercel,
  SiDocker,
  SiGithubactions,
  SiPostgresql,
  SiPrisma,
  SiOpenai,
  SiAnthropic,
  SiVitest,
  SiRadixui,
  SiShadcnui,
  SiPython,
  SiNodedotjs,
  SiSupabase,
  SiTwilio,
  SiHubspot,
  SiZoho,
  SiGoogle,
  SiLinear,
  SiN8N,
} from 'react-icons/si';

interface BrandSpec {
  Icon?: React.ComponentType<React.SVGAttributes<SVGElement> & { size?: number | string }>;
  color: string;
  initial?: string;
}

const REGISTRY: Record<string, BrandSpec> = {
  TypeScript:        { Icon: SiTypescript,    color: '#3178C6' },
  React:             { Icon: SiReact,         color: '#61DAFB' },
  'Tailwind CSS':    { Icon: SiTailwindcss,   color: '#38BDF8' },
  Vite:              { Icon: SiVite,          color: '#A371F7' },
  'Next.js':         { Icon: SiNextdotjs,     color: '#F5F5F5' },
  'TanStack Router': { color: '#FF6154',      initial: 'TS' },
  'TanStack Query':  { color: '#FF6154',      initial: 'TQ' },
  TanStack:          { color: '#FF6154',      initial: 'T' },
  Cloudflare:        { Icon: SiCloudflare,    color: '#F38020' },
  'Cloudflare Workers': { Icon: SiCloudflare, color: '#F38020' },
  Wrangler:          { color: '#F38020',      initial: 'W' },
  Vercel:            { Icon: SiVercel,        color: '#F5F5F5' },
  Docker:            { Icon: SiDocker,        color: '#2496ED' },
  'GitHub Actions':  { Icon: SiGithubactions, color: '#2088FF' },
  PostgreSQL:        { Icon: SiPostgresql,    color: '#4169E1' },
  SQL:               { color: '#4169E1',      initial: 'SQL' },
  Prisma:            { Icon: SiPrisma,        color: '#F5F5F5' },
  'Drizzle ORM':     { color: '#C5F74F',      initial: 'D' },
  Neon:              { color: '#00E699',      initial: 'N' },
  libSQL:            { color: '#4FD1C5',      initial: 'L' },
  Mastra:            { color: '#F59E3A',      initial: 'M' },
  'AI SDK':          { color: '#F5F5F5',      initial: 'ai' },
  'OpenAI SDK':      { Icon: SiOpenai,        color: '#F5F5F5' },
  'Anthropic SDK':   { Icon: SiAnthropic,     color: '#D97706' },
  'MCP SDK':         { color: '#F59E3A',      initial: 'mcp' },
  'Vector RAG':      { color: '#A78BFA',      initial: 'R' },
  Python:            { Icon: SiPython,        color: '#3776AB' },
  'Node.js':         { Icon: SiNodedotjs,     color: '#5FA04E' },
  Vitest:            { Icon: SiVitest,        color: '#6E9F18' },
  Playwright:        { color: '#2EAD33',      initial: 'P' },
  Lucide:            { color: '#F5F5F5',      initial: 'L' },
  'Radix UI':        { Icon: SiRadixui,       color: '#F5F5F5' },
  'Radix UI / shadcn': { Icon: SiShadcnui,    color: '#F5F5F5' },
  shadcn:            { Icon: SiShadcnui,      color: '#F5F5F5' },
  Supabase:          { Icon: SiSupabase,      color: '#3FCF8E' },
  Twilio:            { Icon: SiTwilio,        color: '#F22F46' },
  HubSpot:           { Icon: SiHubspot,       color: '#FF7A59' },
  'Zoho CRM':        { Icon: SiZoho,          color: '#E42527' },
  'Google Cloud':    { Icon: SiGoogle,        color: '#F5F5F5' },
  AWS:               { color: '#FF9900',      initial: 'aws' },
  Linear:            { Icon: SiLinear,        color: '#5E6AD2' },
  n8n:               { Icon: SiN8N,           color: '#EA4B71' },
  Vapi:              { color: '#10B981',      initial: 'V' },
  ElevenLabs:        { color: '#F5F5F5',      initial: 'E' },
  Convex:            { color: '#EE3F5E',      initial: 'C' },
  'Honcho SDK':      { color: '#F59E3A',      initial: 'H' },
  'Linear SDK':      { Icon: SiLinear,        color: '#5E6AD2' },
};

export const TechLogo: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 18,
  className = '',
}) => {
  const spec = REGISTRY[name];
  if (!spec) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-sm font-mono-ui text-[10px] ink ${className}`}
        style={{ width: size, height: size }}
      >
        {name.charAt(0)}
      </span>
    );
  }

  if (spec.Icon) {
    const Icon = spec.Icon;
    return <Icon className={className} size={size} style={{ color: spec.color }} />;
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm font-mono-ui text-[10px] font-semibold tracking-tight ${className}`}
      style={{
        width: size + 4,
        height: size,
        color: spec.color,
        border: `1px solid ${spec.color}55`,
        background: `${spec.color}15`,
      }}
    >
      {spec.initial}
    </span>
  );
};
