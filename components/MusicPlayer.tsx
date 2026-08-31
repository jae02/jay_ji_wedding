"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Music4 } from "lucide-react";
import { motion } from "framer-motion";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 오디오 인스턴스 생성
    const audio = new Audio("/bgm.mp3");
    audio.loop = true;
    audioRef.current = audio;

    // 사용자 첫 인터랙션 시 자동 재생 시도
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // 브라우저 정책으로 인해 자동 재생이 막힌 경우 예외 처리
        });
        
        // 한 번 시도 후 이벤트 리스너 제거
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("touchstart", handleFirstInteraction);
        document.removeEventListener("scroll", handleFirstInteraction);
      }
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction, { passive: true });
    document.addEventListener("scroll", handleFirstInteraction, { passive: true });

    return () => {
      audio.pause();
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-11 h-11 bg-white/70 backdrop-blur-md rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-black/5 text-[#6B5A4B] transition-transform hover:scale-105 active:scale-95"
        aria-label={isPlaying ? "음악 일시정지" : "음악 재생"}
      >
        {isPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Music className="w-5 h-5" />
          </motion.div>
        ) : (
          <div className="relative">
            <Music className="w-5 h-5 opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[1px] h-6 bg-[#6B5A4B] -rotate-45" />
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
