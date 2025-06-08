import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// login and get tokens
export const loginUser = async () => {
  const tokens = JSON.parse(localStorage.getItem("tokens") || "{}");
  const res = await axios.get(`${BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${tokens?.accessToken}`,
    },
  });
  return res;
};

// get products
export const fetchProducts = async (skip = 0, limit = 12) => {
  const res = await axios.get(
    `${BASE_URL}/products?limit=${limit}&skip=${skip}`
  );
  return res.data;
};
