// Single source of truth for base44

const base44 =
  (typeof window !== "undefined" && window.base44)
    ? window.base44
    : {
        get: async () => ({}),
        invoke: async () => ({}),
        me: async () => null,
      };

// Ensure global sync (safety)
if (typeof window !== "undefined") {
  window.base44 = base44;
}

// Support BOTH import styles
export { base44 };
export default base44;
