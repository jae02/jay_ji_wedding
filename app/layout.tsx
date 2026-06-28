import type { Metadata } from "next";
import { Inter, Noto_Serif_KR } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

const notoSerifKr = Noto_Serif_KR({ 
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto-serif-kr",
});

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
          integrity="sha384-TiCmbV0X01X2wRtsA/A1d1S1m/T//NhyOqYI2A2BfT3s420M25d6b8W3E7Pht+gO" 
          crossOrigin="anonymous" 
          strategy="beforeInteractive" 
        />
      </head>
      <body
        className={`${inter.variable} ${notoSerifKr.variable} antialiased bg-wedding-bg mx-auto max-w-md shadow-2xl overflow-x-hidden min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
