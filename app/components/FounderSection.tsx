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
                Built Around People. Designed for Growth.
              </h2>

              {/* Bio Paragraph */}
              <div className="text-[#5C3D2E] font-sans text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  We are a modern media agency built on one belief: People come before platforms. Always.
                </p>
                <p>
                  Inspired by the people-first philosophy of Social People Agency and the end-to-end ownership model of Techorses, we exist to help brands stay human while scaling intelligently.
                </p>
                <p>
                  We don’t separate strategy from execution. We don’t separate creativity from performance. We take responsibility for the entire system.
                </p>
              </div>

              {/* Companies Section */}
              <div className="mt-8">
                <p className="text-[#5C3D2E] font-sans text-sm md:text-base mb-6">
                  Trusted by Forward-Thinking Brands:
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

