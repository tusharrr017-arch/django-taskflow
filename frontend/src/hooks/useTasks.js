import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  createTask,
  deleteTask,
  fetchTasks,
  updateTask,
} from "@/services/taskService";
import { fetchUsers } from "@/services/userService";
import { getErrorMessage } from "@/utils/errors";
import { TASK_FILTERS, TASK_SORT_OPTIONS } from "@/utils/constants";
import { getTaskStats, processTasks } from "@/utils/tasks";

export function useTasks() {
  const { isAdmin } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(TASK_FILTERS.ALL);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(TASK_SORT_OPTIONS.NEWEST);

  const loadTasks = useCallback(async () => {
    setError(null);

    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError(getErrorMessage(err, "Failed to load tasks."));
    }
  }, []);

  const loadUsers = useCallback(async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(getErrorMessage(err, "Failed to load users."));
    }
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    await loadTasks();
    setLoading(false);
  }, [loadTasks]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await loadTasks();

      if (isAdmin) {
        await loadUsers();
      }

      setLoading(false);
    };

    init();
  }, [isAdmin, loadTasks, loadUsers]);

  const handleCreate = useCallback(
    async (payload) => {
      setActionLoading(true);
      setError(null);

      try {
        await createTask(payload);
        await loadTasks();
      } catch (err) {
        const message = getErrorMessage(err, "Failed to create task.");
        setError(message);
        throw err;
      } finally {
        setActionLoading(false);
      }
    },
    [loadTasks],
  );

  const handleUpdate = useCallback(
    async (id, payload) => {
      setActionLoading(true);
      setError(null);

      try {
        await updateTask(id, payload);
        await loadTasks();
      } catch (err) {
        const message = getErrorMessage(err, "Failed to update task.");
        setError(message);
        throw err;
      } finally {
        setActionLoading(false);
      }
    },
    [loadTasks],
  );

  const handleComplete = useCallback(
    async (id) => {
      setActionLoading(true);
      setError(null);

      try {
        await updateTask(id, { completed: true });
        await loadTasks();
      } catch (err) {
        const message = getErrorMessage(err, "Failed to complete task.");
        setError(message);
        throw err;
      } finally {
        setActionLoading(false);
      }
    },
    [loadTasks],
  );

  const handleDelete = useCallback(
    async (id) => {
      setActionLoading(true);
      setError(null);

      try {
        await deleteTask(id);
        await loadTasks();
      } catch (err) {
        const message = getErrorMessage(err, "Failed to delete task.");
        setError(message);
        throw err;
      } finally {
        setActionLoading(false);
      }
    },
    [loadTasks],
  );

  const displayedTasks = useMemo(
    () => processTasks(tasks, { filter, search, sortBy }),
    [tasks, filter, search, sortBy],
  );

  const stats = useMemo(() => getTaskStats(tasks), [tasks]);

  return {
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
    refresh,
    createTask: handleCreate,
    updateTask: handleUpdate,
    completeTask: handleComplete,
    deleteTask: handleDelete,
  };
}
