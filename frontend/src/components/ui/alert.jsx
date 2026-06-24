import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  destructive: AlertCircle,
  default: AlertCircle,
  success: CheckCircle2,
};

export function Alert({ className, variant = "destructive", children, ...props }) {
  const Icon = icons[variant] || AlertCircle;

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
        variant === "destructive" &&
          "border-red-200 bg-red-50 text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300",
        variant === "default" && "border-border bg-card text-foreground",
        variant === "success" &&
          "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300",
        className,
      )}
      {...props}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <div>{children}</div>
    </div>
  );
}
