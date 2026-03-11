import { useRef } from "react";
import { useInView, useScroll, useTransform, MotionValue } from "framer-motion";

type ScrollAnimationOptions = {
  once?: boolean;
  margin?: string; // e.g. "-100px"
  amount?: number;
};

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { once = true, margin = "-100px", amount } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin, amount });
  return { ref, isInView };
};

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export const useScrollProgress = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return { ref, scrollYProgress };
};

// Animation variant presets
export const scrollVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  staggerFast: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  },
};
