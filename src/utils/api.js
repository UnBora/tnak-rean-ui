import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.tnakrean.info/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

export const user = JSON.parse(localStorage.getItem('user'));

export function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
    //   return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }
