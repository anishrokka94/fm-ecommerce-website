import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = (username: string, password: string) => {
  return axios.post(
    `${BASE_URL}/auth/login`,
    {
      username,
      password,
      expiresInMins: 30,
    },

    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
};

export const fetchProducts = async (skip = 0, limit = 12) => {
  const res = await axios.get(
    `${BASE_URL}/products?limit=${limit}&skip=${skip}`
  );
  return res.data;
};
