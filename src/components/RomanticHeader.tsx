import React, { useState } from 'react';
import { Heart, Volume2, VolumeX, Sparkles, Menu, X } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

interface RomanticHeaderProps {
  heartCount: number;
  onIncrementHeart: () => void;
}

export const RomanticHeader: React.FC<RomanticHeaderProps> = ({ heartCount, onIncrementHeart }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMusic = () => {
    const nextState = romanticAudio.toggle((playing) => {
      setIsPlayingMusic(playing);
    });
    setIsPlayingMusic(nextState);
  };

  const navLinks = [
    { href: '#decision', label: 'سؤال القلب' },
    { href: '#letter', label: 'رسالة الاعتذار' },
    { href: '#promises', label: 'وعودي ليكي' },
    { href: '#reasons', label: 'ليه مقدرش أستغنى عنك' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-6">
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500 text-rose-500 shrink-0" />
          <span className="text-base sm:text-xl font-black font-cairo text-rose-600 tracking-tight whitespace-nowrap">
            سيلفيا في قلبي
          </span>
        </div>

        {/* Zone 2: Desktop / Tablet Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Music toggle + Heart counter + Mobile Menu Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Music Button */}
          <button
            onClick={toggleMusic}
            title={isPlayingMusic ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}
            className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-full border transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0 ${
              isPlayingMusic
                ? 'bg-rose-100 border-rose-300 text-rose-700 shadow-xs'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-rose-600 animate-pulse shrink-0" />
                <span className="hidden xs:inline sm:inline">موسيقى شغالة</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="hidden xs:inline sm:inline">تشغيل الموسيقى</span>
              </>
            )}
            <span className="xs:hidden sm:hidden text-xs">🎵</span>
          </button>

          {/* Heart Counter Button */}
          <button
            onClick={onIncrementHeart}
            title="نبضات الحب"
            className="px-2.5 sm:px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full shadow-xs hover:shadow-md transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer active:scale-90 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-200 shrink-0" />
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white shrink-0" />
            <span className="tabular-nums font-mono text-xs">{heartCount}</span>
          </button>

          {/* Mobile Menu Hamburger (Visible on < lg screens) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة الرئيسية"
            className="lg:hidden p-2 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-rose-100 bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
