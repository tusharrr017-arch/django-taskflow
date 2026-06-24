export const THEME_STORAGE_KEY = "taskflow-theme";

export function getSystemTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getStoredTheme() {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(THEME_STORAGE_KEY);
}

export function resolveTheme() {
  const stored = getStoredTheme();

  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return getSystemTheme();
}

export function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}
