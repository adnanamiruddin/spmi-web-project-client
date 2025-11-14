import privateClient from "../clients/private.client";
import publicClient from "../clients/public.client";

const authEndpoint = {
  authLogin: "/auth/login",
  details: "/details",
};

const authApi = {
  login: async ({ username, password }) => {
    try {
      const response = await publicClient.post(authEndpoint.authLogin, {
        username,
        password,
      });
      return { response };
    } catch (error) {
      return { error };
    }
  },

  getUserDetails: async () => {
    try {
      const response = await privateClient.get(authEndpoint.details);
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default authApi;
