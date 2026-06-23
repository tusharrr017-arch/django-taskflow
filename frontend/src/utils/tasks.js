import { TASK_FILTERS, TASK_SORT_OPTIONS } from "./constants";

export function filterTasksByStatus(tasks, filter) {
  if (filter === TASK_FILTERS.COMPLETED) {
    return tasks.filter((task) => task.completed);
  }

  if (filter === TASK_FILTERS.PENDING) {
    return tasks.filter((task) => !task.completed);
  }

  return tasks;
}

export function searchTasks(tasks, query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) return tasks;

  return tasks.filter(
    (task) =>
      task.title?.toLowerCase().includes(normalized) ||
      task.description?.toLowerCase().includes(normalized),
  );
}

export function sortTasks(tasks, sortBy) {
  const sorted = [...tasks];

  switch (sortBy) {
    case TASK_SORT_OPTIONS.OLDEST:
      return sorted.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at),
      );
    case TASK_SORT_OPTIONS.COMPLETED_FIRST:
      return sorted.sort((a, b) => Number(b.completed) - Number(a.completed));
    case TASK_SORT_OPTIONS.PENDING_FIRST:
      return sorted.sort((a, b) => Number(a.completed) - Number(b.completed));
    case TASK_SORT_OPTIONS.NEWEST:
    default:
      return sorted.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      );
  }
}

export function getTaskStats(tasks) {
  const completed = tasks.filter((task) => task.completed).length;

  return {
    total: tasks.length,
    completed,
    pending: tasks.length - completed,
  };
}

export function processTasks(tasks, { filter, search, sortBy }) {
  const filtered = filterTasksByStatus(tasks, filter);
  const searched = searchTasks(filtered, search);
  return sortTasks(searched, sortBy);
}

export function formatTaskDate(dateString) {
  if (!dateString) return "—";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}
