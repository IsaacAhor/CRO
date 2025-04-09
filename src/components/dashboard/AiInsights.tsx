"use client";

import { useState } from "react";

export default function AiInsights() {
  const [currentInsight, setCurrentInsight] = useState(0);

  // Mock AI insights
  const insights = [
    {
      id: 1,
      title: "Supply Chain Vulnerability",
      content: "Your business shows a critical dependence on suppliers from a single geographical region. Our analysis suggests this creates a significant operational risk. Consider diversifying supplier relationships across multiple regions to increase resilience.",
      date: "Generated today",
      category: "Operational",
      confidence: 92
    },
    {
      id: 2,
      title: "Data Protection Compliance Gap",
      content: "Recent regulatory changes in your industry require enhanced data protection measures. Current security protocols fall short of compliance requirements in three key areas. Implementing additional safeguards can mitigate legal and financial risk.",
      date: "Generated 2 days ago",
      category: "Compliance",
      confidence: 87
    },
    {
      id: 3,
      title: "Cash Flow Optimization Opportunity",
      content: "Analysis of your financial patterns shows irregular cash flow cycles affecting operational stability. Implementing automated invoicing and payment scheduling could reduce financial risk and improve predictability by approximately 24%.",
      date: "Generated 4 days ago",
      category: "Financial",
      confidence: 84
    }
  ];

  const handleNext = () => {
    setCurrentInsight((prev) => (prev === insights.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentInsight((prev) => (prev === 0 ? insights.length - 1 : prev - 1));
  };

  const insight = insights[currentInsight];

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "operational":
        return "bg-warning/20 text-warning";
      case "compliance":
        return "bg-primary/20 text-primary";
      case "financial":
        return "bg-risk-high/20 text-risk-high";
      case "strategic":
        return "bg-success/20 text-success";
      default:
        return "bg-muted/20 text-white";
    }
  };

  return (
    <div className="card h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-display font-medium text-white">AI Risk Insights</h2>
        <div className="flex gap-1">
          <button
            className="text-white/60 hover:text-white p-1 rounded"
            onClick={handlePrevious}
            aria-label="Previous insight"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="text-white/60 hover:text-white p-1 rounded"
            onClick={handleNext}
            aria-label="Next insight"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative h-full">
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(insight.category)}`}>
            {insight.category}
          </span>
          <span className="text-xs text-white/40">{insight.date}</span>
        </div>

        <h3 className="text-lg font-medium text-white mb-2">{insight.title}</h3>
        <p className="text-white/70">{insight.content}</p>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <span className="text-xs text-white/60">AI Confidence: {insight.confidence}%</span>
          </div>
          <button className="text-sm text-primary hover:underline">
            View Detailed Analysis
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
          <div className="flex gap-1">
            {insights.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === currentInsight ? 'bg-primary' : 'bg-white/20'}`}
              />
            ))}
          </div>
          <button className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors duration-300">
            Get More Insights
          </button>
        </div>
      </div>
    </div>
  );
}
