import React from 'react';
import { HeartHandshake, Smile, Eye, ShieldCheck } from 'lucide-react';

export const LovePromises: React.FC = () => {
  const promises = [
    {
      title: 'ما أنامش وأنتِ زعلانة أبداً',
      desc: 'وعد مني مش هسمح للشمس تغرب وفي قلبك أي عتب أو زعل مني، وهكون دايمًا اللي يبدأ بالصلح.',
      icon: HeartHandshake,
    },
    {
      title: 'أسمعك وأفهمك قبل أي عتاب',
      desc: 'مشاعرك عندي رقم واحد، وهسمع كل كلمة بتقوليها باهتمام وحب واحترام كامل.',
      icon: Eye,
    },
    {
      title: 'أكون سندك وأمانك في كل خطوة',
      desc: 'مهما كانت الظروف صعبة، هتلاقيني دايمًا جنبك وفي ضهرك ماسك في إيدك ومساندك.',
      icon: ShieldCheck,
    },
    {
      title: 'أحافظ على ابتسامتك وضحكتك',
      desc: 'ضحكتك دي هي سر سعادتي في الدنيا، وهبذل كل جهدي عشان تفضل منورة وشك طول العمر.',
      icon: Smile,
    },
  ];

  return (
    <section id="promises" className="max-w-5xl mx-auto px-3 sm:px-6 my-10 sm:my-16">
      <div className="text-center mb-8 sm:mb-10">
        <span className="text-xs font-bold text-rose-600 tracking-wider">عهود من القلب</span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-cairo text-slate-900 mt-2">
          وعودي الصادقة ليكي يا سيلفيا
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 max-w-lg mx-auto">
          مش مجرد كلام على ورق، دي وعود محفورة في قلبي وملتزم بيها قدامك
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {promises.map((promise, idx) => {
          const Icon = promise.icon;
          return (
            <div
              key={idx}
              className="bg-white/85 backdrop-blur-xs border border-rose-100 rounded-2xl p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 text-rose-600 shrink-0" />
                </div>
                <h4 className="text-base sm:text-lg font-bold font-cairo text-slate-900 mb-1.5 sm:mb-2">
                  {promise.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-amiri md:text-base">
                  {promise.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
