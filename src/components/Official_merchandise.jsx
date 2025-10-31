import React from "react";
import "./Official_merchandise.css";
import { Link } from "react-router-dom";

const merchItems = [
  {
    id: 1,
    name: "Mumbai Indians",
    image: require("../assets/official_merchandise/mumbai.jpg"),
    url: "#",
  },
  {
    id: 2,
    name: "Punjab Kings",
    image: require("../assets/official_merchandise/punjab.jpg"),
    url: "#",
  },
  {
    id: 3,
    name: "NASA",
    image: require("../assets/official_merchandise/nasa.jpg"),
    url: "#",
  },
];

const OfficialMM = () => {
  return (
    <div className="official-edition-container">
      <h2 className="official-title">OFFICIAL MERCHANDISE</h2>
      <div className="red-underline"></div>
      <p className="official-text">
        <em>Gear Up, Fans: Official Fan Merch T-Shirts for You!</em>
      </p>

      <div className="merch-grid">
        {merchItems.map((item) => (
          <Link to={item.url} key={item.id} className="merch-card">
            <img src={item.image} alt={item.name} className="merch-image" />
          </Link>
        ))}
      </div>

      <div className="clearance-section">
        <p className="clearance-subtitle">GREAT DEALS!</p>
        <h2 className="clearance-title">CLEARANCE STORE UPTO 50%</h2>
        <div className="size-buttons">
          <Link to="#" className="size-btn">SIZE XS</Link>
          <Link to="#" className="size-btn">SIZE S</Link>
          <Link to="#" className="size-btn active">SIZE M</Link>
          <Link to="#" className="size-btn">SIZE L</Link>
          <Link to="#" className="size-btn">SIZE XL</Link>
          <Link to="#" className="size-btn">SIZE 2XL</Link>
        </div>
      </div>
      <div className="promo-wrapper">
        <div className="promo-section">
          <div className="promo-card">
            <div className="promo-content">
              <h3>CORPORATE</h3>
              <p>Anything & Anything for your Teams / Office</p>
              <Link to="#" className="promo-btn">Shop for your Team</Link>
            </div>
            <img
              src={require("../assets/official_merchandise/promo1.jpg")}
              alt="Corporate"
              className="promo-img"
            />
          </div>

          <div className="promo-card">
            <div className="promo-content">
              <h3>CUSTOMIZE</h3>
              <p>Design your own t-shirts, hoodies & more with Dudeme!</p>
              <Link to="#" className="promo-btn">Customize Now</Link>
            </div>
            <img
              src={require("../assets/official_merchandise/promo2.jpg")}
              alt="Customize"
              className="promo-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialMM;
