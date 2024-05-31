import axios from "axios";

const language =
  typeof window !== "undefined"
    ? localStorage.getItem("language") || "en"
    : "en";

console.log(language);

const clientIP = "187.188.15.87";

const axiosWithInterceptor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROYAL + "/" + language,
});

axiosWithInterceptor.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `${token}`;
      }
    }
    config.headers["X-Client-IP"] = clientIP;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosWithInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosWithInterceptor;
