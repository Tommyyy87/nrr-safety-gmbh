
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  threshold = 0.1,
  direction = "up",
  delay = 0,
  distance = 30,
  duration = 700,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const directionStyles = {
    up: {
      initial: { opacity: 0, transform: `translateY(${distance}px)` },
      animate: { opacity: 1, transform: 'translateY(0)' },
    },
    down: {
      initial: { opacity: 0, transform: `translateY(-${distance}px)` },
      animate: { opacity: 1, transform: 'translateY(0)' },
    },
    left: {
      initial: { opacity: 0, transform: `translateX(${distance}px)` },
      animate: { opacity: 1, transform: 'translateX(0)' },
    },
    right: {
      initial: { opacity: 0, transform: `translateX(-${distance}px)` },
      animate: { opacity: 1, transform: 'translateX(0)' },
    },
  }[direction];

  const style: React.CSSProperties = {
    ...directionStyles.initial,
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
    ...(isVisible ? directionStyles.animate : {}),
  };

  return (
    <div ref={ref} style={style} className={cn(className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
