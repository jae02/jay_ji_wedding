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
      className={`relative w-full ${aspect} overflow-hidden rounded-[4px] cursor-pointer group`}
    >
      <Image
        src={images[index]}
        alt={`Gallery ${index + 1}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 90vw, 450px"
      />
    </div>
  );

  return (
    <>
      <section className="py-20 bg-wedding-beige">
        <FadeIn>
          <div className="text-center mb-14 px-6">
            <h2 className="text-xl md:text-2xl font-serif text-wedding-pink-dark tracking-widest mb-2">
              GALLERY
            </h2>
            <p className="text-wedding-text/60 text-sm">
              우리의 가장 아름다운 순간
            </p>
          </div>
        </FadeIn>

        <div className="max-w-lg mx-auto space-y-10 px-5">
          {/* ── Block 1 : Hero ── */}
          <FadeIn>
            <Photo index={0} aspect="aspect-[3/4]" />
          </FadeIn>

          {/* ── Block 2 : 2열 — 왼쪽 길게, 오른쪽 짧게 + 아래로 내림 ── */}
          <FadeIn className="flex gap-3 items-start">
            <div className="flex-1">
              <Photo index={1} aspect="aspect-[2/3]" />
            </div>
            <div className="flex-1 mt-10">
              <Photo index={2} aspect="aspect-[4/5]" />
            </div>
          </FadeIn>

          {/* ── Block 3 : 단독 — 오른쪽 치우침 ── */}
          <FadeIn className="pl-[20%]">
            <Photo index={3} aspect="aspect-[3/4]" />
          </FadeIn>

          {/* ── Block 4 : 2열 — 오른쪽 길게 ── */}
          <FadeIn className="flex gap-3 items-start">
            <div className="flex-1 mt-8">
              <Photo index={4} aspect="aspect-[4/5]" />
            </div>
            <div className="flex-1">
              <Photo index={5} aspect="aspect-[2/3]" />
            </div>
          </FadeIn>

          {/* ── Block 5 : Hero ── */}
          <FadeIn>
            <Photo index={6} aspect="aspect-[3/4]" />
          </FadeIn>

          {/* ── Block 6 : 2열 — 아래 정렬 엇갈림 ── */}
          <FadeIn className="flex gap-3 items-end">
            <div className="flex-1">
              <Photo index={7} aspect="aspect-[3/4]" />
            </div>
            <div className="flex-1 mb-6">
              <Photo index={8} aspect="aspect-[3/4]" />
            </div>
          </FadeIn>

          {/* ── Block 7 : 단독 — 왼쪽 치우침, 좁게 ── */}
          <FadeIn className="pr-[25%]">
            <Photo index={9} aspect="aspect-[2/3]" />
          </FadeIn>

          {/* ── Block 8 : 2열 — 왼쪽 길게 ── */}
          <FadeIn className="flex gap-3 items-start">
            <div className="flex-1">
              <Photo index={10} aspect="aspect-[2/3]" />
            </div>
            <div className="flex-1 mt-12">
              <Photo index={11} aspect="aspect-[4/5]" />
            </div>
          </FadeIn>

          {/* ── Block 9 : Hero — 액자 사진 ── */}
          <FadeIn>
            <Photo index={12} aspect="aspect-[3/4]" />
          </FadeIn>

          {/* ── Block 10 : 2열 — 오른쪽 길게 ── */}
          <FadeIn className="flex gap-3 items-start">
            <div className="flex-1 mt-6">
              <Photo index={13} aspect="aspect-[4/5]" />
            </div>
            <div className="flex-1">
              <Photo index={14} aspect="aspect-[2/3]" />
            </div>
          </FadeIn>

          {/* ── Block 11 : 단독 — 오른쪽 치우침 ── */}
          <FadeIn className="pl-[15%]">
            <Photo index={15} aspect="aspect-[3/4]" />
          </FadeIn>

          {/* ── Block 12 : 2열 — 위 정렬 엇갈림 ── */}
          <FadeIn className="flex gap-3 items-start">
            <div className="flex-1">
              <Photo index={16} aspect="aspect-[3/4]" />
            </div>
            <div className="flex-1 mt-8">
              <Photo index={17} aspect="aspect-[3/4]" />
            </div>
          </FadeIn>

          {/* ── Block 13 : 2열 마무리 — 아래 정렬 ── */}
          <FadeIn className="flex gap-3 items-end">
            <div className="flex-1 mb-4">
              <Photo index={18} aspect="aspect-[4/5]" />
            </div>
            <div className="flex-1">
              <Photo index={19} aspect="aspect-[2/3]" />
            </div>
          </FadeIn>
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
