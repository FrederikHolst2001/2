// Base44 compatibility layer (DO NOT REMOVE)

export const base44 = {
  get: async () => ({}),
  invoke: async () => ({}),
  me: async () => null,
};

// Make it globally available for legacy runtime code
if (typeof window !== "undefined") {
  window.base44 = base44;
}
