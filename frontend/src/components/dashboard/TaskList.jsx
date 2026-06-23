import { TaskCard } from "./TaskCard";
import { TaskEditForm } from "./TaskEditForm";
import { EmptyState } from "@/components/EmptyState";

export function TaskList({
  tasks,
  allTasksCount,
  search,
  editingTaskId,
  onStartEdit,
  onCancelEdit,
  onSaveEdit,
  onComplete,
  onDelete,
  isAdmin,
  actionLoading,
}) {
  if (tasks.length === 0) {
    const variant = allTasksCount === 0 ? "empty" : "search";

    return (
      <EmptyState
        variant={variant}
        description={
          variant === "search" && search
            ? `No tasks match "${search}". Try a different search term.`
            : undefined
        }
      />
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) =>
        editingTaskId === task.id ? (
          <TaskEditForm
            key={task.id}
            task={task}
            onSave={onSaveEdit}
            onCancel={onCancelEdit}
            loading={actionLoading}
          />
        ) : (
          <TaskCard
            key={task.id}
            task={task}
            isAdmin={isAdmin}
            onEdit={() => onStartEdit(task)}
            onComplete={() => onComplete(task.id)}
            onDelete={() => onDelete(task)}
            actionLoading={actionLoading}
          />
        ),
      )}
    </div>
  );
}
