import Link from "next/link";
import Image from "next/image";

export default function DeploymentSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-black/50 rounded-full text-xs uppercase text-white/50 tracking-wider mb-6">
            Deployment & monitoring
          </div>
          <h2 className="section-title">Develop faster, deliver with confidence</h2>
          <p className="section-subtitle">
            Deploy AI-powered risk solutions seamlessly and monitor their impact in real time.
            Integrate with your existing tools or custom infrastructure, with full control over your deployment strategy.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="#"
            className="btn-primary"
          >
            Try GhostCRO
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* API Monitoring Illustration */}
          <div className="card flex justify-center items-center p-8">
            <div className="w-16 h-16 bg-[#4B0082] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
          </div>

          {/* Error Monitoring Illustration */}
          <div className="card flex justify-center items-center p-8">
            <div className="w-full h-32 bg-black/70 rounded-lg border border-white/10"></div>
          </div>

          {/* Analytics Illustration */}
          <div className="card flex justify-center items-center p-8">
            <div className="w-full h-32 relative">
              <div className="absolute bottom-0 left-0 w-1/5 h-1/3 bg-[#49C86C] rounded-t"></div>
              <div className="absolute bottom-0 left-[22%] w-1/5 h-1/2 bg-[#49C86C] rounded-t"></div>
              <div className="absolute bottom-0 left-[44%] w-1/5 h-2/3 bg-[#49C86C] rounded-t"></div>
              <div className="absolute bottom-0 left-[66%] w-1/5 h-3/4 bg-[#49C86C] rounded-t"></div>
              <div className="absolute bottom-0 right-0 w-1/5 h-full bg-[#49C86C] rounded-t"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
