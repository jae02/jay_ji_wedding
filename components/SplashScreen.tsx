"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 스크롤 방지
    document.body.style.overflow = "hidden";
    
    // 2초(2000ms) 뒤 로딩 화면을 숨김
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-wedding-bg touch-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-6 text-[#6B5A4B]"
          >
            <p className="font-serif text-2xl tracking-[0.3em]">JAE YOUNG</p>
            <div className="w-[1px] h-10 bg-[#6B5A4B]/30" />
            <p className="font-serif text-2xl tracking-[0.3em]">JI YOUNG</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
