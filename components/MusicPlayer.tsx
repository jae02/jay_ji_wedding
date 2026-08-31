"use client";

import { useState, useRef, useCallback } from "react";
import { Music } from "lucide-react";
import { motion } from "framer-motion";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("오디오 재생 실패:", err);
    }
  }, [isPlaying]);

  return (
    <>
      {/* 오디오 엘리먼트를 DOM에 직접 배치 (가장 안정적) */}
      <audio ref={audioRef} src="/bgm.mp3" loop preload="auto" />

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
    </>
  );
}
