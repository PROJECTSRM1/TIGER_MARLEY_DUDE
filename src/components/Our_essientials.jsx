import React from "react";
import "./Our_essiential.css";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Best Seller", image: require("../assets/categories/bestseller.jpg"), url: "" },
  { id: 2, name: "T-shirts", image: require("../assets/categories/t_shirt.jpg"), url: "" },
  { id: 3, name: "Oversized", image: require("../assets/categories/oversized.jpg"), url: "" },
  { id: 4, name: "Hoodies", image: require("../assets/categories/hoodies.jpg"), url: "" },
  { id: 5, name: "Full Sleeves", image: require("../assets/categories/full_sleves.jpg"), url: "" },
  { id: 6, name: "Polo", image: require("../assets/categories/polo.jpg"), url: "" },
  { id: 7, name: "Crop top", image: require("../assets/categories/croptop.jpg"), url: "" },
  { id: 8, name: "T-shirt Dress", image: require("../assets/categories/t_shirt_dress.jpg"), url: "" },
  { id: 9, name: "Solids", image: require("../assets/categories/solids.jpg"), url: "" },
  { id: 10, name: "Kids", image: require("../assets/categories/kids.jpg"), url: "" }

];

const OurEssential = () => {
  return (
    <div className="essential-edition-container">
      <h2 className="essential-title">OUR ESSENTIALS</h2>
      <div className="red-underline"></div>
      <p className="essential-text">
        <em>Everyday Must-Haves, Redefined!</em>
      </p>

      <div className="categories-grid">
        {categories.map((item) => (
          <Link to={item.url} className="category-link" key={item.id}>
            <div className="category-card">
              <img src={item.image} alt={item.name} className="category-img" />
              <p className="category-name">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurEssential;
