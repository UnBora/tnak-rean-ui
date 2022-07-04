import { api } from "../utils/api";

export const fetchAllClasses = async () => {
  try {
    let response = await api.get("class/get-all-class");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
