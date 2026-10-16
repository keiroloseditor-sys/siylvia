import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl mx-3 sm:mx-6 md:mx-auto max-w-5xl my-4 sm:my-6 shadow-xl border border-rose-200/50">
      {/* Background Image with Fallback */}
      <div className="relative min-h-[320px] sm:min-h-[400px] md:min-h-[460px] w-full overflow-hidden bg-rose-950 flex flex-col justify-end">
        <img
          src="/src/assets/images/sylvia_romantic_roses_1792175821389.jpg"
          alt="ورود رومانسية وأضواء ذهبية لسيلفيا"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 transform scale-105 hover:scale-100 transition-transform duration-1000"
        />

        {/* Measured Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />

        {/* Content Overlay */}
        <div className="relative z-10 p-5 sm:p-8 md:p-12 text-white">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-rose-300 font-medium mb-2">
            <span>من قلب صادق</span>
            <span aria-hidden="true">·</span>
            <span>إلى أغلى إنسانة</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-rose-400 font-bold">
              <Heart className="w-3.5 h-3.5 fill-rose-400 shrink-0" />
              <span>سيلفيا</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-cairo tracking-tight text-white mb-2 sm:mb-3 text-balance leading-tight drop-shadow-md">
            أنا آسف يا سيلفيا.. وسامحيني
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-rose-100/90 font-amiri max-w-2xl leading-relaxed mb-5 sm:mb-6">
            كتبت ليكي الكلمات دي عشان أقولك بكل صدق: مقدرش أستغنى عنك، ومستعد أعمل أي حاجة عشان ترجع الابتسامة لوشك.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#decision"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg transition-all flex items-center gap-2 text-xs sm:text-sm cursor-pointer whitespace-nowrap shrink-0 active:scale-95"
            >
              <span>جاوبي قلبي</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
