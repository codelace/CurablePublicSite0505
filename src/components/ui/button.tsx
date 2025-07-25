import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "btn-quantum-enhanced magnetic-attraction inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-poppins font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-quantum-red text-white hover:bg-quantum-red/90 shadow-lg shadow-quantum-red/30 hover:shadow-quantum-red/50 hover:scale-105 quantum-field",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:scale-105 quantum-field",
        outline:
          "border-2 border-quantum-cyan/50 bg-transparent text-quantum-cyan hover:bg-quantum-cyan/10 hover:border-quantum-cyan hover:shadow-lg hover:shadow-quantum-cyan/30 backdrop-blur-sm quantum-field",
        secondary:
          "btn-quantum-secondary text-white hover:scale-105 quantum-field",
        ghost: "hover:bg-quantum-purple/10 hover:text-quantum-purple transition-all duration-300 quantum-field",
        link: "text-quantum-cyan underline-offset-4 hover:underline hover:text-quantum-purple/80 holographic-text",
        premium: "btn-quantum-rainbow text-white quantum-field",
        glass: "glass-quantum text-white border-2 border-white/20 hover:bg-white/20 backdrop-blur-lg shadow-xl hover:scale-105 quantum-field",
        accent: "btn-quantum-accent text-white quantum-field",
        spectral: "btn-spectacular text-white hover:scale-105 quantum-field",
        cosmic: "bg-gradient-to-r from-cosmic-indigo to-cosmic-aura text-white hover:from-cosmic-aura hover:to-cosmic-indigo shadow-lg glow-cosmic-medium hover:glow-cosmic-strong hover:scale-105 quantum-field",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-12 w-12",
        xl: "h-16 rounded-2xl px-14 text-xl font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
