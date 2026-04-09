import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

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
      <div className="flex flex-col min-h-screen">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-xl md:text-2xl text-foreground tracking-tight font-bold">amish.me</div>
          <div className="flex gap-6 text-sm text-secondary font-medium bg-accent-muted/50 px-6 py-2.5 rounded-full border border-border backdrop-blur-sm shadow-mui-1">
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          </div>
        </motion.nav>
        
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </main>
        
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl mx-auto px-6 py-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-secondary text-sm"
        >
          <p className="font-mono">Excellence beats speculation.</p>
          <p className="opacity-60">&copy; {new Date().getFullYear()} Amish Pratap Singh.</p>
        </motion.footer>
      </div>
    </>
  );
}
