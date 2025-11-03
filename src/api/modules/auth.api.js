import privateClient from "../clients/private.client";
import publicClient from "../clients/public.client";

const authEndpoint = {
  guruPegawais: "/guru-pegawais/login",
  authLogin: "/auth/login",
  getPegawaisDetails: "/guru-pegawais/details",
};

const authApi = {
  getEmployees: async () => {
    try {
      const response = await publicClient.get(authEndpoint.guruPegawais);
      return { response };
    } catch (error) {
      return { error };
    }
  },

  login: async ({ username, password }) => {
    try {
      const response = await publicClient.post(authEndpoint.authLogin, {
        pegId: username,
        password,
      });
      return { response };
    } catch (error) {
      return { error };
    }
  },

  getUserDetails: async () => {
    try {
      const response = await privateClient.get(authEndpoint.getPegawaisDetails);
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default authApi;
