
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            data-cursor-pointer
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 p-3 rounded-full bg-light-secondary dark:bg-secondary text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-light-primary dark:focus:ring-offset-primary z-50"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </motion.button>
    );
};

export default FloatingThemeToggle;
