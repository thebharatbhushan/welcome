import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/contact";
import About from "./pages/about";
import Service from "./pages/service";
import Home from "./pages/home";
import Login from "../src/login";
import Signup from "../src/signup";

import "./menu.css";

function Menu() {
  return (
    <BrowserRouter>
      <div className="Menu">
        <span className="sub-menu">
          <Link to="/"><i className="fa fa-home" id="home-icon"></i></Link>
        </span>
        <span className="sub-menu">
          <Link to="/about">About</Link>
        </span>
        <span className="sub-menu">
          <Link to="/service">Service</Link>
        </span>
        <span className="sub-menu">
          <Link to="/contact">Contact</Link>
        </span>
        <span className="sub-menu">
          <Link to="/login">Login</Link>
        </span>
        <span className="sub-menu">
          <Link to="/signup">Signup</Link>
        </span>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Menu;
