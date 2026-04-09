"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from 'next-themes'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col relative w-full">
            <div className="flex justify-between items-center w-full">
                <div className="text-xl md:text-2xl text-foreground tracking-tight font-bold z-50">amish</div>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-6 text-sm text-secondary font-medium bg-accent-muted/50 px-6 py-2.5 rounded-full border border-border backdrop-blur-sm shadow-mui-1">
                    <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                    <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                </div>

                <div className="flex items-center gap-3 z-50">
                    {mounted ? (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 text-secondary hover:text-primary transition-colors rounded-full bg-accent-muted/50 border border-border backdrop-blur-sm"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
                        </button>
                    ) : (
                        <div className="w-[38px] h-[38px]" />
                    )}
                    {/* Mobile Hamburger Toggle */}
                    <button
                        className="md:hidden p-2 text-secondary hover:text-primary transition-colors rounded-full bg-accent-muted/50 border border-border"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden w-full overflow-hidden mt-4"
                    >
                        <div className="flex flex-col gap-4 text-center text-base text-secondary font-medium bg-accent-muted/50 px-6 py-6 rounded-2xl border border-border backdrop-blur-md shadow-mui-1">
                            <a
                                href="#experience"
                                className="hover:text-primary transition-colors py-2 border-b border-border/50"
                                onClick={() => setIsOpen(false)}
                            >
                                Experience
                            </a>
                            <a
                                href="#skills"
                                className="hover:text-primary transition-colors py-2 border-b border-border/50"
                                onClick={() => setIsOpen(false)}
                            >
                                Skills
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-primary transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default NavBar