import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-20 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-ghostcro opacity-50 pointer-events-none z-0" />
            <div className="relative z-10">
              <div className="mx-auto mb-6 p-2 rounded-full bg-primary/20 inline-flex items-center text-sm text-white font-medium">
                <div className="bg-primary rounded-full px-3 py-1 mr-2">NEW</div>
                <span className="pr-2">AI Risk Management</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white mb-6">
                Your <span className="text-primary">AI Chief Risk Officer</span>
                <br />For Small Businesses
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12">
                GhostCRO uses AI to identify, monitor, and manage business risks. Get enterprise-level
                risk management without the enterprise cost.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="btn-primary text-lg px-8 py-3"
                >
                  Try GhostCRO Free
                </Link>
                <button className="btn-outline text-lg px-8 py-3">
                  See Demo
                </button>
              </div>
            </div>
          </div>

          {/* Mockup Image */}
          <div className="relative mt-20 max-w-5xl mx-auto px-4">
            <div className="bg-black/40 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://ext.same-assets.com/2510403415/3053245229.png"
                alt="GhostCRO Dashboard Preview"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
                Everything You Need for Risk Management
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                GhostCRO provides comprehensive risk management for small businesses, all powered by advanced AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="card hover:bg-card/80 transition-colors duration-300">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.84 6.71 2.26" />
                    <path d="M21 3v9h-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Real-Time Risk Monitoring</h3>
                <p className="text-white/70 mb-4">
                  Continuously monitor your business risks with real-time dashboards and alerts. Never be caught off guard by emerging threats.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="card hover:bg-card/80 transition-colors duration-300">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">AI Risk Analysis</h3>
                <p className="text-white/70 mb-4">
                  Our AI analyzes your business data to identify patterns and risks that humans might miss. Get insights that would normally require a team of analysts.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="card hover:bg-card/80 transition-colors duration-300">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Actionable Recommendations</h3>
                <p className="text-white/70 mb-4">
                  Don't just identify risks—get specific, actionable recommendations on how to address them, prioritized by urgency and impact.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="card hover:bg-card/80 transition-colors duration-300">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Risk Trend Analysis</h3>
                <p className="text-white/70 mb-4">
                  Track how your risk profile evolves over time. Understand the impact of your risk mitigation efforts with clear visualizations.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="card hover:bg-card/80 transition-colors duration-300">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Compliance Assistance</h3>
                <p className="text-white/70 mb-4">
                  Stay compliant with industry regulations and standards. Our AI keeps track of regulatory changes and your compliance status.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="card hover:bg-card/80 transition-colors duration-300">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                    <path d="M15 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                    <path d="M8 13v2a6 6 0 0 0 12 0v-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">24/7 Support</h3>
                <p className="text-white/70 mb-4">
                  Our AI-powered chat assistant is available 24/7 to answer your risk management questions and provide guidance when you need it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
              Ready to Secure Your Business Future?
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-10">
              Join thousands of small businesses using GhostCRO to identify, manage, and mitigate risks before they become problems.
            </p>
            <Link
              href="/dashboard"
              className="btn-primary text-lg px-10 py-4"
            >
              Start Your Free Trial Today
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
