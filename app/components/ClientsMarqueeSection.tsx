"use client";

const clients = [
  { name: "DIVINE", color: "#4B0082" },
  { name: "DEVKRUPA", color: "#1E3A8A" },
  { name: "Dhruv", color: "#F59E0B" },
  { name: "VISE ORGANIC", color: "#10B981" },
  { name: "9 to 69", color: "#EF4444" },
  { name: "agroniv.com", color: "#22C55E" },
  { name: "NESHAYTECH", color: "#1F2937" },
  { name: "NIKUNJ", color: "#EA580C" },
  { name: "PARTH", color: "#F97316" },
  { name: "Pidilite", color: "#0EA5E9" },
  { name: "PRAGMATIC", color: "#000000" },
  { name: "FAITHLINE", color: "#2563EB" },
  { name: "Unicrop", color: "#65A30D" },
  { name: "VRAJEV", color: "#EAB308" },
  { name: "PRAYATNA", color: "#9333EA" },
  { name: "SC Smart", color: "#4B5563" },
  { name: "Schreett", color: "#16A34A" },
];

const LogoCard = ({ name, color }: { name: string; color: string }) => (
  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center p-4 mx-4 hover:shadow-md transition-shadow">
    <div className="text-center">
      <div 
        className="w-8 h-8 rounded-full mx-auto mb-2 opacity-80" 
        style={{ backgroundColor: color }}
      ></div>
      <span className="font-bold text-gray-700 text-sm">{name}</span>
    </div>
  </div>
);

export default function ClientsMarqueeSection() {
  return (
    <div className="w-full bg-[#F8FAFC] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Who We Work With</h2>
        <p className="text-gray-600 text-lg md:text-xl mb-4">Brands building community, not just reach.</p>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 - Normal Scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...clients, ...clients].map((client, idx) => (
              <LogoCard key={`r1-${idx}`} {...client} />
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse Scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee-reverse">
            {[...clients.reverse(), ...clients].map((client, idx) => (
              <LogoCard key={`r2-${idx}`} {...client} />
            ))}
          </div>
        </div>

        {/* Row 3 - Normal Scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee">
             {[...clients.sort(() => Math.random() - 0.5), ...clients].map((client, idx) => (
              <LogoCard key={`r3-${idx}`} {...client} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

