export function getErrorMessage(error, fallback = "Something went wrong. Please try again.") {
  if (!error) return fallback;

  const data = error.response?.data;

  if (typeof data === "string") return data;

  if (data?.detail) {
    return typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail);
  }

  const firstFieldError = data && typeof data === "object"
    ? Object.values(data).flat()?.[0]
    : null;

  if (typeof firstFieldError === "string") return firstFieldError;

  if (error.message === "Network Error") {
    return "Unable to reach the server. Check your connection and try again.";
  }

  return fallback;
}
