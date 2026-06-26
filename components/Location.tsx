"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Navigation } from "lucide-react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export function Location() {
  const [loading, error] = useKakaoLoader({
    appkey: "a4f0196a6c25aa2fbda2009e9fc7531f",
  });

  const locationInfo = {
    name: "라비니움 (LABINIUM)",
    address: "서울 송파구 천호대로 996 (청람빌딩)",
    tel: "02-472-7004",
  };

  const handleKakaoMap = () => {
    window.open(`https://map.kakao.com/link/search/라비니움`);
  };

  const handleNaverMap = () => {
    window.open(`https://map.naver.com/v5/search/라비니움`);
  };

  return (
    <section className="py-24 px-6 bg-wedding-bg">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-serif text-wedding-pink-dark tracking-widest mb-2">
              LOCATION
            </h2>
            <p className="text-wedding-text/60 text-sm">오시는 길</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center mb-8">
            <h3 className="font-serif text-lg mb-2">{locationInfo.name}</h3>
            <p className="text-wedding-text/80 text-sm">{locationInfo.address}</p>
            <p className="text-wedding-text/60 text-sm mt-1">Tel. {locationInfo.tel}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="w-full relative overflow-hidden mb-6 flex items-center justify-center rounded-lg shadow-sm border border-wedding-beige aspect-square md:h-96">
            {loading ? (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center absolute inset-0">
                <span className="text-gray-400 text-sm">지도를 불러오는 중...</span>
              </div>
            ) : error ? (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center absolute inset-0">
                <span className="text-red-400 text-sm">지도 로드 실패</span>
              </div>
            ) : (
              <Map
                center={{ lat: 37.53856, lng: 127.12328 }}
                style={{ width: "100%", height: "100%" }}
                className="absolute inset-0"
                level={4}
              >
                <MapMarker position={{ lat: 37.53856, lng: 127.12328 }}>
                  <div className="text-black text-xs p-1 font-medium text-center w-full min-w-[90px]">
                    천호 라비니움
                  </div>
                </MapMarker>
              </Map>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="flex gap-2 mb-12">
          <button 
            onClick={handleKakaoMap}
            className="flex-1 py-3 bg-[#FAE100] text-[#391B1B] rounded-md font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#F4D900] transition-colors"
          >
            카카오맵
          </button>
          <button 
            onClick={handleNaverMap}
            className="flex-1 py-3 bg-[#03C75A] text-white rounded-md font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#02B351] transition-colors"
          >
            네이버지도
          </button>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="space-y-6 text-sm text-wedding-text/80">
            <div>
              <h4 className="font-semibold text-wedding-text mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-wedding-pink-dark inline-block" />
                지하철 안내
              </h4>
              <p className="leading-relaxed">
                5호선, 8호선 천호역 10번 출구 (도보 1분)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-wedding-text mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-wedding-pink-dark inline-block" />
                버스 안내
              </h4>
              <p className="leading-relaxed">
                '천호역' 또는 '천호사거리' 정류장 하차
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-wedding-text mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-wedding-pink-dark inline-block" />
                주차 안내
              </h4>
              <p className="leading-relaxed">
                천호지하공영주차장 (강동구 천호대로 1026-1)<br />
                하객 1시간 30분 무료 주차<br />
                (주차장에서 웨딩홀까지 셔틀버스 상시 운행)
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
