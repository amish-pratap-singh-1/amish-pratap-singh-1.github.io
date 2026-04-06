import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Amish Pratap Singh</title>
        <meta name="description" content="Building scalable, multi-tenant SaaS and AI infrastructure." />
      </Head>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <nav className="w-full max-w-3xl mx-auto px-6 py-8 flex justify-between items-center opacity-0 animate-fade-in delay-100">
          <div className="font-semibold text-primary tracking-tight">amish.me</div>
          <div className="flex gap-6 text-sm text-secondary">
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          </div>
        </nav>
        <main className="flex-1 w-full max-w-3xl mx-auto px-6 pb-24">
          {children}
        </main>
        <footer className="w-full max-w-3xl mx-auto px-6 py-12 border-t border-accent-muted text-center text-secondary text-sm opacity-0 animate-fade-in delay-300">
          <p>Excellence beats speculation.</p>
          <p className="mt-2 opacity-60">&copy; {new Date().getFullYear()} Amish Pratap Singh. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
