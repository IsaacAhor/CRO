"use client";

import { useState } from "react";

export default function RiskTrends() {
  const [timeRange, setTimeRange] = useState("1M"); // 1 month selected by default

  // Sample trend data - this would typically come from an API
  // This is a placeholder visualization that shows mock trends over time

  return (
    <div className="card h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-display font-medium text-white">Risk Trends</h2>
        <div className="flex space-x-1 bg-muted rounded-md p-1">
          <button
            className={`px-2 py-1 text-xs rounded ${timeRange === '1W' ? 'bg-card text-white' : 'text-white/60 hover:text-white'}`}
            onClick={() => setTimeRange('1W')}
          >
            1W
          </button>
          <button
            className={`px-2 py-1 text-xs rounded ${timeRange === '1M' ? 'bg-card text-white' : 'text-white/60 hover:text-white'}`}
            onClick={() => setTimeRange('1M')}
          >
            1M
          </button>
          <button
            className={`px-2 py-1 text-xs rounded ${timeRange === '3M' ? 'bg-card text-white' : 'text-white/60 hover:text-white'}`}
            onClick={() => setTimeRange('3M')}
          >
            3M
          </button>
          <button
            className={`px-2 py-1 text-xs rounded ${timeRange === '1Y' ? 'bg-card text-white' : 'text-white/60 hover:text-white'}`}
            onClick={() => setTimeRange('1Y')}
          >
            1Y
          </button>
        </div>
      </div>

      {/* Mock visualization - this would be a real chart in production */}
      <div className="relative h-60 w-full mt-6">
        {/* We're using a simplified visualization here because chart libraries would add complexity */}
        <div className="absolute bottom-0 w-full h-[1px] bg-white/20" />

        {/* Y-axis labels */}
        <div className="absolute -left-2 top-0 text-xs text-white/40">High</div>
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-xs text-white/40">Med</div>
        <div className="absolute -left-2 bottom-0 text-xs text-white/40">Low</div>

        {/* Risk trends */}
        <div className="relative h-full w-full pl-4">
          {/* Financial risks - trending down */}
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,30 C20,35 40,60 60,50 S80,15 100,20" fill="none" stroke="#EF4444" strokeWidth="2" />
            </svg>
          </div>

          {/* Operational risks - trending up */}
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,70 C20,65 40,50 60,45 S80,20 100,30" fill="none" stroke="#F59E0B" strokeWidth="2" />
            </svg>
          </div>

          {/* Compliance risks - stable with slight improvement */}
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 C20,48 40,52 60,48 S80,45 100,40" fill="none" stroke="#3B82F6" strokeWidth="2" />
            </svg>
          </div>

          {/* Overall risk score */}
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,45 C20,47 40,50 60,48 S80,40 100,35" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="5,3" />
            </svg>
          </div>
        </div>

        {/* X-axis labels based on selected time range */}
        <div className="absolute bottom-4 left-0 w-full flex justify-between text-xs text-white/40 px-4">
          {timeRange === '1W' && (
            <>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </>
          )}

          {timeRange === '1M' && (
            <>
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </>
          )}

          {timeRange === '3M' && (
            <>
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
            </>
          )}

          {timeRange === '1Y' && (
            <>
              <span>Q1</span>
              <span>Q2</span>
              <span>Q3</span>
              <span>Q4</span>
            </>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#EF4444]" />
          <span className="text-xs text-white/60">Financial</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#F59E0B]" />
          <span className="text-xs text-white/60">Operational</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#3B82F6]" />
          <span className="text-xs text-white/60">Compliance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#10B981] border-t border-dashed" />
          <span className="text-xs text-white/60">Overall</span>
        </div>
      </div>
    </div>
  );
}
