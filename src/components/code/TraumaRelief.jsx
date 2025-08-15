import React, { useEffect } from "react";
import BreathingAnimation from "./BreathingAnimation";
import Vapi from "@vapi-ai/web";

export default function TraumaRelief() {
  useEffect(() => {
    const apiKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
    const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;

    const vapi = new Vapi(apiKey);

    vapi.on("call-start", () => console.log("Voice call started"));
    vapi.on("message", (msg) => console.log("Assistant:", msg.transcript));

    // Start listening immediately
    vapi.start(assistantId);

    return () => {
      vapi.stop();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        AI Mental Wellness Buddy
      </h1>
      <BreathingAnimation />
      <p className="mt-6 text-lg text-gray-700 text-center">
        Your AI buddy is listening — just speak when you’re ready.
      </p>
    </div>
  );
}
