// #ISSUE: 전역에서 접근 가능한 전화 연결 플로팅 버튼 구현
// #STYLE: 화면 우측 하단 고정(fixed), 모바일과 PC 해상도에 따른 크기 및 레이아웃 반응형 대응
// #LINK: tel:02-942-0248

import Link from 'next/link';
import Image from 'next/image';

export default function FloatingButton() {
    return (
        <Link
            href="tel:02-942-0248"
            className="fixed z-50 flex flex-col items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-105 bottom-[20px] right-[20px] w-[60px] h-[60px] lg:bottom-[22px] lg:right-[22px] lg:w-[110px] lg:h-[110px]"
            aria-label="전화 상담 연결"
        >
            <div className="relative w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] lg:mb-1">
                <Image src="/images/i_tel.svg" alt="전화 아이콘" fill className="object-contain" />
            </div>

            {/* PC 해상도에서만 노출되는 전화번호 텍스트 */}
            <div className="hidden lg:flex flex-col items-center">
                <span className="text-[15px] font-bold ">02.942.</span>
                <span className="text-[15px] font-bold  mt-[-2px]">0248</span>
            </div>
        </Link>
    );
}
