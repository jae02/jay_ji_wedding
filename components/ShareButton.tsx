"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Link as LinkIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

declare global {
  interface Window {
    Kakao: any;
  }
}

export function ShareButton() {
  const [isCopied, setIsCopied] = useState(false);

  const handleKakaoShare = () => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("a4f0196a6c25aa2fbda2009e9fc7531f");
      }
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "임재영 & 유지영 결혼합니다",
          description: "2026년 11월 7일 토요일 오후 5시\n천호 라비니움",
          imageUrl: `${window.location.origin}/images/main.jpg`,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "모바일 청첩장 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    } else {
      alert("카카오톡 공유 기능을 불러오지 못했습니다.");
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <section className="w-full py-12 px-6 bg-wedding-bg border-t border-wedding-beige/50">
      <FadeIn>
        <div className="flex flex-col items-center justify-center gap-4 max-w-sm mx-auto">
          <button
            onClick={handleKakaoShare}
            className="w-full py-3.5 px-4 bg-[#FAE100] text-[#391B1B] rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-[#F4D900] transition-colors shadow-sm"
          >
            <MessageCircle className="w-5 h-5" />
            카카오톡으로 공유하기
          </button>
          
          <button
            onClick={handleCopyLink}
            className="w-full py-3.5 px-4 bg-white border border-gray-200 text-wedding-text rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <LinkIcon className="w-5 h-5 text-gray-400" />
            {isCopied ? "링크가 복사되었습니다!" : "청첩장 주소 복사하기"}
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
