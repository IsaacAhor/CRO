"use client";

export default function RiskSummary() {
  // Mock risk data categorized
  const riskCategories = [
    {
      id: "financial",
      name: "Financial Risks",
      risks: [
        { id: "f1", name: "Cash Flow Issues", severity: "high", probability: "medium", impact: "high" },
        { id: "f2", name: "Credit Risk Exposure", severity: "medium", probability: "low", impact: "high" },
        { id: "f3", name: "Budget Overruns", severity: "medium", probability: "medium", impact: "medium" },
      ]
    },
    {
      id: "market",
      name: "Market Risks",
      risks: [
        { id: "m1", name: "Customer Churn Signals", severity: "medium", probability: "high", impact: "medium" },
        { id: "m2", name: "Bad Reviews", severity: "high", probability: "medium", impact: "high" },
        { id: "m3", name: "Pricing Mismatch", severity: "medium", probability: "high", impact: "high" },
        { id: "m4", name: "Market Conditions", severity: "high", probability: "medium", impact: "high" },
      ]
    },
    {
      id: "operational",
      name: "Operational Risks",
      risks: [
        { id: "o1", name: "Supply Chain Disruption", severity: "high", probability: "medium", impact: "high" },
        { id: "o2", name: "Staff Turnover", severity: "medium", probability: "high", impact: "medium" },
        { id: "o3", name: "Equipment Failure", severity: "low", probability: "medium", impact: "low" },
        { id: "o4", name: "Process Inefficiencies", severity: "medium", probability: "high", impact: "medium" },
      ]
    },
    {
      id: "compliance",
      name: "Legal & Compliance Risks",
      risks: [
        { id: "c1", name: "Regulatory Non-Compliance", severity: "high", probability: "low", impact: "high" },
        { id: "c2", name: "Data Protection Issues", severity: "high", probability: "medium", impact: "high" },
        { id: "c3", name: "Audit Failures", severity: "medium", probability: "low", impact: "medium" },
        { id: "c4", name: "HR Flags", severity: "medium", probability: "medium", impact: "medium" },
      ]
    }
  ];

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case "high":
        return "risk-high";
      case "medium":
        return "risk-medium";
      case "low":
        return "risk-low";
      default:
        return "";
    }
  };

  return (
    <div className="card h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-display font-medium text-white">Risk Summary</h2>
        <select className="bg-card border border-white/10 text-white rounded-md px-2 py-1">
          <option value="all">All Categories</option>
          {riskCategories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        {riskCategories.map(category => (
          <div key={category.id}>
            <h3 className="text-lg font-medium text-white mb-2">{category.name}</h3>
            <div className="space-y-2">
              {category.risks.map(risk => (
                <div
                  key={risk.id}
                  className={`p-3 rounded-lg ${getSeverityClass(risk.severity)}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{risk.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                        P: {risk.probability}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                        I: {risk.impact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
