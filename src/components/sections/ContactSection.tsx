import { HOSPITAL_INFO } from '@/constants/hospital';

export default function ContactSection() {
    return (
        <section className="w-full overflow-hidden">
            <div className="px-[32px] py-15 bg-primary-light text-[#37493F] text-center lg:px-10 lg:py-24 lg:text-white">
                <h3 className="text-xl/[30px] font-bold mb-[18px] lg:text-[30px]/[40px] lg:mb-[87px]">
                    보다 원활한 진료를 위해 <br />
                    방문 전 예약을 권해드립니다!
                </h3>

                <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between lg:max-w-[1143px] lg:mx-auto lg:gap-[43px]">
                    {/* [좌측 컨테이너] */}
                    <div className="flex flex-col items-center w-full lg:w-full lg:max-w-[373px] lg:shrink lg:items-start lg:text-left">
                        <h4 className="text-[18px]/[70px] font-bold lg:text-[25px]/[70px]">
                            오시는 길 및 진료시간 안내
                        </h4>

                        {/* 시간표: SEO/AEO가 진료시간을 크롤링할 수 있도록 구조 유지 */}
                        <div className="flex justify-center items-center mb-1 lg:mb-[30px]">
                            <div className="flex flex-col pr-[28px] border-r border-primary-dark lg:border-white text-[18px]/[35px] font-bold lg:text-[25px]/[35px]">
                                <div className="flex justify-between items-center w-[90px] lg:w-[130px]">
                                    <h5>월</h5>
                                    <h5>수</h5>
                                    <h5>목</h5>
                                    <h5>금</h5>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h5>화</h5>
                                    <h5>요</h5>
                                    <h5>일</h5>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h5>토</h5>
                                    <h5>요</h5>
                                    <h5>일</h5>
                                </div>
                            </div>

                            {/* #ISSUE: 단순 div를 시맨틱한 규격인 <time> 태그로 래핑하여 검색 로봇에 진료시간 데이터 제공 */}
                            <time className="flex flex-col pl-[28px] text-[18px]/[35px] font-bold lg:text-[25px]/[35px]">
                                <div>
                                    <h5>09:45~19:00</h5>
                                </div>
                                <div>
                                    <h5>09:45~20:30</h5>
                                </div>
                                <div>
                                    <h5>09:30~14:00</h5>
                                </div>
                            </time>
                        </div>

                        <span className="block text-[13px]/[25px] font-semibold mb-[30px] lg:text-[15px]/[25px] lg:mb-[60px]">
                            매주 일요일/공휴일 휴진입니다.
                        </span>

                        {/* PC 전용 병원 정보 */}
                        {/* #LINK: GEO/AEO가 병원 위치와 연락처를 수집하도록 표준 <address> 태그 적용 (not-italic으로 브라우저 기본 기울임 방어) */}
                        <address className="hidden lg:block font-bold text-left text-[20px]/[32px] not-italic">
                            <h5>병원명: {HOSPITAL_INFO.name}</h5>
                            <h5>주소: {HOSPITAL_INFO.address}</h5>
                            <h5>TEL: {HOSPITAL_INFO.tel}</h5>
                            <h5>*{HOSPITAL_INFO.parking}</h5>
                        </address>
                    </div>

                    {/* [우측 컨테이너]: 지도 영역 */}
                    <div className="mb-[24px] w-full lg:w-full lg:max-w-[727px] lg:shrink lg:mb-0">
                        <div className="block w-full h-[154px] sm:h-[220px] lg:h-full bg-[#d9d9d9] rounded-[10px] relative">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center w-[98px] h-[30px] rounded-[7px] border border-black bg-white absolute bottom-[20px] right-[20px]"
                            >
                                <img src="/images/i_map_google.svg" className="w-[14px] h-auto" alt="구글지도 아이콘" />
                                <span className="text-[10px] font-semibold text-black">구글지도로 보기</span>
                            </a>
                        </div>
                    </div>

                    {/* 모바일 전용 병원 정보 */}
                    {/* #LINK: 모바일에서도 동일하게 GEO 수집을 위해 <address> 태그 마킹 */}
                    <address className="text-[15px]/[24px] font-bold text-left pl-[10px] lg:hidden not-italic">
                        <h5>병원명: {HOSPITAL_INFO.name}</h5>
                        <h5>주소: {HOSPITAL_INFO.address}</h5>
                        <h5>TEL: {HOSPITAL_INFO.tel}</h5>
                        <h5>*{HOSPITAL_INFO.parking}</h5>
                    </address>
                </div>
            </div>
        </section>
    );
}
