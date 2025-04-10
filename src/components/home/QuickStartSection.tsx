import Link from "next/link";
import Image from "next/image";

export default function QuickStartSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="https://ext.same-assets.com/2510403415/2838098675.svg"
            alt="Code decorator"
            width={128}
            height={128}
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Get to work quickly wherever you are</h2>
          <p className="section-subtitle">
            Go from opening your browser to building in minutes, not hours. Import your existing repositories from GitHub, GitLab, Bitbucket, or your local machine, with support for most tech stacks. Or use the App Prototyping agent to quickly create a new application using natural language, mockups, drawing tools, and screenshots, or select from a large catalog of popular framework or language templates. You can also customize your environment with Nix.
          </p>
          <p className="text-sm text-white/60 max-w-3xl mx-auto mb-8">
            GhostCRO is currently available in preview with unlimited risk scans for early adopters. Help us shape the future of AI-driven risk mastery.
          </p>
          <Link
            href="#"
            className="btn-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
