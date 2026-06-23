export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const STORAGE_KEYS = {
  ACCESS: "access",
  REFRESH: "refresh",
  ROLE: "role",
};

export const ROLES = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
};

export const TASK_FILTERS = {
  ALL: "all",
  COMPLETED: "completed",
  PENDING: "pending",
};

export const TASK_SORT_OPTIONS = {
  NEWEST: "newest",
  OLDEST: "oldest",
  COMPLETED_FIRST: "completed_first",
  PENDING_FIRST: "pending_first",
};

export const AUTH_LOGOUT_EVENT = "auth:logout";
