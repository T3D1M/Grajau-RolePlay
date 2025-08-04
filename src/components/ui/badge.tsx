import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variant === "default" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-gray-200 text-gray-800",
        variant === "outline" && "border border-gray-400 text-gray-800",
        className
      )}
      {...props}
    />
  );
}
