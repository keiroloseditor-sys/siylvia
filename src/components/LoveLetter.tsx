import React from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';

export const LoveLetter: React.FC = () => {
  return (
    <section id="letter" className="max-w-5xl mx-auto px-3 sm:px-6 my-10 sm:my-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Visual Column */}
        <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-rose-200/60 bg-rose-50 min-h-[260px] sm:min-h-[320px] lg:min-h-full">
          <img
            src="/src/assets/images/romantic_love_letter_1792175821190.jpg"
            alt="رسالة حب وشمعة ووردة حمراء لسيلفيا"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6">
            <span className="text-white text-xs sm:text-sm font-amiri font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-300 shrink-0" />
              <span>مكتوبة بمداد القلب.. لسيلفيا فقط</span>
            </span>
          </div>
        </div>

        {/* Text / Letter Column */}
        <div className="lg:col-span-7 bg-white/95 backdrop-blur-sm border border-rose-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-600 mb-3 sm:mb-4">
              <Feather className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 shrink-0" />
              <span className="text-xs font-bold tracking-wider">رسالة اعتذار من القلب</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-cairo text-slate-900 mb-4 sm:mb-6 leading-snug">
              يا سيلفيا.. سامحيني، أنا آسف بجد
            </h3>

            <div className="space-y-3 sm:space-y-4 text-slate-700 font-amiri text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                عارف إني يمكن زعلتك أو قصرت معاكي، بس والله ما كان في نيتي غير إني أشوفك مبسوطة ومرتاحة. غيابك عني أو لحظة زعلك بتكسر حاجة جوايا محدش يعرفها غير ربنا.
              </p>
              <p>
                أنتِ مش بس شخص عادي في حياتي، أنتِ السكينة والأمان اللي بدور عليهم، وأنتِ الضحكة اللي بتخفف عني تعب الأيام.
              </p>
              <p className="font-bold text-rose-700 bg-rose-50/70 p-3.5 sm:p-4 rounded-xl border-r-2 border-rose-500 text-sm sm:text-base md:text-lg">
                &ldquo;بحبك يا سيلفيا، وما أقدرش أستغنى عنك أبداً.. ومستعد أعمل المستحيل عشان أصلح كل حاجة بينا وترجع أيامنا الحلوة.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-500">
            <span className="font-semibold text-slate-700">من كيرلس صفوت</span>
            <div className="flex items-center gap-1.5 text-rose-600 font-semibold">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 shrink-0" />
              <span>إلى حبيبتي سيلفيا</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
