import React from "react";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left Logo Section */}
      <div className="logo">
        <h1>Tiger<span>Marley</span></h1>
      </div>

      {/* Right Icons Section */}
      <div className="icons">
        <Search className="icon" />
        <User className="icon" />
        <div className="icon-badge">
          <Heart className="icon" />
          <span className="badge">0</span>
        </div>
        <div className="icon-badge">
          <ShoppingCart className="icon" />
          <span className="badge">2</span>
        </div>
        <Menu className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
