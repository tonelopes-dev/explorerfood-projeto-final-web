import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorerfood-projeto-final-api.onrender.com",
  // baseURL: "http://localhost:3333",
  withCredentials: true,
});
