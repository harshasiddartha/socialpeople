"use client";

export default function WorkWithUsSection() {
  return (
    <div className="w-full bg-[#F9F5F0] py-16 md:py-24 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="bg-[#4A1D16] rounded-[2.5rem] p-12 md:p-20 text-center flex flex-col items-center justify-center min-h-[500px]">
          {/* Heading */}
          <h2 className="text-white font-serif text-[4rem] sm:text-[6rem] md:text-[8rem] font-black leading-[0.9] mb-8 tracking-tighter">
            let's build something that lasts
          </h2>

          {/* Sub-text */}
          <p className="text-white font-serif italic text-base md:text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed">
            We are best for teams who want a strategic partner, value clarity and accountability, and are building for long-term growth.
          </p>

          {/* Button */}
          <button className="px-8 py-3 rounded-full border border-white text-white font-sans text-xs md:text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-[#4A1D16] transition-colors duration-300">
            Start a Conversation
          </button>
        </div>
      </div>
    </div>
  );
}
