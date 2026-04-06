import { FaGraduationCap } from 'react-icons/fa6';

export default function Education() {
  return (
    <section id="education" className="py-16 opacity-0 animate-fade-in delay-300">
      <h2 className="text-2xl font-semibold text-primary mb-8 flex items-center">
        <FaGraduationCap className="mr-3 w-5 h-5 text-secondary" /> Education
      </h2>
      <div className="glass p-6 rounded-xl hover-glow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
          <h3 className="text-lg font-medium text-primary">Jabalpur Engineering College</h3>
          <span className="text-sm text-secondary font-mono bg-accent-muted border border-accent px-2 py-1 rounded mt-2 sm:mt-0">2019 – 2023</span>
        </div>
        <p className="text-sm text-secondary mb-2">Bachelor of Technology in Computer Science and Engineering</p>
        <div className="text-sm text-secondary/80 mt-4 flex items-center gap-2">
           <span className="px-2 py-1 bg-accent-muted rounded text-xs">GPA: 7.73 / 10.00</span>
           <span className="px-2 py-1 bg-accent-muted rounded text-xs">Jabalpur, MP</span>
        </div>
      </div>
    </section>
  );
}
