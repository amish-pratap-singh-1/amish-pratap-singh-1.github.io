"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl mx-auto px-6 py-4 md:py-8 flex flex-col relative z-50"
        >
            <div className="flex justify-between items-center w-full">
                <div className="text-xl md:text-2xl text-foreground tracking-tight font-bold z-50">amish</div>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-6 text-sm text-secondary font-medium bg-accent-muted/50 px-6 py-2.5 rounded-full border border-border backdrop-blur-sm shadow-mui-1">
                    <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                    <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    className="md:hidden p-2 text-secondary hover:text-primary transition-colors rounded-full bg-accent-muted/50 border border-border z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
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
        </motion.nav>
    )
}

export default NavBar