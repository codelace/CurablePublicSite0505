import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-poppins font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-quantum-red text-white hover:bg-quantum-red/90 shadow-lg shadow-quantum-red/20 hover:shadow-quantum-red/40 hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:scale-105",
        outline:
          "border border-quantum-red/50 bg-transparent text-quantum-red hover:bg-quantum-red/10 hover:border-quantum-red hover:shadow-lg hover:shadow-quantum-red/20 backdrop-blur-sm",
        secondary:
          "bg-brand-charcoal text-foreground hover:bg-brand-charcoal/80 shadow-lg shadow-brand-charcoal/20 hover:shadow-brand-charcoal/40 hover:scale-105",
        ghost: "hover:bg-quantum-red/10 hover:text-quantum-red transition-all duration-300",
        link: "text-quantum-red underline-offset-4 hover:underline hover:text-quantum-red/80",
        premium: "bg-gradient-to-r from-quantum-red to-warm-rose text-white shadow-xl shadow-quantum-red/30 hover:shadow-quantum-red/50 hover:scale-105 border border-quantum-red/20",
        glass: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-lg shadow-xl hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-lg font-semibold",
        icon: "h-10 w-10",
        xl: "h-14 rounded-xl px-12 text-xl font-bold",
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
