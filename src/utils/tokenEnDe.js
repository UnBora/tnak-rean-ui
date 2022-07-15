var CryptoJS = require("crypto-js");

export const cryptoEncrypt = (token, key) => {
  var ciphertext = CryptoJS.AES.encrypt(token, key).toString();
  localStorage.setItem("token", ciphertext);
  console.log("encrypt:  " + ciphertext);
  return ciphertext;
};
export const cryptoDecrypt = (token, key) => {
  var ciphertext = CryptoJS.AES.decrypt(token, key).toString(CryptoJS.enc.Utf8);
  console.log("decrypt : " + ciphertext);
  return ciphertext;
};

export const parseJwt = (token) => {
  try {
    return JSON.parse(CryptoJS(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
