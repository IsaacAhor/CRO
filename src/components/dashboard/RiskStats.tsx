"use client";

export default function RiskStats() {
  // Mock data for our risk statistics
  const stats = [
    {
      label: "Total Risks",
      value: "27",
      change: "+3",
      isPositive: false
    },
    {
      label: "High Risk Items",
      value: "8",
      change: "-2",
      isPositive: true
    },
    {
      label: "Risk Score",
      value: "68/100",
      change: "+12",
      isPositive: true
    },
    {
      label: "Addressed Risks",
      value: "64%",
      change: "+8%",
      isPositive: true
    }
  ];

  return (
    <div className="dashboard-stats">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <span className="stat-label">{stat.label}</span>
          <div className="stat-value">{stat.value}</div>
          <div className={`stat-change ${stat.isPositive ? 'positive' : 'negative'}`}>
            {stat.change} from last month
          </div>
        </div>
      ))}
    </div>
  );
}
