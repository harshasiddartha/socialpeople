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
            Sick of social media that sucks up time, drains your budget, and delivers... what, exactly?
          </h1>
          <h2 className="font-serif text-white text-xl md:text-3xl lg:text-4xl font-bold mb-4 italic">
            You&apos;re not alone.
          </h2>
          <p className="font-sans text-white/90 text-sm md:text-base">
            Does this sound like you?
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
                You&apos;re posting, but not progressing.
              </h3>
              <p className="font-sans text-[#5C281F] text-xs md:text-sm leading-relaxed">
                Content calendars are full. Your pipeline isn&apos;t. What gives?
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
                You&apos;ve been talking &ldquo;likes&rdquo; when you should be talking leads.
              </h3>
              <p className="font-sans text-[#5C281F] text-xs md:text-sm leading-relaxed">
                It&apos;s about impact, not empty engagement.
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
                You&apos;re stuck in the scroll.
              </h3>
              <p className="font-sans text-[#5C281F] text-xs md:text-sm leading-relaxed">
                You&apos;re reacting to trends instead of setting the pace - and your audience can tell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
