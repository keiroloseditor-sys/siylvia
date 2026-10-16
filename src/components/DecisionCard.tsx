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

    // Multi-shot romantic fireworks
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

      const particleCount = 50 * (timeLeft / duration);
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

    // If refusal count gets higher, dodge slightly for playful interaction
    if (nextCount >= 3) {
      const randomX = (Math.random() - 0.5) * 160;
      const randomY = (Math.random() - 0.5) * 80;
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
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsAppSend = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Determine label for the refusal button based on user request:
  // "لو رفضت، لأ. تكتب تأكدي، لو رفضت تاني، تطلع كلمة تأكدي تأكدي."
  const getRefusalButtonText = () => {
    if (refusalCount === 0) return 'لأ';
    if (refusalCount === 1) return 'تأكدي';
    if (refusalCount === 2) return 'تأكدي تأكدي';
    if (refusalCount === 3) return 'تأكدي تأكدي بجد؟ 🥺';
    if (refusalCount === 4) return 'عشان خاطري فكري تاني 💔';
    return 'مفيش غير الموافقة بقى! ❤️';
  };

  // Scale of agreement button grows as she hesitates
  const agreeScale = Math.min(1 + refusalCount * 0.12, 1.45);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-8 bg-white/90 backdrop-blur-md border border-rose-200/80 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-300">
      {/* Decorative top badge */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="w-8 h-[1px] bg-rose-300"></span>
        <div className="flex items-center gap-1.5 text-rose-600 text-sm font-semibold tracking-wide">
          <Heart className="w-4 h-4 fill-rose-500 animate-pulse text-rose-500" />
          <span>سؤال من أعمق نقطة في قلبي</span>
          <Heart className="w-4 h-4 fill-rose-500 animate-pulse text-rose-500" />
        </div>
        <span className="w-8 h-[1px] bg-rose-300"></span>
      </div>

      {!hasAgreed ? (
        <div className="text-center">
          {/* Main Question */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-cairo text-slate-900 tracking-tight leading-tight mb-4 text-balance">
            هترجعي لي يا <span className="text-rose-600 underline decoration-rose-300 decoration-wavy decoration-2">سيلفيا</span>؟
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            أنا آسف وسامحيني، من غيرك الدنيا ملهاش طعم.. ومفيش في قلبي غيرك. ينفع ترجعي لي ونبدأ أحلى من الأول؟
          </p>

          {/* Refusal feedback notices based on counts */}
          {refusalCount === 1 && (
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-sm font-medium animate-bounce">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>تأكدي.. راجعي قلبك وذكرياتنا الحلوة سوا! 🥺</span>
            </div>
          )}

          {refusalCount >= 2 && (
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl text-sm font-medium animate-pulse">
              <Flame className="w-4 h-4 text-rose-600 shrink-0" />
              <span>
                {refusalCount === 2
                  ? 'تأكدي تأكدي! والله ما أقدر أعيش دقيقة من غيرك 😭'
                  : 'عشان خاطري يا سيلفيا.. الفرصة دي هتخلينا أسعد اتنين في الدنيا ❤️'}
              </span>
            </div>
          )}

          {/* Buttons Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 pb-2 min-h-[120px]">
            {/* Yes / Agreement Button */}
            <button
              onClick={handleAgree}
              style={{
                transform: `scale(${agreeScale})`,
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 cursor-pointer flex items-center justify-center gap-2.5 active:scale-95 whitespace-nowrap z-10"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>أوافق وهرجعلك ❤️</span>
              <Sparkles className="w-4 h-4 text-yellow-200" />
            </button>

            {/* No / Refusal Button with dynamic labels */}
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
                    const randomX = (Math.random() - 0.5) * 180;
                    const randomY = (Math.random() - 0.5) * 100;
                    setDodgePosition({ x: randomX, y: randomY });
                  }
                }}
                className={`w-full sm:w-auto px-6 py-3.5 border font-semibold text-base rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap ${
                  refusalCount === 0
                    ? 'border-slate-300 text-slate-600 hover:bg-slate-100'
                    : refusalCount === 1
                    ? 'border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100'
                    : 'border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100 shadow-sm'
                }`}
              >
                <span>{getRefusalButtonText()}</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            (الزرار الأحمر معمول بكل حب عشانك.. اضغطي عليه وشوفي المفاجأة)
          </p>
        </div>
      ) : (
        /* Accepted / Celebration State */
        <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-500">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-tr from-rose-500 to-pink-400 rounded-full flex items-center justify-center text-white shadow-xl shadow-rose-500/40 animate-pulse-heart">
            <Heart className="w-10 h-10 fill-white" />
          </div>

          {/* User's exact requested phrase: "تقول لي أهو ده الصح. وأنا آسف، وتبعته تاني، وتكتب بحبك سيلفيا، واللي أنا ما أقدرش أستغنى عنك." */}
          <div className="inline-block px-5 py-1.5 bg-rose-100/90 text-rose-800 font-bold rounded-full text-base sm:text-lg mb-3">
            ✨ أهو ده الصح! ✨
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-cairo text-rose-600 mb-4 leading-tight">
            أهو ده الصح يا روحي! ❤️
          </h2>

          <div className="max-w-xl mx-auto bg-rose-50/70 border border-rose-200/90 rounded-2xl p-6 mb-8 text-slate-800 shadow-inner">
            <p className="text-xl sm:text-2xl font-bold font-cairo text-slate-900 mb-3">
              أنا آسف يا سيلفيا من كل قلبي..
            </p>
            <p className="text-lg sm:text-xl font-bold text-rose-600 font-marhey mb-4">
              بحبك يا سيلفيا.. وما أقدرش أستغنى عنك أبداً!
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              وعد مني هكون ليكي السند والأمان، وكل لحظة جاية هتكون مليانة فرح وحب وسعادة تعوض كل ثانية زعل. وجودك في حياتي هو أجمل نعمة ربنا رزقني بيها.
            </p>
          </div>

          {/* User's requested: "وتبعته تاني" (Send it back / Share with him) */}
          <div className="space-y-3 max-w-md mx-auto">
            <p className="text-sm font-semibold text-slate-700">
              💌 ابعتي له رسالة المسامحة دلوقتي وفرحي قلبه:
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* WhatsApp send button */}
              <button
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto flex-1 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap text-sm"
              >
                <Send className="w-4 h-4" />
                <span>إرسال عبر واتساب</span>
              </button>

              {/* Copy Message button */}
              <button
                onClick={handleCopyMessage}
                className="w-full sm:w-auto flex-1 px-5 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">تم نسخ الرسالة!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>نسخ نص المسامحة</span>
                  </>
                )}
              </button>
            </div>

            {/* Re-trigger confetti or reset */}
            <div className="pt-4 flex items-center justify-center gap-4 text-xs text-slate-500">
              <button
                onClick={launchCelebration}
                className="hover:text-rose-600 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                <span>فرقعة احتفال تانية 🎉</span>
              </button>
              <span>·</span>
              <button
                onClick={handleReset}
                className="hover:text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة التجربة من البداية</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
