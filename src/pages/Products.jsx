import React from "react";
import "./Products.css";

function Products() {
  const sampleProducts = [
    { id: 1, name: "Classic White Shirt", category: "Essentials", price: "₹1499", stock: 24, status: "Available" },
    { id: 2, name: "Denim Jacket", category: "Limited Edition", price: "₹2499", stock: 12, status: "Low Stock" },
    { id: 3, name: "Graphic Tee", category: "Fandom Fusion", price: "₹999", stock: 50, status: "Available" },
    { id: 4, name: "Tiger Hoodie", category: "Official Merchandise", price: "₹2799", stock: 0, status: "Out of Stock" },
    { id: 5, name: "Custom Cap", category: "Customize", price: "₹799", stock: 30, status: "Available" },
  ];

  return (
    <div className="products-page">
      <h1>Products</h1>
      <p>Here’s a summary of all available products in the Tiger Marley store.</p>

      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleProducts.map((product) => (
            <tr key={product.id} className={product.status.replace(" ", "-").toLowerCase()}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td className={`status ${product.status.replace(" ", "-").toLowerCase()}`}>
                {product.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
