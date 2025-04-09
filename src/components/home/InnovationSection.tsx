import Link from "next/link";

export default function InnovationSection() {
  return (
    <section className="py-24 md:py-32 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Innovate with Firebase</h2>
        <p className="section-subtitle">
          For years, millions of you have relied on Firebase to accelerate your app development and run your
          apps with confidence. We hope you join us as we continue to evolve Firebase to help you take
          advantage of generative AI and a new way to build APIs, backends, web and mobile apps,
          custom agents, and more!
        </p>
        <div className="mt-8">
          <Link
            href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F"
            className="btn-primary"
          >
            Try Firebase Studio
          </Link>
        </div>
      </div>
    </section>
  );
}
