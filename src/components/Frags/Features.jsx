import React from "react";

const features = [
  [
    {
      title: "Compassionate Conversations",
      desc: "Sathi listens patiently and responds with empathy, offering comfort during moments of loneliness or stress.",
      icon: "💬"
    },
    {
      title: "Mood-Based Responses",
      desc: "Detects emotional tone and adjusts its replies to be more soothing, uplifting, or supportive as needed.",
      icon: "🌈"
    },
    {
      title: "Voice Interaction",
      desc: "Talk to Sathi using your voice and hear calming responses, making the experience more personal and natural.",
      icon: "🎙️"
    },
  ],
  [
    {
      title: "Daily Affirmations",
      desc: "Receive gentle reminders and positive affirmations to boost self-esteem and emotional resilience.",
      icon: "🌻"
    },
    {
      title: "Mindfulness Prompts",
      desc: "Guides users through breathing exercises and grounding techniques to reduce anxiety and promote calm.",
      icon: "🧘"
    },
    {
      title: "Personal Journal",
      desc: "Write down your thoughts and feelings in a private space, helping you reflect and grow emotionally.",
      icon: "📔"
    },
  ],
  [
    {
      title: "Customizable Themes",
      desc: "Choose calming color palettes and font sizes to create a visually soothing environment.",
      icon: "🎨"
    },
    {
      title: "Safe Space Mode",
      desc: "Temporarily disable notifications and distractions to create a peaceful, focused experience with Sathi.",
      icon: "🛑"
    },
    {
      title: "Resource Links",
      desc: "Access curated mental health resources, helplines, and articles for deeper support when needed.",
      icon: "🔗"
    }
  ]
];

export default function Features() {
  return (
    <section id="features" className="min-h-screen py-4 px-6 pb-10 text-center flex items-center justify-center">
      <div className="container">
        <h3 className="text-3xl font-bold bowl mb-4">Sathi's Features 🌟</h3>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Sathi is your mental health buddy — always here to listen, comfort, and uplift. These features are designed to support emotional well-being and create a safe, friendly space for everyone.
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto px-9">
          {features.flat().map((f, i) => (
            <div key={i} className="flex items-start gap-2 text-left">
              <div className="text-2xl w-12 h-12 flex items-center justify-center rounded-full bg-purple-200 shrink-0">
                {f.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{f.title}</h4>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}