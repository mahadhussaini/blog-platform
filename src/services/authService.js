export const authService = {
  login: async (email, password) => {
    return { username: "", email };
  },
  signup: async (username, email, password) => {
    return { username, email };
  },
  getCurrentUser: async () => {
    return { username: "", email: "" };
  },
};
