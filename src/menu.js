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
          <Link to={"/pages/home"}><i className="fa fa-home" id="home-icon"></i></Link>
        </span>
        <span className="sub-menu">
          <Link to={"/pages/about"}>About</Link>
        </span>
        <span className="sub-menu">
          <Link to={"/pages/service"}>Service</Link>
        </span>
        <span className="sub-menu">
          <Link to={"/pages/contact"}>Contact</Link>
        </span>
        <span className="sub-menu">
          <Link to={"/src/login"}>Login</Link>
        </span>
        <span className="sub-menu">
          <Link to={"/src/signup"}>Signup</Link>
        </span>
      </div>
      
      <Routes>
        <Route path="/pages/home" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/service" element={<Service />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/src/login" element={<Login />} />
        <Route path="/src/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Menu;
