import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

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

        {/* Left Side Social Contact Links */}
        <div className="hidden md:flex fixed left-5 lg:left-12 bottom-0 flex-col items-center gap-6 z-50">
          <a href="https://github.com/amishpratap" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors transform hover:-translate-y-1">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/amishpratap" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors transform hover:-translate-y-1">
            <FiLinkedin size={20} />
          </a>
          <a href="https://twitter.com/amishpratap" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors transform hover:-translate-y-1">
            <FiTwitter size={20} />
          </a>
          <div className="w-[1px] h-24 bg-secondary/50 mt-2"></div>
        </div>

        {/* Right Side Mail Icon */}
        <div className="hidden md:flex fixed right-5 lg:right-12 bottom-0 flex-col items-center gap-6 z-50">
          <a href="mailto:contact@amishpratap.com" className="text-secondary hover:text-primary transition-colors transform hover:-translate-y-1">
            <FiMail size={22} />
          </a>
          <div className="w-[1px] h-24 bg-secondary/50 mt-2"></div>
        </div>

        <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-24 xl:px-32 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
}
