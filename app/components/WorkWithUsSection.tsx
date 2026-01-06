"use client";

export default function WorkWithUsSection() {
  return (
    <div className="w-full bg-[#F5E6D3] py-16 md:py-24 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="bg-[#4A1D16] rounded-[2.5rem] p-12 md:p-20 text-center flex flex-col items-center justify-center min-h-[500px]">
          {/* Heading */}
          <h2 className="text-[#F8F5ED] font-serif text-[4rem] sm:text-[6rem] md:text-[8rem] font-black leading-[0.9] mb-8 tracking-tighter">
            let's build something
          </h2>

          {/* Sub-text */}
          <p className="text-[#F8F5ED] font-serif italic text-base md:text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed">
            Have a project in mind? We're ready to turn your vision into a brand, experience, or story that truly stands out.
          </p>

          {/* Button */}
          <button className="px-8 py-3 rounded-full border border-[#F8F5ED] text-[#F8F5ED] font-sans text-xs md:text-sm tracking-[0.15em] uppercase hover:bg-[#F8F5ED] hover:text-[#4A1D16] transition-colors duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}
