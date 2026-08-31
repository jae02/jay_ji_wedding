import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP/AVIF 포맷으로 자동 변환 (용량 대폭 감소)
    formats: ["image/avif", "image/webp"],
    // 모바일 청첩장에 맞는 디바이스 사이즈
    deviceSizes: [320, 420, 640, 750, 828],
    // 썸네일 등 작은 이미지 사이즈
    imageSizes: [96, 128, 256, 384],
    // 이미지 로딩 지연 최소화
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30일 캐시
  },
};

export default nextConfig;
