import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl mx-4 sm:mx-6 md:mx-auto max-w-5xl my-6 shadow-xl border border-rose-200/50">
      {/* Background Image with Fallback */}
      <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden bg-rose-950">
        <img
          src="/src/assets/images/sylvia_romantic_roses_1792175821389.jpg"
          alt="ورود رومانسية وأضواء ذهبية لسيلفيا"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-90 transform scale-105 hover:scale-100 transition-transform duration-1000"
        />

        {/* Measured Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 text-white">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-rose-300 font-medium mb-2">
            <span>من قلب صادق</span>
            <span aria-hidden="true">·</span>
            <span>إلى أغلى إنسانة</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-rose-400">
              <Heart className="w-3.5 h-3.5 fill-rose-400" />
              <span>سيلفيا</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-cairo tracking-tight text-white mb-3 text-balance leading-tight drop-shadow-md">
            أنا آسف يا سيلفيا.. وسامحيني
          </h1>

          <p className="text-base sm:text-xl text-rose-100/90 font-amiri max-w-2xl leading-relaxed mb-6">
            كتبت ليكي الكلمات دي عشان أقولك بكل صدق: مقدرش أستغنى عنك، ومستعد أعمل أي حاجة عشان ترجع الابتسامة لوشك.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#decision"
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer whitespace-nowrap shrink-0"
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
