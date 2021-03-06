import axios from "axios";

axios.defaults.baseURL = "http://localhost:3010";
axios.defaults.withCredentials = true; // Very important so that cookies will be set and sent with every request

export const login = (email, password) => {
  return axios.post("/login", { email, password }).then((res) => res.data);
};

export const getProducts = () => {
  return axios.get("/product").then((res) => res.data);
};

export function getDetail(id) {
  return axios.get(`/detail/${id}`).then((res) => res.data);
}

export function editProduct(id) {
  return axios.patch(`/product/${id}`).then((res) => res.data)
}
