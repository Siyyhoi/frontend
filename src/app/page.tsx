"use client"
import { useState, useEffect } from "react"
import Carousel from "./components/carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-gray-200 selection:bg-amber-500/30 relative overflow-hidden">

        <div className="fixed inset-0 z-[-1]">
          <iframe
            src="https://www.youtube.com/embed/5tSyykjdqHc?autoplay=1&mute=1&loop=1&playlist=5tSyykjdqHc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Background Video"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 z-0">
        {/* Floating geometric shapes with enhanced animations */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-500/30 rotate-45 animate-pulse hover:border-amber-400/60 transition-all duration-1000 hover:scale-110"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-amber-500/20 rounded-full animate-bounce hover:bg-amber-400/40 transition-all duration-500" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-amber-400/40 rotate-12 animate-pulse hover:border-amber-300/70 transition-all duration-1000 hover:scale-125" style={{animationDelay: '2s'}}></div>
        
        {/* Additional dynamic elements */}
        <div className="absolute top-60 left-1/3 w-20 h-20 bg-gradient-to-r from-amber-500/20 to-transparent rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-28 h-28 border-2 border-amber-500/25 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        
        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-60"></div>
        
        {/* Enhanced ambient light effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse hover:scale-110 transition-transform duration-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-amber-400/10 to-transparent rounded-full blur-3xl animate-pulse hover:scale-110 transition-transform duration-2000" style={{animationDelay: '3s'}}></div>
        
        {/* New floating particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-float" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-amber-300/80 rounded-full animate-float" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-amber-500/70 rounded-full animate-float" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
      </div>

      {/* Hero Section with Dynamic Text */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-pulse">
            โคเอนิกเซก
          </h1>
          <p className="text-xl md:text-2xl text-amber-300/80 mb-8 animate-fade-in" style={{animationDelay: '1s'}}>
            ขับเคลื่อนขีดจำกัดแห่งความเป็นเลิศทางยานยนต์
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse"></div>
            <div className="w-8 h-1 bg-amber-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Main content with enhanced animations */}
      <div className="relative z-10">
        <div className="fade-up animate-fade-in transform hover:scale-105 transition-transform duration-700">
          < Carousel />
        </div>
        
        {/* Enhanced spacing and visual elements */}
        <div className="mt-20 mb-16 text-center">
          <div className="inline-block p-8 border border-amber-500/30 rounded-lg bg-black/20 backdrop-blur-sm hover:border-amber-400/60 transition-all duration-500 hover:bg-black/40">
            <h2 className="text-3xl font-bold text-amber-400 mb-4">สัมผัสประสบการณ์ความเร็ว</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              ค้นพบสุดยอดแห่งวิศวกรรมยานยนต์ที่การนวัตกรรมพบกับความสมบูรณ์แบบ 
              ทุกโคเอนิกเซกแสดงถึงการแสวงหาความเป็นเลิศทางยานยนต์อย่างไม่หยุดยั้ง
            </p>
          </div>
        </div>

        <div className="mt-10 fade-up fade-up-delay-1 animate-fade-in" style={{animationDelay: '0.5s'}}>
          {/* Additional content can go here */}
        </div>
      </div>

      {/* Floating action button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-2xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-110 hover:shadow-amber-500/50">
          <span className="text-white text-2xl">↑</span>
        </button>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
        }
        .fade-up.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-up-delay-1 {
          animation-delay: 0.5s;
        }
      `}</style>

    </div>
  );
}
