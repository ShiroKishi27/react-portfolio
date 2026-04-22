import { useState, useEffect } from "react";

const safeParse = (value, fallback) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export function useSessionState(key, initialValue) {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const stored = sessionStorage.getItem(key);
      return safeParse(stored, initialValue);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      sessionStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn("sessionStorage write failed:", error);
    }
  }, [key, state]);

  return [state, setState];
}
