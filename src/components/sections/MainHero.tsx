// #ISSUE: 모바일 슬라이드 이미지 고정 버그 수정
// #STYLE: Swiper 기반 메인 히어로, 모바일/PC 이미지 개별 매핑 및 라운드 디테일 적용
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
        moImagePos: 'object-[65%_center]',
    },
    {
        id: 2,
        subtitle: 'Wisdom Tooth',
        title: '총의치, 국소의치 등\n보험 틀니 전문, 환자분들의\n100% 만족!',
        pcImage: '/images/hero_pc_x2_02.jpg',
        moImage: '/images/hero_mo_x2_02.jpg',
        pcImagePos: 'lg:object-[80%_center]',
        moImagePos: 'object-[75%_center]',
    },
    {
        id: 3,
        subtitle: 'Wisdom Tooth',
        title: '사랑니 발치 및 매복치 발치 전문,\n서울대 • 연세대 • 경희대 등\n대학병원 의뢰 수준의 고난도 발치',
        strongText: '본원에서 가능!',
        pcImage: '/images/hero_pc_x2_03.jpg',
        moImage: '/images/hero_mo_x2_03.jpg',
        pcImagePos: 'lg:object-[80%_center]',
        moImagePos: 'object-[75%_center]',
    },
    {
        id: 4,
        subtitle: 'Natural Teeth',
        title: '자연치아의 가치를 지키는\n진료 오래도록 편안한\n결과를 제공합니다.',
        pcImage: '/images/hero_pc_x2_04.jpg',
        moImage: '/images/hero_mo_x2_04.jpg',
        pcImagePos: 'lg:object-[80%_center]',
        moImagePos: 'object-[75%_center]',
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
                className="w-full h-[calc(100vh-60px)] lg:h-[800px] rounded-tr-[20px] lg:rounded-tr-[70px] overflow-hidden"
            >
                {HERO_SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
                        {/* 모바일 배경 이미지 */}
                        <div className="block lg:hidden absolute inset-0 z-0">
                            <Image
                                src={slide.moImage}
                                alt="히어로 배경 모바일"
                                fill
                                priority={slide.id === 1}
                                sizes="(max-width: 1440px) 100vw, 1920px"
                                className={`object-cover ${slide.moImagePos}`}
                            />
                        </div>

                        {/* PC 배경 이미지 */}
                        <div className="hidden lg:block absolute inset-0 z-0">
                            <Image
                                src={slide.pcImage}
                                alt="히어로 배경 PC"
                                fill
                                priority={slide.id === 1}
                                sizes="(max-width: 1440px) 100vw, 1920px"
                                className={`object-cover ${slide.pcImagePos}`}
                            />
                        </div>

                        {/* 텍스트 콘텐츠 영역 */}
                        <div
                            className={`relative z-10 mx-auto max-w-[1320px] h-full flex flex-col ${
                                slide.strongText ? 'pt-[220px]' : 'pt-[260px]'
                            } lg:pt-0 lg:justify-center px-[20px] lg:px-0`}
                        >
                            <div className="hero-anim flex flex-col items-center text-center lg:items-start lg:text-left text-white lg:text-[#776B5D]">
                                <span className="font-accent text-[15px] lg:text-[35px]  uppercase opacity-80">
                                    {slide.subtitle}
                                </span>
                                <h2 className="text-[25px]/[37px] lg:text-[30px]/[45px] font-semibold whitespace-pre-line break-keep mt-3 lg:mt-5.5  tracking-tight">
                                    {slide.title}
                                </h2>
                                {slide.strongText && (
                                    <strong className="block text-[25px]/[37px] lg:text-[30px]/[45px] font-bold mt-2 lg:mt-[22px]">
                                        {slide.strongText}
                                    </strong>
                                )}
                                <Link
                                    href="/about"
                                    className="w-[176px] h-[55px] flex justify-center items-center border border-white rounded-full text-[20px] font-bold mt-[29px] lg:mt-[42px] lg:w-[165px] lg:h-[52px] lg:border-[#776b5d]"
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

                {/* PC 전용 커스텀 프로그레스바 */}
                <div className="hidden lg:flex absolute bottom-[80px] left-1/2 -translate-x-1/2 w-full max-w-[1320px] z-20 pointer-events-none">
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
                className="w-full relative py-[30px] bg-cover bg-center text-center border-t border-gray-200 lg:py-[60px]"
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
