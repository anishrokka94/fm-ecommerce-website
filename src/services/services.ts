import axiosInstance from "../api/axiosInstance";

// login and get tokens
export const loginUser = async () => {
  const res = await axiosInstance.get("/auth/me");
  console.log("login res", res);
  return res.data;
};

// get all products
export const fetchProducts = async (skip = 0, limit = 12) => {
  const res = await axiosInstance.get(`/products?limit=${limit}&skip=${skip}`);
  return res.data;
};

// get individual product details
export const fetchProductDetails = async (name: string) => {
  const res = await axiosInstance.get(`/products/${name}`);
  return res.data;
};
