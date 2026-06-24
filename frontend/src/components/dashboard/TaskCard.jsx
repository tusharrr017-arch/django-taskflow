import { Calendar, Check, Pencil, Trash2, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatTaskDate } from "@/utils/tasks";

export function TaskCard({
  task,
  isAdmin,
  onEdit,
  onComplete,
  onDelete,
  actionLoading,
}) {
  const isCompleted = task.completed;

  return (
    <Card className="transition-all duration-300 hover:shadow-md dark:hover:shadow-lg dark:shadow-black/20">
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-3">
        <div className="space-y-1">
          <h3 className="text-base font-semibold leading-snug text-foreground">
            {task.title}
          </h3>
          <Badge variant={isCompleted ? "success" : "warning"}>
            {isCompleted ? "Completed" : "Pending"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {task.description || "No description provided."}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {task.assigned_to_username || "Unassigned"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatTaskDate(task.created_at)}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 border-t border-border pt-4">
        {!isCompleted && (
          <Button
            size="sm"
            onClick={onComplete}
            disabled={actionLoading}
          >
            <Check className="h-4 w-4" />
            Mark complete
          </Button>
        )}

        {isAdmin && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={onEdit}
              disabled={actionLoading}
            >
              <Pencil className="h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={onDelete}
              disabled={actionLoading}
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
