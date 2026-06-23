import { ClipboardList, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  empty: {
    icon: ClipboardList,
    title: "No tasks yet",
    description: "Tasks assigned to you will appear here.",
  },
  search: {
    icon: Search,
    title: "No matching tasks",
    description: "Try adjusting your search or filters.",
  },
};

export function EmptyState({
  variant = "empty",
  title,
  description,
  className,
}) {
  const config = variants[variant] || variants.empty;
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-16 text-center",
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
        <Icon className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="text-base font-semibold text-foreground">
        {title || config.title}
      </h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">
        {description || config.description}
      </p>
    </div>
  );
}
