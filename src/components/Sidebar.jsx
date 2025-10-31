import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("authToken"); // example cleanup
      navigate("/logout"); // Go to Logout page
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo" onClick={() => navigate("/")}>
        TIGER MARLEY
      </div>

      <ul className="sidebar-menu">
        <li><NavLink to="/" end>Overview</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/orders">Orders</NavLink></li>
        <li><NavLink to="/customers">Customers</NavLink></li>
        <li><NavLink to="/analytics">Analytics</NavLink></li>
        <li><NavLink to="/settings">⚙️ Settings</NavLink></li>
      </ul>

      <div className="sidebar-footer">
        <button className="sidebar-btn logout" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
