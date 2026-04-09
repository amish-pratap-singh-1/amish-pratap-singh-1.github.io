import { FaTerminal } from 'react-icons/fa6';
import { SiKubernetes, SiRedis, SiPostgresql, SiNextdotjs, SiDocker, SiPython } from 'react-icons/si';

const skillCategories = [
  {
    title: "Platform & Cloud",
    description: "Cloud Agnostic Architecture, K8s, K3s, Docker, AWS, GitHub Actions, Helm",
    icon: <SiKubernetes className="w-6 h-6 mb-4 text-primary" />
  },
  {
    title: "Backend & Web",
    description: "Next.js, NestJS, FastAPI, React, Node.js",
    icon: <SiNextdotjs className="w-6 h-6 mb-4 text-primary" />
  },
  {
    title: "Distributed Systems",
    description: "PostgreSQL, ClickHouse, Redis, MongoDB, Elasticsearch",
    icon: <SiPostgresql className="w-6 h-6 mb-4 text-primary" />
  },
  {
    title: "Observability",
    description: "OTEL, Grafana Alloy, Loki, Prometheus, KEDA, Karpenter",
    icon: <FaTerminal className="w-6 h-6 mb-4 text-primary" />
  },
  {
    title: "AI Infrastructure",
    description: "LLM Inference (Ollama), RAG Pipelines, Vector DBs (Weaviate, ChromaDB)",
    icon: <SiDocker className="w-6 h-6 mb-4 text-primary" />
  },
  {
    title: "Core Languages",
    description: "TypeScript, Python, C/C++, SQL, Bash",
    icon: <SiPython className="w-6 h-6 mb-4 text-primary" />
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
        <FaTerminal className="mr-3 w-5 h-5 text-primary" /> Technical Context
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {skillCategories.map((skill, index) => (
          <div key={index} className="bg-card-bg p-6 rounded-xl border border-border hover-glow group transition-all shadow-mui-1">
            {skill.icon}
            <h3 className="text-foreground font-semibold mb-2">{skill.title}</h3>
            <p className="text-sm text-secondary leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
