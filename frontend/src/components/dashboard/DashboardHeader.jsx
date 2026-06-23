import { LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

export function DashboardHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <LayoutDashboard className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            TaskFlow
          </h1>
          <p className="text-sm text-muted-foreground">
            Welcome back
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge variant="secondary" className="capitalize">
          {user?.role || "employee"}
        </Badge>
        <Button variant="outline" size="sm" onClick={logout}>
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
      </div>
    </header>
  );
}
