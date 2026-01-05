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
        <div className="text-center mb-8">
          <div className="font-serif text-[#F8F5ED] text-3xl md:text-5xl lg:text-6xl font-bold mb-[-0.2em] relative z-10 italic">
            we are
          </div>
          <div className="flex flex-col items-center leading-[0.85]">
            <span className="font-serif text-[#F8F5ED] text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] font-bold tracking-tighter">
              social
            </span>
            <span className="font-serif text-[#F8F5ED] text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] font-bold tracking-tighter mt-[-0.1em]">
              people
            </span>
          </div>
        </div>

        {/* Sub-headline */}
        <p className="text-[#F8F5ED] text-sm md:text-lg font-serif italic mb-10 text-center max-w-xl tracking-wide">
          data + cultural insight = content that gets results
        </p>

        {/* Call to Action Button */}
        <button className="bg-[#D4A574] hover:bg-[#C49564] text-black font-sans uppercase tracking-widest text-xs md:text-sm px-8 py-3 rounded-full transition-colors font-medium">
          work with us
        </button>
      </div>
    </div>
  );
}
