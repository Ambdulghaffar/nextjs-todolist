import axios from "axios";
import { baseRequestConfig } from "./axios/base-request.config";

export default function httpClient() {
  const instance = axios.create({ ...baseRequestConfig });
  // Intercepteur de réponse -- SERVER Response
  instance.interceptors.response.use(
    (response) => {
      console.log("[SPRING BOOT] Response Success:");
      return response;
    },
    (error) => {
      console.error("[SPRING BOOT] Response Error:");
      return Promise.reject(error);
    }
  );

  return instance;
}