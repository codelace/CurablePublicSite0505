import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border-2 border-quantum-red/30 bg-brand-charcoal/50 backdrop-blur-sm px-4 py-3 text-sm font-poppins text-foreground ring-offset-background placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quantum-red focus-visible:ring-offset-2 focus-visible:border-quantum-red/60 hover:border-quantum-red/50 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 resize-none shadow-lg shadow-quantum-red/10",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
