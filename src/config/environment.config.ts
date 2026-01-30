const INV_MGT_BASEURL =
  process.env.INV_MGT_BASEURL ?? "http://localhost:8080/api";
const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL ?? "http://localhost:3000";
const environment = {
  name: process.env.ENV,
  baseUrl: BASE_URL,
  apiProxyBase: `/api-proxy`,
  api: {
    rest: {
      endpoints: {
        todolists: `${INV_MGT_BASEURL}/todolists`,
      },
    },
  },
  http: {
    request: {
      timeout: Number.parseInt(
        process.env.HTTP_REQUEST_TIMEOUT_MILLISECONDS ?? "60000"
      ),
    },
  },
} as const;

export default environment;