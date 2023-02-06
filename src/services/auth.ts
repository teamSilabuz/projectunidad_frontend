import axios from "axios";

const API_URL = String(process.env.REACT_APP_DOMAIN_API + "/user/")

export const login = ( email: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

export const register = (name: string, phone_number:string, email: string, password: string,  re_password:string | undefined) => {
  return axios.post(API_URL + "registro", {
    name,
    phone_number,
    email,
    password,
    re_password
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
