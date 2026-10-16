import React from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';

export const LoveLetter: React.FC = () => {
  return (
    <section id="letter" className="max-w-5xl mx-auto px-3 sm:px-6 my-10 sm:my-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Visual Column */}
        <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-rose-300 bg-rose-50 min-h-[280px] sm:min-h-[340px] lg:min-h-full">
          <img
            src="/src/assets/images/romantic_love_letter_1792175821190.jpg"
            alt="رسالة حب وشمعة ووردة حمراء لسيلفيا"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5 sm:p-6">
            <span className="text-white text-sm sm:text-base font-amiri font-bold flex items-center gap-2 drop-shadow-md">
              <Sparkles className="w-4 h-4 text-rose-300 shrink-0" />
              <span>مكتوبة بمداد القلب.. لسيلفيا فقط</span>
            </span>
          </div>
        </div>

        {/* Text / Letter Column - Solid High Contrast */}
        <div className="lg:col-span-7 bg-white border-2 border-rose-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-700 mb-3 sm:mb-4">
              <Feather className="w-5 h-5 text-rose-600 shrink-0" />
              <span className="text-xs sm:text-sm font-black tracking-wider">رسالة اعتذار من القلب</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-cairo text-slate-950 mb-4 sm:mb-6 leading-snug">
              يا سيلفيا.. سامحيني، أنا آسف بجد
            </h3>

            <div className="space-y-4 text-slate-900 font-amiri text-lg sm:text-xl leading-relaxed font-medium">
              <p>
                عارف إني يمكن زعلتك أو قصرت معاكي، بس والله ما كان في نيتي غير إني أشوفك مبسوطة ومرتاحة. غيابك عني أو لحظة زعلك بتكسر حاجة جوايا محدش يعرفها غير ربنا.
              </p>
              <p>
                أنتِ مش بس شخص عادي في حياتي، أنتِ السكينة والأمان اللي بدور عليهم، وأنتِ الضحكة اللي بتخفف عني تعب الأيام.
              </p>
              <p className="font-black text-rose-950 bg-rose-100 p-4 sm:p-5 rounded-2xl border-r-4 border-rose-600 text-base sm:text-lg md:text-xl shadow-xs">
                &ldquo;بحبك يا سيلفيا، وما أقدرش أستغنى عنك أبداً.. ومستعد أعمل المستحيل عشان أصلح كل حاجة بينا وترجع أيامنا الحلوة.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-slate-200 flex items-center justify-between text-sm sm:text-base">
            <span className="font-black text-slate-950">من كيرلس صفوت</span>
            <div className="flex items-center gap-1.5 text-rose-600 font-black">
              <Heart className="w-4 h-4 fill-rose-600 text-rose-600 shrink-0" />
              <span>إلى حبيبتي سيلفيا</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
