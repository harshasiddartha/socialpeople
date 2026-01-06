"use client";

export default function ServicesSection() {
  const services = [
    {
      title: "Branding",
      description: "Bold, strategic identities that define and differentiate your brand.",
    },
    {
      title: "Design",
      description: "Intuitive and modern design that captures attention and enhances user experience.",
    },
    {
      title: "Development",
      description: "We build fast, responsive websites that perform beautifully across all devices.",
    },
    {
      title: "Photography",
      description: "Striking visual content that tells your brand story with clarity and style.",
    },
  ];

  return (
    <div className="w-full bg-[#F5E6D3] pt-16 md:pt-24 relative overflow-hidden">
      {/* Main Content Block with Zigzag Bottom */}
      <div className="relative">
        <div className="bg-[#4A1D16] rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 md:px-12 pt-16 md:pt-24 pb-32">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <h2 className="font-serif text-[#F8F5ED] text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 italic">
              Our Services
            </h2>

            {/* Introductory Text */}
            <p className="font-sans text-[#F8F5ED] text-sm md:text-base text-center mb-16 md:mb-24 max-w-2xl mx-auto opacity-90">
              A creative partner for bold ideas — blending strategy, design, code, and visual storytelling.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
                <div key={index} className="flex flex-col items-start">
                  <h3 className="font-serif text-[#F8F5ED] text-2xl md:text-3xl font-bold italic underline decoration-1 underline-offset-4 mb-4">
                {service.title}
              </h3>
                  <p className="font-sans text-[#F8F5ED] text-sm md:text-base leading-relaxed opacity-90 max-w-sm">
                {service.description}
              </p>
            </div>
          ))}
            </div>
        </div>
      </div>

        {/* Zigzag Border at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
            className="w-full h-8 md:h-12 block text-[#F5E6D3]"
            viewBox="0 0 1200 60"
          preserveAspectRatio="none"
            fill="currentColor"
        >
            <path d="M0,60 L50,0 L100,60 L150,0 L200,60 L250,0 L300,60 L350,0 L400,60 L450,0 L500,60 L550,0 L600,60 L650,0 L700,60 L750,0 L800,60 L850,0 L900,60 L950,0 L1000,60 L1050,0 L1100,60 L1150,0 L1200,60 V60 H0 Z" />
        </svg>
        </div>
      </div>
    </div>
  );
}
