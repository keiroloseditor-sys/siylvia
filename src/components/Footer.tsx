import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 sm:mt-20 border-t border-rose-200/60 bg-white/70 backdrop-blur-xs py-6 sm:py-8 px-3 sm:px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2.5 sm:gap-3">
        <div className="flex items-center justify-center gap-2 text-rose-500">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500 animate-pulse text-rose-500" />
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-rose-600 text-rose-600 animate-bounce" />
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500 animate-pulse text-rose-500" />
        </div>

        <p className="text-sm sm:text-base md:text-lg font-bold font-cairo text-slate-800 tracking-wide px-2">
          صمم هذا الموقع بواسطة كيرلس صفوت بكل حب لسيلفيا
        </p>

        <p className="text-xs text-rose-600 font-medium px-2">
          صمم بواسطة كيرلس صفوت · سيلفيا في القلب دائماً وأبداً ❤️
        </p>
      </div>
    </footer>
  );
};
