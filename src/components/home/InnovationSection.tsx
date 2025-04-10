import Link from "next/link";

export default function InnovationSection() {
  return (
    <section className="py-24 md:py-32 text-center">
      <div className="container mx-auto px-4 md:px-6">
<h2 className="section-title">Innovate with GhostCRO</h2>
<p className="section-subtitle">
          GhostCRO empowers small businesses to transform chaos into clarity with AI-driven risk mastery.
          Join us as we revolutionize how entrepreneurs detect, understand, and fix hidden risks—
          from financial leaks to compliance pitfalls—using modular AI agents and real-time insights.
        </p>
        <div className="mt-8">
          <Link
            href="#"
            className="btn-primary"
          >
            Try GhostCRO
          </Link>
        </div>
      </div>
    </section>
  );
}
