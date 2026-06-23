import api from "./api";

export async function fetchUsers() {
  const response = await api.get("/api/accounts/users/");
  return response.data;
}
