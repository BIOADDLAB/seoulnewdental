// #PAGE: 임플란트 페이지
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import SectionHeading from '@/components/common/SectionHeading';
import VerticalDivider from '@/components/common/VerticalDivider';
import IntroBand from '@/components/sections/IntroBand';
import Features, { FeatureItem } from '@/components/sections/Features';
import ProcessSteps, { ProcessItem } from '@/components/sections/ProcessSteps';
import ContactSection from '@/components/sections/ContactSection';
import Reveal from '@/components/common/Reveal';

const BENEFIT_ITEMS: FeatureItem[] = [
    {
        id: 'b1',
        num: '01',
        title: '출혈과 통증 없음',
        desc: '무절개이기 때문에 출혈과 통증이 없어\n치료 과정이 보다 편안합니다.',
    },
    {
        id: 'b2',
        num: '02',
        title: '빠른 회복',
        desc: '임플란트 수술 후 바로\n일상생활이 가능합니다.',
    },
    {
        id: 'b3',
        num: '03',
        title: '감염 위험 감소',
        desc: '외부 노출이 줄어들어 감염 위험성을\n낮추는 데 도움이 됩니다.',
    },
    {
        id: 'b4',
        num: '04',
        title: '전신질환 환자 수술 가능',
        desc: '고혈압, 당뇨, 심장질환 등 전신질환이\n있는 경우에도 환자의 상태를 충분히\n평가한 후 부담을 줄이는 방향으로\n치료 계획을 수립합니다.',
    },
];

const PROCESS_ITEMS: ProcessItem[] = [
    { id: 'p1', num: '01', text: '정밀 진단 및\n상담 진행' },
    { id: 'p2', num: '02', text: '정확한 위치에\n임플란트 식립' },
    { id: 'p3', num: '03', text: '안정적인\n연결 진행' },
    { id: 'p4', num: '04', text: '치아 기능과 심미성을\n고려한 맞춤 보철' },
];

// #STYLE: PPT 시안에 있던 "빛이 스르륵 지나가는 효과" 컴포넌트 구현
function ShinyBadge({ src, alt }: { src: string; alt: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="absolute z-10 -right-[20px] lg:right-[-10px] top-0 -translate-y-1/2 w-[86px] h-[86px] lg:w-[173px] lg:h-[173px] rounded-full overflow-hidden"
        >
            <Image src={src} alt={alt} fill sizes="173px" className="object-contain" />
            <div
                className={`absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] z-20 transition-transform duration-[2.2s] ease-in-out ${
                    inView ? 'translate-x-[100%]' : '-translate-x-[150%]'
                }`}
                style={{ transitionDelay: '0.2s' }}
            />
        </div>
    );
}

export default function ImplantPage() {
    return (
        <main className="w-full">
            <SubPageHero
                title="임플란트 소개"
                desc={'상실된 치아를 자연치아와 유사한 기능과 형태로\n회복하는 인공치아치료'}
                bgImageName="bg_sub_03"
            />

            <section className="py-[60px] lg:py-[100px] flex flex-col items-center text-center">
                <Reveal variant="fade-up" className="flex flex-col items-center">
                    <h3 className="text-[15px] mb-[5px]">SEOUL NEW DENTAL</h3>
                    <h2 className="font-accent text-[20px] lg:text-[30px] uppercase ">Clear Diagnosis</h2>
                    <VerticalDivider color="bg-primary-dark/70" spacing="both" />
                    <p className="text-[15px]/[24px] lg:text-[20px]/[35px] lg:font-medium">
                        정확한 진단 위에 완성되는 결과 <br />
                        정밀한 검사와 환자의 건강상태 및 구강상태를 <br />
                        고려하여 임플란트 치료를 진행합니다.
                    </p>
                </Reveal>
            </section>

            {/* 무절개 임플란트 */}
            <section className="w-full bg-primary py-[65px]  px-[36px] lg:py-[130px]  overflow-hidden">
                <div className="mx-auto max-w-[936px] flex flex-col items-center">
                    <div className="relative w-full flex flex-col items-center">
                        <span className="font-accent text-white text-[25px] font-normal lg:text-[30px] uppercase">
                            Flapless Implant
                        </span>

                        <Reveal
                            variant="slide-right"
                            className="relative max-w-[910px] flex justify-start w-full mt-[45px] lg:mt-[30px] lg:pr-[30px]"
                        >
                            {/* #STYLE: 빛나는 효과가 포함된 뱃지 교체 */}
                            <ShinyBadge src="/images/i_badge_01.png" alt="무절개 임플란트" />

                            <div className="w-full bg-[#f8f8f8] rounded-tl-[10px] rounded-bl-[20px] lg:rounded-l-[30px] shadow-md overflow-hidden flex flex-col md:flex-row relative z-0">
                                <div className="relative w-full h-[208px] md:w-[45%] md:h-auto md:min-h-[235px] lg:w-[413px] shrink-0">
                                    <Image
                                        src={'/images/img_implant_01.jpg'}
                                        alt=""
                                        fill
                                        sizes="(max-width: 768px) 100vw, 420px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center items-center lg:items-start px-[24px] py-[20px] md:px-[50px] lg:px-[60px] ">
                                    <div className="flex items-center lg:items-start gap-[12px]">
                                        <span className="w-[5px] h-[5px] rounded-full bg-primary-dark shrink-0 lg:mt-[12px]" />
                                        <h4 className="text-[20px]/[35px] lg:text-[25px]/[35px] font-semibold text-primary-dark">
                                            무절개 임플란트
                                        </h4>
                                    </div>
                                    <p className="mt-[6px] lg:pl-[13px] text-[15px]/[25px] lg:mt-[27px]  text-primary-dark break-keep text-center lg:text-left">
                                        저희 치과는 모든 환자분들에게 <br className="block lg:hidden" />
                                        특별한 경우를 제외하고 95% 이상 <br className="block lg:hidden" />
                                        무절개 임플란트를 시행하고 있습니다.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 장점 소개 */}
            <Features
                topSubtitle="BENEFITS"
                topTitle="장점 소개"
                centerText={'무절개 임플란트의\n장점은 무엇일까요?'}
                items={BENEFIT_ITEMS}
                bottomBox={{
                    title: '무절개 임플란트가 필요한 경우',
                    list: ['치과공포가 있는 환자', '전신질환이 있는 환자', '입을 오래 못 벌리는 환자'],
                }}
            />

            {/* 당일 임플란트 */}
            <section className="w-full bg-primary pt-[60px] pb-[65px] px-[24px] lg:pt-[130px] lg:pb-[110px] overflow-hidden">
                <div className="mx-auto max-w-[936px] flex flex-col items-center">
                    <div className="relative w-full flex flex-col items-center">
                        <span className="font-accent text-white text-[25px] font-normal lg:text-[30px] uppercase">
                            1day Implant
                        </span>

                        <Reveal
                            variant="slide-left"
                            className="relative max-w-[910px] flex justify-start w-full mt-[45px] lg:mt-[30px] lg:pr-[30px]"
                        >
                            {/* #STYLE: 빛나는 효과가 포함된 뱃지 교체 */}
                            <ShinyBadge src="/images/i_badge_02.png" alt="당일 임플란트" />

                            <div className="w-full bg-[#f8f8f8] rounded-tl-[10px] rounded-bl-[20px] lg:rounded-l-[30px] shadow-md overflow-hidden flex flex-col md:flex-row relative z-0">
                                <div className="relative w-full h-[208px] md:w-[45%] md:h-auto md:min-h-[235px] lg:w-[413px] shrink-0">
                                    <Image
                                        src={'/images/img_implant_02.jpg'}
                                        alt="당일 임플란트"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 420px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center items-center lg:items-start px-[24px] py-[20px] md:px-[50px] lg:px-[60px] ">
                                    <div className="flex items-center lg:items-start gap-[12px]">
                                        <span className="w-[5px] h-[5px] rounded-full bg-primary-dark shrink-0 lg:mt-[12px]" />
                                        <h4 className="text-[20px]/[35px] lg:text-[25px]/[35px] font-semibold text-primary-dark">
                                            당일 임플란트{' '}
                                        </h4>
                                    </div>
                                    <p className="mt-[6px] lg:pl-[13px] text-[15px]/[25px] lg:mt-[27px]  text-primary-dark break-keep text-center lg:text-left">
                                        당일 임플란트는 발치부위에 감염이 없고
                                        <br className="block lg:hidden" />
                                        뼈의 형태가 잘 유지된 경우에 해당되며,
                                        <br className="block lg:hidden" />
                                        발치 당일 바로 임플란트 식립이 가능합니다.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 과거 현재 모습 비교 섹션 */}
            <section className="w-full bg-primary pb-[60px] lg:pb-[140px] px-[20px] -mt-[1px]">
                <div className="mx-auto max-w-[1000px] flex flex-col items-center">
                    {/* 상자 영역 (불필요한 이미지 전부 제거 & 치수 완벽 맞춤) */}
                    <Reveal variant="scale-in" className="flex items-center justify-center">
                        {/* 과거 박스 */}
                        <div className="w-[130px] h-[163px] lg:w-[289px] lg:h-[210px] bg-[#D4D4D4] flex flex-col items-center justify-center px-[10px] lg:px-[20px] text-center z-10 shrink-0 shadow-sm">
                            <span className="text-white font-bold text-[13px] lg:text-[24px] mb-[6px] lg:mb-[20px]">
                                과거
                            </span>
                            <p className="text-white text-[10px]/[18px] lg:text-[15px]/[25px] font-medium break-keep">
                                발치 후, 뼈가 완전히
                                <br className="block lg:hidden" />
                                회복될 때까지 <br className="hidden lg:block" />
                                최소
                                <br className="block lg:hidden" />
                                3개월 이상 기다린
                                <br className="block lg:hidden" />
                                뒤에 가능
                            </p>
                        </div>

                        {/* 중간 SVG 그라디언트 브릿지 (브라우저 사이 빈틈 방지용 -mx-[1px]) */}
                        <div className="w-[17px] h-[203px] lg:w-[48px] lg:h-[257px] shrink-0 z-20 -mx-[1px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full block"
                                viewBox="0 0 48 257"
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <path d="M0 29.0263L48 0V257L0 224.509V29.0263Z" fill="url(#paint0_linear_2516_371)" />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_2516_371"
                                        x1="48"
                                        y1="128.5"
                                        x2="1.86223e-06"
                                        y2="128.5"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#769283" />
                                        <stop offset="1" stopColor="#D4D4D4" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* 현재 박스 */}
                        <div className="w-[175px] h-[203px] lg:w-[395px] lg:h-[257px] bg-white flex flex-col items-center justify-center px-[10px] lg:px-[20px] text-center z-30 shadow-lg shrink-0">
                            <div className="bg-primary text-white font-bold text-[14px] lg:text-[22px] px-[20px] py-[4px] lg:px-[40px] lg:py-[10px] rounded-full mb-[12px] lg:mb-[25px]">
                                현재
                            </div>
                            <p className="text-[11px]/[18px] lg:text-[18px]/[30px] font-medium text-primary-dark break-keep tracking-tight">
                                치료 기법 발전 / 빠른 시기에도
                                <br />
                                안정적인 식립 가능
                            </p>
                        </div>
                    </Reveal>

                    {/* 하단 텍스트 */}
                    <Reveal
                        as="p"
                        variant="fade-up"
                        className="mt-[25px] lg:mt-[50px] text-center text-[12px]/[22px] lg:text-[18px]/[32px] text-white font-medium break-keep"
                    >
                        <span className="lg:hidden">
                            정밀한 진단과 충분한 치료 계획을 바탕으로
                            <br />
                            가능한 경우에 시행되며, 치료기간을 단축하고
                            <br />
                            일상 복귀를 돕는 것을 목표로 합니다!
                        </span>
                        <span className="hidden lg:block">
                            정밀한 진단과 충분한 치료 계획을 바탕으로 가능한 경우에 시행되며, 치료기간을
                            <br />
                            단축하고 일상 복귀를 돕는 것을 목표로 합니다!
                        </span>
                    </Reveal>
                </div>
            </section>

            <ProcessSteps
                topSubtitle="PROCESS"
                topTitle="임플란트 과정"
                items={PROCESS_ITEMS}
                bgImage="none"
                sectionClass="bg-white"
            />
            <ContactSection />
        </main>
    );
}
