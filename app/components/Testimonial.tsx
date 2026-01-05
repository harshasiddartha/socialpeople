"use client";

interface TestimonialProps {
  quote: string;
  supportingText: string;
  author: string;
  company: string;
}

export default function Testimonial({
  quote,
  supportingText,
  author,
  company,
}: TestimonialProps) {
  return (
    <div className="w-full bg-[#F5E6D3] px-2 py-6 md:py-14 lg:py-16 flex items-start justify-center">
      <div className="bg-black rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-10 max-w-4xl w-full mx-auto shadow-md">
        {/* Main Quote */}
        <p className="text-[#F8F5ED] font-serif text-xl md:text-2xl lg:text-3xl font-bold italic mb-4 leading-snug">
          &ldquo;I honestly couldn’t recommend Social People more highly.&rdquo;
        </p>
        {/* Supporting Text */}
        <p className="text-[#F8F5ED] text-xs md:text-sm lg:text-base mb-6 leading-relaxed">
          We worked with Social People for just a few weeks and in that time, we’ve seen real value, from a reasoned re-evaluation of our channel’s focus to measurement framework input, short and actionable strategy documents I’ve never received.
        </p>
        {/* Attribution */}
        <p className="text-[#F8F5ED] text-xs md:text-sm px-0 pt-2 font-sans opacity-80">
          — K. Holmes, CoinWatch
        </p>
      </div>
    </div>
  );
}

