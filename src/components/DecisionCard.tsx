import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Send, Copy, Check, RotateCcw, ShieldAlert, Flame } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

interface DecisionCardProps {
  onAgreedChange?: (agreed: boolean) => void;
}

export const DecisionCard: React.FC<DecisionCardProps> = ({ onAgreedChange }) => {
  const [refusalCount, setRefusalCount] = useState<number>(0);
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);
  const [dodgePosition, setDodgePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [copied, setCopied] = useState<boolean>(false);

  // Trigger rich confetti burst with hearts & gold stars
  const launchCelebration = () => {
    romanticAudio.playCelebrationChime();

    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: number = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 45 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#e11d48', '#f43f5e', '#fda4af', '#f59e0b', '#ffffff'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#e11d48', '#ec4899', '#f43f5e', '#fbbf24', '#ffffff'],
      });
    }, 250);
  };

  const handleAgree = () => {
    setHasAgreed(true);
    if (onAgreedChange) onAgreedChange(true);
    launchCelebration();
  };

  const handleRefuse = () => {
    const nextCount = refusalCount + 1;
    setRefusalCount(nextCount);

    // Responsive dodge: smaller on mobile so it stays inside container
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const maxRangeX = isMobile ? 35 : 120;
    const maxRangeY = isMobile ? 25 : 60;

    if (nextCount >= 3) {
      const randomX = (Math.random() - 0.5) * maxRangeX;
      const randomY = (Math.random() - 0.5) * maxRangeY;
      setDodgePosition({ x: randomX, y: randomY });
    }
  };

  const handleReset = () => {
    setHasAgreed(false);
    setRefusalCount(0);
    setDodgePosition({ x: 0, y: 0 });
    if (onAgreedChange) onAgreedChange(false);
  };

  const shareText = "أهو ده الصح! ❤️ سامحتك يا غالي، وأنا كمان بحبك وما أقدرش أستغنى عنك أبداً.. ومستحيل أزعل منك تاني 🌹✨";

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsAppSend = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getRefusalButtonText = () => {
    if (refusalCount === 0) return 'لأ';
    if (refusalCount === 1) return 'تأكدي';
    if (refusalCount === 2) return 'تأكدي تأكدي';
    if (refusalCount === 3) return 'تأكدي تأكدي بجد؟ 🥺';
    if (refusalCount === 4) return 'عشان خاطري فكري تاني 💔';
    return 'مفيش غير الموافقة بقى! ❤️';
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const agreeScale = isMobile
    ? Math.min(1 + refusalCount * 0.05, 1.15)
    : Math.min(1 + refusalCount * 0.1, 1.35);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-6 sm:my-10 bg-white border-2 border-rose-300 rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 transition-all duration-300">
      {/* Decorative top badge */}
      <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
        <span className="w-8 h-[2px] bg-rose-400"></span>
        <div className="flex items-center gap-1.5 text-rose-700 text-xs sm:text-sm font-black tracking-wide">
          <Heart className="w-4 h-4 fill-rose-600 animate-pulse text-rose-600" />
          <span>سؤال من أعمق نقطة في قلبي</span>
          <Heart className="w-4 h-4 fill-rose-600 animate-pulse text-rose-600" />
        </div>
        <span className="w-8 h-[2px] bg-rose-400"></span>
      </div>

      {!hasAgreed ? (
        <div className="text-center">
          {/* Main Question - High Contrast */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-cairo text-slate-950 tracking-tight leading-tight mb-3 sm:mb-4 text-balance">
            هترجعي لي يا <span className="text-rose-600 underline decoration-rose-400 decoration-wavy decoration-2">سيلفيا</span>؟
          </h2>

          <p className="text-slate-800 font-medium text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
            أنا آسف وسامحيني، من غيرك الدنيا ملهاش طعم.. ومفيش في قلبي غيرك. ينفع ترجعي لي ونبدأ أحلى من الأول؟
          </p>

          {/* Refusal feedback notices */}
          {refusalCount === 1 && (
            <div className="mb-5 inline-flex items-center gap-2 px-4 py-2.5 bg-amber-100 border-2 border-amber-400 text-amber-950 rounded-2xl text-sm sm:text-base font-bold animate-bounce shadow-sm">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
              <span>تأكدي.. راجعي قلبك وذكرياتنا الحلوة سوا! 🥺</span>
            </div>
          )}

          {refusalCount >= 2 && (
            <div className="mb-5 inline-flex items-center gap-2 px-4 py-2.5 bg-rose-100 border-2 border-rose-400 text-rose-950 rounded-2xl text-sm sm:text-base font-bold animate-pulse shadow-sm">
              <Flame className="w-5 h-5 text-rose-700 shrink-0" />
              <span>
                {refusalCount === 2
                  ? 'تأكدي تأكدي! والله ما أقدر أعيش دقيقة من غيرك 😭'
                  : 'عشان خاطري يا سيلفيا.. الفرصة دي هتخلينا أسعد اتنين في الدنيا ❤️'}
              </span>
            </div>
          )}

          {/* Buttons Area: Bold, High Contrast, Super Legible */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-3 pb-2 min-h-[120px]">
            {/* Yes / Agreement Button - Bold Jet-Black Text, High-Contrast Pop */}
            <button
              onClick={handleAgree}
              style={{
                transform: `scale(${agreeScale})`,
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="w-full sm:w-auto px-7 sm:px-9 py-4 sm:py-4.5 bg-white hover:bg-rose-50 text-black font-black font-cairo text-lg sm:text-xl md:text-2xl rounded-2xl shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 border-4 border-rose-600 ring-4 ring-rose-200/80 cursor-pointer flex items-center justify-center gap-3 active:scale-95 whitespace-nowrap z-10"
            >
              <Heart className="w-6 h-6 fill-rose-600 text-rose-600 shrink-0 animate-pulse" />
              <span className="text-black font-black font-cairo tracking-wide">أوافق وهرجع لك ❤️</span>
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            </button>

            {/* No / Refusal Button with dynamic labels - High Contrast */}
            <div
              style={{
                transform: `translate(${dodgePosition.x}px, ${dodgePosition.y}px)`,
                transition: 'transform 0.2s ease-out',
              }}
              className="w-full sm:w-auto"
            >
              <button
                onClick={handleRefuse}
                onMouseEnter={() => {
                  if (refusalCount >= 3) {
                    const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 640;
                    const maxRangeX = isMobileDevice ? 30 : 120;
                    const maxRangeY = isMobileDevice ? 20 : 60;
                    const randomX = (Math.random() - 0.5) * maxRangeX;
                    const randomY = (Math.random() - 0.5) * maxRangeY;
                    setDodgePosition({ x: randomX, y: randomY });
                  }
                }}
                className={`w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 border-2 font-black font-cairo text-base sm:text-lg rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap shadow-sm ${
                  refusalCount === 0
                    ? 'border-slate-400 bg-slate-100 text-slate-900 hover:bg-slate-200'
                    : refusalCount === 1
                    ? 'border-amber-400 bg-amber-100 text-amber-950 hover:bg-amber-200'
                    : 'border-rose-400 bg-rose-100 text-rose-950 hover:bg-rose-200'
                }`}
              >
                <span>{getRefusalButtonText()}</span>
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-bold text-slate-700 mt-6">
            (اضغطي على &ldquo;أوافق وهرجع لك&rdquo; وشوفي المفاجأة بكل حب ❤️)
          </p>
        </div>
      ) : (
        /* Accepted / Celebration State */
        <div className="text-center py-2 sm:py-4 animate-in fade-in zoom-in-95 duration-500">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-tr from-rose-600 to-pink-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-rose-500/50 animate-pulse-heart">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
          </div>

          <div className="inline-block px-5 py-1.5 bg-rose-100 text-rose-950 font-black rounded-full text-base sm:text-lg mb-2 sm:mb-3 border border-rose-300">
            ✨ أهو ده الصح! ✨
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-cairo text-rose-600 mb-3 sm:mb-4 leading-tight">
            أهو ده الصح يا روحي! ❤️
          </h2>

          <div className="max-w-xl mx-auto bg-rose-50 border-2 border-rose-200 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 text-slate-900 shadow-sm">
            <p className="text-xl sm:text-2xl font-black font-cairo text-slate-950 mb-2 sm:mb-3">
              أنا آسف يا سيلفيا من كل قلبي..
            </p>
            <p className="text-lg sm:text-2xl font-black text-rose-700 font-marhey mb-3 sm:mb-4">
              بحبك يا سيلفيا.. وما أقدرش أستغنى عنك أبداً!
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed font-amiri font-semibold">
              وعد مني هكون ليكي السند والأمان، وكل لحظة جاية هتكون مليانة فرح وحب وسعادة تعوض كل ثانية زعل. وجودك في حياتي هو أجمل نعمة ربنا رزقني بيها.
            </p>
          </div>

          {/* WhatsApp & Copy buttons */}
          <div className="space-y-3 max-w-md mx-auto">
            <p className="text-sm font-bold text-slate-900">
              💌 ابعتي له رسالة المسامحة دلوقتي وفرحي قلبه:
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto flex-1 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl shadow-md shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap text-sm sm:text-base"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>إرسال عبر واتساب</span>
              </button>

              <button
                onClick={handleCopyMessage}
                className="w-full sm:w-auto flex-1 px-5 py-3.5 bg-white border-2 border-slate-300 hover:bg-slate-100 text-slate-900 font-black rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap text-sm sm:text-base"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-700 font-black">تم نسخ الرسالة!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>نسخ نص المسامحة</span>
                  </>
                )}
              </button>
            </div>

            {/* Replay */}
            <div className="pt-3 flex items-center justify-center gap-3 text-xs sm:text-sm font-bold text-slate-600">
              <button
                onClick={launchCelebration}
                className="hover:text-rose-600 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span>فرقعة احتفال تانية 🎉</span>
              </button>
              <span>·</span>
              <button
                onClick={handleReset}
                className="hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة التجربة من البداية</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
