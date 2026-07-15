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
  }: {
    index: number;
    aspect?: string;
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
      />
    </div>
  );

  return (
    <>
      <div className="w-full">

        {/* 1 — 풀블리드 */}
        <FadeIn>
          <Photo index={0} aspect="aspect-[5/7]" />
        </FadeIn>

        <div className="h-14" />

        {/* 2, 3 — 왼쪽 크게 + 오른쪽 작게 */}
        <FadeIn className="flex gap-2 px-2 items-start">
          <div className="w-[58%]">
            <Photo index={1} aspect="aspect-[9/14]" />
          </div>
          <div className="w-[42%] mt-12">
            <Photo index={2} aspect="aspect-[5/6]" />
          </div>
        </FadeIn>

        <div className="h-16" />

        {/* 4 — 오른쪽 치우침 */}
        <FadeIn className="pl-[22%] pr-2">
          <Photo index={3} aspect="aspect-[4/5]" />
        </FadeIn>

        <div className="h-12" />

        {/* 5 — 거의 풀블리드 */}
        <FadeIn>
          <Photo index={4} aspect="aspect-[7/10]" />
        </FadeIn>

        <div className="h-14" />

        {/* 6, 7 — 오른쪽 길쭉 + 왼쪽 납작 */}
        <FadeIn className="flex gap-2 px-3 items-end">
          <div className="w-[44%] mb-8">
            <Photo index={5} aspect="aspect-[4/5]" />
          </div>
          <div className="w-[56%]">
            <Photo index={6} aspect="aspect-[3/5]" />
          </div>
        </FadeIn>

        <div className="h-20" />

        {/* 8 — 풀블리드 */}
        <FadeIn>
          <Photo index={7} aspect="aspect-[5/7]" />
        </FadeIn>

        <div className="h-10" />

        {/* 9 — 왼쪽 치우침 */}
        <FadeIn className="pr-[25%] pl-2">
          <Photo index={8} aspect="aspect-[7/10]" />
        </FadeIn>

        <div className="h-14" />

        {/* 10, 11 — 두 장, 높이 엇갈림 */}
        <FadeIn className="flex gap-2 px-2 items-start">
          <div className="w-[48%] mt-6">
            <Photo index={9} aspect="aspect-[5/8]" />
          </div>
          <div className="w-[52%]">
            <Photo index={10} aspect="aspect-[9/14]" />
          </div>
        </FadeIn>

        <div className="h-16" />

        {/* 12 — 가운데, 약간 좁게 */}
        <FadeIn className="px-[12%]">
          <Photo index={11} aspect="aspect-[3/5]" />
        </FadeIn>

        <div className="h-14" />

        {/* 13 — 액자 사진, 풀블리드 */}
        <FadeIn>
          <Photo index={12} aspect="aspect-[4/5]" />
        </FadeIn>

        <div className="h-16" />

        {/* 14 — 오른쪽 치우침 */}
        <FadeIn className="pl-[18%] pr-2">
          <Photo index={13} aspect="aspect-[5/7]" />
        </FadeIn>

        <div className="h-12" />

        {/* 15, 16 — 왼쪽 작게 + 오른쪽 크게 */}
        <FadeIn className="flex gap-2 px-2 items-start">
          <div className="w-[42%] mt-10">
            <Photo index={14} aspect="aspect-[5/6]" />
          </div>
          <div className="w-[58%]">
            <Photo index={15} aspect="aspect-[5/8]" />
          </div>
        </FadeIn>

        <div className="h-16" />

        {/* 17 — 거의 풀블리드 */}
        <FadeIn className="px-2">
          <Photo index={16} aspect="aspect-[7/10]" />
        </FadeIn>

        <div className="h-14" />

        {/* 18 — 왼쪽 치우침 */}
        <FadeIn className="pr-[20%] pl-2">
          <Photo index={17} aspect="aspect-[4/5]" />
        </FadeIn>

        <div className="h-12" />

        {/* 19, 20 — 마무리 */}
        <FadeIn className="flex gap-2 px-2 items-end">
          <div className="w-[54%]">
            <Photo index={18} aspect="aspect-[9/14]" />
          </div>
          <div className="w-[46%] mb-6">
            <Photo index={19} aspect="aspect-[5/7]" />
          </div>
        </FadeIn>

        <div className="h-8" />
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
