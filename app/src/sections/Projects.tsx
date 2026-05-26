import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Phone, MessageSquare, X, FileText } from 'lucide-react';
import { SkillBadge } from '@/components/ui/SkillBadge';

type Category = 'enterprise' | 'agentic' | 'academic';
type Band = 'product' | 'oss';

interface DocLink {
  label: string;
  href: string;
}

interface Project {
  caseId: string;
  year: string;
  title: string;
  description: string;
  metrics: string;
  tags: string[];
  category: Category;
  band?: Band;
  link?: string;
  github?: string;
  npm?: string;
  showContact?: boolean;
  docs?: DocLink[];
}

const projects: Project[] = [
  {
    caseId: 'case_01',
    year: '2025 →',
    title: 'Curia',
    description:
      'Legal AI for Mexican law firms. Automated court monitoring, deadline tracking, document analysis, and cited-source verification — one reliable layer of legal work for litigators and partners.',
    metrics: 'flagship b2b product · active client onboarding · mexican law firms',
    tags: ['Legal AI', 'Multi-Agent', 'Mastra', 'Cloudflare', 'TypeScript'],
    category: 'agentic',
    band: 'product',
    link: 'https://agenticengineering.online/',
  },
  {
    caseId: 'case_02',
    year: '2025 →',
    title: 'Agentic Engineering',
    description:
      'AI-native engineering agency. Full-stack AI products, agent workflows, and production systems — designed with senior engineering review from day one. The shop behind Curia, SpecSafe, and Ultimate Harness.',
    metrics: 'co-founded dec 2025 · pre-seed · team of 4',
    tags: ['Agency', 'AI Systems', 'Multi-Agent', 'Production'],
    category: 'agentic',
    band: 'product',
    link: 'https://agenticengineering.agency/',
  },
  {
    caseId: 'oss_01',
    year: '2025',
    title: 'SpecSafe',
    description:
      'A skills-first framework that keeps AI coding agents aligned with human intent through specifications, test-driven implementation, and QA gates. Supports 8 AI tools across 3 integration tiers.',
    metrics: 'oss · npm package · 8 ai tools · 3 integration tiers',
    tags: ['TypeScript', 'Vitest', 'TDD', 'CLI', 'AI Agents'],
    category: 'agentic',
    band: 'oss',
    link: 'https://specsafe.agenticengineering.lat/',
    github: 'https://github.com/Agentic-Engineering-Agency/specsafe',
    npm: 'https://www.npmjs.com/package/@specsafe/cli',
  },
  {
    caseId: 'oss_02',
    year: '2025',
    title: 'Ultimate Harness',
    description:
      'One harness. Every coding agent. Portable discipline. Plans, launches, observes, verifies, and promotes agentic software-development work across Hermes, Codex, Hermes Proxy, and Oh-My-Pi — without losing your specs, sandbox boundaries, or audit trail.',
    metrics: 'oss · multi-agent runner · audit-trail first',
    tags: ['CLI', 'Sandboxing', 'TUI', 'Audit Trail', 'Agent Tooling'],
    category: 'agentic',
    band: 'oss',
    link: 'https://uh.agenticengineering.lat/',
  },
  {
    caseId: 'oss_03',
    year: '2025',
    title: 'The Playbook',
    description:
      'Documentation for the kits and workflows we use to ship with AI agents. A growing index of installable kits, install commands, and repositories — the operating manual for agentic engineering.',
    metrics: 'oss docs hub · kits + workflows · public knowledge base',
    tags: ['Docs', 'Open Source', 'Agentic Workflows', 'DX'],
    category: 'agentic',
    band: 'oss',
    link: 'https://labs.agenticengineering.agency/',
  },
  {
    caseId: 'case_03',
    year: '2024–25',
    title: 'AI Voicebots — Teruya & Sterling',
    description:
      'Bilingual (EN/ES) voice agents for a Florida law firm handling new-client intake, collections, and reception. Integrated with Vapi, OpenAI, Twilio, and Zoho CRM. Replaced additional reception hires and freed attorneys for billable work.',
    metrics: '6 bots · 700+ calls/month (~40% of inbound) · 60% cost reduction',
    tags: ['Vapi', 'OpenAI', 'n8n', 'Twilio', 'ElevenLabs', 'Zoho CRM'],
    category: 'enterprise',
    showContact: true,
  },
  {
    caseId: 'case_04',
    year: '2025',
    title: 'Insurance Quote RAG',
    description:
      'RAG-based vehicle matching across 11 Mexican insurance APIs with heterogeneous schemas. Replaced a failed ETL approach with vector embeddings and semantic search over 300,000+ vehicle records.',
    metrics: '300k+ records · 80%+ matching accuracy · 11 provider apis',
    tags: ['Python', 'PostgreSQL', 'Vector Embeddings', 'RAG', 'n8n'],
    category: 'enterprise',
  },
  {
    caseId: 'case_05',
    year: '2025',
    title: 'Medical Lead Gen — Sta. Austin',
    description:
      'WhatsApp chatbot for Sta. Austin Medical Center in Querétaro. Automated lead qualification, onboarding, and appointment scheduling — routed qualified leads to the sales team daily.',
    metrics: 'daily qualified leads · 24/7 availability · zero scope creep',
    tags: ['n8n', 'Supabase', 'HubSpot', 'Google Cloud'],
    category: 'enterprise',
  },
  {
    caseId: 'case_06',
    year: '2025',
    title: 'Autos Hitti Lead Gen',
    description:
      'WhatsApp chatbot for a car dealership capturing buyers, qualifying prospects, completing onboarding, and scheduling appointments with sales consultants when customers signal intent.',
    metrics: 'hundreds of leads monthly · daily appointments scheduled',
    tags: ['n8n', 'Supabase', 'WhatsApp API'],
    category: 'enterprise',
    showContact: true,
  },
  {
    caseId: 'lab_01',
    year: '2026',
    title: 'SensorGrid',
    description:
      'IoT environmental monitoring for ITESO cafeteria kitchens: real-time refrigerator temperature, air-quality sensors (COVs, PM2.5), door-state detection, automated Telegram alerts. Cloud-native on LoRaWAN. Presented at the 3er Congreso de Ingenierías SUJ 2026.',
    metrics: 'team of 4 · 12 weeks · lorawan + cloudflare + iot · published',
    tags: ['ESP32', 'LoRaWAN', 'Cloudflare Workers', 'InfluxDB', 'Grafana'],
    category: 'academic',
    github: 'https://github.com/luci-efe/sensorgrid-cloudflare',
    docs: [
      { label: 'IEEE Paper', href: '/SensorGrid_IEEE_Access.pdf' },
      { label: 'Resumen', href: '/SensorGrid_Resumen.pdf' },
      { label: 'Cartel', href: '/SensorGrid_Cartel.pdf' },
    ],
  },
  {
    caseId: 'lab_02',
    year: '2025',
    title: 'Fraud Detector',
    description:
      'MLOps final project: end-to-end training and deployment of a fraud-detection model. XGBoost trained with DVC + MLflow, exported to ONNX, served via inference API on Cloudflare Workers + Containers — edge fraud detection.',
    metrics: 'mlops end-to-end · xgboost + onnx · cloudflare workers + containers',
    tags: ['Python', 'XGBoost', 'DVC', 'MLflow', 'ONNX', 'Cloudflare'],
    category: 'academic',
    link: 'https://fraud-detector-frontend.pages.dev/',
  },
  {
    caseId: 'lab_03',
    year: '2025',
    title: 'Billi',
    description:
      'Asistente financiero personal para profesionistas con deudas — ayuda a entender la situación financiera, organizar gastos y crear un plan para mejorar la salud económica.',
    metrics: 'class project · personal finance · spanish-language ux',
    tags: ['Next.js', 'Financial Tooling', 'UX'],
    category: 'academic',
    link: 'https://www.billi.lat/landing',
  },
  {
    caseId: 'lab_04',
    year: '2025',
    title: 'AURA',
    description:
      'Venture pitch deck for Innovación y Emprendimiento. Self-contained offline HTML deck presenting the AURA concept, market, and roadmap — built as an interactive web artifact rather than a slide file.',
    metrics: 'pitch deck · innovación y emprendimiento · self-contained html',
    tags: ['Pitch Deck', 'Web Artifact', 'Entrepreneurship'],
    category: 'academic',
    docs: [{ label: 'Open Pitch Deck', href: '/AURA_Pitch_Deck.html' }],
  },
  {
    caseId: 'lab_05',
    year: '2024',
    title: 'ReparaYa',
    description:
      'Full-stack platform connecting contractors with homeowners needing domestic services. Built solo in 2 weeks when teammates dropped — the proof-of-concept for the AI-orchestrator workflow I now use in production.',
    metrics: 'solo delivery · 2 weeks · ai-orchestrated full stack',
    tags: ['Next.js', 'Vercel', 'PostgreSQL', 'AI Orchestration'],
    category: 'academic',
    link: 'https://repara-ya-mu.vercel.app/',
    github: 'https://github.com/luci-efe/ReparaYa',
  },
];

const categoryConfig: Record<Category, { label: string; slug: string; description: string }> = {
  agentic: {
    label: 'Agentic Engineering',
    slug: '02a',
    description: 'co-founder · flagship b2b product + open-source agent tooling',
  },
  enterprise: {
    label: 'Tendencia Systems',
    slug: '02b',
    description: 'production systems shipped as software dev → tech pm',
  },
  academic: {
    label: 'ITESO',
    slug: '02c',
    description: 'coursework, research, and venture concepts',
  },
};

const bandConfig: Record<Band, { label: string; sublabel: string }> = {
  product: { label: 'B2B Product', sublabel: 'commercial product, paying clients' },
  oss: { label: 'Open Source', sublabel: 'public tooling, docs, repos' },
};

const VOICEBOT_NUMBERS = [
  { pair: 'New Client / Nuevo Cliente', purpose: 'Opening new legal cases', en: '+1 (786) 530-2445', es: '+1 (786) 999-2571' },
  { pair: 'Collections / Cobranzas', purpose: 'Payment registration and billing inquiries', en: '+1 (786) 999-2458', es: '+1 (786) 999-2461' },
  { pair: 'Existing Client / Cliente Existente', purpose: 'Reception, case updates, and consultations', en: '+1 (786) 999-2463', es: '+1 (786) 999-2464' },
];

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void; projectTitle: string }> = ({ isOpen, onClose, projectTitle }) => {
  const isVoicebot = projectTitle.includes('Voicebots');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="terminal-block p-0 max-w-2xl w-full relative max-h-[88vh] overflow-y-auto">
              <div className="flex items-center gap-3 px-5 py-3 border-b hairline">
                <span className="w-2 h-2 bg-amber-500" />
                <span className="mono-meta flex-1">~/{isVoicebot ? 'teruya_sterling' : 'autos_hitti'}/try.sh</span>
                <button onClick={onClose} aria-label="Close" className="ink-faint hover:text-amber transition-colors">
                  <X size={18} />
                </button>
              </div>

              <div className="p-6">
                {isVoicebot ? (
                  <>
                    <h3 className="font-serif-display text-3xl ink mb-2">AI Voicebots</h3>
                    <p className="mono-meta mb-6">teruya &amp; sterling · florida law firm · 24/7</p>

                    <div className="space-y-3">
                      {VOICEBOT_NUMBERS.map((bot) => (
                        <div key={bot.pair} className="border hairline p-4 bg-white/[0.02]">
                          <div className="mono-kicker mb-1">{bot.pair}</div>
                          <p className="text-sm ink-dim mb-3">{bot.purpose}</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            <a href={`tel:${bot.en.replace(/[\s()-]/g, '')}`} className="flex items-center gap-2 p-2 border hairline hover:border-amber-500/50 transition-colors">
                              <span className="mono-meta">EN</span>
                              <Phone size={14} className="text-amber-soft" />
                              <span className="font-mono-ui text-xs ink">{bot.en}</span>
                            </a>
                            <a href={`tel:${bot.es.replace(/[\s()-]/g, '')}`} className="flex items-center gap-2 p-2 border hairline hover:border-amber-500/50 transition-colors">
                              <span className="mono-meta">ES</span>
                              <Phone size={14} className="text-amber-soft" />
                              <span className="font-mono-ui text-xs ink">{bot.es}</span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-sm ink-dim">
                      <span className="text-amber-soft">capabilities:</span> new client intake, collections follow-up, case status, appointment scheduling, reception. All calls logged to Zoho CRM with AI-generated summaries.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="font-serif-display text-3xl ink mb-2">Autos Hitti</h3>
                    <p className="mono-meta mb-6">whatsapp chatbot · car dealership</p>
                    <a
                      href="https://wa.me/13341711743"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border hairline hover:border-amber-500/50 transition-colors mb-6"
                    >
                      <MessageSquare size={20} className="text-amber-soft" />
                      <div>
                        <div className="font-mono-ui ink">+52 1 33 4171 1743</div>
                        <div className="mono-meta">click to open whatsapp</div>
                      </div>
                    </a>
                    <ul className="text-sm ink-dim space-y-1.5">
                      <li><span className="text-amber-soft">+</span> Lead capture for car buyers</li>
                      <li><span className="text-amber-soft">+</span> Vehicle model inquiries</li>
                      <li><span className="text-amber-soft">+</span> Appointment scheduling with sales consultants</li>
                      <li><span className="text-amber-soft">+</span> Hot lead delivery to sales team</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [showModal, setShowModal] = useState(false);
  const isB2B = project.band === 'product';

  return (
    <>
      <motion.article
        className={`dossier flex flex-col ${isB2B ? 'dossier-b2b' : ''}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
      >
        <header className="flex items-center justify-between mb-5 pb-3 border-b hairline">
          <span className="mono-meta">
            {project.caseId} <span className="ink-faint">/</span> {project.year}
          </span>
          {project.band && (
            <span className="mono-meta text-amber/80">{bandConfig[project.band].label.toLowerCase()}</span>
          )}
        </header>

        <h3 className="font-serif-display text-3xl sm:text-[2rem] ink leading-[1.05] mb-3">
          {project.title}
        </h3>

        <p className="text-[0.92rem] ink-dim leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        <div className="mb-5 pt-3 border-t hairline">
          <p className="mono-meta text-amber-soft/90">{project.metrics}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <SkillBadge key={tag}>{tag}</SkillBadge>
          ))}
        </div>

        <footer className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-auto">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="cmd-link">
              open_site
              <ArrowUpRight size={11} />
            </a>
          )}
          {project.showContact && (
            <button onClick={() => setShowModal(true)} className="cmd-link">
              try_it
              <Phone size={11} />
            </button>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="cmd-link-muted">
              source
              <ArrowUpRight size={11} />
            </a>
          )}
          {project.npm && (
            <a href={project.npm} target="_blank" rel="noopener noreferrer" className="cmd-link-muted">
              npm
              <ArrowUpRight size={11} />
            </a>
          )}
          {project.docs?.map((doc) => (
            <a key={doc.label} href={doc.href} target="_blank" rel="noopener noreferrer" className="cmd-link-muted">
              <FileText size={11} />
              {doc.label.toLowerCase()}
            </a>
          ))}
        </footer>
      </motion.article>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} projectTitle={project.title} />
    </>
  );
};

const CategoryHeader: React.FC<{ category: Category }> = ({ category }) => {
  const config = categoryConfig[category];
  return (
    <motion.div
      className="flex items-baseline gap-4 mb-7 pb-3 border-b hairline"
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <span className="mono-kicker">// {config.slug}</span>
      <h3 className="font-serif-display text-2xl sm:text-3xl ink">{config.label}</h3>
      <span className="hidden sm:inline mono-meta ml-auto">{config.description}</span>
    </motion.div>
  );
};

const BandHeader: React.FC<{ band: Band }> = ({ band }) => {
  const cfg = bandConfig[band];
  return (
    <motion.div
      className="flex items-center gap-3 mb-5"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="ascii-divider text-amber">— {cfg.label}</span>
      <span className="ascii-divider">{cfg.sublabel}</span>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const enterpriseProjects = projects.filter((p) => p.category === 'enterprise');
  const agenticProduct = projects.filter((p) => p.category === 'agentic' && p.band === 'product');
  const agenticOSS = projects.filter((p) => p.category === 'agentic' && p.band === 'oss');
  const academicProjects = projects.filter((p) => p.category === 'academic');

  return (
    <section id="projects" className="section-shell py-28 sm:py-40">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[32rem] h-[32rem] bg-amber-500/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header-grid">
          <div>
            <span className="mono-kicker block">// 02</span>
            <span className="mono-meta">selected_work</span>
          </div>
          <div>
            <h2 className="display-section ink mb-4">
              Selected <em className="italic text-amber-soft">projects</em>.
            </h2>
            <p className="ink-dim max-w-2xl">
              Production work at Agentic Engineering and Tendencia, plus the labs / academic work that fed each into the next.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <CategoryHeader category="agentic" />

          <BandHeader band="product" />
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {agenticProduct.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <BandHeader band="oss" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {agenticOSS.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <CategoryHeader category="enterprise" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {enterpriseProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        <div>
          <CategoryHeader category="academic" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {academicProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
