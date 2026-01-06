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
        Social Monks
      </div>

      {/* Center: Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {[
          { name: "Home", href: "#home" },
          { name: "Values", href: "#values" },
          { name: "Services", href: "#services" },
          { name: "Work", href: "#work" },
          { name: "About", href: "#about" },
          { name: "Contact", href: "#contact" },
        ].map((item) => (
          <a 
            key={item.name}
            href={item.href}
            className={`font-serif text-lg hover:opacity-80 transition-opacity ${
              isInHero ? "text-[#F5E6D3]" : "text-black"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Right: CTA */}
      <div className="flex items-center gap-4 md:gap-6">
        <a href="#contact">
          <button className={`font-serif px-6 py-2 rounded-full text-xs md:text-sm tracking-widest border transition-colors ${
            isInHero 
              ? "border-white/50 text-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-black" 
              : "border-black text-black hover:bg-black hover:text-white"
          }`}>
            Book a 15-min call
          </button>
        </a>
      </div>
    </nav>
  );
}

