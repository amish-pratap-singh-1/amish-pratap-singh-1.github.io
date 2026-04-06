import { FaBriefcase } from 'react-icons/fa6';

const experiences = [
  {
    role: "Founding Engineer",
    company: "Connectnext Technologies",
    period: "Jan 2025 – Present",
    details: [
      "Sole engineer building and operating a multi-tenant SaaS for managing AI-enabled omnichannel customer interactions.",
      "Designed secure auth and session management with OAuth2.0/OIDC (Auth0), private VPC isolation, and end-to-end encryption.",
      "Deployed and operated production stack on self-managed K3s clusters on AWS (networking, ingress, day-2 operations).",
      "Optimized GPU inference (Ollama) to reduce cold starts (10→4 min) and cut costs by 60% with Spot instances.",
      "Implemented observability using Grafana Alloy + OTLP exporters, and autoscaling via KEDA/Karpenter."
    ]
  },
  {
    role: "Software Engineer",
    company: "CyberMind Works",
    period: "Jan 2024 – Dec 2024",
    details: [
      "Owned end-to-end development of TapTap LMS (Next.js 13, NestJS, AWS), serving ~200K users.",
      "Reduced frontend bundle size (11K→5K modules) and migrated context-heavy logic to backend services.",
      "Cut AWS costs ($2000→$1200) by migrating EC2 and implementing Lambda-based off-hour scaling.",
      "Stabilized PostgreSQL by backfilling ~400M rows, replacing materialized views, and adding indexes."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "DevX technology & Code Inbound",
    period: "July 2023 – Dec 2023",
    details: [
      "DevX: Migrated ~5,000-page WordPress platform to Next.js + Strapi, integrated AI summaries.",
      "Code Inbound: Built scalable NestJS backend architectures with real-time notifications via Socket.IO."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 opacity-0 animate-fade-in delay-200">
      <h2 className="text-2xl font-semibold text-primary mb-8 flex items-center">
        <FaBriefcase className="mr-3 w-5 h-5 text-secondary" /> Experience & Projects
      </h2>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l border-accent-muted pb-4 last:pb-0">
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-2 border border-background"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-medium text-primary">{exp.role}</h3>
              <span className="text-sm text-secondary font-mono bg-accent-muted border border-accent px-2 py-1 rounded mt-2 sm:mt-0">{exp.period}</span>
            </div>
            <div className="text-secondary mb-4">{exp.company}</div>
            <ul className="space-y-2 text-sm text-secondary/90 list-disc list-inside">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
