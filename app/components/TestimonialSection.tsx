"use client";

export default function TestimonialSection() {
  return (
    <div className="w-full bg-[#F5E6D3] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-[#5C3D2E] uppercase text-sm md:text-base font-sans tracking-wider mb-12 md:mb-16">
          PREVIOUS CLIENT TESTIMONIAL
        </h2>

        {/* Morrisons Logo */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Morrisons Logo Image */}
          <div className="mb-4 relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <img 
              src="/morrisons.webp" 
              alt="Morrisons Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Brand Name */}
        
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-[#5C3D2E] font-serif italic text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
          &ldquo;Social People did an excellent job reviewing our Social Media channels, making helpful short term as well as longer term strategic recommendations for our organic and paid activity.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}

