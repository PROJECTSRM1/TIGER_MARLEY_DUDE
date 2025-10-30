import React, { useRef } from "react";
import "./ArrivalsPage.css";

const Arrivals = () => {
  const carouselRef = useRef(null);

  const products = [
    { id: 1, name: "Ronaldo Siuuuuu Hoodie", price: "₹1,099", image: require("../assets/images/hoodie1.jpg") },
    { id: 2, name: "Red Devils Half Sleeve Tee", price: "₹599", image: require("../assets/images/hoodie2.jpg") },
    { id: 3, name: "Arsenal Half Sleeve Tee", price: "₹599", image: require("../assets/images/hoodie3.jpg") },
    { id: 4, name: "FCB Back To Football Tee", price: "₹599", image: require("../assets/images/hoodie4.jpg") },
    { id: 5, name: "Chelsea Blue Pride Tee", price: "₹699", image: require("../assets/images/hoodie5.jpg") },
    { id: 6, name: "Real Madrid Spirit Hoodie", price: "₹1,199", image: require("../assets/images/hoodie6.jpg") },
    { id: 7, name: "Liverpool Anfield Red Tee", price: "₹599", image: require("../assets/images/hoodie7.jpg") },
    { id: 8, name: "Man City Champions Hoodie", price: "₹1,099", image: require("../assets/images/hoodie1.jpg") },
  ];

  const itemsPerSlide = 3; // 🟢 Show 4 at a time

  const scrollLeft = () => {
    const cardWidth = carouselRef.current.querySelector(".product-card").offsetWidth + 20; // 20px = gap
    carouselRef.current.scrollBy({
      left: -cardWidth * itemsPerSlide,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const cardWidth = carouselRef.current.querySelector(".product-card").offsetWidth + 20;
    carouselRef.current.scrollBy({
      left: cardWidth * itemsPerSlide,
      behavior: "smooth",
    });
  };

  return (
    <div className="arrival-edition-container">
      {/* 🔴 Section Header */}
      <h2 className="arrival-title">New Arrivals</h2>
      <div className="red-underline"></div>
      <p className="arrival-text">
        <em>Epic Themes Await: Streetwear Oversized Tees Here!</em>
      </p>

      {/* 🖼️ Product Carousel */}
      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>❮</button>

        <div className="carousel" ref={carouselRef}>
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>❯</button>
      </div>
    </div>
  );
};

export default Arrivals;
