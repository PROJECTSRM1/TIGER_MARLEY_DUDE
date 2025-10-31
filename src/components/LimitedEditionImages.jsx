import React from "react";
import "./LimitedEditionImage.css";

const limitedEditions = [
  {
    id: 1,
    name: "Ajith Kumar Racing Motorsport Fan Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹999",
    image: require("../assets/images/hoodie1.jpg"),
  },
  {
    id: 2,
    name: "OG Fire Strom Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹1,299",
    image: require("../assets/images/hoodie2.jpg"),
  },
  {
    id: 3,
    name: "Ajith Kumar Car Racing Motorsport Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹999",
    image: require("../assets/images/hoodie3.jpg"),
  },
  {
    id: 4,
    name: "They Call Him OG Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹999",
    image: require("../assets/images/hoodie4.jpg"),
  },
  {
    id: 5,
    name: "Customized Ajith Kumar Racing Hoodie",
    oldPrice: "₹2,000",
    newPrice: "₹1,199",
    image: require("../assets/images/hoodie5.jpg"),
  },
  {
    id: 6,
    name: "They Call Him OG Oversized T-shirt",
    oldPrice: "₹1,600",
    newPrice: "₹799",
    image: require("../assets/images/hoodie6.jpg"),
  },
  {
    id: 7,
    name: "Limited Edition Black Motorsport Hoodie",
    oldPrice: "₹2,200",
    newPrice: "₹1,299",
    image: require("../assets/images/hoodie7.jpg"),
  },
];

const LimitedEditionsImages = () => {
  return (
    <div className="limited-editions-section">
    
      <div className="limited-grid">
        {limitedEditions.map((item) => (
          <div key={item.id} className="limited-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="price-row">
              <span className="old-price">{item.oldPrice}</span>
              <span className="new-price">{item.newPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimitedEditionsImages;
