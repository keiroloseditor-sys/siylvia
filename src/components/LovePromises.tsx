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
        <span className="text-xs sm:text-sm font-black text-rose-700 tracking-wider">عهود من القلب</span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-cairo text-slate-950 mt-2">
          وعودي الصادقة ليكي يا سيلفيا
        </h3>
        <p className="text-slate-800 text-sm sm:text-base md:text-lg mt-2 max-w-lg mx-auto font-medium">
          مش مجرد كلام على ورق، دي وعود محفورة في قلبي وملتزم بيها قدامك
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {promises.map((promise, idx) => {
          const Icon = promise.icon;
          return (
            <div
              key={idx}
              className="bg-white border-2 border-rose-200 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-3 sm:mb-4 border border-rose-300">
                  <Icon className="w-6 h-6 text-rose-600 shrink-0" />
                </div>
                <h4 className="text-lg sm:text-xl font-black font-cairo text-slate-950 mb-2">
                  {promise.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-amiri font-semibold">
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
