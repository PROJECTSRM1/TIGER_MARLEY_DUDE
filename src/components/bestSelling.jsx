import React, { useState } from "react";
import "./bestselling.css";

const BestSelling = () => {
  const [activeTab, setActiveTab] = useState("Geek Tees");

  const products = {
    "Geek Tees": [
      {
        id: 1,
        name: "Declare Variables not War",
        price: "₹599",
        oldPrice: "₹1,199",
        image: require("../assets/best_selling_images/geek1.jpg"),
        url: "#",
      },
      {
        id: 2,
        name: "If It Works Don't Touch It",
        price: "₹599",
        oldPrice: "₹1,199",
        image: require("../assets/best_selling_images/geek2.jpg"),
        url: "#",
      },
      {
        id: 3,
        name: "Programmer’s Life Hugs & Fixes",
        price: "₹599",
        oldPrice: "₹1,199",
        image: require("../assets/best_selling_images/geek3.jpg"),
        url: "#",
      },
      {
        id: 4,
        name: "While Alive Eat Sleep Code",
        price: "₹599",
        oldPrice: "₹1,199",
        image: require("../assets/best_selling_images/geek4.jpg"),
        url: "#",
      },
      {
        id: 5,
        name: "Eat Sleep Code Repeat",
        price: "₹599",
        oldPrice: "₹1,199",
        image: require("../assets/best_selling_images/geek5.jpg"),
        url: "#",
      },
      {
        id: 6,
        name: "It's Not a Bug It's a Feature",
        price: "₹599",
        oldPrice: "₹1,199",
        image: require("../assets/best_selling_images/geek6.jpg"),
        url: "#",
      },
    ],

    "Anime Oversized": [
      {
        id: 7,
        name: "Attack Titan Tee",
        price: "₹799",
        oldPrice: "₹1,499",
        image: require("../assets/best_selling_images/anime_oversize1.jpg"),
        url: "#",
      },
      {
        id: 8,
        name: "Naruto Sage Mode Tee",
        price: "₹799",
        oldPrice: "₹1,499",
        image: require("../assets/best_selling_images/anime_oversize2.jpg"),
        url: "#",
      },
      {
        id: 9,
        name: "Luffy Gear 5 Tee",
        price: "₹799",
        oldPrice: "₹1,499",
        image: require("../assets/best_selling_images/anime_oversize3.jpg"),
        url: "#",
      },
      {
        id: 10,
        name: "Zoro Samurai Tee",
        price: "₹799",
        oldPrice: "₹1,499",
        image: require("../assets/best_selling_images/anime_oversize4.jpg"),
        url: "#",
      },
      {
        id: 11,
        name: "Gojo Domain Tee",
        price: "₹799",
        oldPrice: "₹1,499",
        image: require("../assets/best_selling_images/anime_oversize5.jpg"),
        url: "#",
      },
      {
        id: 12,
        name: "Levi Ackerman Tee",
        price: "₹799",
        oldPrice: "₹1,499",
        image: require("../assets/best_selling_images/anime_oversize6.jpg"),
        url: "#",
      },
      {
        id: 13,
        name: "Demon Slayer Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_oversize7.jpg"),
        url: "#",
      },
      {
        id: 14,
        name: "Itachi Uchiha Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_oversize8.jpg"),
        url: "#",
      },
    ],

    "Anime Hoodie": [
      {
        id: 15,
        name: "Gojo Satoru Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_hoodie1.jpg"),
        url: "#",
      },
      {
        id: 16,
        name: "Levi Ackerman Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_hoodie2.jpg"),
        url: "#",
      },
      {
        id: 17,
        name: "Naruto Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_hoodie3.jpg"),
        url: "#",
      },
      {
        id: 18,
        name: "Luffy Gear 5 Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_hoodie4.jpg"),
        url: "#",
      },
      {
        id: 19,
        name: "Zoro Samurai Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_hoodie5.jpg"),
        url: "#",
      },
      {
        id: 20,
        name: "Demon Slayer Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_hoodie6.jpg"),
        url: "#",
      },
      {
        id: 21,
        name: "Itachi Uchiha Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_hoodie7.jpg"),
        url: "#",
      },
      {
        id: 22,
        name: "One Piece Crew Hoodie",
        price: "₹999",
        oldPrice: "₹1,799",
        image: require("../assets/best_selling_images/anime_hoodie8.jpg"),
        url: "#",
      },
    ],
  };

  return (
    <section className="bestselling-section">
      <h2 className="bestselling-title">#BestSelling Goodies</h2>

      <div className="bestselling-tabs">
        {Object.keys(products).map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="bestselling-grid">
        {products[activeTab].map((item) => (
          <a href={item.url} key={item.id} className="bestselling-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>
              <span className="old-price">{item.oldPrice}</span>{" "}
              <span className="new-price">{item.price}</span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
