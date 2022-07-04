import { cryptoDecrypt, parseJwt } from "./tokenEnDe";

export const header = () => {
  let test = localStorage.getItem("token");
  let jwt = test !== null ? cryptoDecrypt(test, "Phanith") : null;
  
  if (jwt !== null) {
    if (parseJwt(jwt).exp < Date.now() / 600000) {
      localStorage.clear();
      return { ContentType: "application/json" };
    }

    return {
      ContentType: "application/json",
      Authorization: "Bearer " + jwt,
    };
  } else {
    return { ContentType: "application/json" };
  }
};
