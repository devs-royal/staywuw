import axios from "axios";
import sendToSlack from "@/utils/errorBoundary/slackNotifier";

const getLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "en";
  }
  return "en";
};

const language = getLanguage();
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
    sendToSlack("Request Error: " + error.message, {
      message: error.message,
      stack: error.stack,
      config: {
        url: error.config.url,
        method: error.config.method,
        data: error.config.data,
      },
      code: error.code,
      status: error.response ? error.response.status : null,
    });
    return Promise.reject(error);
  }
);

axiosWithInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    sendToSlack("Response Error: " + error.message, {
      message: error.message,
      stack: error.stack,
      config: {
        url: error.config.url,
        method: error.config.method,
        data: error.config.data,
      },
      code: error.code,
      status: error.response ? error.response.status : null,
    });
    return Promise.reject(error);
  }
);

export default axiosWithInterceptor;
