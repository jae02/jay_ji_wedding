"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', dragFree: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/10.jpg",
    "/images/gallery/11-1.jpg",
    "/images/gallery/11.jpg",
    "/images/gallery/12-1.jpg",
    "/images/gallery/12-2.jpg",
    "/images/gallery/12.jpg",
    "/images/gallery/13.jpg",
    "/images/gallery/13_frame.jpg",
    "/images/gallery/14.jpg",
    "/images/gallery/15.jpg",
    "/images/gallery/16.jpg",
    "/images/gallery/17.jpg",
    "/images/gallery/18.jpg",
    "/images/gallery/2-1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/20-1.jpg",
    "/images/gallery/20.jpg",
    "/images/gallery/3-1.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5-1.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7-1.jpg",
    "/images/gallery/7-2.jpg",
    "/images/gallery/7-3.jpg",
    "/images/gallery/7-4.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
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
        <FadeIn className="flex justify-between gap-4 w-[90%] mx-auto px-4 mt-12 mb-16">
          <div className="flex flex-col gap-4 w-[48%]">
            <Photo name="6.jpg" aspect="aspect-[2/3]" />
            <Photo name="7.jpg" aspect="aspect-[2/3]" />
          </div>
          <div className="flex flex-col gap-4 w-[48%] mt-16">
            <Photo name="7-2.jpg" aspect="aspect-[2/3]" />
            <Photo name="7-1.jpg" aspect="aspect-[2/3]" />
          </div>
        </FadeIn>

        {/* 5. 16번 사진 크게 배치 + 위에 작게 둥둥 떠다니는 4장 콜라주 */}
        <FadeIn className="relative w-[85%] mx-auto mt-16 mb-20">
          {/* 메인 16번 사진 */}
          <div className="w-full">
            <Photo name="16.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>
          


          {/* 플로팅 사진 2 (우측 중앙) */}
          <div className="absolute top-44 -right-8 w-[21%] z-20 shadow-lg rounded-[1px]">
            <Photo name="11.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>

          {/* 플로팅 사진 3 (좌측 하단) */}
          <div className="absolute bottom-16 -left-4 w-[24%] z-20 shadow-lg rounded-[1px]">
            <Photo name="12.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>

          {/* 플로팅 사진 4 (우측 하단) */}
          <div className="absolute -bottom-2 -right-4 w-[22%] z-20 shadow-lg rounded-[1px]">
            <Photo name="13.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>
          {/* 플로팅 사진 5 (우측 상단) */}
          <div className="absolute top-4 right-16 w-[20%] z-20 shadow-lg rounded-[1px]">
            <Photo name="14.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          </div>
        </FadeIn>

        {/* 6. h8번 사진 단독 크게 배치 */}
        <FadeIn className="w-[85%] mx-auto mb-16">
          <Photo name="h8.jpg" aspect="aspect-[2/3]" objectPosition="center" />
        </FadeIn>

        {/* 7. 우측 정렬 3칸 배치 (h1, h2, h3) */}
        <FadeIn className="ml-auto w-[75%] mb-2 grid grid-cols-3 gap-2 pr-4">
          <Photo name="h1.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          <Photo name="h2.jpg" aspect="aspect-[2/3]" objectPosition="center" />
          <Photo name="h3.jpg" aspect="aspect-[2/3]" objectPosition="center" />
        </FadeIn>

        {/* 8. h4번 사진 단독 크게 배치 */}
        <FadeIn className="ml-auto w-[75%] mb-16 pr-4">
          <Photo name="h4.jpg" aspect="aspect-[2/1]" objectPosition="50% 25%" />
        </FadeIn>

        {/* 9. 18번 사진 마지막으로 크게 배치 */}
        <FadeIn className="w-[85%] mx-auto mb-16">
          <Photo name="18.jpg" aspect="aspect-[2/3]" objectPosition="center" />
        </FadeIn>

        {/* 10. 남은 사진들 폴라로이드 가로 스크롤 (무한 반복) */}
        <FadeIn className="relative w-full mt-8 mb-20 group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y py-4">
              {images
                .map((img) => img.split("/").pop()!)
                .filter(
                  (name) =>
                    ![
                      "1.jpg", "2.jpg", "3.jpg", "3-1.jpg", "4.jpg", "5.jpg", "8.jpg",
                      "6.jpg", "7.jpg", "7-2.jpg", "7-1.jpg", "16.jpg", "11.jpg", "12.jpg",
                      "13.jpg", "14.jpg", "h8.jpg", "h1.jpg", "h2.jpg", "h3.jpg", "h4.jpg",
                      "18.jpg",
                    ].includes(name)
                )
                .map((name, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[35%] sm:w-[25%] md:w-[20%] min-w-0 px-2 pt-6 pb-4"
                  >
                    <div
                      className={`bg-white p-[6px] pb-6 shadow-[0_6px_20px_-5px_rgba(0,0,0,0.15)] border border-black/5 rounded-[2px] relative transition-transform hover:scale-[1.02] ${i % 2 === 0 ? 'rotate-[3deg]' : 'rotate-[-3deg]'}`}
                    >
                      {/* 가랜드 마스킹 테이프 느낌 */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-[#e8e4d8] shadow-sm rotate-[-2deg] z-20 opacity-90 mix-blend-multiply" />
                      <Photo name={name} aspect="aspect-[2/3]" objectPosition="center" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          {/* 반투명 화살표 */}
          <button
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 text-black/60 shadow-md backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100 hover:bg-white/80 z-30"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 text-black/60 shadow-md backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100 hover:bg-white/80 z-30"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </FadeIn>

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
