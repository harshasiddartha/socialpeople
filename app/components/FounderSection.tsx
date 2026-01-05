"use client";

export default function FounderSection() {
  return (
    <div className="w-full bg-[#F5E6D3] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#E8D5C4] rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Title */}
              <h2 className="text-[#8B4513] font-serif text-4xl md:text-5xl lg:text-6xl font-bold italic">
                Meet the founder
              </h2>

              {/* Bio Paragraph */}
              <p className="text-[#5C3D2E] font-sans text-base md:text-lg leading-relaxed">
                Jade Beason is a social media expert who's been on both sides of the brand-building table. She started her career in agencies, moved on to run her own brand, and now she leads Social People, a social media marketing agency that helps brands create socials with substance. Jade has worked with some of the biggest brands in the world and some of the biggest agencies too. Now, she uses everything I've learned to help you level up your social media strategy and create content that actually connects.
              </p>

              {/* Companies Section */}
              <div className="mt-8">
                <p className="text-[#5C3D2E] font-sans text-sm md:text-base mb-6">
                  Jade has worked with:
                </p>
                
                {/* Company Logos Image */}
                <div className="w-full">
                  <img
                    src="/youtube.webp"
                    alt="Company logos"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:sticky lg:top-8">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/founder.webp"
                  alt="Jade Beason"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#C49564]/90 via-transparent to-transparent px-4 py-6">
                  <div className="text-white">
                    <p className="font-serif text-lg md:text-xl font-semibold mb-1">
                      Jade Beason
                    </p>
                    <p className="font-sans text-xs md:text-sm opacity-90">
                      @JADEBEASON
                    </p>
                    <p className="font-sans text-xs md:text-sm mt-1 opacity-80">
                      YOUTUBE CREATOR AND SOCIAL MEDIA CONSULTANT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

