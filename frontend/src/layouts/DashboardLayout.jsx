import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}
