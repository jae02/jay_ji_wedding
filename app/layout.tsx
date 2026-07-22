import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "임재영 & 유지영의 모바일 청첩장",
  description: "2026년 11월 7일, 두 사람이 하나되는 날",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <Script 
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" 
          strategy="lazyOnload" 
        />
      </head>
      <body
        className="antialiased bg-wedding-bg mx-auto max-w-md shadow-2xl overflow-x-hidden min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
