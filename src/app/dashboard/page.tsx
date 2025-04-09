import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RiskStats from "@/components/dashboard/RiskStats";
import RiskSummary from "@/components/dashboard/RiskSummary";
import RecentRecommendations from "@/components/dashboard/RecentRecommendations";
import RiskTrends from "@/components/dashboard/RiskTrends";
import AiInsights from "@/components/dashboard/AiInsights";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-medium text-white">Dashboard</h1>
              <p className="text-white/60 mt-1">Your risk management at a glance</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <button className="btn-outline">Export Report</button>
              <button className="btn-primary">Risk Assessment</button>
            </div>
          </div>

          <RiskStats />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <RiskSummary />
            </div>
            <div>
              <RecentRecommendations />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <RiskTrends />
            <AiInsights />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
