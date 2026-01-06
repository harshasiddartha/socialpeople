"use client";

export default function PainPointsSection() {
  return (
    <div className="w-full flex justify-center bg-[#F5E6D3] py-20 px-6 md:px-12">
      <div 
        className="max-w-7xl w-full rounded-[3rem] py-20 px-6 md:px-16 text-center"
        style={{ backgroundColor: '#6C7D70' }}
      >
        {/* Main Heading */}
        <div className="max-w-5xl mx-auto mb-16">
          <h1 className="font-serif text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-8 italic leading-tight">
            We Build Brands with Meaning and Momentum
          </h1>
          <h2 className="font-serif text-white text-xl md:text-3xl lg:text-4xl font-bold mb-4 italic">
            Core Values
          </h2>
          <p className="font-sans text-white/90 text-sm md:text-base">
            How we work with you
          </p>
        </div>

        {/* Three Cloud/Flower Shapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="relative aspect-square flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-[#E8E2D2] transition-transform hover:scale-105"
              style={{
                borderRadius: '35%',
                transform: 'rotate(0deg)',
              }}
            ></div>
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center items-center h-full text-center">
              <h3 className="font-serif text-[#5C281F] text-lg md:text-xl font-bold mb-4 leading-tight">
                Strategic Creativity
              </h3>
              <p className="font-sans text-[#5C281F] text-xs md:text-sm leading-relaxed">
                Blending strategy, design, and storytelling to create work that works.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative aspect-square flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-[#E8E2D2] transition-transform hover:scale-105"
              style={{
                borderRadius: '35%',
                transform: 'rotate(0deg)',
              }}
            ></div>
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center items-center h-full text-center">
              <h3 className="font-serif text-[#5C281F] text-lg md:text-xl font-bold mb-4 leading-tight">
                End-to-End Craft
              </h3>
              <p className="font-sans text-[#5C281F] text-xs md:text-sm leading-relaxed">
                From concept to launch, every detail is considered and crafted with care.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative aspect-square flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-[#E8E2D2] transition-transform hover:scale-105"
              style={{
                borderRadius: '35%',
                transform: 'rotate(0deg)',
              }}
            ></div>
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center items-center h-full text-center">
              <h3 className="font-serif text-[#5C281F] text-lg md:text-xl font-bold mb-4 leading-tight">
                Collaborative Process
              </h3>
              <p className="font-sans text-[#5C281F] text-xs md:text-sm leading-relaxed">
                We build with you, not just for you. Your vision drives our creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
