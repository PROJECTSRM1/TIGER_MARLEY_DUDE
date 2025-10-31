import React from "react";
import { sportOversized } from "../data/products";

const SportOversized = () => (
  <div style={{ textAlign: "center", padding: "40px" }}>
    <h1>Sport Oversized Tees ⚽</h1>
    <p>Stay sporty with our oversized sports collection!</p>

    <div style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "30px",
      marginTop: "40px"
    }}>
      {sportOversized.map((product) => (
        <div key={product.id} style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          width: "220px",
          textAlign: "center",
        }}>
          <img src={product.image} alt={product.title} style={{ width: "100%", borderRadius: "10px" }} />
          <h3 style={{ margin: "15px 0 5px" }}>{product.title}</h3>
          <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
          <button style={{
            marginTop: "10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#af3828",
            color: "#fff",
            cursor: "pointer"
          }}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

export default SportOversized;
