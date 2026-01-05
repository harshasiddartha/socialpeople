"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Check if we're in the hero section
      setIsInHero(currentScrollY < heroHeight * 0.9);

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down (but only if past hero section)
      else if (currentScrollY > lastScrollY && currentScrollY > 100 && currentScrollY > heroHeight * 0.9) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        backgroundColor: isInHero ? "transparent" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: isInHero ? "none" : "blur(10px)",
      }}
    >
      {/* Left: Agency Name */}
      <div className={`font-serif text-xl md:text-2xl font-semibold transition-colors ${
        isInHero ? "text-[#F5E6D3]" : "text-black"
      }`}>
        Social People Agency
      </div>

      {/* Center: Navigation */}
      <div className="hidden md:flex items-center">
        <a href="#" className={`font-serif text-lg hover:opacity-80 transition-opacity ${
          isInHero ? "text-[#F5E6D3]" : "text-black"
        }`}>
          Home
        </a>
      </div>

      {/* Right: Login, Cart, and CTA */}
      <div className="flex items-center gap-4 md:gap-6">
        <a href="#" className={`font-serif text-lg hover:opacity-80 transition-opacity hidden md:block ${
          isInHero ? "text-[#F5E6D3]" : "text-black"
        }`}>
          Login
        </a>
        <div className="flex items-center gap-1">
          <svg 
            className={`w-5 h-5 transition-colors ${
              isInHero ? "text-[#F5E6D3]" : "text-black"
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
            />
          </svg>
          <span className={`font-serif text-sm transition-colors ${
            isInHero ? "text-[#F5E6D3]" : "text-black"
          }`}>
            0
          </span>
        </div>
        <button className={`font-serif px-6 py-2 rounded-full text-xs md:text-sm tracking-widest border transition-colors ${
          isInHero 
            ? "border-white/50 text-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-black" 
            : "border-black text-black hover:bg-black hover:text-white"
        }`}>
          HIRE US!
        </button>
      </div>
    </nav>
  );
}

