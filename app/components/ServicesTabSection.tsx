"use client";

import { useState } from "react";

// Mock Data for Services
const services = [
  {
    id: "audience-insight",
    label: "Audience & Cultural Insight",
    title: "AUDIENCE & CULTURAL INSIGHT",
    image: "/hero.png",
    description: "Deep understanding of audience behavior, language, and context. Without insight, media becomes guesswork.",
    subtext: "Outcome: Clear direction for strategy, content, and performance.",
    features: [
      { title: "AUDIENCE PERSONAS", icon: "👥" },
      { title: "CULTURAL TRENDS", icon: "🌍" },
      { title: "COMPETITOR ANALYSIS", icon: "🔍" },
      { title: "BEHAVIOR MAPPING", icon: "🗺️" },
    ]
  },
  {
    id: "brand-strategy",
    label: "Brand & Content Strategy",
    title: "BRAND & CONTENT STRATEGY",
    image: "/hero.png",
    description: "Narrative design aligned to business objectives. Consistency builds trust. Clarity drives action.",
    subtext: "Outcome: A scalable content framework that compounds.",
    features: [
      { title: "BRAND VOICE", icon: "📢" },
      { title: "CONTENT PILLARS", icon: "🏛️" },
      { title: "PLATFORM STRATEGY", icon: "📱" },
      { title: "MESSAGING FRAMEWORK", icon: "📝" },
    ]
  },
  {
    id: "creative-production",
    label: "Creative Production",
    title: "CREATIVE PRODUCTION",
    image: "/hero.png",
    description: "Content designed for how people actually consume media. Attention is earned, not demanded.",
    subtext: "Outcome: Higher engagement, stronger recall, better performance.",
    features: [
      { title: "VIDEO PRODUCTION", icon: "🎥" },
      { title: "GRAPHIC DESIGN", icon: "🎨" },
      { title: "COPYWRITING", icon: "✍️" },
      { title: "SOCIAL ASSETS", icon: "📱" },
    ]
  },
  {
    id: "paid-performance",
    label: "Paid & Performance Media",
    title: "PAID & PERFORMANCE MEDIA",
    image: "/hero.png",
    description: "Amplification of what already works. Paid media should accelerate insight—not hide weak strategy.",
    subtext: "Outcome: Efficient spend, higher-quality conversions.",
    features: [
      { title: "PAID SOCIAL", icon: "💰" },
      { title: "SEARCH ADS", icon: "🔍" },
      { title: "CAMPAIGN MANAGEMENT", icon: "📈" },
      { title: "RETARGETING", icon: "🎯" },
    ]
  },
  {
    id: "analytics-optimization",
    label: "Analytics & Optimization",
    title: "ANALYTICS & OPTIMIZATION",
    image: "/hero.png",
    description: "Measurement tied to learning. Data without insight is noise.",
    subtext: "Outcome: Smarter decisions, better results over time.",
    features: [
      { title: "PERFORMANCE DASHBOARDS", icon: "📊" },
      { title: "CONVERSION TRACKING", icon: "📉" },
      { title: "A/B TESTING", icon: "🧪" },
      { title: "ROI ANALYSIS", icon: "💲" },
    ]
  },
  {
    id: "media-systems",
    label: "Media Systems",
    title: "MEDIA SYSTEMS",
    image: "/hero.png",
    description: "Building interconnected media ecosystems that drive sustainable growth, not just one-off campaigns.",
    subtext: "Outcome: Long-term asset value and compounding growth.",
    features: [
      { title: "SYSTEM ARCHITECTURE", icon: "🏗️" },
      { title: "AUTOMATION", icon: "🤖" },
      { title: "SCALABILITY PLANNING", icon: "📈" },
      { title: "TECH STACK INTEGRATION", icon: "🔌" },
    ]
  },
];

export default function ServicesTabSection() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeContent = services.find((s) => s.id === activeTab) || services[0];

  return (
    <div className="w-full bg-[#F9F5F0] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A1D16] mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Menu */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`text-left px-6 py-4 rounded-r-lg border-l-4 transition-all duration-300 font-semibold text-sm md:text-base ${
                  activeTab === service.id
                    ? "border-[#8B4513] bg-gradient-to-r from-[#E8D5C4] to-transparent text-[#4A1D16] shadow-sm"
                    : "border-transparent text-gray-600 hover:bg-[#F3Ebe0] hover:text-[#5C3D2E]"
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E0D8] h-full">
              {/* Image & Title */}
              <div className="relative rounded-xl overflow-hidden mb-8 group">
                {/* Image Overlay with Title */}
                <div className="aspect-video w-full bg-[#F3Ebe0] relative">
                    <img 
                        src={activeContent.image} 
                        alt={activeContent.title}
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center p-8 text-center">
                         <h3 className="text-3xl md:text-5xl font-bold text-[#4A1D16] mb-4 uppercase tracking-tight">
                            {activeContent.title}
                         </h3>
                         <div className="bg-[#E8D5C4] p-4 rounded-lg shadow-sm text-[#4A1D16]">
                             {/* Placeholder illustration representation */}
                            <div className="text-6xl">✨ 🚀</div>
                         </div>
                    </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="mb-8">
                <p className="text-[#5C3D2E] leading-relaxed mb-4 text-sm md:text-base">
                  {activeContent.description}
                </p>
                <p className="text-[#4A1D16] font-medium text-sm md:text-base">
                  {activeContent.subtext}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activeContent.features.map((feature, idx) => (
                  <div key={idx} className="bg-[#F9F5F0] p-4 rounded-lg border border-[#E5E0D8] flex items-center gap-3 hover:shadow-md transition-shadow">
                    <span className="text-xl text-[#8B4513]">{feature.icon}</span>
                    <span className="text-xs font-bold text-[#5C3D2E] uppercase tracking-wide">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
