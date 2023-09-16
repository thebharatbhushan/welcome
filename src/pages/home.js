import React, { useState, useEffect } from "react";
import Logo from "../img/bbgLogo.png";
import HeaderImg from "../img/headerImage.jpeg";
import ProjectImg from "../img/idea.png";
import { Box } from "..";
import "./home.css";
let arr = "Bharat Bhushan";
let Home = () => {
  return(
    <>
      <img src={Logo} className="head-logo" />
      <img src={HeaderImg} className="head-img"/ >
      <img src={ProjectImg} className="proj-img"/ >
    </>
    );
};
export default Home;


