import { STORAGE_KEYS } from "./constants";

export function getAccessToken() {
  return localStorage.getItem(STORAGE_KEYS.ACCESS);
}

export function getRefreshToken() {
  return localStorage.getItem(STORAGE_KEYS.REFRESH);
}

export function getRole() {
  return localStorage.getItem(STORAGE_KEYS.ROLE);
}

export function setTokens({ access, refresh }) {
  localStorage.setItem(STORAGE_KEYS.ACCESS, access);
  localStorage.setItem(STORAGE_KEYS.REFRESH, refresh);
}

export function setRole(role) {
  localStorage.setItem(STORAGE_KEYS.ROLE, role);
}

export function clearAuth() {
  localStorage.removeItem(STORAGE_KEYS.ACCESS);
  localStorage.removeItem(STORAGE_KEYS.REFRESH);
  localStorage.removeItem(STORAGE_KEYS.ROLE);
}

export function isAuthenticated() {
  return Boolean(getAccessToken());
}
