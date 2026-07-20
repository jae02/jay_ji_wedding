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
                5호선, 8호선 천호역 10번출구 바로 앞
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-wedding-text mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-wedding-pink-dark inline-block" />
                버스 안내
              </h4>
              <p className="leading-relaxed break-keep">
                천호역 또는 천호사거리 하차<br />
                <span className="text-[13px] text-wedding-text/60 mt-1 block leading-normal">
                  130, 340, 341, 342, 370, 3214, 3316, 3318, 3321, 3411, 4318, 1-4, 13, 13-2, 16, 23, 30, N30, N31, 30-3, 112-1, 112-5, 1113, 1113-1, 1113-2, 1113-10, 1113-11, 3324, 강동 05, 공항버스 6200
                </span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-wedding-text mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-wedding-pink-dark inline-block" />
                공영주차장 안내
              </h4>
              <div className="space-y-4 leading-relaxed break-keep">
                <p>
                  천호역 지하상가와 연결, 천호역 10번출구 도보이용 가능<br />
                  <span className="font-medium">네비게이션 주소검색:</span> 서울시 강동구 천호대로 1026-1<br />
                  <span className="text-[13px] text-wedding-text/70">(천호역 6번출구 앞 / 천호지하공영주차장(천호입구) 지하 1, 2층)</span>
                </p>
                <div>
                  <p className="font-medium">❶ 도보 이용 시</p>
                  <p className="text-[13px] text-wedding-text/70 mt-1">
                    천호지하공영주차장(천호입구) 주차 후 천호역 지하상가 현대백화점 방향 직진 천호역 10번 출구 앞
                  </p>
                </div>
                <div>
                  <p className="font-medium">❷ 셔틀버스 이용 시</p>
                  <p className="text-[13px] text-wedding-text/70 mt-1">
                    천호지하공영주차장(천호입구) 내부에서 탑승<br />
                    주차 위치 기둥번호 A, B, C, D 20 - 60번 사이 운행<br />
                    (주차하신 차량 앞에서 대기 후 탑승 / 주차위치 메모 / 웨딩진행 시에만 운영)
                  </p>
                </div>
                <span className="text-red-500 font-medium text-[13px] mt-2 inline-block">* 주차가 어려우니 대중교통 이용을 추천드립니다.</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
