"use client";
import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Sathi and how can it help me?",
    answer: "Sathi is your mental health buddy — a calm, patient companion that listens and responds with empathy. It's designed to support you during moments of stress, anxiety, or loneliness."
  },
  {
    question: "Is my conversation with Sathi private?",
    answer: "Yes. Your privacy is our priority. Conversations are not stored or shared, and are used solely to provide supportive responses in real time."
  },
  {
    question: "Can I talk to Sathi using my voice?",
    answer: "Absolutely. Sathi supports voice interaction so you can speak naturally and hear soothing replies, making the experience more personal."
  },
  {
    question: "Does Sathi understand my mood?",
    answer: "Sathi uses sentiment analysis to gently adapt its tone and responses based on your emotional state, offering comfort when you need it most."
  },
  {
    question: "Can I customize how Sathi looks and sounds?",
    answer: "Yes! You can choose calming themes, adjust text size, and personalize speech settings like voice, pitch, and speed to suit your preferences."
  },
  {
    question: "Does Sathi offer mindfulness or relaxation tools?",
    answer: "Sathi includes breathing exercises, grounding prompts, and daily affirmations to help you stay centered and emotionally balanced."
  },
  {
    question: "Can I journal my thoughts in the app?",
    answer: "Yes. Sathi provides a private journaling space where you can write freely and reflect on your emotions without judgment."
  },
  {
    question: "What if I feel worse after using the app?",
    answer: "Sathi is here to support, not replace professional help. If you're feeling overwhelmed, we encourage you to reach out to a mental health professional. Resource links are available in the app."
  },
  {
    question: "How do I reset the app and start fresh?",
    answer: "Click the 'Clear All' button to reset your session, clear the chat, and begin a new conversation with Sathi."
  },
  {
    question: "Is Sathi available in multiple languages?",
    answer: "Yes! You can select your preferred language in the settings to make Sathi feel even more familiar and comforting."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-10">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500  bowl font-medium uppercase mb-2">Sathi FAQ</p>
        <h1 className="text-3xl sm:text-4xl bowl font-bold text-gray-900 mb-2">Your Questions, Gently Answered 💙</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Learn more about how Sathi supports your emotional well-being. These FAQs are here to guide you through your journey with your mental health buddy.
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border">
            <button
              className="w-full text-left px-4 py-4 flex justify-between items-center text-gray-800 font-medium focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              <span className="text-2xl font-light">{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;