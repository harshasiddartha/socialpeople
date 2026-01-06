"use client";

export default function BlueprintSection() {
  return (
    <div className="relative w-full bg-[#4A1D16] py-8 md:py-12 px-6 md:px-12 overflow-hidden">
      {/* Light beige rounded border on top and left */}
      <div className="absolute top-0 left-0 w-full h-8 md:h-12 bg-[#F9F5F0] rounded-br-3xl"></div>
      <div className="absolute top-0 left-0 w-8 md:w-12 h-full bg-[#F9F5F0] rounded-br-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-white font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-center mb-8 md:mb-10 italic">
          How We Work
        </h1>

        {/* Blueprint Image */}
        <div className="w-full max-w-3xl mb-8 md:mb-12">
          <img 
            src="/blueprint.webp" 
            alt="Our Process Blueprint" 
            className="w-full h-40 md:h-60 lg:h-72 object-contain"
            style={{ maxHeight: '18rem' }}
          />
        </div>

        {/* Secondary Title */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-white font-serif font-bold text-xl md:text-3xl lg:text-4xl italic mb-2">
            Media as a
          </h2>
          <h2 className="text-white font-serif font-bold text-xl md:text-3xl lg:text-4xl italic">
            living system.
          </h2>
        </div>

        {/* Three Paragraphs */}
        <div className="max-w-2xl mx-auto space-y-4 md:space-y-6 text-white font-sans text-center text-xs md:text-sm lg:text-base leading-relaxed opacity-90">
          <p>
            <strong>Discover & Design:</strong> We study your audience—language, motivations, friction points—and translate insight into a clear, consistent brand voice and media system.
          </p>
          <p>
            <strong>Deliver & Learn:</strong> We execute strategy and creative in lockstep, using paid media to accelerate what works, not mask weak strategy.
          </p>
          <p>
            <strong>Scale:</strong> We measure engagement and growth signals to optimize and expand intelligently, ensuring creativity never disconnects from performance.
          </p>
        </div>
      </div>
    </div>
  );
}
