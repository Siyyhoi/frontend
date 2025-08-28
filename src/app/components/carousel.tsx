'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // รอให้ Flowbite ทำงานหลัง DOM พร้อม
    if (typeof window !== 'undefined') {
      import('flowbite'); // import อีกครั้งเพื่อความชัวร์ (dynamic)
    }
  }, []);

  const slides = [
    { 
      src: "/img/slider/2021 Koenigsegg Gemera.jpg", 
      alt: "Koenigsegg Gemera",
      title: "GEMERA",
      subtitle: "The Ultimate Family Hypercar",
      specs: "1700+ HP • 3500+ Nm • 0-400 km/h"
    },
    { 
      src: "/img/slider/2021 Koenigsegg Jesko.jpg", 
      alt: "Koenigsegg Jesko",
      title: "JESKO",
      subtitle: "Pure Performance Perfected",
      specs: "1600+ HP • 1500+ Nm • 447 km/h"
    },
    { 
      src: "/img/slider/2010 Koenigsegg Trevita.jpg", 
      alt: "Koenigsegg Trevita",
      title: "TREVITA",
      subtitle: "Diamond-Infused Excellence",
      specs: "1018 HP • 1060 Nm • 390 km/h"
    },
    { 
      src: "/img/slider/2026 Koenigsegg Sadairs Spear.jpg", 
      alt: "Koenigsegg Sadairs Spear",
      title: "SADAIRS SPEAR",
      subtitle: "Future of Hypercar Technology",
      specs: "1800+ HP • 2000+ Nm • 500+ km/h"
    }
  ];

  return (
    <div
      id="default-carousel"
      className="relative w-full bg-black selection:bg-amber-500/30"
      data-carousel="slide"
    >
      {/* Background GIF */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/5 animate-pulse"></div>
      </div>

      {/* Carousel wrapper */}
      <div className="relative h-[900px] overflow-hidden rounded-none">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 duration-1000 ease-in-out transition-all transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100 translate-x-0' 
                : 'opacity-0 scale-105 translate-x-full'
            }`}
            data-carousel-item={index === currentSlide ? 'active' : undefined}
          >
            <div className="relative w-full h-[900px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover scale-[1.02] transition-transform duration-1000"
              />
              {/* Dark aggressive overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              
              {/* Slide content overlay */}
              <div className="absolute bottom-20 left-10 z-20 text-white">
                <h2 className="text-5xl font-bold mb-4 text-amber-400 drop-shadow-2xl animate-fade-in-up">
                  {slide.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-md animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <div className="mt-4 inline-block bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/50 animate-fade-in-up animation-delay-400">
                  <span className="text-sm text-amber-400 font-mono">{slide.specs}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-6 left-1/2 space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              i === currentSlide
                ? 'bg-amber-400 border-amber-400/70 shadow-[0_0_12px_rgba(251,191,36,0.55)] scale-125'
                : 'border-amber-400/70 bg-amber-400/40 hover:bg-amber-400/80 hover:scale-110'
            }`}
            aria-label={`Slide ${i + 1}`}
            data-carousel-slide-to={i}
          />
        ))}
      </div>

      {/* Controls */}
      <button 
        type="button" 
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" 
        data-carousel-prev
        onClick={() => setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 ring-1 ring-white/10 backdrop-blur-sm group-hover:bg-black/70 group-hover:ring-amber-400/70 transition-all duration-300 group-hover:scale-110">
          <svg className="w-4 h-4 text-amber-300" viewBox="0 0 6 10" fill="none">
            <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <button 
        type="button" 
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" 
        data-carousel-next
        onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 ring-1 ring-white/10 backdrop-blur-sm group-hover:bg-black/70 group-hover:ring-amber-400/70 transition-all duration-300 group-hover:scale-110">
          <svg className="w-4 h-4 text-amber-300" viewBox="0 0 6 10" fill="none">
            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  );
}
