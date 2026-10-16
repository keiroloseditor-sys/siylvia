import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl mx-3 sm:mx-6 md:mx-auto max-w-5xl my-4 sm:my-6 shadow-2xl border-2 border-rose-300">
      {/* Background Image with Fallback */}
      <div className="relative min-h-[340px] sm:min-h-[420px] md:min-h-[480px] w-full overflow-hidden bg-rose-950 flex flex-col justify-end">
        <img
          src="/src/assets/images/sylvia_romantic_roses_1792175821389.jpg"
          alt="ورود رومانسية وأضواء ذهبية لسيلفيا"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 transform scale-105 hover:scale-100 transition-transform duration-1000"
        />

        {/* High Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35" />

        {/* Content Overlay */}
        <div className="relative z-10 p-5 sm:p-8 md:p-12 text-white">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-rose-300 font-bold mb-2">
            <span>من قلب صادق</span>
            <span aria-hidden="true">·</span>
            <span>إلى أغلى إنسانة</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 text-rose-300 font-black">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 shrink-0" />
              <span>سيلفيا</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-cairo tracking-tight text-white mb-3 text-balance leading-tight drop-shadow-xl">
            أنا آسف يا سيلفيا.. وسامحيني
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-rose-100 font-amiri max-w-2xl leading-relaxed mb-6 font-semibold drop-shadow-md">
            كتبت ليكي الكلمات دي عشان أقولك بكل صدق: مقدرش أستغنى عنك، ومستعد أعمل أي حاجة عشان ترجع الابتسامة لوشك.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#decision"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-2xl shadow-xl transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer whitespace-nowrap shrink-0 active:scale-95 border border-white/30"
            >
              <span>جاوبي قلبي</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
