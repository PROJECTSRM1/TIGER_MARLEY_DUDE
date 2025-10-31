import React from "react";
import "./Customers.css";

function Customers() {
  const sampleCustomers = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      phone: "+91 98765 43210",
      orders: 12,
      joinDate: "2024-06-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman.verma@example.com",
      phone: "+91 99876 54321",
      orders: 8,
      joinDate: "2024-08-01",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Riya Patel",
      email: "riya.patel@example.com",
      phone: "+91 91234 56789",
      orders: 20,
      joinDate: "2023-12-10",
      status: "Active",
    },
    {
      id: 4,
      name: "Sahil Mehta",
      email: "sahil.mehta@example.com",
      phone: "+91 90012 34567",
      orders: 3,
      joinDate: "2025-02-20",
      status: "Banned",
    },
  ];

  return (
    <div className="customers-page">
      <h1>Customers Management</h1>
      <p>Here is a list of customers registered in the Tiger Marley store.</p>

      <table className="customers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Orders</th>
            <th>Join Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.orders}</td>
              <td>{customer.joinDate}</td>
              <td className={`status ${customer.status.toLowerCase()}`}>{customer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
