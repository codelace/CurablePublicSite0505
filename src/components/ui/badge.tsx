import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-poppins font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-quantum-red text-white hover:bg-quantum-red/90 shadow-lg shadow-quantum-red/20",
        secondary:
          "border-transparent bg-brand-charcoal text-foreground hover:bg-brand-charcoal/80 shadow-lg shadow-brand-charcoal/20",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-lg",
        outline: "text-foreground border-quantum-red/50 hover:bg-quantum-red/10 hover:border-quantum-red backdrop-blur-sm",
        premium: "border-transparent bg-gradient-to-r from-quantum-red to-warm-rose text-white shadow-xl shadow-quantum-red/30",
        success: "border-transparent bg-logo-blue text-white hover:bg-logo-blue/90 shadow-lg shadow-logo-blue/20",
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

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
