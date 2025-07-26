import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "btn-quantum-enhanced magnetic-attraction inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-poppins font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-spectral-crimson text-titanium-white hover:bg-spectral-crimson/90 shadow-lg shadow-spectral-crimson/30 hover:shadow-spectral-crimson/50 hover:scale-105 quantum-field",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:scale-105 quantum-field",
        outline:
          "border-2 border-cosmic-indigo/50 bg-transparent text-cosmic-indigo hover:bg-cosmic-indigo/10 hover:border-cosmic-indigo hover:shadow-lg hover:shadow-cosmic-indigo/30 backdrop-blur-sm quantum-field",
        secondary:
          "bg-gunmetal-900/80 border border-spectral-crimson/30 text-titanium-white hover:bg-gunmetal-800/90 hover:border-cosmic-indigo/50 hover:scale-105 quantum-field",
        ghost: "hover:bg-cosmic-indigo/10 hover:text-cosmic-indigo transition-all duration-300 quantum-field",
        link: "text-spectral-glow underline-offset-4 hover:underline hover:text-cosmic-aura holographic-text",
        premium: "bg-gradient-to-r from-spectral-crimson to-cosmic-indigo text-titanium-white hover:from-cosmic-indigo hover:to-spectral-crimson shadow-lg hover:scale-105 quantum-field",
        glass: "bg-gunmetal-900/20 text-titanium-white border-2 border-spectral-crimson/20 hover:bg-gunmetal-900/40 hover:border-cosmic-indigo/40 backdrop-blur-lg shadow-xl hover:scale-105 quantum-field",
        accent: "bg-cosmic-indigo text-titanium-white hover:bg-cosmic-aura shadow-lg hover:scale-105 quantum-field",
        spectral: "bg-gradient-to-r from-spectral-crimson via-cosmic-indigo to-spectral-glow text-titanium-white hover:scale-105 quantum-field",
        cosmic: "bg-gradient-to-r from-cosmic-indigo to-cosmic-aura text-titanium-white hover:from-cosmic-aura hover:to-cosmic-indigo shadow-lg hover:scale-105 quantum-field",
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
