import React from "react";
import { useNavigate } from "react-router-dom";
import { geekTshirts } from "../data/products";

const categories = [
  { key: "shop-all", label: "SHOP ALL", img: "/images/categories/all.png" },
  { key: "t-shirts", label: "T-SHIRTS", img: "/images/categories/tshirts.png" },
  { key: "hoodies", label: "HOODIES", img: "/images/categories/hoodies.png" },
  { key: "oversized", label: "OVERSIZED", img: "/images/categories/oversized.png" },
  { key: "full-sleeve", label: "SLEEVES", img: "/images/categories/sleeves.png" },
  { key: "kids", label: "KIDS", img: "/images/categories/kids.png" },
];

const GeekTshirts = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (key) => {
    if (key === "shop-all") navigate("/");
    else navigate(`/${key}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {/* Banner Image */}
      <img
        src="/images/geek-banner.png"
        alt="Tees for Tech Enthusiasts Banner"
        style={{
          width: "1200px",
          height: "auto",
          marginBottom: "20px",
          borderRadius: "12px"
        }}
      />

      {/* Categories Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "40px",
          flexWrap: "wrap",
          fontWeight: "600",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.key}
            onClick={() => handleCategoryClick(cat.key)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              borderRadius: "6px",
              border: "1.5px solid #af3828",
              color: "#af3828",
              textTransform: "uppercase",
              userSelect: "none",
              transition: "background-color 0.3s, color 0.3s",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#af3828";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#af3828";
            }}
          >
            <img 
              src={cat.img} 
              alt={cat.label} 
              style={{ width: "24px", height: "24px", objectFit: "contain" }} 
            />
            <span>{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Default Products Grid (for main page) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "0px"
        }}
      >
        {geekTshirts.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              width: "220px",
              textAlign: "center"
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3 style={{ margin: "15px 0 5px" }}>{product.title}</h3>
            <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#af3828",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeekTshirts;
