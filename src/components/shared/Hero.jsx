"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

const Hero = () => {
  return (
    <section className="py-24 text-center px-4">
      <span className="text-sm text-[#ccbe8e] font-medium mb-3 bg-[#f1f3e7] px-4 py-1 rounded-full inline-block">
        PREMIUM LEARNING PLATFORM
      </span>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-3">
        Upgrade Your Skills <br />
        With <span className="text-[#C77A52]">Confidence</span>
      </h1>

      <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        Learn Web Development, Design, and Marketing from industry experts at
        your own pace.
      </p>

      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <Button
          as={Link}
          href="/courses"
          className="bg-black text-white rounded-full px-6"
        >
          Start Learning
        </Button>
        <Button
          as={Link}
          href="/courses"
          variant="ghost"
          className="rounded-full px-6"
        >
          Explore Courses
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-16">
        {[
          { num: "10k+", label: "Students" },
          { num: "500+", label: "Courses" },
          { num: "4.9/5", label: "Rating" },
          { num: "24/7", label: "Support" },
        ].map(({ num, label }) => (
          <div key={label}>
            <h2 className="text-xl font-bold">{num}</h2>
            <p className="text-gray-500 text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
