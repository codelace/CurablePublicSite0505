import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-poppins font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-spectral-crimson text-white hover:bg-spectral-crimson/90 shadow-lg shadow-spectral-crimson/20 badge-quantum",
        secondary:
          "border-transparent bg-card text-foreground hover:bg-card/80 shadow-lg shadow-card/20 quantum-backdrop",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-lg",
        outline: "text-foreground border-spectral-crimson/50 hover:bg-spectral-crimson/10 hover:border-spectral-glow backdrop-blur-sm quantum-backdrop",
        premium: "border-transparent bg-gradient-to-r from-spectral-crimson to-cosmic-indigo text-white shadow-xl shadow-spectral/30 btn-quantum-magnetic",
        success: "border-transparent bg-cosmic-aura text-white hover:bg-cosmic-aura/90 shadow-lg shadow-cosmic/20 glow-cosmic",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
