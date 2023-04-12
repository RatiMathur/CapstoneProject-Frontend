import axios from "axios";

// const baseUrl = "http://localhost:8000/";
const baseUrl = "https://capstonebackend-qkcb.onrender.com/";

export function customGET(url) {
  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  console.log(`token from ApiCall ${config}`);
  return axios.get(baseUrl + url, config);
}
export function customPOST(url, body) {
  console.log(`Post function called:${url}`);
  const token = localStorage.getItem("token");
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  console.log(body);
  console.log(config);
  return axios.post(baseUrl + url, body, config);
}

export function customPUT(url, body) {
  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios.put(baseUrl + url, body, config);
}

export function customDELETE(url) {
  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios.delete(baseUrl + url, config);
}
