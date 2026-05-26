import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

interface Channel {
  cmd: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  Icon: React.ElementType;
}

const channels: Channel[] = [
  {
    cmd: 'contact --primary',
    label: 'email · primary',
    value: 'fernando@agenticengineering.agency',
    href: 'mailto:fernando@agenticengineering.agency',
    Icon: Mail,
  },
  {
    cmd: 'contact --iteso',
    label: 'email · iteso',
    value: 'lramirez.ramos@iteso.mx',
    href: 'mailto:lramirez.ramos@iteso.mx',
    Icon: Mail,
  },
  {
    cmd: 'call --mx',
    label: 'phone',
    value: '+52 33 2241 2595',
    href: 'tel:+523322412595',
    Icon: Phone,
  },
  {
    cmd: 'whereis',
    label: 'location',
    value: 'Jalisco, México',
    Icon: MapPin,
  },
  {
    cmd: 'open github',
    label: 'github',
    value: 'github.com/luci-efe',
    href: 'https://github.com/luci-efe',
    external: true,
    Icon: Github,
  },
  {
    cmd: 'open linkedin',
    label: 'linkedin',
    value: 'linkedin.com/in/fernando-ramos',
    href: 'https://linkedin.com/in/fernando-ramos-654514262',
    external: true,
    Icon: Linkedin,
  },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-shell py-28 sm:py-36">
      <div className="absolute top-1/4 left-1/3 w-[28rem] h-[28rem] bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header-grid">
          <div>
            <span className="mono-kicker block">// 04</span>
            <span className="mono-meta">contact</span>
          </div>
          <div>
            <h2 className="display-section ink mb-4">
              Open a <em className="italic text-amber-soft">conversation</em>.
            </h2>
            <p className="ink-dim max-w-2xl">
              Hiring, partnerships, OSS collaboration, or "hey this is interesting" — all welcome.
            </p>
          </div>
        </div>

        <motion.div
          className="terminal-block p-0 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 px-5 py-3 border-b hairline">
            <span className="w-2 h-2 bg-amber-500" />
            <span className="mono-meta flex-1">~/contact.sh</span>
            <span className="mono-meta text-[10px] ink-faint">replies within 24h</span>
          </div>

          <ul className="divide-y" style={{ borderColor: 'hsl(var(--hairline) / 0.4)' }}>
            {channels.map((ch) => {
              const Icon = ch.Icon;
              const content = (
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 group transition-colors hover:bg-amber-500/[0.04]">
                  <Icon size={16} className="ink-faint group-hover:text-amber transition-colors" />
                  <div className="min-w-0">
                    <div className="mono-meta text-amber/80 group-hover:text-amber transition-colors">
                      $ {ch.cmd}
                    </div>
                    <div className="font-mono-ui text-[13px] ink group-hover:text-amber-soft transition-colors truncate">
                      {ch.value}
                    </div>
                  </div>
                  {ch.href && (
                    <ArrowUpRight
                      size={14}
                      className="ink-faint group-hover:text-amber transition-colors opacity-0 group-hover:opacity-100"
                    />
                  )}
                </div>
              );

              if (!ch.href) {
                return (
                  <li key={ch.cmd} className="border-t hairline first:border-t-0">
                    {content}
                  </li>
                );
              }

              const isExternal = ch.external;
              return (
                <li key={ch.cmd} className="border-t hairline first:border-t-0">
                  <a
                    href={ch.href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block"
                  >
                    {content}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="px-5 py-3 border-t hairline">
            <span className="mono-meta text-[10px] ink-faint">
              exit code 0 · last login: today
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
