import { motion } from 'framer-motion';

// Reusable animation variants for whileInView animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// Reusable Motion Components with whileInView
export const MotionDiv = (props) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    {...props}
  />
);

export const MotionStaggerDiv = (props) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    {...props}
  />
);

export const MotionFadeInUp = (props) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    {...props}
  />
);

export const MotionFadeInLeft = (props) => (
  <motion.div
    variants={fadeInLeft}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    {...props}
  />
);

export const MotionFadeInRight = (props) => (
  <motion.div
    variants={fadeInRight}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    {...props}
  />
);

export const MotionScaleUp = (props) => (
  <motion.div
    variants={scaleUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    {...props}
  />
);