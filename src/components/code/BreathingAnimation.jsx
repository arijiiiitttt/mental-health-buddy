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

  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div
        className="rounded-full bg-blue-400 w-32 h-32 animate-pulse"
        style={{
          animation: "pulse-breath 4s ease-in-out infinite",
        }}
      ></div>
      <p className="mt-4 text-xl font-semibold">{phase}</p>
      <style>
        {`
        @keyframes pulse-breath {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.3); }
          50% { transform: scale(1.5); }
          75% { transform: scale(1.3); }
        }
        `}
      </style>
    </div>
  );
}
