import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className="py-20 opacity-0 animate-fade-in delay-100">
      <div className="mb-4 inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent-muted text-secondary border border-accent">
        Backend & Platform Engineer
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-6">
        Amish Pratap Singh
      </h1>
      <h2 className="text-xl md:text-xl text-secondary max-w-2xl font-light mb-8 leading-relaxed">
        Building scalable, multi-tenant SaaS, AI infrastructure, and production-minded engineering systems.
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 text-sm mt-8">
        <a href="mailto:amishpratapsingh13@gmail.com" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-background font-medium rounded-full hover:opacity-90 transition-opacity">
          Contact Me <FaArrowRight className="ml-2 w-4 h-4" />
        </a>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/amish-pratap-singh" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center p-3 text-secondary hover:text-primary border border-accent rounded-full hover:border-secondary transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/amish-pratap-singh-1" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center p-3 text-secondary hover:text-primary border border-accent rounded-full hover:border-secondary transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
