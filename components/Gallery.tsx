"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
    "/images/gallery/9.jpg",
    "/images/gallery/10.jpg",
    "/images/gallery/11.jpg",
    "/images/gallery/12.jpg",
    "/images/gallery/13_frame.jpg",
    "/images/gallery/14.jpg",
    "/images/gallery/15.jpg",
    "/images/gallery/16.jpg",
    "/images/gallery/17.jpg",
    "/images/gallery/18.jpg",
    "/images/gallery/19.jpg",
    "/images/gallery/20.jpg",
  ];

  return (
    <>
      <section className="py-24 bg-wedding-beige overflow-hidden">
        <div className="w-full">
          <FadeIn>
            <div className="text-center mb-10 px-6">
              <h2 className="text-xl md:text-2xl font-serif text-wedding-pink-dark tracking-widest mb-2">
                GALLERY
              </h2>
              <p className="text-wedding-text/60 text-sm">우리의 가장 아름다운 순간</p>
            </div>
          </FadeIn>

          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-8 pb-16 pt-8 -mx-4 md:mx-auto md:max-w-5xl">
            {images.map((src, index) => {
              const rotation = index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]';
              return (
                <FadeIn 
                  key={src} 
                  delay={0.1} 
                  className={`relative shrink-0 snap-center w-[75vw] sm:w-[320px] aspect-[4/5] bg-white p-3 pb-12 md:p-4 md:pb-14 rounded-sm shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-300 hover:rotate-0 hover:z-10 hover:scale-[1.02] ${rotation}`}
                >
                  <div onClick={() => setSelectedIndex(index)} className="relative w-full h-full overflow-hidden border border-gray-100/50">
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 75vw, 320px"
                    />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox / Fullscreen Image Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 touch-none"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-50 transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              aria-label="닫기"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-50 transition-colors"
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedIndex(prev => prev === 0 ? images.length - 1 : prev! - 1); 
              }}
              aria-label="이전 사진"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <button 
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-50 transition-colors"
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedIndex(prev => prev === images.length - 1 ? 0 : prev! + 1); 
              }}
              aria-label="다음 사진"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div 
              className="relative w-full max-w-5xl h-[85vh] mx-4 md:mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Gallery full view ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest font-sans">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
