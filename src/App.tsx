/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FloatingPetals } from './components/FloatingPetals';
import { RomanticHeader } from './components/RomanticHeader';
import { HeroBanner } from './components/HeroBanner';
import { DecisionCard } from './components/DecisionCard';
import { HeartBurstButton } from './components/HeartBurstButton';
import { LoveLetter } from './components/LoveLetter';
import { LovePromises } from './components/LovePromises';
import { ReasonsList } from './components/ReasonsList';
import { Footer } from './components/Footer';

export default function App() {
  const [heartCount, setHeartCount] = useState<number>(99);
  const [, setHasAgreed] = useState<boolean>(false);

  const incrementHeart = () => {
    setHeartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-rose-50/70 via-pink-50/40 to-rose-100/60 text-slate-800 font-cairo">
      {/* Floating Rose Petals Atmosphere */}
      <FloatingPetals />

      {/* Top Bar */}
      <RomanticHeader
        heartCount={heartCount}
        onIncrementHeart={incrementHeart}
      />

      {/* Main Content Area */}
      <main className="relative z-10 pb-12">
        {/* Hero Section */}
        <HeroBanner />

        {/* Primary Interactive Decision Section: "هترجعي لي ولا لأ؟" */}
        <section id="decision" className="px-4">
          <DecisionCard onAgreedChange={setHasAgreed} />
        </section>

        {/* Interactive Heart Burst Experience */}
        <HeartBurstButton
          count={heartCount}
          onIncrement={incrementHeart}
        />

        {/* Deep Sincere Apology & Love Letter */}
        <LoveLetter />

        {/* Promises to Sylvia */}
        <LovePromises />

        {/* Reasons why he can't live without her */}
        <ReasonsList />
      </main>

      {/* Footer with credit: "صمم هذا الموقع بواسطة كل الصفاء بكل حب لسيلفيا" */}
      <Footer />
    </div>
  );
}
