import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function StatusPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container sm:px-16 pb-20 max-w-screen-lg mx-auto pt-24">
          <header className="flex flex-col items-center justify-center space-y-6 pt-8 pb-16">
            <div className="flex gap-2 items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-display font-medium text-white text-center">
              All systems operational
            </h1>
            <p className="text-sm text-white/60 text-center">
              No current availability issues
            </p>
            <a href="#recent-events" className="btn-outline">
              View recent events
            </a>
          </header>

          <section className="pb-4">
            <h2
              id="status-per-service"
              className="flex flex-wrap-reverse gap-10 justify-between items-start mt-20 mb-6 scroll-m-12 h-fit"
            >
              <div className="text-lg text-white font-medium">
                Status per service area
              </div>
              <div className="text-sm flex flex-wrap items-center gap-x-10 gap-y-2">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                  <span className="text-white/70">Available</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                  <span className="text-white/70">Maintenance</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-orange-400 rounded-full" />
                  <span className="text-white/70">Degradation</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full" />
                  <span className="text-white/70">Disruption</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-red-700 rounded-full" />
                  <span className="text-white/70">Outage</span>
                </div>
              </div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="card">
                <div className="flex gap-2 items-center mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                </div>
                <h3 className="font-medium text-white text-lg">Workspaces</h3>
                <span className="text-white/60 font-medium text-xs md:pt-2">
                  Last updated on 2024-04-09
                </span>
              </div>
              <div className="card">
                <div className="flex gap-2 items-center mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                </div>
                <h3 className="font-medium text-white text-lg">Templates</h3>
                <span className="text-white/60 font-medium text-xs md:pt-2">
                  Last updated on 2024-04-09
                </span>
              </div>
              <div className="card">
                <div className="flex gap-2 items-center mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                </div>
                <h3 className="font-medium text-white text-lg">Integrations</h3>
                <span className="text-white/60 font-medium text-xs md:pt-2">
                  Last updated on 2024-04-09
                </span>
              </div>
              <div className="card">
                <div className="flex gap-2 items-center mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                </div>
                <h3 className="font-medium text-white text-lg">
                  Gemini in Firebase
                </h3>
                <span className="text-white/60 font-medium text-xs md:pt-2">
                  Last updated on 2024-04-09
                </span>
              </div>
            </div>
          </section>

          <section className="pb-4 min-h-[700px]">
            <h2
              id="recent-events"
              className="flex flex-wrap-reverse gap-10 justify-between items-start mt-20 mb-6 scroll-m-12 h-fit"
            >
              <div className="text-lg text-white font-medium">Recent events</div>
            </h2>

            <div className="card mb-4">
              <div className="flex flex-wrap justify-between gap-4">
                <h3 className="inline-block font-medium text-white">
                  All systems operational
                </h3>
                <time className="text-sm text-white/60">2024-04-09</time>
              </div>
              <p className="my-2 text-white/70">
                All Firebase Studio services are functioning normally.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
