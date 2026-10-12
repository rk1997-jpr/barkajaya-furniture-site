import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "rounded-lg border border-border bg-card p-6 shadow-sm",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";