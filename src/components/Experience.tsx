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
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-bold text-foreground mb-10 flex items-center">
        <FaBriefcase className="mr-3 w-5 h-5 text-primary" /> Experience & Projects
      </h2>
      <div className="space-y-2">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 border-l-2 border-border pb-10 last:pb-0">
            <div className="absolute w-3.5 h-3.5 bg-primary rounded-full -left-[8px] top-1.5 border-[3px] border-background shadow-[0_0_10px_rgba(0,181,182,0.3)]"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-2">
              <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
              <span className="text-sm text-primary font-mono bg-accent-muted border border-border px-2.5 py-1 rounded-md shadow-mui-1">{exp.period}</span>
            </div>
            <div className="text-secondary font-medium mb-5">{exp.company}</div>
            <ul className="space-y-3 text-sm text-secondary list-none">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
