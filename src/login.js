import React, { useState, useEffect } from "react";
import "./login.css";
function NewOne(){
  const [post, getPost] = useState();
  const API = "https://mocki.io/v1/2c87fd88-1c9a-4427-8591-1523f19d7eac";
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);
}
function Login() {
  return (
    <>
    
      <div className="logDiv">
        <fieldset>
          <legend>Login</legend>
          <h4 id="LogHead">Username/Email/Mobile:</h4>
          <input type="text" placeholder="Email/Username" id="LogCont" />
          <h4 id="LogHead">Password:</h4>
          <input type="password" placeholder="password@A1/" id="LogCont" />
          <br />
          <input type="button" value="Submit" id="logBtn" onClick={NewOne} />
        </fieldset>
      </div>
    </>
  );
}


export default Login;
