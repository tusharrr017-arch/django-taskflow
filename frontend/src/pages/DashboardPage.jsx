import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useTasks } from "@/hooks/useTasks";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { TaskForm } from "@/components/dashboard/TaskForm";
import { TaskFilters } from "@/components/dashboard/TaskFilters";
import { TaskList } from "@/components/dashboard/TaskList";
import { ConfirmDeleteModal } from "@/components/dashboard/ConfirmDeleteModal";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Alert } from "@/components/ui/alert";

export default function DashboardPage() {
  const { isAdmin } = useAuth();
  const {
    tasks,
    displayedTasks,
    users,
    stats,
    loading,
    actionLoading,
    error,
    filter,
    search,
    sortBy,
    setFilter,
    setSearch,
    setSortBy,
    setError,
    createTask,
    updateTask,
    completeTask,
    deleteTask,
  } = useTasks();

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleSaveEdit = async (id, payload) => {
    await updateTask(id, payload);
    setEditingTaskId(null);
  };

  const handleConfirmDelete = async () => {
    if (!taskToDelete) return;

    try {
      await deleteTask(taskToDelete.id);
      setTaskToDelete(null);
    } catch {
      // Error shown via alert
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading your dashboard..." />;
  }

  return (
    <>
      <DashboardHeader />

      {error && (
        <Alert className="mb-6" variant="destructive">
          <div className="flex w-full items-center justify-between gap-4">
            <span>{error}</span>
            <button
              type="button"
              onClick={() => setError(null)}
              className="text-sm font-medium underline"
            >
              Dismiss
            </button>
          </div>
        </Alert>
      )}

      <DashboardStats stats={stats} />

      {isAdmin && (
        <TaskForm
          users={users}
          onSubmit={createTask}
          loading={actionLoading}
        />
      )}

      <section>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-foreground">Your tasks</h2>
          <p className="text-sm text-muted-foreground">
            {isAdmin
              ? "Manage and assign tasks across your team."
              : "View and complete tasks assigned to you."}
          </p>
        </div>

        <TaskFilters
          search={search}
          onSearchChange={setSearch}
          filter={filter}
          onFilterChange={setFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <TaskList
          tasks={displayedTasks}
          allTasksCount={tasks.length}
          search={search}
          editingTaskId={editingTaskId}
          onStartEdit={(task) => setEditingTaskId(task.id)}
          onCancelEdit={() => setEditingTaskId(null)}
          onSaveEdit={handleSaveEdit}
          onComplete={completeTask}
          onDelete={setTaskToDelete}
          isAdmin={isAdmin}
          actionLoading={actionLoading}
        />
      </section>

      <ConfirmDeleteModal
        open={Boolean(taskToDelete)}
        onOpenChange={(open) => !open && setTaskToDelete(null)}
        task={taskToDelete}
        onConfirm={handleConfirmDelete}
        loading={actionLoading}
      />
    </>
  );
}
