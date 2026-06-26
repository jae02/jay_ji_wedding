import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function Calendar() {
  // TODO: 예식 날짜로 수정해주세요 (YYYY-MM-DD)
  const weddingDateStr = "2026-11-07";
  const weddingDate = new Date(weddingDateStr);
  const today = new Date();
  
  // D-Day 계산
  const diffTime = weddingDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const dDayText = diffDays > 0 
    ? `D-${diffDays}` 
    : diffDays === 0 
      ? "D-Day" 
      : `D+${Math.abs(diffDays)}`;

  // 간단한 달력 생성 로직 (2026년 11월 기준)
  // 11월 1일은 일요일, 총 30일
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const emptyDays = Array(0).fill(null); // 일요일 시작이므로 0칸
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const weddingDay = 7;

  return (
    <section className="py-24 px-6 bg-wedding-bg">
      <div className="max-w-md mx-auto text-center">
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-serif text-wedding-pink-dark tracking-widest mb-2">
              NOVEMBER
            </h2>
            <p className="text-wedding-text/60 text-sm">2026년 11월 7일 토요일</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-wedding-beige">
            <div className="grid grid-cols-7 gap-y-4 text-sm font-serif">
              {days.map((day, idx) => (
                <div key={day} className={cn(
                  "font-medium",
                  idx === 0 ? "text-red-500" : idx === 6 ? "text-blue-500" : "text-wedding-text/80"
                )}>
                  {day}
                </div>
              ))}
              
              {emptyDays.map((_, idx) => (
                <div key={`empty-${idx}`} />
              ))}
              
              {dates.map((date) => {
                const isSunday = (date - 1) % 7 === 0;
                const isSaturday = (date - 1) % 7 === 6;
                const isWeddingDay = date === weddingDay;
                
                return (
                  <div 
                    key={date} 
                    className={cn(
                      "flex items-center justify-center w-8 h-8 mx-auto rounded-full",
                      isWeddingDay 
                        ? "bg-wedding-pink-dark text-white font-semibold" 
                        : isSunday 
                          ? "text-red-500" 
                          : isSaturday 
                            ? "text-blue-500" 
                            : "text-wedding-text"
                    )}
                  >
                    {date}
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-serif text-wedding-text/80 leading-relaxed">
            재영과 지영의 결혼식이 <br/>
            <span className="text-wedding-pink-dark font-medium">{dDayText}</span> 남았습니다.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
