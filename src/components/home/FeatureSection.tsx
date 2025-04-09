import Link from "next/link";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI-powered feature */}
          <div className="card flex flex-col h-full">
            <div className="text-xs uppercase tracking-wider text-white/50 mb-4">AI-powered</div>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-4">
              Build with Gemini in Firebase
            </h3>
            <p className="text-white/70 flex-grow mb-6">
              Work quickly and efficiently with Gemini in Firebase. Complete a variety of tasks like coding,
              debugging, testing, refactoring, explaining, and documenting code with AI assistance that interacts
              with your codebase and takes actions on your behalf. Use the built-in model or select your preferred model.
            </p>
            <p className="text-white/70 mb-6">
              New Gemini Code Assist agents help with everything from migration to AI testing.
              <Link href="https://developers.google.com/profile/badges/community/sdlcagents/gca-agents" className="text-firebase-orange hover:underline ml-1">
                Sign up
              </Link> for the waitlist to get early access to Code Assist agents via the Google Developer Program.
            </p>
            <div>
              <Link
                href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F"
                className="btn-outline"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* End-to-end testing feature */}
          <div className="card flex flex-col h-full">
            <div className="text-xs uppercase tracking-wider text-white/50 mb-4">End-to-end testing</div>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-4">
              Optimize your full-stack apps across platforms
            </h3>
            <p className="text-white/70 flex-grow mb-6">
              With access to thousands of extensions in the Open VSX Registry, you can test and optimize your API endpoints
              and backends as you build them. And with built-in web previews and Android emulators, you can preview your
              apps as your users would see them.
            </p>
            <div className="mt-auto">
              <Link
                href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F"
                className="btn-outline"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
