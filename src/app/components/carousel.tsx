'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';

export default function Carousel() {
  useEffect(() => {
    // รอให้ Flowbite ทำงานหลัง DOM พร้อม
    if (typeof window !== 'undefined') {
      import('flowbite'); // import อีกครั้งเพื่อความชัวร์ (dynamic)
    }
  }, []);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-[900px] overflow-hidden rounded-lg">
        {/* Slide 1 */}
        <div className="duration-700 ease-in-out" data-carousel-item>
          <div className="relative w-full h-[900px]">
            <Image
              src="/img/slider/1.png"
              alt="Slide 1"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="relative w-full h-[900px]">
            <Image
              src="/img/slider/2.png"
              alt="Slide 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="relative w-full h-[900px]">
            <Image
              src="/img/slider/3.png"
              alt="Slide 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Slide 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="relative w-full h-[900px]">
            <Image
              src="/img/slider/4.png"
              alt="Slide 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            type="button"
            className="w-3 h-3 rounded-full bg-white"
            aria-label={`Slide ${i + 1}`}
            data-carousel-slide-to={i}
          />
        ))}
      </div>

      {/* Controls */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  );
}
