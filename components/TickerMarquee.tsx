import React from 'react';

const TickerMarquee = () => {
  const items = [
    "/// THE BANKER: CONNECTED ///",
    "လက်ရှိ ကမ်းလှမ်းချက် (OFFER): တွက်ချက်နေသည်...",
    "CASE REMAINING: 06",
    "THE BANKER IS WATCHING",
    "အလှည့်ရောက်ပြီ - DEAL OR NO DEAL?",
    "LUCK: LOW | PROBABILITY: UNCERTAIN",
    "နောက်ဆုံး အခွင့်အရေး (LAST CHANCE)",
    "/// အပေးအယူ လုပ်မလား? ///",
    "SYSTEM ANALYZING YOUR GREED...",
    "K 10,000,000 | IN PLAY",
    "BANKER'S ADVICE: TAKE THE MONEY",
    "စွန့်စားမလား? (RISK) OR (DEAL)?",
    "NEXT ROUND: HIGH VOLATILITY",
    "/// BANKER ALGORITHM: ONLINE ///"
  ];

  return (
    <div className="w-full bg-paper-dark border-b-2 border-ink-black overflow-hidden flex relative z-20 h-10 items-center group">
      {/* SPEED ADJUSTMENT: 
          Changed from 40s to 80s for a slow, cinematic crawl.
          Increased 'gap-16' for better spacing between messages.
      */}
      <div className="animate-[marquee_100s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap flex gap-16 w-max">
        {[...items, ...items].map((item, index) => (
          <span 
            key={index} 
            className={`font-mono text-sm md:text-base tracking-[0.2em] flex items-center gap-6 ${
              index % 2 === 0 ? 'text-ink-black' : 'text-red-700 font-bold'
            }`}
          >
            {/* Visual marker to separate the messages clearly */}
            <span className="text-xs opacity-40">●</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerMarquee;