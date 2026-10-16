import React, { useMemo } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  opacity: number;
  blur: number;
}

export const FloatingPetals: React.FC = () => {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.floor(Math.random() * 14) + 12,
      duration: Math.floor(Math.random() * 8) + 9,
      delay: Math.random() * 7,
      rotate: Math.floor(Math.random() * 360),
      opacity: Math.random() * 0.4 + 0.35,
      blur: Math.random() > 0.6 ? 1 : 0,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-full"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            background: 'radial-gradient(circle at 30% 30%, #fb7185, #e11d48 75%, #9f1239)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            opacity: petal.opacity,
            filter: petal.blur ? 'blur(1px)' : 'none',
            animation: `driftPetal ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            boxShadow: '0 4px 10px rgba(225, 29, 72, 0.25)',
          }}
        />
      ))}
    </div>
  );
};
