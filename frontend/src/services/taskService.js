import api from "./api";

export async function fetchTasks() {
  const response = await api.get("/api/tasks/");
  return response.data;
}

export async function createTask(payload) {
  const response = await api.post("/api/tasks/", payload);
  return response.data;
}

export async function updateTask(id, payload) {
  const response = await api.patch(`/api/tasks/${id}/`, payload);
  return response.data;
}

export async function deleteTask(id) {
  await api.delete(`/api/tasks/${id}/`);
}
