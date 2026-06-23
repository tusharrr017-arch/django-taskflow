import api from "./api";
import { setTokens, setRole } from "@/utils/storage";

export async function signup({ username, password }) {
  const response = await api.post("/api/accounts/signup/", {
    username,
    password,
  });
  return response.data;
}

export async function login({ username, password }) {
  const tokenResponse = await api.post("/api/token/", { username, password });

  setTokens({
    access: tokenResponse.data.access,
    refresh: tokenResponse.data.refresh,
  });

  const meResponse = await api.get("/api/accounts/me/");
  setRole(meResponse.data.role);

  return meResponse.data;
}

export async function fetchCurrentUser() {
  const response = await api.get("/api/accounts/me/");
  setRole(response.data.role);
  return response.data;
}
