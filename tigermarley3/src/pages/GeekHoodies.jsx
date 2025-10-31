import React, { useState } from "react";
import { geekHoodies } from "../data/products";

const GeekHoodies = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("az");

  // === Filter Logic ===
  const filteredProducts = geekHoodies.filter((product) => {
    switch (filter) {
      case "under1000":
        return product.price < 1000;
      case "1000to1500":
        return product.price >= 1000 && product.price <= 1500;
      case "above1500":
        return product.price > 1500;
      default:
        return true;
    }
  });

  // === Sort Logic ===
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "az":
        return a.title.localeCompare(b.title);
      case "za":
        return b.title.localeCompare(a.title);
      case "lowHigh":
        return a.price - b.price;
      case "highLow":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1>Geek Hoodies 🧥</h1>
      <p>Explore our collection of geeky and coder-inspired hoodies!</p>

      {/* === Filter + Sort Bar === */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "85%",
          margin: "40px auto",
          maxWidth: "1000px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Filter Button */}
        <button
          onClick={() => setFilterOpen(true)}
          style={{
            backgroundColor: "#af3828",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          🧩 Filter
        </button>

        {/* Sort Dropdown */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h3 style={{ margin: 0, color: "#333" }}>Sort By:</h3>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              padding: "10px 20px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          >
            <option value="az">Alphabetically, A–Z</option>
            <option value="za">Alphabetically, Z–A</option>
            <option value="lowHigh">Price: Low to High</option>
            <option value="highLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* === Sidebar Filter Drawer === */}
      {filterOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "320px",
            backgroundColor: "#fff",
            boxShadow: "2px 0 15px rgba(0,0,0,0.3)",
            padding: "20px",
            zIndex: 200,
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 style={{ color: "#af3828" }}>Filter Options</h2>
            <button
              onClick={() => setFilterOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              ✖
            </button>
          </div>

          {/* === Price Filter === */}
          <h3 style={{ textAlign: "left", marginTop: "30px" }}>Price</h3>
          <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
            <li>
              <label>
                <input
                  type="radio"
                  name="price"
                  value="under1000"
                  checked={filter === "under1000"}
                  onChange={(e) => setFilter(e.target.value)}
                />{" "}
                ₹0 — ₹999
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="price"
                  value="1000to1500"
                  checked={filter === "1000to1500"}
                  onChange={(e) => setFilter(e.target.value)}
                />{" "}
                ₹1000 — ₹1500
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="price"
                  value="above1500"
                  checked={filter === "above1500"}
                  onChange={(e) => setFilter(e.target.value)}
                />{" "}
                ₹1500+
              </label>
            </li>
          </ul>

          {/* === Product Type === */}
          <h3 style={{ textAlign: "left", marginTop: "30px" }}>Product Type</h3>
          <p style={{ textAlign: "left" }}>Hoodies (50)</p>

          {/* === Color Filter === */}
          <h3 style={{ textAlign: "left", marginTop: "30px" }}>Color</h3>
          <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
            {["Black", "Charcoal Melange", "Maroon", "Olive Green"].map(
              (color, i) => (
                <li key={i}>
                  <label>
                    <input type="checkbox" /> {color}
                  </label>
                </li>
              )
            )}
          </ul>

          {/* === Size Filter === */}
          <h3 style={{ textAlign: "left", marginTop: "30px" }}>Size</h3>
          <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
            {["S", "M", "L", "XL", "2XL"].map((size, i) => (
              <li key={i}>
                <label>
                  <input type="checkbox" /> {size}
                </label>
              </li>
            ))}
          </ul>

          {/* === Availability === */}
          <h3 style={{ textAlign: "left", marginTop: "30px" }}>Availability</h3>
          <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
            <li>
              <label>
                <input type="checkbox" /> In stock (49)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Out of stock (32)
              </label>
            </li>
          </ul>

          <button
            onClick={() => setFilterOpen(false)}
            style={{
              marginTop: "30px",
              backgroundColor: "#af3828",
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Apply Filters
          </button>
        </div>
      )}

      {/* === Overlay for Sidebar === */}
      {filterOpen && (
        <div
          onClick={() => setFilterOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 100,
          }}
        ></div>
      )}

      {/* === Product Grid (3 per row) === */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          justifyItems: "center",
          marginTop: "40px",
          width: "85%",
          marginInline: "auto",
        }}
      >
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              width: "100%",
              maxWidth: "250px",
              padding: "15px",
              textAlign: "center",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
                height: "250px",
              }}
            />
            <h3 style={{ marginTop: "10px", fontSize: "16px" }}>
              {product.title}
            </h3>
            <p style={{ fontWeight: "bold", color: "#af3828" }}>
              ₹{product.price}
            </p>
            <button
              style={{
                backgroundColor: "#af3828",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "8px",
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

export default GeekHoodies;
