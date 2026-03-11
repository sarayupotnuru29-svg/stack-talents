import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollVariants } from "@/hooks/use-scroll-animation";
import type { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  variant?: "stagger" | "staggerFast";
  delay?: number;
};

const AnimatedSection = ({ children, className = "", variant = "stagger", delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    ...scrollVariants[variant],
    visible: {
      ...scrollVariants[variant].visible,
      transition: {
        ...scrollVariants[variant].visible.transition,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
