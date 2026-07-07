// #ISSUE: PC 해상도(1024px~1400px)에서 헤더 로고와 히어로 텍스트의 좌측 정렬 어긋남, 태블릿 구간(520px~767px) 이미지 잘림 현상
// #STYLE: 텍스트 및 프로그레스바 컨테이너를 헤더와 동일하게 max-w-[1400px] 및 lg:px-10으로 통일, min-[520px]로 모바일 이미지 상단 고정
// #LINK: npm install swiper
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

export interface HeroSlideData {
    id: number;
    subtitle: string;
    title: string;
    strongText?: string;
    pcImage: string;
    moImage: string;
    pcImagePos: string;
    moImagePos: string;
}

const HERO_SLIDES: HeroSlideData[] = [
    {
        id: 1,
        subtitle: 'IMPLANT SPECIALIST',
        title: '무절개 임플란트 전문,\n부담은 적고 회복은\n빠른 정밀 임플란트!',
        pcImage: '/images/hero_pc_x2_01.jpg',
        moImage: '/images/hero_mo_x2_01.jpg',
        pcImagePos: 'lg:object-[75%_center]',
        moImagePos: 'object-[65%_center] min-[520px]:object-[65%_top]',
    },
    {
        id: 2,
        subtitle: 'Wisdom Tooth',
        title: '총의치, 국소의치 등\n보험 틀니 전문, 환자분들의\n100% 만족!',
        pcImage: '/images/hero_pc_x2_02.jpg',
        moImage: '/images/hero_mo_x2_02.jpg',
        pcImagePos: 'lg:object-[80%_center]',
        moImagePos: 'object-[75%_center] min-[520px]:object-[75%_top]',
    },
    {
        id: 3,
        subtitle: 'Wisdom Tooth',
        title: '사랑니 발치 및 매복치 발치 전문,\n서울대 • 연세대 • 경희대 등\n대학병원 의뢰 수준의 고난도 발치',
        strongText: '본원에서 가능!',
        pcImage: '/images/hero_pc_x2_03.jpg',
        moImage: '/images/hero_mo_x2_03.jpg',
        pcImagePos: 'lg:object-[80%_center]',
        moImagePos: 'object-[75%_center] min-[520px]:object-[75%_top]',
    },
    {
        id: 4,
        subtitle: 'Natural Teeth',
        title: '자연치아의 가치를 지키는\n진료 오래도록 편안한\n결과를 제공합니다.',
        pcImage: '/images/hero_pc_x2_04.jpg',
        moImage: '/images/hero_mo_x2_04.jpg',
        pcImagePos: 'lg:object-[80%_center]',
        moImagePos: 'object-[75%_center] min-[520px]:object-[75%_top]',
    },
];

export default function MainHero() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full bg-primary">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.realIndex)}
                className="w-full h-[672px] lg:h-[800px] rounded-tr-[20px] lg:rounded-tr-[70px] overflow-hidden"
            >
                {HERO_SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
                        {/* 모바일 배경 이미지 (md 미만에서만 노출) */}
                        <div className="block md:hidden absolute inset-0 z-0">
                            <Image
                                src={slide.moImage}
                                alt="히어로 배경 모바일"
                                fill
                                priority={slide.id === 1}
                                sizes="(max-width: 767px) 100vw, 1920px"
                                className={`object-cover ${slide.moImagePos}`}
                            />
                        </div>

                        {/* PC 배경 이미지 (md 이상부터 노출) */}
                        <div className="hidden md:block absolute inset-0 z-0">
                            <Image
                                src={slide.pcImage}
                                alt="히어로 배경 PC"
                                fill
                                priority={slide.id === 1}
                                sizes="(min-width: 768px) 100vw, 1920px"
                                className={`object-cover ${slide.pcImagePos.replace('lg:', 'md:')}`}
                            />
                        </div>

                        {/* #ISSUE: 모바일에서만 맵솔루트 시키고 리팩토링때 확인 기존 코드 주석처리 - 추후 삭제 예정
                         */}
                        {/* <div
                            className={`absolute w-full top-[94%] left-1/2 -translate-x-1/2 -translate-y-1/2  z-10 mx-auto max-w-[1400px] h-full flex flex-col ${
                                slide.strongText ? 'pt-[2px]' : 'pt-[2px]'
                            } md:pt-0 md:justify-center px-[20px] md:px-[40px] lg:px-10`}
                        >
                            <div className="hero-anim flex flex-col items-center text-center md:items-start md:text-left text-white md:text-[#776B5D]">
                                <span className="font-accent text-[15px] md:text-[35px] uppercase opacity-80">
                                    {slide.subtitle}
                                </span>
                                <h2 className="text-[25px]/[37px] md:text-[30px]/[45px] font-semibold whitespace-pre-line break-keep mt-3 md:mt-5.5 tracking-tight">
                                    {slide.title}
                                </h2>
                                {slide.strongText && (
                                    <strong className="block text-[25px]/[37px] md:text-[30px]/[45px] font-bold mt-2 md:mt-[22px]">
                                        {slide.strongText}
                                    </strong>
                                )}
                                <Link
                                    href="/about"
                                    className="w-[176px] h-[55px] flex justify-center items-center border border-white rounded-full text-[20px] font-bold mt-[29px] md:mt-[42px] md:w-[165px] md:h-[52px] md:border-[#776b5d]"
                                >
                                    Introduction
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div> */}

                        {/* 텍스트 콘텐츠 영역 */}
                        <div className="absolute top-[94%] left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-10 mx-auto max-w-[1400px] h-full flex flex-col px-[20px] md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 md:pt-0 md:justify-center md:px-[40px] lg:px-10">
                            <div className="hero-anim flex flex-col items-center text-center md:items-start md:text-left text-white md:text-[#776B5D]">
                                <span className="font-accent text-[15px] md:text-[35px] uppercase opacity-80">
                                    {slide.subtitle}
                                </span>
                                <h2 className="text-[25px]/[37px] md:text-[30px]/[45px] font-semibold whitespace-pre-line break-keep mt-3 md:mt-5.5 tracking-tight">
                                    {slide.title}
                                </h2>
                                {slide.strongText && (
                                    <strong className="block text-[25px]/[37px] md:text-[30px]/[45px] font-bold mt-2 md:mt-[22px]">
                                        {slide.strongText}
                                    </strong>
                                )}
                                <Link
                                    href="/about"
                                    className="w-[176px] h-[55px] flex justify-center items-center border border-white rounded-full text-[20px] font-bold mt-[29px] md:mt-[42px] md:w-[165px] md:h-[52px] md:border-[#776b5d]"
                                >
                                    Introduction
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* PC 전용 커스텀 프로그레스바 (헤더와 동일한 패딩 및 최대 너비 적용) */}
                <div className="hidden lg:flex absolute bottom-[80px] left-1/2 -translate-x-1/2 w-full max-w-[1400px] lg:px-10 z-20 pointer-events-none">
                    <div className="w-[588px] h-[3px] bg-white rounded-full relative overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-[#776B5D] transition-all duration-500 ease-in-out rounded-full"
                            style={{ width: `${((activeIndex + 1) / HERO_SLIDES.length) * 100}%` }}
                        />
                    </div>
                </div>
            </Swiper>

            {/* 정확한 진단과 따뜻한 진료 영역 - PC/모바일 공통 */}
            <div
                className="w-full relative py-[30px] bg-cover bg-center text-center lg:py-[60px]"
                style={{ backgroundImage: "url('/images/bg_stone.jpg')" }}
            >
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="relative w-[30px] h-[35px] lg:w-[48px] lg:h-[54px]">
                        <Image src="/images/logo_b_x4.png" sizes="48px" alt="심볼" fill className="object-contain" />
                    </div>
                    <p className="text-[20px]/[28px] text-[#988575] font-semibold lg:text-[25px]/[46px]">
                        정확한 진단과 따뜻한 진료로&#160;
                        <br className="block lg:hidden" />
                        함께하겠습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
