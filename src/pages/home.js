import React, { useState, useEffect } from "react";
import Logo from "../img/logo.png";
import { Box } from "..";
import "./home.css";
let arr = "Bharat Bhushan";
let Home = () => {
  const [post, getPost] = useState();
  const API = "https://mocki.io/v1/e26d83cd-9ca0-4d75-8a92-84b89aa06cfe";
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res[0].content);
        console.log(res);
        arr = res;
        getPost(res);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <img className="web-logo" src={Logo} />
      <div className="home-content">
        <h2 className="home-heading">Web Development</h2>
        <p className="home-content">
          In undergrad, I studied political science, history and music and then
          decided to become a developer whilst I was working at Kickstarter
          because I saw how the web could complement creativity in the arts. The
          same is probably true for any field. Becoming a web professional
          allows you to participate in absolutely any field, because the web has
          become universally present in our professional lives. You can be a web
          developer and specialize in anything from the art world to the
          automobile industry.
        </p>
      </div>
      <Box post={arr[0].post} content={arr[0].content} />
      <Box post={arr[1].post} content={arr[1].content} />
    </>
  );
};
export default Home;
