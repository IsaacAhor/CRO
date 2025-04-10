import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 text-center bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            The AI-Powered <br /> Risk Command Center
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10">
            One place to uncover hidden risks, deploy instant solutions, and transform chaos into clarity. <br />
            <span className="font-semibold">Train your invisible Chief Risk Officer with every click.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#"
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold shadow-md transition"
            >
              Get GhostCRO Free
            </Link>
            <Link
              href="#"
              className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white font-semibold transition"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
