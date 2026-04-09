import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import NavBar from './NavBar';

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

        <NavBar />
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
