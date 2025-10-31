import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate clearing auth tokens or session
    localStorage.clear();

    const timeout = setTimeout(() => {
      navigate("/login"); // Redirect to login after 2 seconds
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="logout-page">
      <div className="logout-card">
        <h1>Logging out...</h1>
        <p>You will be redirected shortly.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default Logout;
