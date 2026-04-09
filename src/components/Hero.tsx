import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa6';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center md:text-left">
        <div className="mb-6 inline-flex items-center px-4 py-1.5 text-xs font-mono rounded-full bg-accent-muted text-primary border border-border">
          Backend & Platform Engineer
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Amish Pratap Singh
        </h1>
        <h2 className="text-lg sm:text-xl text-secondary max-w-2xl font-light mb-8 leading-relaxed mx-auto md:mx-0">
          Building scalable, multi-tenant SaaS, AI infrastructure, and production-minded engineering systems.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 text-sm mt-8 justify-center md:justify-start">
          <a href="mailto:amishpratapsingh13@gmail.com" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-background font-semibold rounded-full hover:opacity-90 transition-opacity">
            Contact Me <FaArrowRight className="ml-2 w-4 h-4" />
          </a>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://linkedin.com/in/amish-pratap-singh" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center p-3 text-secondary hover:text-primary border border-border rounded-full hover:border-primary transition-colors hover-glow">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/amish-pratap-singh-1" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center p-3 text-secondary hover:text-primary border border-border rounded-full hover:border-primary transition-colors hover-glow">
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72">
        <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20"></div>
        <div className="relative w-full h-full rounded-full border border-primary/30 overflow-hidden shadow-mui-8 hover-glow">
          <Image
            src="/images/amish.jpg"
            alt="Amish Pratap Singh"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
