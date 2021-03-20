import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header-container">
    <div className="logo"></div>
    <div className="navigation">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/work">work</Link>
      <Link to="blog">Blog</Link>
    </div>
  </div>
);

export default Header;
