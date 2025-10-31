import React from "react";
import "./Overview.css";

function Overview() {
  const summaryData = [
    { title: "Total Sales", value: "₹1,25,000", change: "+8%" },
    { title: "Orders", value: "845", change: "+5%" },
    { title: "Customers", value: "312", change: "+12%" },
    { title: "Revenue", value: "₹2,75,000", change: "+10%" },
  ];

  const salesData = [65, 78, 55, 92, 110, 87, 130]; // dummy weekly data

  return (
    <div className="overview-page">
      <h1>Dashboard Overview</h1>
      <p>Welcome to Tiger Marley Admin Dashboard.</p>

      {/* Summary Cards */}
      <div className="summary-grid">
        {summaryData.map((item, i) => (
          <div className="summary-card" key={i}>
            <h3>{item.title}</h3>
            <h2>{item.value}</h2>
            <p className={item.change.startsWith("+") ? "positive" : "negative"}>
              {item.change} from last week
            </p>
          </div>
        ))}
      </div>

      {/* Simple Chart */}
      <div className="chart-container">
        <h3>Weekly Sales Overview</h3>
        <div className="chart">
          {salesData.map((val, i) => (
            <div
              key={i}
              className="bar"
              style={{ height: `${val}px` }}
              title={`₹${val * 1000}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
