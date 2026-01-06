"use client";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pb-10 pt-20">
        {/* Main Headline */}
        <div className="text-center mb-8 max-w-6xl">
          <h1 className="font-serif text-[#F8F5ED] text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6">
            We Build Media People Care About — and Businesses Grow From.
          </h1>
        </div>

        {/* Sub-headline */}
        <p className="text-[#F8F5ED] text-lg md:text-xl lg:text-2xl font-serif italic mb-10 text-center max-w-3xl tracking-wide leading-relaxed">
          A people-first media agency combining cultural insight, strategy, and performance to turn attention into long-term growth.
        </p>

        {/* Call to Action Button */}
        <button className="bg-[#D4A574] hover:bg-[#C49564] text-black font-sans uppercase tracking-widest text-xs md:text-sm px-8 py-4 rounded-full transition-colors font-medium">
          Work With Us
        </button>
      </div>
    </div>
  );
}
