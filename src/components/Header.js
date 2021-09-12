import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
        />
      </Link>
      <Search />
      <div className="nav-links">
        <Link to="/archive">Archive</Link>
        <Link to="/trash">Trash</Link>
      </div>
    </nav>
  );
};

export default Header;
