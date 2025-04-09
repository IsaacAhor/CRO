"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/ghostcro-logo.svg"
              alt="GhostCRO"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white font-medium text-xl hidden sm:inline-block">GhostCRO</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link href="/dashboard" className="nav-item">
            Dashboard
          </Link>
          <Link href="/risks" className="nav-item">
            Risk Analysis
          </Link>
          <Link href="/recommendations" className="nav-item">
            Recommendations
          </Link>
          <Link href="/settings" className="nav-item">
            Settings
          </Link>
          <Link
            href="/upgrade"
            className="ml-4 btn-primary"
          >
            Upgrade
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          <div className="px-4 py-3 space-y-1">
            <Link href="/dashboard" className="block nav-item py-3">
              Dashboard
            </Link>
            <Link href="/risks" className="block nav-item py-3">
              Risk Analysis
            </Link>
            <Link href="/recommendations" className="block nav-item py-3">
              Recommendations
            </Link>
            <Link href="/settings" className="block nav-item py-3">
              Settings
            </Link>
            <Link
              href="/upgrade"
              className="block btn-primary text-center mt-4"
            >
              Upgrade
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
