import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const service = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const AUTH_SERVICE = {
  login(userData) {
    return service.post("/auth/login", userData);
  },
  signup(userData) {
    return service.post("/auth/signup", userData);
  },

  logout() {
    return service.post("/auth/logout", {});
  },
  isLoggedIn() {
    return service.get("/auth/isLoggedIn");
  },
};
