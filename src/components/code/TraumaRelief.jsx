import React, { useEffect, useState } from "react";
import BreathingAnimation from "./BreathingAnimation";
import Vapi from "@vapi-ai/web";

export default function TraumaRelief() {
  const [showBreathing, setShowBreathing] = useState(false);
  const [isVapiActive, setIsVapiActive] = useState(false);
  const [vapi, setVapi] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
    const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;

    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    vapiInstance.on("call-start", () => {
      console.log("Voice call started");
      setIsVapiActive(true);
    });

    vapiInstance.on("call-end", () => {
      console.log("Voice call ended");
      setIsVapiActive(false);
      setShowBreathing(false);
    });

    vapiInstance.on("message", (msg) => {
      console.log("Assistant:", msg.transcript);

      const transcript = msg.transcript?.toLowerCase() || "";
      if (
        transcript.includes("stressed") ||
        transcript.includes("anxious") ||
        transcript.includes("overwhelmed") ||
        transcript.includes("panic")
      ) {
        setShowBreathing(true);
        setTimeout(() => setShowBreathing(false), 60000);
      }
    });

    vapiInstance.start(assistantId);

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="flex flex-col items-center justify-center w-full max-w-lg text-center">
        {showBreathing ? (
          <div className="space-y-8">
            <p className="text-xl font-medium text-gray-700">
              Let's take a moment to breathe.
            </p>
            <BreathingAnimation />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="w-48 h-48 rounded-full bg-blue-300 animate-pulse-gentle mx-auto flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full bg-white opacity-20 animate-pulse-slow absolute"></div>
            </div>
            <p className="text-lg text-gray-700">
              {isVapiActive ? "I'm here for you, just speak when you’re ready." : "Connecting to your buddy..."}
            </p>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes pulse-gentle {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1.1); }
            50% { transform: scale(1); }
          }
          .animate-pulse-gentle {
            animation: pulse-gentle 4s infinite ease-in-out;
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}