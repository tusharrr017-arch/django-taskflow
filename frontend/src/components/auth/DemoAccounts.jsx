import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const demoAccounts = [
  {
    label: "Admin Account",
    username: "Admin",
    password: "Admin@123",
  },
  {
    label: "Employee Account",
    username: "employee",
    password: "employee123",
  },
];

export function DemoAccounts() {
  return (
    <Card className="mt-6 border-dashed">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Demo Accounts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {demoAccounts.map((account) => (
          <div
            key={account.label}
            className="rounded-lg border border-border bg-secondary/50 px-4 py-3"
          >
            <p className="text-sm font-medium text-foreground">{account.label}</p>
            <dl className="mt-2 space-y-1 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <dt className="font-medium text-foreground">Username:</dt>
                <dd>{account.username}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-foreground">Password:</dt>
                <dd>{account.password}</dd>
              </div>
            </dl>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
