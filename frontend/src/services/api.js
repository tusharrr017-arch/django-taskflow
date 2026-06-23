import axios from "axios";
import { API_BASE_URL, AUTH_LOGOUT_EVENT } from "@/utils/constants";
import { getAccessToken, getRefreshToken, setTokens, clearAuth } from "@/utils/storage";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = getRefreshToken();

        const response = await axios.post(`${API_BASE_URL}/api/token/refresh/`, {
          refresh,
        });

        setTokens({ access: response.data.access, refresh });

        originalRequest.headers.Authorization = `Bearer ${response.data.access}`;

        return api(originalRequest);
      } catch {
        clearAuth();
        window.dispatchEvent(new CustomEvent(AUTH_LOGOUT_EVENT));
      }
    }

    return Promise.reject(error);
  },
);

export default api;
