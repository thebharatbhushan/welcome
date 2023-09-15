import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom/client";
import Message from "./message";
import Contact from "./contact";
import Menu from "./menu";
import Footer from "./footer";
import Home from "./pages/home";
import "./index.css";


export let Box = (props) => {
    
  return (
    
  <>

  <div className="model-box">
  <h1 className="model-main">{props.post}</h1>
  <p className="model-cont">{props.content}</p>
  </div>
  </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
<Menu />

</>
);
const footer = ReactDOM.createRoot(document.getElementById("footer-home"));
footer.render(
  <>
    
    <Footer />
  </>
);
