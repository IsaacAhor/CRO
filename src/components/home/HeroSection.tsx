import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 md:py-32 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white mb-6">
          The full
          <Image
            src="/images/firebase-logo.svg"
            alt="Firebase"
            width={48}
            height={48}
            className="inline-block mx-2 w-12 h-12"
          />
          stack <br />
          AI workspace
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12">
          Firebase Studio accelerates your entire development lifecycle with AI agents.
          Build backends, front ends, and mobile apps, all in one place.
        </p>
        <Link
          href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F"
          className="btn-primary text-lg px-8 py-3"
        >
          Try Firebase Studio
        </Link>

        <div className="mt-16 relative">
          <div className="max-w-5xl mx-auto">
            <div className="bg-black/40 rounded-xl overflow-hidden border border-white/10">
              <Image
                src="https://ext.same-assets.com/2510403415/3053245229.png"
                alt="Firebase Studio IDE"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-20 -right-8 md:right-0 lg:right-20 w-1/3 max-w-[200px]">
              <div className="bg-[#FFE0A3] p-1 rounded-xl rotate-6 border-4 border-black/40">
                <Image
                  src="https://ext.same-assets.com/2510403415/3675667301.png"
                  alt="Firebase Studio mobile preview"
                  width={400}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
