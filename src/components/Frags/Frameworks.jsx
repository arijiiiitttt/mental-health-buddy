import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
import { SiClerk } from "react-icons/si"; // Clerk icon

export default function Frameworks() {
  return (
    <section
      id="tech"
      className="text-center py-16 px-6"
    >
      <h3 className="text-3xl font-bold  bowl mb-4">Technologies Used 👇🏻
</h3>
      <p className="text-gray-800 max-w-2xl mx-auto mb-8">
        Sathi is crafted using modern web technologies to create a calming, responsive, and secure experience for anyone seeking emotional support. Every line of code is written with empathy in mind.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xl md:text-2xl text-gray-600">
        <div className="flex items-center gap-2 text-cyan-500">
          <FaReact className="text-3xl md:text-4xl" />
          React
        </div>
        <div className="flex items-center gap-2 text-yellow-500">
          <SiJavascript className="text-3xl md:text-4xl" />
          JavaScript
        </div>
        <div className="flex items-center gap-2 text-sky-500">
          <SiTailwindcss className="text-3xl md:text-4xl" />
          Tailwind CSS
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <FaCode className="text-3xl md:text-4xl" />
          Gemini API
        </div>
        <div className="flex items-center gap-2 text-indigo-600">
          <SiClerk className="text-3xl md:text-4xl" />
          Clerk
        </div>
      </div>
    </section>
  );
}