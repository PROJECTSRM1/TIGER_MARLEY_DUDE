import React from "react";
import "./Orders.css";

function Orders() {
  const sampleOrders = [
    {
      id: 101,
      customer: "Priya Sharma",
      product: "Classic White Shirt",
      quantity: 2,
      total: "₹2998",
      status: "Delivered",
      date: "2025-10-28",
    },
    {
      id: 102,
      customer: "Aman Verma",
      product: "Denim Jacket",
      quantity: 1,
      total: "₹2499",
      status: "Pending",
      date: "2025-10-30",
    },
    {
      id: 103,
      customer: "Riya Patel",
      product: "Tiger Hoodie",
      quantity: 3,
      total: "₹8397",
      status: "Shipped",
      date: "2025-10-29",
    },
    {
      id: 104,
      customer: "Sahil Mehta",
      product: "Graphic Tee",
      quantity: 4,
      total: "₹3996",
      status: "Cancelled",
      date: "2025-10-27",
    },
  ];

  return (
    <div className="orders-page">
      <h1>Orders Management</h1>
      <p>Here is a summary of recent customer orders.</p>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sampleOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
              <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
