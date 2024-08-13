// src/services/authService.js
export const authService = {
  login: async (email, password) => {
    // Implement API call for login
    return { username: "JohnDoe", email }; // Mock response
  },
  signup: async (username, email, password) => {
    // Implement API call for signup
    return { username, email }; // Mock response
  },
  getCurrentUser: async () => {
    // Implement API call to fetch current logged-in user
    return { username: "mahad._.hussaini", email: "mahadarshad@yahoo.com" }; // Mock response
  },
};
