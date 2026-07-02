import Image from 'next/image';
import { HOSPITAL_INFO } from '@/constants/hospital';

export default function Footer() {
    return (
        <footer className="w-full bg-[#37493F] pt-16 pb-15 text-center font-sans text-white lg:pt-[94px] lg:pb-[100px]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* 로고 및 병원명 영역 */}
                <div className="mb-3.75 flex items-center justify-center gap-3 lg:mb-6.25">
                    <Image
                        src="/images/logo_w.svg"
                        alt={`${HOSPITAL_INFO.name} 로고`}
                        width={37}
                        height={41}
                        className="h-[31.8px] w-[28.14px] object-contain lg:h-[41px] lg:w-[37px]"
                    />
                    <span className="text-[18px] font-bold sm:text-[22px] lg:text-[25px]">{HOSPITAL_INFO.name}</span>
                </div>

                {/* 병원 상세 정보 영역 */}
                <address className="not-italic text-[10px] font-medium leading-[2.3] text-white lg:text-[13px]">
                    {/* PC 전용: 1줄 가로 배치 */}
                    <div className="hidden lg:block">
                        {HOSPITAL_INFO.name} <span className="mx-1.5">|</span>
                        대표원장 : {HOSPITAL_INFO.ceo} <span className="mx-1.5">|</span>
                        {HOSPITAL_INFO.address} <span className="mx-1.5">|</span>
                        전화 : {HOSPITAL_INFO.tel} <span className="mx-1.5">|</span>
                        사업자등록번호 : {HOSPITAL_INFO.businessNumber} <span className="mx-1.5">|</span>
                        FAX : {HOSPITAL_INFO.fax}
                    </div>

                    {/* #ISSUE: 360px 이하 해상도에서도 텍스트가 깨지지 않고 자연스럽게 줄바꿈되도록 flex-wrap 및 break-keep 처리 */}
                    <div className="flex flex-wrap items-center justify-center gap-x-2 break-keep px-2 lg:hidden">
                        <span>{HOSPITAL_INFO.name}</span>
                        <span className="text-white/40">|</span>
                        <span>대표원장 : {HOSPITAL_INFO.ceo}</span>
                        <span className="text-white/40">|</span>
                        <span>{HOSPITAL_INFO.address}</span>
                        <span className="text-white/40">|</span>
                        <span>전화 : {HOSPITAL_INFO.tel}</span>
                        <span className="text-white/40">|</span>
                        <span>사업자등록번호 : {HOSPITAL_INFO.businessNumber}</span>
                        <span className="text-white/40">|</span>
                        <span>FAX : {HOSPITAL_INFO.fax}</span>
                    </div>
                </address>

                {/* 카피라이트 영역 */}
                <div className="mt-5.75 text-[10px] font-medium lg:mt-[3px]">
                    {/* PC 전용 */}
                    <p className="hidden lg:block">
                        COPYRIGHT © 2024 {HOSPITAL_INFO.name} ALL RIGHT RESERVED. Made By 바이오애드랩.
                    </p>
                    {/* 모바일 전용 */}
                    <div className="flex flex-col gap-1 lg:hidden">
                        <p>COPYRIGHT © 2024 {HOSPITAL_INFO.name}</p>
                        <p>ALL RIGHT RESERVED. Made By 바이오애드랩.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
