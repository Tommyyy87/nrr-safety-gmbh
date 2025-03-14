
import { cn } from "@/lib/utils";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}

const CustomButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CustomButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 btn-hover-effect";

  const variantClasses = {
    primary:
      "bg-nrr-blue text-white hover:bg-nrr-lightblue focus:ring-nrr-blue shadow-md hover:shadow-lg",
    secondary:
      "bg-nrr-gray text-nrr-blue hover:bg-nrr-gray/80 focus:ring-nrr-gray border border-nrr-blue/20",
    outline:
      "bg-transparent text-nrr-blue border border-nrr-blue hover:bg-nrr-blue/5 focus:ring-nrr-blue",
    ghost:
      "bg-transparent text-nrr-blue hover:bg-nrr-gray focus:ring-nrr-blue",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-8 py-3.5",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
