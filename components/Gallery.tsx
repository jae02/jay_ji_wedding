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
    "/images/gallery/10.jpg",
    "/images/gallery/11-1.jpg",
    "/images/gallery/11.jpg",
    "/images/gallery/12-1.jpg",
    "/images/gallery/12-2.jpg",
    "/images/gallery/12.jpg",
    "/images/gallery/13.jpg",
    "/images/gallery/14.jpg",
    "/images/gallery/15.jpg",
    "/images/gallery/16.jpg",
    "/images/gallery/17.jpg",
    "/images/gallery/18.jpg",
    "/images/gallery/2-1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/20-1.jpg",
    "/images/gallery/20.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/3-1.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5-1.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6-1.jpg",
    "/images/gallery/6-2.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7-1.jpg",
    "/images/gallery/7-2.jpg",
    "/images/gallery/7-3.jpg",
    "/images/gallery/7-4.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
    "/images/gallery/9-1.jpg",
    "/images/gallery/9-2.jpg",
    "/images/gallery/9.jpg",
    "/images/gallery/f1.jpg",
    "/images/gallery/h1.jpg",
    "/images/gallery/h10.jpg",
    "/images/gallery/h2.jpg",
    "/images/gallery/h3.jpg",
    "/images/gallery/h4.jpg",
    "/images/gallery/h8.jpg",
    "/images/gallery/i1.jpg",
    "/images/gallery/i2.jpg",
    "/images/gallery/i3.jpg",
    "/images/gallery/i4.jpg",
    "/images/gallery/KakaoTalk_20260729_211917422.jpg"
  ];

  const Photo = ({
    name,
    aspect = "aspect-[3/4]",
    objectPosition = "center",
  }: {
    name: string;
    aspect?: string;
    objectPosition?: string;
  }) => {
    // Find index from name dynamically
    const index = images.findIndex(img => img.endsWith("/" + name));
    if (index === -1) return null; // Safe fallback if image is missing

    return (
    <div
      onClick={() => setSelectedIndex(index)}
      className={`relative w-full ${aspect} overflow-hidden rounded-[3px] cursor-pointer group`}
    >
      <Image
        src={images[index]}
        alt={`Gallery ${index + 1}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03] contrast-[0.97] saturate-[0.95] sepia-[0.02]"
        sizes="(max-width: 768px) 100vw, 500px"
        style={{ objectPosition }}
      />
      {/* 필름 카메라 특유의 뿌옇고 따뜻한 질감을 위한 오버레이 (절반으로 더 약하게 조절) */}
      <div className="absolute inset-0 bg-[#E5E3DB]/5 mix-blend-screen pointer-events-none z-10" />
    </div>
  );
  };

  return (
    <>
      <div className="w-full bg-wedding-bg pt-10">
        
        {/* 0. 가장 상단에 f1, 2번 사진 */}
        <FadeIn className="flex justify-center gap-5 w-full px-5 mb-16">
          <div className="w-1/2 bg-white p-2 pb-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-black/5 rounded-[1px] transition-transform hover:scale-[1.02] cursor-pointer">
            <Photo name="1.jpg" aspect="aspect-[2/3]" />
          </div>
          <div className="w-1/2 bg-white p-2 pb-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-black/5 rounded-[1px] transition-transform hover:scale-[1.02] cursor-pointer mt-8">
            <Photo name="2.jpg" aspect="aspect-[2/3]" />
          </div>
        </FadeIn>

        {/* 1. 왼쪽 정렬, 가로형태(Landscape) 사진 3개 (위아래 여백, 사이 간격 추가) */}
        <FadeIn className="flex flex-col gap-2 w-[65%] my-6">
          <Photo name="3.jpg" aspect="aspect-[4/3]" />
          <Photo name="3-1.jpg" aspect="aspect-[4/3]" />
          <Photo name="4.jpg" aspect="aspect-[4/3]" />
        </FadeIn>

        {/* 2. 오른쪽 정렬, 4분할 배치 (5번 사진 4개) */}
        <FadeIn className="ml-auto w-[70%] mt-16 mb-16 grid grid-cols-2 gap-2 pr-2">
          <Photo name="5.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          <Photo name="5.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          <Photo name="5.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          <Photo name="5.jpg" aspect="aspect-[2/3]" objectPosition="center" />
        </FadeIn>

        {/* 3. 단독 배치 (8번 사진 - 풀블리드, 위아래 비대칭 크롭) */}
        <FadeIn className="w-full">
          <Photo name="8.jpg" aspect="aspect-[16/9]" objectPosition="50% 25%" />
        </FadeIn>
      </div>

      {/* 하단 갤러리 섹션 (회색 섞인 아이보리 배경으로 전환) */}
      <div className="w-full bg-wedding-beige pt-20 pb-10">

        {/* 4. 세로폭포 지그재그 (세로형 4장 배치 - 6, 7-2, 7, 7-1) */}
        <FadeIn className="flex justify-between gap-4 w-[90%] mx-auto px-4 mt-20 mb-32">
          <div className="flex flex-col gap-4 w-[48%]">
            <Photo name="6.jpg" aspect="aspect-[2/3]" />
            <Photo name="7.jpg" aspect="aspect-[2/3]" />
          </div>
          <div className="flex flex-col gap-4 w-[48%] mt-16">
            <Photo name="7-2.jpg" aspect="aspect-[2/3]" />
            <Photo name="7-1.jpg" aspect="aspect-[2/3]" />
          </div>
        </FadeIn>

        {/* 5. 13번 사진 크게 배치 + 위에 작게 둥둥 떠다니는 5장 콜라주 */}
        <FadeIn className="relative w-[85%] mx-auto mt-24 mb-32">
          {/* 메인 13번 사진 */}
          <div className="w-full">
            <Photo name="13.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>
          


          {/* 플로팅 사진 2 (우측 상단) */}
          <div className="absolute top-12 -right-5 w-[20%] z-20 shadow-lg rounded-[1px]">
            <Photo name="11.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>

          {/* 플로팅 사진 3 (좌측 하단) */}
          <div className="absolute bottom-20 -left-4 w-[22%] z-20 shadow-lg rounded-[1px]">
            <Photo name="12.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>

          {/* 플로팅 사진 4 (우측 하단) */}
          <div className="absolute bottom-6 -right-6 w-[20%] z-20 shadow-lg rounded-[1px]">
            <Photo name="16.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>
          
          {/* 플로팅 사진 5 (중앙 우측) */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-16 w-[18%] z-20 shadow-lg rounded-[1px]">
            <Photo name="15.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>
        </FadeIn>

        {/* 하단 썸네일 뷰 (전체 사진 작은 사이즈) */}
        <div className="mt-16 px-1">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-1">
            {images.map((img, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <Photo name={img.split('/').pop()!} aspect="aspect-square" />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

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
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              aria-label="닫기"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev! - 1
                );
              }}
              aria-label="이전 사진"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev! + 1
                );
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
