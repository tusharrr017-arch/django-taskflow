import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_LOGOUT_EVENT } from "@/utils/constants";
import { clearAuth, getRole, isAuthenticated } from "@/utils/storage";
import { fetchCurrentUser, login as loginRequest } from "@/services/authService";
import { getErrorMessage } from "@/utils/errors";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const logout = useCallback(() => {
    clearAuth();
    setUser(null);
    navigate("/login", { replace: true });
  }, [navigate]);

  const bootstrap = useCallback(async () => {
    if (!isAuthenticated()) {
      setLoading(false);
      return;
    }

    try {
      const profile = await fetchCurrentUser();
      setUser(profile);
    } catch {
      clearAuth();
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  useEffect(() => {
    const handleForcedLogout = () => logout();
    window.addEventListener(AUTH_LOGOUT_EVENT, handleForcedLogout);
    return () => window.removeEventListener(AUTH_LOGOUT_EVENT, handleForcedLogout);
  }, [logout]);

  const login = useCallback(async (credentials) => {
    setError(null);

    try {
      const profile = await loginRequest(credentials);
      setUser(profile);
      navigate("/dashboard", { replace: true });
      return profile;
    } catch (err) {
      const message = getErrorMessage(err, "Invalid username or password.");
      setError(message);
      throw err;
    }
  }, [navigate]);

  const value = useMemo(
    () => ({
      user,
      role: user?.role || getRole(),
      isAdmin: user?.role === "admin",
      loading,
      error,
      login,
      logout,
      isAuthenticated: Boolean(user),
      clearError: () => setError(null),
    }),
    [user, loading, error, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }

  return context;
}
