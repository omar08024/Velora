import axios from "axios";

// ده الوحيد اللي هنستخدمه دلوقتي
export const getAllProducts = () => {
  return axios.get("http://localhost:8080/api/products");
};
