
import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

const Container = ({
  children,
  as: Component = "div",
  className,
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cn(
        "w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
