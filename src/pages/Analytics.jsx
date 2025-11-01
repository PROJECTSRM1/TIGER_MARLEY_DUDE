import React from "react";
import "./Analytics.css";

function Analytics() {
  const analyticsData = [
    { title: "Total Sales", value: "₹4,50,000", change: "+12%", trend: "up" },
    { title: "Total Orders", value: "1,280", change: "+8%", trend: "up" },
    { title: "Total Customers", value: "940", change: "+5%", trend: "up" },
    { title: "Returned Orders", value: "45", change: "-3%", trend: "down" },
  ];

  const salesOverview = [
    { month: "Jan", sales: 35000 },
    { month: "Feb", sales: 42000 },
    { month: "Mar", sales: 50000 },
    { month: "Apr", sales: 48000 },
    { month: "May", sales: 62000 },
    { month: "Jun", sales: 58000 },
  ];

  return (
    <div className="analytics-page">
      <h1>Business Analytics Overview</h1>
      <p>Track key business metrics and insights below.</p>

      {/* Summary Cards */}
      <div className="analytics-cards">
        {analyticsData.map((data, index) => (
          <div className="analytics-card" key={index}>
            <h3>{data.title}</h3>
            <p className="value">{data.value}</p>
            <p className={`change ${data.trend}`}>
              {data.trend === "up" ? "▲" : "▼"} {data.change}
            </p>
          </div>
        ))}
      </div>

      {/* Sales Overview Chart (Static Example) */}
      <div className="sales-overview">
        <h2>Sales Overview (Jan - Jun 2025)</h2>
        <div className="bar-chart">
          {salesOverview.map((data, index) => (
            <div key={index} className="bar-container">
              <div
                className="bar"
                style={{ height: `${data.sales / 1000}px` }}
                title={`₹${data.sales.toLocaleString()}`}
              ></div>
              <span>{data.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
