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

  const Photo = ({
    index,
    aspect = "aspect-[3/4]",
    objectPosition = "center",
  }: {
    index: number;
    aspect?: string;
    objectPosition?: string;
  }) => (
    <div
      onClick={() => setSelectedIndex(index)}
      className={`relative w-full ${aspect} overflow-hidden rounded-[3px] cursor-pointer group`}
    >
      <Image
        src={images[index]}
        alt={`Gallery ${index + 1}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 500px"
        style={{ objectPosition }}
      />
    </div>
  );

  return (
    <>
      <div className="w-full bg-[#F3EFE7] py-10">
        
        {/* 0. 가장 상단에 1, 2번 사진 (클래식 폴라로이드 스타일 - 정갈하고 우아하게) */}
        <FadeIn className="flex justify-center gap-5 w-full px-5 mb-16">
          <div className="w-1/2 bg-white p-2 pb-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-black/5 rounded-[1px] transition-transform hover:scale-[1.02] cursor-pointer">
            <Photo index={0} aspect="aspect-[2/3]" />
          </div>
          <div className="w-1/2 bg-white p-2 pb-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-black/5 rounded-[1px] transition-transform hover:scale-[1.02] cursor-pointer mt-8">
            <Photo index={1} aspect="aspect-[2/3]" />
          </div>
        </FadeIn>

        {/* 1. 왼쪽 정렬, 가로형태(Landscape) 사진 3개 (위아래 여백, 사이 간격 추가) */}
        <FadeIn className="flex flex-col gap-2 w-[65%] my-6">
          <Photo index={2} aspect="aspect-[4/3]" />
          {/* 3, 4번 사이 추가 (임시로 3번 채움) */}
          <Photo index={2} aspect="aspect-[4/3]" />
          <Photo index={3} aspect="aspect-[4/3]" />
        </FadeIn>

        {/* 2. 오른쪽 정렬, 4분할 배치 (5번 사진 4개) */}
        <FadeIn className="ml-auto w-[70%] mt-16 mb-16 grid grid-cols-2 gap-2 pr-2">
          <Photo index={4} aspect="aspect-[4/5]" />
          <Photo index={4} aspect="aspect-[4/5]" />
          <Photo index={4} aspect="aspect-[4/5]" />
          <Photo index={4} aspect="aspect-[4/5]" />
        </FadeIn>

        {/* 3. 단독 배치 (8번 사진 - 풀블리드, 위아래 비대칭 크롭) */}
        <FadeIn className="w-full mb-16">
          <Photo index={7} aspect="aspect-[16/9]" objectPosition="50% 25%" />
        </FadeIn>

        {/* 4. 지그재그 4장 배치 (여백을 넉넉하게 주어 눈이 편안하도록) */}
        <FadeIn className="w-full px-6 mt-20 mb-20 flex flex-col gap-6">
          {/* 1번째 줄: 가로(64%) + 세로(36%) */}
          <div className="flex gap-4 w-full">
            <div className="w-[64%]">
              <Photo index={5} aspect="aspect-[4/3]" />
            </div>
            <div className="w-[36%]">
              <Photo index={6} aspect="aspect-[3/4]" />
            </div>
          </div>
          {/* 2번째 줄: 세로(36%) + 가로(64%) */}
          <div className="flex gap-4 w-full">
            <div className="w-[36%]">
              <Photo index={6} aspect="aspect-[3/4]" />
            </div>
            <div className="w-[64%]">
              <Photo index={5} aspect="aspect-[4/3]" />
            </div>
          </div>
        </FadeIn>

        {/* 하단 썸네일 뷰 (전체 사진 작은 사이즈) */}
        <div className="mt-16 px-1">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-1">
            {images.map((_, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <Photo index={i} aspect="aspect-square" />
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
