"use client";

export default function BlueprintSection() {
  return (
    <div className="relative w-full bg-[#6B7F5A] py-8 md:py-12 px-6 md:px-12 overflow-hidden">
      {/* Light beige rounded border on top and left */}
      <div className="absolute top-0 left-0 w-full h-8 md:h-12 bg-[#F5E6D3] rounded-br-3xl"></div>
      <div className="absolute top-0 left-0 w-8 md:w-12 h-full bg-[#F5E6D3] rounded-br-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-white font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-center mb-8 md:mb-10 italic">
          Your Blueprint
        </h1>

        {/* Blueprint Image */}
        <div className="w-full max-w-3xl mb-8 md:mb-12">
          <img 
            src="/blueprint.webp" 
            alt="Social People Blueprint Audit" 
            className="w-full h-40 md:h-60 lg:h-72 object-contain"
            style={{ maxHeight: '18rem' }}
          />
        </div>

        {/* Secondary Title */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-white font-serif font-bold text-xl md:text-3xl lg:text-4xl italic mb-2">
            Your socials, decoded.
          </h2>
          <h2 className="text-white font-serif font-bold text-xl md:text-3xl lg:text-4xl italic">
            Your strategy, redefined.
          </h2>
        </div>

        {/* Three Paragraphs */}
        <div className="max-w-2xl mx-auto space-y-4 md:space-y-6 text-white font-sans text-center text-xs md:text-sm lg:text-base leading-relaxed opacity-90">
          <p>
            Forget vanity metrics and vague reports. The Blueprint is our bespoke deep-dive into your brand's social performance, revealing what's working, what's wasted, and what's next.
          </p>
          <p>
            We combine real data with cultural intelligence to uncover how your content is truly landing with the audiences that matter most.
          </p>
          <p>
            No guesswork. No fluff. Just sharp, actionable insight - built around your brand goals - so your social channels aren't just showing up... they're showing results.
          </p>
        </div>
      </div>
    </div>
  );
}
