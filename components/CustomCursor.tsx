import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor-pointer]')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
      borderWidth: '2px',
      backgroundColor: 'transparent',
      x: '-50%',
      y: '-50%',
    },
    pointer: {
      width: 48,
      height: 48,
      borderWidth: '3px',
      backgroundColor: 'rgba(244, 63, 94, 0.1)',
      x: '-50%',
      y: '-50%',
    },
  };

  const dotVariants = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: 'rgb(244 63 94)',
    },
    pointer: {
        width: 0,
        height: 0,
        backgroundColor: 'rgba(244 63 94, 0)',
    },
  };

  return (
    <div className="fixed inset-0 z-[999] pointer-events-none hidden md:block">
      <motion.div
        className="absolute border-accent rounded-full"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        variants={cursorVariants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ type: 'spring', ...springConfig }}
      />
       <motion.div
        className="absolute bg-accent rounded-full"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: '-4px', // center dot
          top: '-4px',
        }}
        variants={dotVariants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ type: 'spring', ...springConfig }}
      />
    </div>
  );
};

export default CustomCursor;
