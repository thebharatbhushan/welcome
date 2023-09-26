import React, { useState, useEffect } from "react";
import Logo from "../img/bbgLogo.png";
import HeaderImg from "../img/headerImage.jpeg";
import ProjectImg from "../img/idea.png";
import SkillImg from "../img/skills.png";
import { Box } from "..";
import "./home.css";
let arr = "Bharat Bhushan";
let Home = () => {
  return (
    <>
      <img src={Logo} className="head-logo" />
      <img src={HeaderImg} className="head-img" />
      <div className="inc">
        <img src={ProjectImg} className="proj-img" />
        <h3 className="proj-inc">100+ Project</h3>
        <img src={SkillImg} className="skill-img" />
        <h3 className="skill-inc">25+ Skills</h3>
        <h3 className="author-head">Founder / CEO</h3>
        <p className="ceo-word">
          <span className="author">Bharat Bhushan</span> is the Founder and the CEO of Bharat Bhushan Group.
          Company developed many projects in android, iOS, web and games.
        </p>
      </div>
      <div className="client-session">
        <h2 className="client-head">Happy clients!</h2>
        <div className="card">

        </div>
      </div>
    </>
  );
};
export default Home;
