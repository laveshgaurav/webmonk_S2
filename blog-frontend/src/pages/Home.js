import React, { useEffect, useState } from "react";
import { get_blog_post, login_post } from "../services/http.service";
import Styles from "./Home.module.css";

function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [blogs, setBlogs] = useState([]);
  const [isLoggesIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    fetchPost();
  }, []);

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const Login = async () => {
    try {
      let { data } = await login_post(formData);
      localStorage.setItem("token", data?.existingUser?._id);
      localStorage.setItem("isLoggedIn", true);
      console.log(data);
      if (data.message === "Sign in successful") {
        setIsLoggedIn(true);
        fetchPost();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPost = async () => {
    try {
      const response = await get_blog_post({
        id: localStorage.getItem("token"),
      });
      console.log(response);
      setBlogs(response.data.blogs);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={Styles.Home_Container}>
      {isLoggesIn ? (
        <div>
          {blogs.map((blog) => (
            <div key={blog._id}>
              <h1>{blog.title}</h1>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={Styles.Form}>
          <input
            name="email"
            value={formData.email}
            onChange={inputHandler}
            placeholder="Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={inputHandler}
            placeholder="Password"
          />
          <button onClick={Login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Home;
