import axios from "axios";
const baseUrl = "http://localhost:3001";

export const login_post = async (data) => {
  return await axios.post(`${baseUrl}/user/sign-in`, data);
};

export const get_blog_post = async (data) => {
  return await axios.post(`${baseUrl}/user/get-blogs`, data);
};
