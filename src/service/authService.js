import axios from "axios";
const api = axios.create({
  baseURL: "http://149.129.32.126:8888/swagger-ui/index.html",
});

export default api;