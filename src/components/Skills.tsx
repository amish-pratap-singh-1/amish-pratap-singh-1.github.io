import { FaTerminal } from 'react-icons/fa6';
import { SiKubernetes, SiRedis, SiPostgresql, SiNextdotjs, SiDocker, SiPython } from 'react-icons/si';

const skillCategories = [
  {
    title: "Platform & Cloud",
    description: "Cloud Agnostic Architecture, K8s, K3s, Docker, AWS, GitHub Actions, Helm",
    icon: <SiKubernetes className="w-5 h-5 mb-3 text-secondary" />
  },
  {
    title: "Backend & Web",
    description: "Next.js, NestJS, FastAPI, React, Node.js",
    icon: <SiNextdotjs className="w-5 h-5 mb-3 text-secondary" />
  },
  {
    title: "Distributed Systems & DBs",
    description: "PostgreSQL, ClickHouse, Redis, MongoDB, Elasticsearch",
    icon: <SiPostgresql className="w-5 h-5 mb-3 text-secondary" />
  },
  {
    title: "Observability",
    description: "OTEL, Grafana Alloy, Loki, Prometheus, KEDA, Karpenter",
    icon: <FaTerminal className="w-5 h-5 mb-3 text-secondary" />
  },
  {
    title: "AI Infrastructure",
    description: "LLM Inference (Ollama), RAG Pipelines, Vector DBs (Weaviate, ChromaDB)",
    icon: <SiDocker className="w-5 h-5 mb-3 text-secondary" />
  },
  {
    title: "Core Languages",
    description: "TypeScript, Python, C/C++, SQL, Bash",
    icon: <SiPython className="w-5 h-5 mb-3 text-secondary" />
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 opacity-0 animate-fade-in delay-200">
      <h2 className="text-2xl font-semibold text-primary mb-8 flex items-center">
        <FaTerminal className="mr-3 w-5 h-5 text-secondary" /> Technical Context
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((skill, index) => (
          <div key={index} className="glass p-5 rounded-xl hover-glow group transition-all">
            {skill.icon}
            <h3 className="text-primary font-medium mb-1">{skill.title}</h3>
            <p className="text-sm text-secondary leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
