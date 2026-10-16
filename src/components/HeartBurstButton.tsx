import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface FloatingHeartItem {
  id: number;
  x: number;
  color: string;
}

interface HeartBurstButtonProps {
  count: number;
  onIncrement: () => void;
}

export const HeartBurstButton: React.FC<HeartBurstButtonProps> = ({ count, onIncrement }) => {
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeartItem[]>([]);

  const sweetMessages = [
    "سيلفيا أجمل ما في حياتي ❤️",
    "قلبي بينبض بحبك كل ثانية ✨",
    "روحي فداكي يا سيلفيا 🌹",
    "مستحيل أستغنى عنك أبداً 💖",
    "أنتِ النور اللي منور طريقي 💫",
    "سامحيني ونبدأ صفحة جديدة أحلى 🕊️",
  ];

  const currentMessage = sweetMessages[count % sweetMessages.length];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onIncrement();

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const colors = ['#e11d48', '#f43f5e', '#ec4899', '#db2777', '#fb7185'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newHeart: FloatingHeartItem = {
      id: Date.now() + Math.random(),
      x: clickX,
      color: randomColor,
    };

    setFloatingHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1400);
  };

  return (
    <div className="max-w-md mx-auto my-12 text-center px-4 relative">
      <div className="relative inline-block">
        {/* Floating Heart particles */}
        {floatingHearts.map((h) => (
          <div
            key={h.id}
            className="absolute pointer-events-none transition-all duration-1000 ease-out z-20"
            style={{
              left: `${h.x}px`,
              bottom: '100%',
              animation: 'floatUp 1.2s forwards ease-out',
            }}
          >
            <Heart
              className="w-6 h-6 fill-current animate-pulse"
              style={{ color: h.color }}
            />
          </div>
        ))}

        <button
          onClick={handleClick}
          className="group px-7 py-3.5 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 text-white rounded-full font-bold shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-yellow-200 group-hover:rotate-12 transition-transform" />
          <Heart className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" />
          <span className="text-base sm:text-lg">اضغطي هنا لنبضات حب زيادة</span>
          <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold tabular-nums">
            {count}
          </span>
        </button>
      </div>

      <p className="mt-3 text-sm font-semibold text-rose-700 min-h-[24px] font-amiri transition-opacity duration-300">
        {currentMessage}
      </p>

      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0) scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 0.9;
            transform: translateY(-45px) scale(1.2) rotate(15deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-90px) scale(1) rotate(-15deg);
          }
        }
      `}</style>
    </div>
  );
};
