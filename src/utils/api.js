import axios from "axios";
import { header } from "./header";
import { cryptoDecrypt } from "./tokenEnDe";

// axios.defaults.headers.common["Authorization"] = `Bearer ${cryptoDecrypt(
//   localStorage.getItem("token"),
//   "Phanith"
// )}`;
export const api = axios.create({
  baseURL: "http://149.129.32.126:8888/api/v1/",
  headers: header(),
});

// export const user = JSON.parse(localStorage.getItem("user"));
