import environment from "../environment.config";


const { http: httpConfig } = environment;
export const baseRequestConfig = {
  baseURL: "",
  timeout: httpConfig.request.timeout,
  headers: {
    Accept: "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Content-Type": "application/json; charset=utf-8",
    Expires: "0",
    Pragma: "no-cache",
  },
} as const;