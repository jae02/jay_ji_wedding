import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export function MainCover() {
  return (
    <section className="relative w-full h-screen min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-wedding-bg">
      {/* 
        TODO: 메인 웨딩 사진 교체 
        public/images 폴더에 main.jpg (또는 다른 이름) 이미지를 넣고 
        아래 src 경로를 변경해주세요.
      */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/main.jpg"
          alt="Wedding Main"
          fill
          className="object-contain opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wedding-bg/20 to-wedding-bg/90" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center mt-32 px-6">
        <FadeIn delay={0.2} direction="up">
          <p className="text-sm md:text-base tracking-widest text-wedding-text/80 mb-6 font-serif">
            WEDDING INVITATION
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <h1 className="text-4xl md:text-5xl font-serif text-wedding-text mb-4">
            {/* TODO: 신랑 이름 수정 */}
            임재영
            <span className="mx-4 text-wedding-pink-dark font-light">&</span>
            {/* TODO: 신부 이름 수정 */}
            유지영
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <div className="mt-8 text-wedding-text/80 font-serif leading-relaxed">
            {/* TODO: 예식 일시 수정 */}
            <p>2026년 11월 7일 토요일 오후 5시</p>
            {/* TODO: 예식 장소 수정 */}
            <p className="mt-1">천호 라비니움</p>
          </div>
        </FadeIn>
      </div>

      <FadeIn 
        delay={1} 
        direction="up" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center text-wedding-text/50">
          <span className="text-xs tracking-widest mb-2 uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-wedding-text/30" />
        </div>
      </FadeIn>
    </section>
  );
}
