import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@tigermarley.com");
  const [theme, setTheme] = useState("light");

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <p>Manage your profile and preferences.</p>

      <div className="settings-section">
        <h2>Profile Information</h2>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>

      <div className="settings-section">
        <h2>Preferences</h2>
        <label>
          Theme
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </select>
        </label>
      </div>

      <button className="save-btn" onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default Settings;
