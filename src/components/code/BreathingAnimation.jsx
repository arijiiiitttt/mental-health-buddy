import React, { useEffect, useState } from "react";

export default function BreathingAnimation() {
  const [phase, setPhase] = useState("Breathe In");

  useEffect(() => {
    const phases = ["Breathe In", "Hold", "Breathe Out", "Hold"];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % phases.length;
      setPhase(phases[idx]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getBubbleStyle = () => {
    switch (phase) {
      case "Breathe In":
        return "bg-blue-500 transform scale-150";
      case "Breathe Out":
        return "bg-blue-400 transform scale-100";
      default: 
        return "bg-blue-400 transform scale-150";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div
        className={`rounded-full w-48 h-48 transition-all duration-3000 ease-in-out ${getBubbleStyle()}`}
      ></div>
      <p className="mt-8 text-2xl font-semibold text-gray-800 animate-fade-in-out">
        {phase}
      </p>

      <style>
        {`
          @keyframes fade-in-out {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-fade-in-out {
            animation: fade-in-out 4s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}