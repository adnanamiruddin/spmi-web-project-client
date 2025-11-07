import axios from "axios";
import queryString from "query-string";
import Cookies from "js-cookie";
import storageKey from "@/const/STORAGE_KEY";
import { decrypt, encrypt } from "@/helpers/cryptoHelper";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const privateClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

// @ts-expect-error
// Attach the token to every request
privateClient.interceptors.request.use(async (config) => {
  const headers = {
    ...config.headers,
    Authorization: `Bearer ${decrypt(Cookies.get(storageKey.accessToken))}`,
  };
  if (!headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }
  if (!headers["respo"])
    return {
      ...config,
      headers,
    };
});

privateClient.interceptors.response.use(
  (response) => {
    // If the response includes a new token, update the cookie
    if (response.headers["new-authorization"]) {
      const authHeader = response.headers["new-authorization"];
      const token = authHeader.replace("Bearer ", "");
      Cookies.set(storageKey.accessToken, encrypt(token));
    }
    return response;
  },
  async (err) => {
    const originalRequest = err.config;

    // Check if the error response includes a new token
    if (
      err.response &&
      err.response.headers["new-authorization"] &&
      !originalRequest._retry // Prevent infinite loops
    ) {
      // Extract and set the new token
      const authHeader = err.response.headers["new-authorization"];
      const token = authHeader.replace("Bearer ", "");
      Cookies.set(storageKey.accessToken, encrypt(token));

      // Mark the request as retried
      originalRequest._retry = true;

      // Update the original request with the new token
      originalRequest.headers["Authorization"] = `Bearer ${token}`;

      // Retry the original request with the updated token
      return privateClient(originalRequest);
    }

    // If it's not a token-related error, reject the promise
    return Promise.reject(err.response ? err.response.data : err);
  }
);

export default privateClient;
