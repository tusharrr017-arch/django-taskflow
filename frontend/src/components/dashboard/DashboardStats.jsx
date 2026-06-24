import { CheckCircle2, CircleDashed, ListTodo } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const statConfig = [
  {
    key: "total",
    label: "Total Tasks",
    icon: ListTodo,
    accent: "text-foreground",
    bg: "bg-secondary",
  },
  {
    key: "completed",
    label: "Completed",
    icon: CheckCircle2,
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
  },
  {
    key: "pending",
    label: "Pending",
    icon: CircleDashed,
    accent: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/50",
  },
];

export function DashboardStats({ stats }) {
  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-3">
      {statConfig.map(({ key, label, icon: Icon, accent, bg }) => (
        <Card key={key}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {label}
            </CardTitle>
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${bg}`}>
              <Icon className={`h-4 w-4 ${accent}`} />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold tracking-tight">{stats[key]}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
