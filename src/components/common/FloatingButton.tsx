// #ISSUE: 페이지 진입 시 플로팅 버튼이 밋밋하게 노출됨
// #STYLE: opacity-0 시작 및 animate-float-up 클래스 적용
import Link from 'next/link';
import Image from 'next/image';

export default function FloatingButton() {
    return (
        <Link
            href="tel:02-942-0248"
            className="fixed z-50 flex flex-col items-center justify-center rounded-full bg-primary text-white shadow-md transition-transform duration-300 hover:scale-105 bottom-[20px] right-[20px] w-[60px] h-[60px] lg:bottom-[22px] lg:right-[22px] lg:w-[110px] lg:h-[110px] animate-float-up opacity-0"
            aria-label="전화 상담 연결"
        >
            <div className="relative w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] lg:mb-1">
                <Image src="/images/i_tel.svg" alt="전화 아이콘" fill className="object-contain" />
            </div>

            <div className="hidden lg:flex flex-col items-center">
                <span className="text-[15px] font-bold ">02.942.</span>
                <span className="text-[15px] font-bold  mt-[-2px]">0248</span>
            </div>
        </Link>
    );
}
