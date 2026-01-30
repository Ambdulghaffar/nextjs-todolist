import httpClient from "./axios.config";



export default function apiClient() {
  const instance = httpClient();
  // Intercepteur de requête (optionnel) -- CLIENT Request
  instance.interceptors.request.use(
    (config) => {
      console.log("[NextJs] Request:");
      return config;
    },
    (error) => {
      console.error("[NextJs] Request Error:");
      return Promise.reject(error);
    }
  );
  return instance;
}