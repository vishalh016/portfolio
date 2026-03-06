import React from 'react';
import { motion } from 'framer-motion';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import FloatingThemeToggle from './components/FloatingThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-light-primary dark:bg-primary text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-300 relative"
    >
      <AnimatedBackground />
      <div 
        className="fixed inset-0 -z-10 h-full w-full bg-light-primary dark:bg-primary 
                   bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
                   dark:bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] 
                   bg-[size:6rem_4rem] transition-colors duration-300"
      />
      <div 
          className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-white/80 via-white/50 to-white/80 
                     dark:from-primary/80 dark:via-primary/50 dark:to-primary/80 transition-colors duration-300"
      />

      <CustomCursor />
      <Header />
      <motion.main 
        className="container mx-auto px-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Hero id="hero" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <About id="about" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Skills id="skills" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Experience id="experience" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Projects id="projects" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Education id="education" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Contact id="contact" />
        </motion.div>
      </motion.main>
      <Footer />
      <FloatingThemeToggle />
    </motion.div>
  );
}

export default App;