import React, { useCallback, useMemo } from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = targetId ? document.querySelector(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            color: "#F43F5E",
            opacity: 1,
          }
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' ? '#888888' : '#AAAAAA',
      },
      links: {
        color: theme === 'dark' ? '#888888' : '#AAAAAA',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: {
          default: 'bounce' as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle' as const,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [theme]);

  const orbits = [
    {
      size: '110%',
      particleSize: 8,
      duration: 15,
      rotateX: 70,
      rotateZ: 30,
      particleColor: 'bg-accent',
      delay: 0,
    },
    {
      size: '90%',
      particleSize: 6,
      duration: 8,
      rotateX: 70,
      rotateZ: -50,
      particleColor: 'bg-sky-400',
      delay: -5,
    },
    {
      size: '75%',
      particleSize: 5,
      duration: 6,
      rotateX: 70,
      rotateZ: 100,
      particleColor: 'bg-rose-400',
      delay: -2,
    },
    {
      size: '95%',
      particleSize: 4,
      duration: 10,
      rotateX: 20,
      rotateZ: -20,
      particleColor: 'bg-teal-400',
      delay: -7,
    },
    {
      size: '60%',
      particleSize: 3,
      duration: 5,
      rotateX: 70,
      rotateZ: 220,
      particleColor: 'bg-violet-400',
      delay: -4,
    },
  ];

  return (
    <section id={id} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-0">
      <div className="absolute inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions as any}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-6xl px-4">
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Hi, I’m <span className="text-accent">Bishal Halder</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 mt-2">
            Data Engineer.
          </h2>
          <p className="max-w-xl mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed mx-auto md:mx-0">
            Award-winning Data Engineer with 3+ years of experience designing and implementing scalable ETL/ELT pipelines, optimizing big data workflows, and delivering impactful solutions across cloud and hybrid environments.
          </p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <a
              data-cursor-pointer
              href="https://drive.google.com/file/d/1wAs4YPQRSpMArhFhvJpofY1KQFsCjNUE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
            >
              Download My CV
            </a>
            <a
              data-cursor-pointer
              href="#contact"
              onClick={handleScroll}
              className="px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-rose-600 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Hire Me
            </a>
          </motion.div>
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            <a data-cursor-pointer href="https://github.com/vishalh016" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors" aria-label="GitHub">
              <FaGithub size={28} />
            </a>
            <a data-cursor-pointer href="https://linkedin.com/in/bishal-halder" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a data-cursor-pointer href="mailto:vishalh016@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors" aria-label="Email">
              <FaEnvelope size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* The Image - stable */}
            <motion.div
              className="w-full h-full rounded-full bg-light-secondary dark:bg-secondary overflow-hidden shadow-2xl bg-cover bg-center border-2 border-gray-200 dark:border-gray-700/50"
              style={{
                backgroundImage: `url('${import.meta.env.BASE_URL}profile-image.jpg')`,
                backgroundPosition: 'center 20%',
                backgroundSize: 'cover',
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />

            {/* Orbiting Particles */}
            <div
              className="absolute inset-0"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              {orbits.map((orbit, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: orbit.size,
                    height: orbit.size,
                    x: '-50%',
                    y: '-50%',
                    rotateX: orbit.rotateX,
                    rotateZ: orbit.rotateZ,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: orbit.duration,
                    ease: 'linear',
                    repeat: Infinity,
                    delay: orbit.delay,
                  }}
                >
                  <motion.div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg ${orbit.particleColor}`}
                    style={{
                      width: orbit.particleSize,
                      height: orbit.particleSize,
                      boxShadow: `0 0 ${orbit.particleSize * 1.5}px var(--tw-shadow-color), 0 0 ${orbit.particleSize * 3}px var(--tw-shadow-color)`,
                      '--tw-shadow-color': `var(--tw-color-${orbit.particleColor.replace('bg-', '')})`,
                    } as React.CSSProperties}
                    animate={{
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: orbit.duration / 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;