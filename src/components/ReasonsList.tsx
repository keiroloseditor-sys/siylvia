import React from 'react';
import { Heart, Star, Sun, Compass } from 'lucide-react';

export const ReasonsList: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'عشان روحك النقية وطيبة قلبك',
      desc: 'في وسط زحمة الدنيا، قلبك الطيب ده هو المكان الوحيد اللي بحس فيه بالنقاء والراحة الحقيقية.',
      icon: Heart,
    },
    {
      num: '02',
      title: 'عشان ضحكتك بتغير يومي كله',
      desc: 'مجرد ما أسمع صوتك أو أشوف ضحكتك، كل هموم الدنيا بتصغر وتتلاشى فجأة.',
      icon: Sun,
    },
    {
      num: '03',
      title: 'عشان معاكي بكون على طبيعتي',
      desc: 'مش محتاج أتصنع أو أخبي أي حاجة، أنتِ الشخص الوحيد اللي فاهمني وحاسس بيا حتى في صمتي.',
      icon: Compass,
    },
    {
      num: '04',
      title: 'عشان أنتِ بوصلتي وسندي',
      desc: 'وجودك في حياتي بيخليني إنسان أحسن، وطاقتي وإصراري في الدنيا بيبدأوا من حبك ودعمك.',
      icon: Star,
    },
  ];

  return (
    <section id="reasons" className="max-w-5xl mx-auto px-3 sm:px-6 my-10 sm:my-16">
      <div className="bg-gradient-to-br from-rose-950 via-rose-900 to-black text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden border-2 border-rose-800/80">
        <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-black text-rose-300 tracking-wider">من القلب للقلب</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-cairo mt-2 text-white">
              ليه ما أقدرش أستغنى عنك يا سيلفيا؟
            </h3>
            <p className="text-rose-100 text-sm sm:text-base mt-2 font-amiri font-semibold">
              أسباب كتير أوي، بس دي أكتر حاجات بتفكرني إن حياتي من غيرك مستحيلة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.num}
                  className="bg-black/35 border-2 border-white/20 rounded-2xl p-5 sm:p-6 hover:bg-black/50 transition-colors shadow-inner"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl font-mono text-rose-300 font-black shrink-0">
                      {reason.num}
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black font-cairo text-white mb-2 flex items-center gap-2">
                        <span>{reason.title}</span>
                        <Icon className="w-5 h-5 text-rose-400 shrink-0" />
                      </h4>
                      <p className="text-sm sm:text-base text-rose-100 font-amiri leading-relaxed font-medium">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
