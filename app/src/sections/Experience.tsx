import React from 'react';
import { motion } from 'framer-motion';

interface Commit {
  hash: string;
  refs?: string;
  role: string;
  scope: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
}

const commits: Commit[] = [
  {
    hash: 'a3f2c1e',
    refs: 'HEAD → main, tag: v6.0',
    role: 'feat(role)',
    scope: 'Co-Founder / Technical Lead',
    company: 'Agentic Engineering',
    period: 'Dec 2025 → Present',
    location: 'Jalisco, México',
    summary:
      'Leading the design and delivery of production-grade AI systems — custom AI products, workflow automation, multi-agent orchestration, and secure AI infrastructure for client and internal use cases.',
    bullets: [
      'Building Curia: legal AI for automated court monitoring, deadline tracking, and cited-document analysis for Mexican law firms.',
      'Authored open-source tooling: SpecSafe (skills-first TDD framework with QA gates) and Ultimate Harness (portable execution + verification harness).',
      'Architected the Cloudflare + Mastra + TanStack stack powering products at ~99.5% lower cost than equivalent hyperscaler setups.',
      'Currently in pre-seed, scaling the team and client base.',
    ],
  },
  {
    hash: 'b4e1d2a',
    refs: 'tag: v5.0',
    role: 'feat(role)',
    scope: 'Information Security Analyst (Contractor)',
    company: 'Eternal Data',
    period: 'Oct 2024 → Feb 2026',
    location: 'Jalisco, México',
    summary:
      'Vulnerability research, assessment, and mitigation supporting ransomware-risk reduction for enterprise clients. Same risk-mitigation mindset I now apply to AI infrastructure.',
    bullets: [
      'Key client: Cinépolis — largest cinema chain in México and one of the largest worldwide.',
      'Built Python/Shell automations for scanning workflows, data transformation, and report generation.',
      'Conducted penetration testing and security assessments across client environments.',
    ],
  },
  {
    hash: 'c5d8a91',
    refs: 'tag: v4.0',
    role: 'feat(promotion)',
    scope: 'Technical Project Manager',
    company: 'Tendencia Systems',
    period: 'May 2025 → Dec 2025',
    location: 'Jalisco, México',
    summary:
      "Promoted from developer to PM after demonstrating ownership on the firm's highest-revenue AI projects. Managed cross-functional team of eight; shipped with near-zero scope creep.",
    bullets: [
      'Architected RAG-based search processing 300,000+ vehicle records across 11 Mexican insurance APIs (80%+ matching accuracy).',
      'Delivered WhatsApp lead-qualification + appointment-scheduling bot for Sta. Austin Medical Center, routing qualified leads to sales daily.',
      'Ran a team of 8: 2 senior devs, 2 junior devs, DevOps, QA, designer, + PM.',
      'Reduced scope creep ~60% through structured PM practices.',
    ],
  },
  {
    hash: 'd6f4b22',
    refs: 'tag: v3.0',
    role: 'feat(role)',
    scope: 'Software & Automation Developer',
    company: 'Tendencia Systems',
    period: 'Nov 2024 → May 2025',
    location: 'Jalisco, México',
    summary:
      "Built bilingual voice and chat agents for Florida law firms and Mexican enterprises. Productionized the voice stack that became the firm's flagship offering.",
    bullets: [
      'Shipped 6 bilingual (EN/ES) voicebots handling 700+ calls/month — ~40% of inbound volume — for intake, collections, and reception.',
      'Avoided additional reception hiring; freed attorneys to focus on billable work.',
      'Stack: Twilio · n8n · TypeScript · Digital Ocean · Google Cloud · Zoho CRM.',
    ],
  },
  {
    hash: 'e7c1f3b',
    refs: 'tag: v2.0',
    role: 'feat(role)',
    scope: 'Information Security Intern',
    company: 'Eternal Data',
    period: 'Jun 2023 → Oct 2024',
    location: 'Jalisco, México',
    summary:
      'First professional role. Learned offensive + defensive security fundamentals on real client engagements before being brought back as a contractor.',
    bullets: [
      'Supported vulnerability assessments and remediation tracking across multiple enterprise clients.',
      'Wrote Shell + Python tooling to automate repetitive scanning and reporting tasks.',
      'Built the risk-mitigation foundation that still shapes how I design AI infrastructure today.',
    ],
  },
  {
    hash: 'f8a9d05',
    refs: 'tag: v1.0, root-commit',
    role: 'init',
    scope: 'B.S. Computer Systems Engineering',
    company: 'ITESO',
    period: 'Aug 2022 → Dec 2026',
    location: 'Guadalajara, México',
    summary:
      '8th semester, graduating December 2026. Focus on AI, software engineering, and distributed systems. Class projects routinely shipped solo or in tiny teams using the AI-orchestrator workflow I now use in production.',
    bullets: [
      'SensorGrid — IoT environmental monitoring presented at the 3er Congreso de Ingenierías SUJ 2026.',
      'Fraud Detector — MLOps final project, end-to-end XGBoost model deployed on Cloudflare.',
      'AURA — pitch deck for Innovación y Emprendimiento, validated as a venture concept.',
      'ReparaYa — solo full-stack delivery in 2 weeks, validating the AI-orchestrator philosophy.',
    ],
  },
];

const Gutter: React.FC = () => (
  <span aria-hidden className="select-none ink-faint shrink-0 w-4 text-center">│</span>
);

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-shell py-20 sm:py-32">
      <div className="absolute bottom-0 left-1/4 w-[24rem] h-[24rem] bg-amber-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header-grid">
          <div>
            <span className="mono-kicker block">// 03</span>
            <span className="mono-meta">work_log</span>
          </div>
          <div>
            <h2 className="display-section ink mb-4">
              Three<span className="text-amber-soft">+</span> years, <em className="italic">one through-line</em>.
            </h2>
            <p className="ink-dim max-w-2xl">
              InfoSec → enterprise AI delivery → founder. Same risk-mitigation muscle, different surface.
            </p>
          </div>
        </div>

        <motion.div
          className="terminal-block p-0 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 px-5 py-3 border-b hairline">
            <span className="w-2 h-2 bg-amber-500" />
            <span className="mono-meta flex-1 truncate">
              $ git log --graph --pretty=full --since="2022-08"
            </span>
            <span className="mono-meta text-[10px] ink-faint hidden sm:inline">6 commits · main</span>
          </div>

          <div className="font-mono-ui text-[12.5px] sm:text-[13px] leading-[1.65] p-5 sm:p-7">
            {commits.map((c, i) => (
              <motion.div
                key={c.hash}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span aria-hidden className="select-none text-amber shrink-0 w-4 text-center">*</span>
                  <span className="ink">commit</span>
                  <span className="text-amber-soft">{c.hash}</span>
                  {c.refs && (
                    <span className="ink-faint">
                      (<span className="text-amber/80">{c.refs}</span>)
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-2 flex-wrap">
                  <Gutter />
                  <span className="ink-dim">Author:</span>
                  <span className="ink">Fernando Ramos</span>
                  <span className="ink-faint hidden sm:inline">&lt;fernando@agenticengineering.agency&gt;</span>
                </div>

                <div className="flex items-baseline gap-2 flex-wrap">
                  <Gutter />
                  <span className="ink-dim">Date:&nbsp;&nbsp;</span>
                  <span className="ink">{c.period}</span>
                  <span className="ink-faint">·</span>
                  <span className="ink-faint">{c.location}</span>
                </div>

                <div className="flex items-baseline gap-2"><Gutter /></div>

                <div className="flex items-baseline gap-2">
                  <Gutter />
                  <span className="ml-2 sm:ml-4 flex flex-wrap items-baseline gap-x-1">
                    <span className="text-amber-soft">{c.role}</span>
                    <span className="ink-dim">:</span>
                    <span className="ink font-semibold">{c.scope}</span>
                    <span className="ink-dim">—</span>
                    <span className="ink">{c.company}</span>
                  </span>
                </div>

                <div className="flex items-baseline gap-2"><Gutter /></div>

                <div className="flex gap-2">
                  <Gutter />
                  <p className="ml-2 sm:ml-4 ink-dim leading-[1.7]">{c.summary}</p>
                </div>

                <div className="flex items-baseline gap-2"><Gutter /></div>

                {c.bullets.map((b, bi) => (
                  <div key={bi} className="flex gap-2">
                    <Gutter />
                    <span className="ml-2 sm:ml-4 flex gap-2 ink-dim leading-[1.7]">
                      <span aria-hidden className="text-amber shrink-0 select-none">+</span>
                      <span>{b}</span>
                    </span>
                  </div>
                ))}

                {i < commits.length - 1 && (
                  <>
                    <div className="flex items-baseline gap-2"><Gutter /></div>
                    <div className="flex items-baseline gap-2 pb-1"><Gutter /></div>
                  </>
                )}
              </motion.div>
            ))}

            <div className="flex items-baseline gap-2 mt-2">
              <span aria-hidden className="select-none text-amber shrink-0 w-4 text-center">⌃</span>
              <span className="ink-faint">end of log · pre-2022 omitted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
