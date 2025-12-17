import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getAllProducts = () => axios.get(`${BASE_URL}/products`);
export const getNewArrivals = () => axios.get(`${BASE_URL}/new-arrivals`);
export const getProductDetails = (id) => axios.get(`${BASE_URL}/products/${id}`);
export const placeOrder = (order) => axios.post(`${BASE_URL}/orders`, order);
export const sendContactMessage = (message) => axios.post(`${BASE_URL}/contact`, message);
