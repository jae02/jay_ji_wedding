import { FadeIn } from "@/components/ui/FadeIn";
import { Heart } from "lucide-react";

export function Greeting() {
  return (
    <section className="py-24 px-6 bg-wedding-bg text-center">
      <FadeIn>
        <div className="flex justify-center mb-6">
          <Heart className="w-6 h-6 text-wedding-pink-dark stroke-1" />
        </div>
        <h2 className="text-xl md:text-2xl font-serif text-wedding-pink-dark mb-10 tracking-widest">
          INVITATION
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="font-serif leading-loose text-wedding-text/80 mb-16">
          {/* TODO: 인사말 내용 수정 */}
          <p>서로가 마주보며 다져온 사랑을</p>
          <p>이제 함께 한 곳을 바라보며</p>
          <p>걸어갈 수 있는 큰 사랑으로 키우고자 합니다.</p>
          <br />
          <p>저희 두 사람이 사랑의 이름으로</p>
          <p>지켜나갈 수 있도록</p>
          <p>앞날을 축복해 주시면 감사하겠습니다.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="flex flex-col items-center gap-6 font-serif text-wedding-text">
          {/* TODO: 혼주 및 신랑/신부 이름 수정 */}
          <div className="flex items-center gap-3 text-[17px] md:text-lg whitespace-nowrap">
            <span className="w-32 text-right">임용석 · 김점하</span>
            <span className="text-sm text-wedding-text/60 w-14 text-center">의 아들</span>
            <span className="w-12 text-left font-medium">재영</span>
          </div>
          
          <div className="flex items-center gap-3 text-[17px] md:text-lg whitespace-nowrap">
            <span className="w-32 text-right">유성룡 · 모정희</span>
            <span className="text-sm text-wedding-text/60 w-14 text-center">의 &nbsp; 딸</span>
            <span className="w-12 text-left font-medium">지영</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
