import React from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';

export const LoveLetter: React.FC = () => {
  return (
    <section id="letter" className="max-w-5xl mx-auto px-4 sm:px-6 my-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Visual Column */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border border-rose-200/60 bg-rose-50">
          <img
            src="/src/assets/images/romantic_love_letter_1792175821190.jpg"
            alt="رسالة حب وشمعة ووردة حمراء لسيلفيا"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover min-h-[300px] lg:min-h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
            <span className="text-white text-sm font-amiri font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-300" />
              <span>مكتوبة بمداد القلب.. لسيلفيا فقط</span>
            </span>
          </div>
        </div>

        {/* Text / Letter Column */}
        <div className="lg:col-span-7 bg-white/90 backdrop-blur-sm border border-rose-200/80 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-600 mb-4">
              <Feather className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-bold tracking-wider">رسالة اعتذار من القلب</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-cairo text-slate-900 mb-6 leading-snug">
              يا سيلفيا.. سامحيني، أنا آسف بجد
            </h3>

            <div className="space-y-4 text-slate-700 font-amiri text-lg sm:text-xl leading-relaxed">
              <p>
                عارف إني يمكن زعلتك أو قصرت معاكي، بس والله ما كان في نيتي غير إني أشوفك مبسوطة ومرتاحة. غيابك عني أو لحظة زعلك بتكسر حاجة جوايا محدش يعرفها غير ربنا.
              </p>
              <p>
                أنتِ مش بس شخص عادي في حياتي، أنتِ السكينة والأمان اللي بدور عليهم، وأنتِ الضحكة اللي بتخفف عني تعب الأيام.
              </p>
              <p className="font-bold text-rose-700 bg-rose-50/60 p-4 rounded-xl border-r-2 border-rose-500">
                &ldquo;بحبك يا سيلفيا، وما أقدرش أستغنى عنك أبداً.. ومستعد أعمل المستحيل عشان أصلح كل حاجة بينا وترجع أيامنا الحلوة.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>من كل صفاء القلب</span>
            <div className="flex items-center gap-1 text-rose-600 font-semibold">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>إلى حبيبتي سيلفيا</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
