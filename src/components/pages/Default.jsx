import React, { useState } from "react";
import Fooder from "../Frags/Fooder";
import Frameworks from "../Frags/Frameworks";
import FAQSection from "../Frags/FAQSection";
import Features from "../Frags/Features";
import VideoBlock from "../Frags/VideoBlock";


export default function Default() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-white">
      {/* Pixel font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />

      {/* Top nav */}
      <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center justify-between rounded-full bg-white/40 backdrop-blur-md px-4 py-2 shadow relative">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-500 text-white grid place-items-center text-xl font-black">
              <img src="/logos/s.png" alt="Logo" className="h-6 w-6" />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <a className="text-black/80 hover:text-black transition" href="/docs">Docs</a>
            <a className="text-black/80 hover:text-black transition" href="#">Features</a>
            <a className="text-black/80 hover:text-black transition" href="/about">About</a>
          </div>

          {/* Sign In Button */}
          <a className="hidden md:inline-block rounded-full bg-black text-white text-sm px-5 py-2 font-medium shadow hover:opacity-90" href="/home">
            Sign in
          </a>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl z-50 px-4 py-4 flex flex-col gap-4 text-[15px] font-medium md:hidden">
              <a className="text-black/80 hover:text-black transition" href="/docs">Docs</a>
              <a className="text-black/80 hover:text-black transition" href="#">Features</a>
              <a className="text-black/80 hover:text-black transition" href="/about">About</a>
              <a className="rounded-full bg-black text-white text-sm px-5 py-2 font-medium shadow hover:opacity-90" href="/home">
                Sign in
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 text-center">
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-orange-800 bg-orange-100 rounded-full">
            🟠 Made for you Bro
          </span>
        </div>
        <p className="text-3xl Brico font-light">Wanna Talk Now 🤙🏻</p>
        <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[108px] bowl leading-[1.1]">
          Let AI handle
        </span>
        <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[90px] bowl leading-[1.1] mt-1">
          ur emotions
        </span>

        <div className="flex justify-center">
          <div className="mt-6 flex gap-x-4">
            <a
              className="px-5 py-2.5 Brico rounded-full bg-white text-black text-sm sm:text-[15px] font-medium border border-black/10 shadow-sm hover:bg-black/5"
              href="https://github.com/arijiiiitttt/sathii"
              target="_blank"
              rel="noopener noreferrer"
            >
              Give ⭐ to my repo
            </a>
            <a
              className="px-6 py-2.5 Brico rounded-full bg-black text-white text-sm sm:text-[15px] font-medium shadow hover:opacity-90"
              href="/home"
            >
              Get started
            </a>
          </div>
        </div>
      </main>

      {/* Sections */}
      <VideoBlock />
      <Features />
      <FAQSection />
      <Frameworks />
      <Fooder />

      {/* Mobile nav bottom */}
      <div className="fixed bottom-4 left-0 right-0 md:hidden px-4">
        <div className="mx-auto max-w-md flex items-center justify-center gap-6 rounded-full bg-white/80 backdrop-blur border border-black/5 px-5 py-2 text-[13px] shadow">
          <a className="text-black/80" href="#">Solutions</a>
          <a className="text-black/80" href="#">Docs</a>
          <a className="text-black/80" href="#">About</a>
        </div>
      </div>
    </div>
  );
}