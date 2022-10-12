import axios from "axios";
import { API_BASE_URL } from "../env";

class AuthService {
  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
    });
  }

  async loginUser(email, password) {
    try {
      const response = await this.client.post("/users/login", {
        email,
        password,
      });
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refresh", refreshToken);
      return { accessToken, refreshToken }
    } catch (e) {
      throw new Error("User not found");
    }
  }

  async registerUser({ name, username, email, password }) {
    try {
      const response = await this.client.post("/users/register", {
        name,
        username,
        email,
        password,
      });
      const { message } = response.data;
      return message;
    } catch (e) {
      throw new Error("User registeration failed");
    }
  }

  async logout() {
    try {
      const refresh = localStorage.getItem("refresh");
      if (!refresh) return;
      const response = await this.client.post("/users/logout", { refresh });
      const { message } = response.data
      return message;
    } catch (e) {
      throw new Error("Logout failed");
    }
  }
}

export default new AuthService();
