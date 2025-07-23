import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border-2 border-quantum-red/30 bg-brand-charcoal/50 backdrop-blur-sm px-4 py-3 text-base font-poppins text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quantum-red focus-visible:ring-offset-2 focus-visible:border-quantum-red/60 hover:border-quantum-red/50 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-lg shadow-quantum-red/10",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
