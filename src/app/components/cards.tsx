'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';

export default function Cards() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('flowbite');
    }
  }, []);

  const cardData = [
    {
      id: 1,
      title: "JESKO ABSOLUTE",
      description: "The ultimate expression of automotive engineering. 1600+ horsepower of pure performance.",
      image: "/img/cards/1.jpg",
      specs: "1600+ HP • 1500+ Nm • 0-400 km/h"
    },
    {
      id: 2,
      title: "REGERA",
      description: "Hybrid hypercar that redefines what's possible. Seamless power delivery.",
      image: "/img/cards/2.jpg",
      specs: "1500+ HP • 2000+ Nm • 0-400 km/h"
    },
    {
      id: 3,
      title: "AGERA RS",
      description: "World record holder. The car that proved Koenigsegg's engineering supremacy.",
      image: "/img/cards/3.jpg",
      specs: "1360 HP • 1370 Nm • 447 km/h"
    },
    {
      id: 4,
      title: "ONE:1",
      description: "One megawatt of power. One kilogram of weight. Perfect power-to-weight ratio.",
      image: "/img/cards/4.png",
      specs: "1360 HP • 1370 Nm • 1:1 Ratio"
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
      {cardData.map((card, index) => (
        <div 
          key={card.id}
          className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl overflow-hidden group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          style={{
            animationDelay: `${index * 150}ms`,
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Image container */}
          <div className="relative overflow-hidden">
            <Image
              className="w-full h-48 object-cover transition-all duration-700 ease-out group-hover:scale-110"
              src={card.image}
              alt={card.title}
              width={400}
              height={200}
            />
            {/* Specs overlay */}
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-400/50">
              <span className="text-xs text-amber-400 font-mono">{card.specs}</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 bg-gradient-to-b from-black/60 to-black relative z-10">
            <h2 className="text-xl font-bold mb-2 text-white tracking-wide group-hover:text-amber-400 transition-colors duration-300">
              {card.title}
            </h2>
            <p className="text-gray-400/90 mb-4 text-sm leading-relaxed">
              {card.description}
            </p>
            <button className="px-6 py-3 bg-amber-500/90 text-black font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transform hover:scale-105">
              EXPLORE
            </button>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      ))}
    </div>
  );
}
