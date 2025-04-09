"use client";

export default function RecentRecommendations() {
  // Mock recommendations from AI
  const recommendations = [
    {
      id: "rec1",
      title: "Implement Cash Flow Monitoring System",
      description: "Our AI analysis suggests implementing a real-time cash flow monitoring system to address financial risk factors.",
      timestamp: "2 days ago",
      priority: "high",
      category: "financial"
    },
    {
      id: "rec2",
      title: "Review Data Protection Protocols",
      description: "Recent regulatory changes require an update to your data protection protocols to ensure compliance.",
      timestamp: "3 days ago",
      priority: "high",
      category: "compliance"
    },
    {
      id: "rec3",
      title: "Diversify Supplier Network",
      description: "Supply chain risk can be mitigated by diversifying your supplier network across different geographical regions.",
      timestamp: "5 days ago",
      priority: "medium",
      category: "operational"
    },
    {
      id: "rec4",
      title: "Implement Market Trend Monitoring",
      description: "Strategic risk from market changes can be addressed by implementing a regular market trend monitoring process.",
      timestamp: "1 week ago",
      priority: "medium",
      category: "strategic"
    }
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "high":
        return "text-risk-high";
      case "medium":
        return "text-warning";
      case "low":
        return "text-success";
      default:
        return "";
    }
  };

  return (
    <div className="card h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-display font-medium text-white">AI Recommendations</h2>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>

      <div className="space-y-4">
        {recommendations.map(rec => (
          <div key={rec.id} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start gap-2 mb-1">
              <div className={`mt-1 h-3 w-3 rounded-full ${rec.priority === 'high' ? 'bg-risk-high' : rec.priority === 'medium' ? 'bg-warning' : 'bg-success'}`} />
              <div>
                <h3 className="font-medium text-white">{rec.title}</h3>
                <p className="text-white/60 text-sm">{rec.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-white/40">{rec.timestamp}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full bg-white/10 ${getPriorityClass(rec.priority)}`}>
                    {rec.priority} priority
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <button className="w-full btn-outline">Generate New Recommendations</button>
      </div>
    </div>
  );
}
