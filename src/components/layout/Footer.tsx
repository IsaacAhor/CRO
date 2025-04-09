import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white/60 rounded-3xl mx-4 md:mx-10 mt-10 mb-4 md:mb-10 p-6 md:p-12">
      <div className="flex flex-wrap justify-between items-center gap-10 pb-10 md:pb-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/ghostcro-logo.svg"
            alt="GhostCRO"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-white font-medium text-xl">GhostCRO</span>
        </Link>

        <Link
          href="/status"
          className="flex items-center gap-2.5 text-xs uppercase font-mono hover:text-white/80 transition-colors duration-300"
        >
          System Status
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-14 gap-y-10">
        <div className="font-medium flex flex-col">
          <h3 className="text-white mb-4">Platform</h3>
          <Link
            href="/dashboard"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Dashboard
          </Link>
          <Link
            href="/risks"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Risk Analysis
          </Link>
          <Link
            href="/recommendations"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Recommendations
          </Link>
          <Link
            href="/settings"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Settings
          </Link>
          <Link
            href="/upgrade"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Upgrade Plan
          </Link>
        </div>

        <div className="font-medium flex flex-col">
          <h3 className="text-white mb-4">Resources</h3>
          <Link
            href="/blog"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Blog
          </Link>
          <Link
            href="/guides"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Guides
          </Link>
          <Link
            href="/research"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Research
          </Link>
          <Link
            href="/webinars"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Webinars
          </Link>
          <Link
            href="/api"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            API Documentation
          </Link>
        </div>

        <div className="font-medium flex flex-col">
          <h3 className="text-white mb-4">Company</h3>
          <Link
            href="/about"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Contact
          </Link>
          <Link
            href="/press"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Press
          </Link>
          <Link
            href="/security"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Security
          </Link>
        </div>

        <div className="font-medium flex flex-col">
          <h3 className="text-white mb-4">Legal</h3>
          <Link
            href="/terms"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookies"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Cookie Policy
          </Link>
          <Link
            href="/gdpr"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            GDPR Compliance
          </Link>
          <Link
            href="/soc2"
            className="hover:text-white transition-colors duration-300 py-2"
          >
            SOC2 Compliance
          </Link>
        </div>
      </div>

      <div className="flex max-sm:flex-col gap-6 justify-between items-center mt-16 pt-8 border-t border-white/10">
        <div className="text-white/60">
          © {new Date().getFullYear()} GhostCRO. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/terms"
            className="hover:text-white transition-colors duration-300"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy
          </Link>
          <Link
            href="/cookies"
            className="hover:text-white transition-colors duration-300"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
