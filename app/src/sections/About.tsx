import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Cloud, Shield } from 'lucide-react';
import { TechLogo } from '@/components/ui/TechLogo';

interface StackGroup {
  label: string;
  slug: string;
  items: string[];
}

const stackGroups: StackGroup[] = [
  {
    label: 'Frontend',
    slug: 'frontend',
    items: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Next.js', 'TanStack Router', 'Radix UI / shadcn'],
  },
  {
    label: 'Cloud & Delivery',
    slug: 'cloud',
    items: ['Cloudflare', 'Wrangler', 'Vercel', 'Docker', 'GitHub Actions'],
  },
  {
    label: 'Data & Persistence',
    slug: 'data',
    items: ['PostgreSQL', 'SQL', 'Prisma', 'Drizzle ORM', 'Neon', 'libSQL'],
  },
  {
    label: 'AI & Agents',
    slug: 'agents',
    items: ['Mastra', 'AI SDK', 'OpenAI SDK', 'Anthropic SDK', 'MCP SDK', 'Vector RAG'],
  },
];

const alsoUsed = [
  'TanStack Query', 'Vitest', 'Playwright', 'Python', 'Node.js', 'Lucide',
  'n8n', 'Vapi', 'Twilio', 'ElevenLabs', 'HubSpot', 'Zoho CRM',
  'Convex', 'Supabase', 'AWS', 'Google Cloud', 'Honcho SDK', 'Linear',
];

const certifications = [
  'Google Project Management Foundations · 2025',
  'IBM Generative AI: Prompt Engineering · 2025',
  'Google Manage Security Risks · 2024',
  'Google Tools of the Trade: Linux & SQL · 2024',
  'Cisco CCNAv7 · 2023',
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section-shell py-20 sm:py-28">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header-grid">
          <div>
            <span className="mono-kicker block">// 01</span>
            <span className="mono-meta">about</span>
          </div>
          <div>
            <h2 className="display-section ink mb-4">
              Engineer first. <em className="italic text-amber-soft">Founder</em> second.
            </h2>
            <p className="ink-dim max-w-2xl">
              The risk-mitigation mindset I picked up doing InfoSec still shapes how I design AI infrastructure today.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5 ink-dim leading-relaxed">
              <p>
                Computer Systems Engineer based in Jalisco, México, building <span className="ink font-medium">production AI systems</span>, legal AI products, and open-source tooling for autonomous workflows.
              </p>
              <p>
                Focused on <span className="text-amber-soft font-medium">multi-agent orchestration</span>, secure infrastructure, and automating operational work with human oversight — the parts most teams skip when shipping AI.
              </p>
              <p>
                At Agentic Engineering I lead the design and delivery of production-grade AI systems: custom AI products, workflow automation, and the <span className="ink font-medium">Cloudflare + Mastra + TanStack</span> stack that powers them at a fraction of hyperscaler cost.
              </p>
              <p>
                Path here: <span className="text-amber-soft font-medium">InfoSec</span> at Eternal Data → <span className="text-amber-soft font-medium">enterprise AI delivery</span> at Tendencia Systems (Software Dev → Tech PM) → <span className="text-amber-soft font-medium">founder</span> at Agentic Engineering.
              </p>
              <p>
                Completing my B.S. in Computer Systems Engineering at ITESO, graduating <span className="ink">December 2026</span>.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t hairline">
              <span className="mono-kicker mb-4 block">// edge</span>
              <ul className="space-y-2.5 text-sm ink-dim">
                <li className="flex items-start gap-3">
                  <Users size={14} className="text-amber-soft mt-1 flex-shrink-0" />
                  <span>Led an 8-person team to ship Tendencia's highest-revenue AI projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap size={14} className="text-amber-soft mt-1 flex-shrink-0" />
                  <span>Multi-agent orchestration in production (Mastra, RAG, vector search).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={14} className="text-amber-soft mt-1 flex-shrink-0" />
                  <span>Author of open-source agent tooling (SpecSafe, Ultimate Harness).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Cloud size={14} className="text-amber-soft mt-1 flex-shrink-0" />
                  <span>Security-first AI infrastructure on Cloudflare, Terraform, CI/CD.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="terminal-block p-0"
          >
            <div className="flex items-center gap-3 px-5 py-3 border-b hairline">
              <span className="w-2 h-2 bg-amber-500" />
              <span className="mono-meta flex-1">~/stack.toml</span>
              <span className="mono-meta text-[10px] ink-faint">last-edit · today</span>
            </div>

            <div className="p-6 space-y-7">
              {stackGroups.map((group) => (
                <div key={group.slug}>
                  <div className="mono-kicker mb-3">[{group.slug}]</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 px-2.5 py-2 border hairline rounded-sm hover:border-amber-500/40 hover:bg-white/[0.03] transition-colors"
                      >
                        <TechLogo name={item} size={16} className="flex-shrink-0" />
                        <span className="font-mono-ui text-[11px] ink-dim truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t hairline">
                <div className="mono-kicker mb-3">[also_used]</div>
                <div className="flex flex-wrap gap-1.5">
                  {alsoUsed.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 px-2 py-1 border hairline rounded-sm"
                    >
                      <TechLogo name={item} size={12} className="flex-shrink-0" />
                      <span className="font-mono-ui text-[10px] ink-dim">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t hairline">
                <div className="mono-kicker mb-3">[certifications]</div>
                <ul className="space-y-1.5">
                  {certifications.map((c) => (
                    <li key={c} className="mono-meta text-[11px]">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
