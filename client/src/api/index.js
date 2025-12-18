import axios from "axios";

// جلب كل المنتجات (لو احتجت)
export const getAllProducts = () => {
  return axios.get("http://localhost:8080/api/products");
};


