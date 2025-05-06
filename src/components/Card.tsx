
import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn(
        "glass-panel p-6 glow-hover animate-fade-up", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
