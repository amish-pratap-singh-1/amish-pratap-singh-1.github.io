import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed bottom-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-t border-border py-4"
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-secondary text-sm">
                <p className="font-mono hover:text-primary transition-colors cursor-default">Designed & Built by Amish Pratap Singh</p>
                <p className="opacity-60 text-xs mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
