import { FaGraduationCap } from 'react-icons/fa6';

export default function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
        <FaGraduationCap className="mr-3 w-5 h-5 text-primary" /> Education
      </h2>
      <div className="bg-card-bg p-6 rounded-xl border border-border shadow-mui-1 hover-glow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
          <h3 className="text-lg font-semibold text-foreground">Jabalpur Engineering College</h3>
          <span className="text-sm text-primary font-mono bg-accent-muted border border-border px-2.5 py-1 rounded-md mt-2 sm:mt-0 shadow-mui-1">2019 – 2023</span>
        </div>
        <p className="text-sm text-secondary font-medium mb-2">Bachelor of Technology in Computer Science and Engineering</p>
        <div className="text-sm text-secondary/80 mt-4 flex flex-wrap items-center gap-3">
           <span className="px-2.5 py-1 bg-accent-muted border border-border rounded-md text-xs font-mono">GPA: 7.73 / 10.00</span>
           <span className="px-2.5 py-1 bg-accent-muted border border-border rounded-md text-xs font-mono">Jabalpur, MP</span>
        </div>
      </div>
    </section>
  );
}
