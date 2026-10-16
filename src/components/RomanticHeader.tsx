import React, { useState } from 'react';
import { Heart, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

interface RomanticHeaderProps {
  heartCount: number;
  onIncrementHeart: () => void;
}

export const RomanticHeader: React.FC<RomanticHeaderProps> = ({ heartCount, onIncrementHeart }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  const toggleMusic = () => {
    const nextState = romanticAudio.toggle((playing) => {
      setIsPlayingMusic(playing);
    });
    setIsPlayingMusic(nextState);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-rose-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-black font-cairo text-rose-600 tracking-tight whitespace-nowrap shrink-0 flex items-center gap-1.5">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            <span>سيلفيا في قلبي</span>
          </span>
        </div>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#decision" className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0">
            سؤال القلب
          </a>
          <a href="#letter" className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0">
            رسالة الاعتذار
          </a>
          <a href="#promises" className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0">
            وعودي ليكي
          </a>
          <a href="#reasons" className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0">
            ليه مقدرش أستغنى عنك
          </a>
        </nav>

        {/* Zone 3: Actions (Music toggle + Heart counter) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleMusic}
            title={isPlayingMusic ? "إيقاف الموسيقى الهادئة" : "تشغيل الموسيقى الهادئة"}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
              isPlayingMusic
                ? 'bg-rose-100 border-rose-300 text-rose-700 shadow-xs'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
                <span>موسيقى شغالة 🎵</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span>تشغيل الموسيقى 🎶</span>
              </>
            )}
          </button>

          <button
            onClick={onIncrementHeart}
            className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-90 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span className="tabular-nums font-mono">{heartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
