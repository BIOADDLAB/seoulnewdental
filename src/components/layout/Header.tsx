'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HOSPITAL_INFO } from '@/constants/hospital';
import { NAV_LINKS } from '@/constants/nav';

// #TODO: 헤더아래 그림자 넣기
export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isMenuOpen) {
            timer = setTimeout(() => setAnimateIn(true), 10);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            if (timer) clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const handleClose = () => {
        setAnimateIn(false);
        setTimeout(() => setIsMenuOpen(false), 300);
    };

    const handleOpen = () => {
        setIsMenuOpen(true);
    };

    return (
        <>
            <header className="sticky top-0 z-40 w-full bg-primary text-white">
                <div className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between pl-[30px] pr-[22px] lg:h-[95px] lg:px-10">
                    {/* 로고 영역 */}
                    <Link href="/" className="flex items-center gap-1.5 lg:gap-2">
                        {/* #ISSUE: svg 렌더링 시 흐림 현상 발생하여 고해상도 png로 대체함 
                        - 기존 Image 태그는 주석 처리하여 롤백 가능하도록 유지*/}

                        {/* <Image
                            src="/images/logo_w.svg"
                            alt="서울NEW치과 로고"
                            width={37}
                            height={41}
                            className="h-[38px] w-[34px] object-contain lg:h-[41px] lg:w-[37px]"
                        /> */}
                        <Image
                            src="/images/logo_w_x4.png"
                            alt="서울NEW치과 로고"
                            width={37}
                            height={41}
                            className="h-[38px] w-[34px] object-contain lg:h-[41px] lg:w-[37px]"
                        />
                        <span className="text-[20px] font-bold lg:text-[25px]">{HOSPITAL_INFO.name}</span>
                    </Link>

                    {/* 네비게이션 영역 */}
                    <div className="flex items-center">
                        <nav className="hidden lg:block" aria-label="메인 네비게이션">
                            <ul className="flex gap-12">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`text-[16px] font-bold transition-opacity hover:opacity-70 ${
                                                pathname === link.href ? 'font-bold opacity-100' : 'opacity-80'
                                            }`}
                                        >
                                            {link.label === '병원소개' ? '서울NEW치과' : link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* 모바일 햄버거버튼 */}
                        <button
                            type="button"
                            onClick={handleOpen}
                            className="p-2 focus:outline-none lg:hidden"
                            aria-label="메뉴 열기"
                        >
                            <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
                                <rect y="0" width="30" height="2.5" rx="1.25" fill="white" />
                                <rect y="8.75" width="30" height="2.5" rx="1.25" fill="white" />
                                <rect y="17.5" width="30" height="2.5" rx="1.25" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                // 모바일 펼쳤을때
                <div className="fixed inset-0 z-50 flex justify-end overflow-hidden lg:hidden">
                    {/* 테블릿: 레이어 */}
                    <div
                        className={`fixed inset-0 hidden bg-black/40 transition-opacity duration-300 ease-in-out sm:block ${
                            animateIn ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={handleClose}
                    />

                    <div
                        className={`relative z-10 flex h-full w-full flex-col bg-[#EDEDED] transform transition-transform duration-300 ease-in-out sm:w-[70%] sm:max-w-[400px] sm:min-w-[280px] ${
                            animateIn ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        {/* 닫기 버튼 */}
                        <button
                            type="button"
                            onClick={handleClose}
                            className="absolute right-[25px] top-[17px] flex h-9 w-9 items-center justify-center rounded-full border border-[#7c6959] text-[#7c6959] focus:outline-none"
                            aria-label="메뉴 닫기"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* 로고 */}
                        <div className="flex items-center pl-[30px] pt-[100px]">
                            <Link href="/" onClick={handleClose} className="flex items-center gap-1.5">
                                {/* #ISSUE: svg 렌더링 시 흐림 현상 발생하여 고해상도 png로 대체함 
                                 - 기존 Image 태그는 주석 처리하여 롤백 가능하도록 유지*/}
                                {/* <Image
                                    src="/images/logo_b.svg"
                                    alt="서울NEW치과 로고"
                                    width={32}
                                    height={32}
                                    className="h-[38px] w-[34px] object-contain"
                                /> */}
                                <Image
                                    src="/images/logo_b_x4.png"
                                    alt="서울NEW치과 로고"
                                    width={32}
                                    height={32}
                                    className="h-[38px] w-[34px] object-contain"
                                />
                                <span className="font-sans text-[25px] font-bold text-[#7c6959]">
                                    {HOSPITAL_INFO.name}
                                </span>
                            </Link>
                        </div>

                        {/* 메뉴 목록 */}
                        <nav className="mt-16 flex flex-col gap-8 pl-[30px]">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleClose}
                                    className={`text-[16px]  text-[#7c6959] transition-colors ${
                                        pathname === link.href ? 'font-bold' : 'font-medium'
                                    }`}
                                >
                                    {link.label === '병원소개' ? '서울NEW치과' : link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
