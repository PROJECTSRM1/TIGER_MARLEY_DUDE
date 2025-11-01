import React from "react";
import { useNavigate } from "react-router-dom";
import "./productCategories.css";
import geekImage from "../assets/geek.jpg";
import animeImage from "../assets/anime.jpg";
import sportImage from "../assets/sport.jpg";

const ProductCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      image: geekImage,
      buttons: [
        { label: "T-SHIRT", path: "/geek/tshirts" },
        { label: "HOODIE", path: "/geek/hoodies" },
      ],
    },
    {
      image: animeImage,
      buttons: [
        { label: "OVERSIZED", path: "/anime/oversized" },
        { label: "HOODIE", path: "/anime/hoodies" },
      ],
    },
    {
      image: sportImage,
      buttons: [
        { label: "OVERSIZED", path: "/sport/oversized" },
        { label: "HOODIE", path: "/sport/hoodies" },
      ],
    },
  ];

  return (
    <div className="product-section">
      <div className="product-grid">
        {categories.map((cat, index) => (
          <div key={index} className="product-card">
            <div className="image-wrapper">
              <img src={cat.image} alt={cat.title} />
              <h3 className="overlay-title">{cat.title}</h3>
            </div>
            <div className="button-row">
              {cat.buttons.map((btn, i) => (
                <button
                  key={i}
                  className="category-btn"
                  onClick={() => navigate(btn.path)}
                >
                  {btn.label} &gt;
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
