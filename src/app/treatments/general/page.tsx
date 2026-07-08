// #PAGE: 일반진료 페이지 (app/treatments/general/page.tsx)
'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import SectionHeading from '@/components/common/SectionHeading';
import IntroBand from '@/components/sections/IntroBand';
import ContactSection from '@/components/sections/ContactSection';

const EXTRACTION_CASES = [
    '잇몸 속에 매복되어 통증을 유발하는 경우',
    '비스듬히 자라 주변치아를 손상시키는 경우',
    '음식물이 자주 끼어 염증이 반복되는 경우',
    '충치의 원인이 되는 경우',
];

const CAUTION_ITEMS = [
    '거즈는 지혈을 위해 1시간 정도 꼭 물고있기',
    '발치부위는 당일 과도한 양치나 자극 피하기',
    '자극적이고 뜨거운 음식 피하기',
    '음주, 흡연은 1주일 이상 피하기',
    '심한 운동 및 뜨거운 사우나는 1~2일 정도 피하기',
    '붓기나 통증이 있는 경우 냉찜질 해주기',
];

function AnimatedCounter({ targetNumber }: { targetNumber: number }) {
    const [count, setCount] = useState<number | string>(0);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 400;
                    const interval = 40;
                    let elapsed = 0;

                    const timer = setInterval(() => {
                        elapsed += interval;
                        if (elapsed >= duration) {
                            clearInterval(timer);
                            setCount(targetNumber);
                        } else {
                            const randomNum = Math.floor(Math.random() * 90) + 10;
                            setCount(randomNum);
                        }
                    }, interval);

                    observer.disconnect();
                }
            },
            { threshold: 0.5 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [targetNumber]);

    return (
        <strong
            ref={ref}
            className="text-[130px] leading-none lg:text-[130px] font-extrabold tracking-tighter tabular-nums"
        >
            {count}
        </strong>
    );
}

export default function GeneralPage() {
    return (
        <main className="w-full">
            <SubPageHero
                title="일반진료 소개"
                desc={'구강건강을 유지하고 예방하는\n기본 진료입니다'}
                bgImageName="bg_sub_02"
            />

            <IntroBand
                accent="PERIODONTAL CARE"
                title="스케일링 및 잇몸치료"
                desc={'치석과 구강 내 세균을 제거하여 구강건강을\n유지하고 예방하는 치료입니다.'}
                bgImage="/images/bg_band_04.jpg"
                accentClassName="!mt-0 !text-[15px] lg:!text-[20px]"
                titleClassName="!text-[20px]/[30px] lg:!text-[30px] !font-medium"
                descClassName="!text-[15px]/[24px] lg:!text-[20px]/[35px]"
            />

            <section
                className="w-full bg-cover bg-center py-[62px] px-[24px] lg:py-[120px]"
                style={{ backgroundImage: "url('/images/bg_stone.jpg')" }}
            >
                <div className="mx-auto max-w-[900px] flex flex-col items-center">
                    <SectionHeading
                        subtitle="PERIODONTAL CARE"
                        title={
                            <>
                                스케일링 및 잇몸치료는 <br className="block lg:hidden" />왜 필요한 건가요?
                            </>
                        }
                        titleClassName="!text-[25px]/[28px] lg:!text-[30px]/[35px]"
                        subtitleClassName="lg:!mb-[17px]"
                        desc={
                            <>
                                <span className="block lg:hidden">{`구강 내에는 약 500여종 이상의 \n세균이 존재하며, 이 세균들이 치아표면에 \n쌓여 치태와 치석을 유발합니다. \n\n제거되지 않은 치태 및 치석은 \n잇몸에 염증을 유발하고 \n차후 잇몸질환으로 이어지게 됩니다.`}</span>
                                <span className="hidden lg:block">{`구강 내에는 약 500여종 이상의 세균이 존재하며, \n이 세균들이 치아표면에 쌓여 치태와 치석을 유발합니다. \n\n제거되지 않은 치태 및 치석은 잇몸에 염증을 유발하고 차후 잇몸질환으로 이어지게 됩니다.`}</span>
                            </>
                        }
                        descClassName="!mt-[25px] !text-[15px]/[24px] lg:!mt-[22px] lg:!text-[20px]/[35px]"
                    />

                    <span className="hidden w-[1px] h-[43px] lg:block lg:h-[60px] bg-primary-dark/50 lg:mt-[30px]" />

                    <div className="w-full max-w-[820px] bg-white rounded-[5px] px-[17px] py-[20px] lg:px-[36px] lg:py-[26px] mt-[30px] lg:mt-[50px]">
                        <p className="text-center text-[13px]/[21px] lg:text-[20px]/[33px] font-medium text-primary-dark break-keep">
                            스케일링과 잇몸치료는 이러한 원인을 제거하여 <br className="block lg:hidden" />
                            건강한 잇몸상태를 유지하는 데
                            <br className="hidden lg:block" />
                            중요한 역할을 하기에 <br className="block lg:hidden" />
                            정기적으로 치과에 내원하여 관리를 받아야 합니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-primary py-[70px] px-[24px] lg:py-[100px]">
                <div className="mx-auto max-w-[900px] flex flex-col items-center text-center text-white">
                    <span className="font-accent text-[13px]/[13px] lg:text-[20px]/[13px] uppercase">WISDOM TEETH</span>
                    <h3 className="text-[25px]/[44px] font-semibold lg:text-[30px]/[44px] lg:font-medium mt-1">
                        사랑니 발치
                    </h3>

                    <div className="flex items-baseline justify-center mt-[50px] lg:mt-[36px]">
                        <AnimatedCounter targetNumber={10} />
                        <span className="text-[40px] lg:text-[28px] leading-none font-semibold pl-[3px]">만건</span>
                    </div>
                </div>
            </section>

            <section
                className="w-full bg-cover bg-center py-[62px] px-[24px] lg:py-[140px]"
                style={{ backgroundImage: "url('/images/bg_stone.jpg')" }}
            >
                <div className="mx-auto max-w-[848px] flex flex-col items-center">
                    <div className="w-[274px] h-[34px] lg:w-[500px] lg:h-[47px] flex items-center justify-center text-white bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#769283_20%,#769283_80%,rgba(255,255,255,0)_100%)]">
                        <span className="text-[20px]/[35px] lg:text-[30px]/[35px] font-medium mr-2 ">
                            사랑니 발치가 필요한 경우
                        </span>
                    </div>

                    <ul className="grid grid-cols-2 gap-y-[18px] lg:gap-y-[27px] mt-[36px] lg:mt-[56px] w-full ">
                        {EXTRACTION_CASES.map((item) => (
                            <li key={item} className="flex items-start gap-[5px] lg:gap-[10px]">
                                <img
                                    src="/images/i_check_g.svg"
                                    alt=""
                                    className="w-[17px] lg:w-[34px] shrink-0 mt-[4px] rounded-[10px]"
                                />
                                <span className="text-[14px]/[22px] lg:text-[20px]/[22px] font-medium text-primary-dark break-keep">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="w-full flex lg:px-0 flex-col-reverse lg:flex-row items-end justify-between gap-[28px] lg:gap-[30px] mt-[60px] lg:mt-[110px]">
                        <div className="w-full lg:max-w-[480px]">
                            <span className="block w-full h-[1px] bg-primary" />
                            <p className=" text-[12px]/[22px] lg:text-[15px]/[25px] font-medium text-[#626262] break-keep mt-[24px] lg:mt-[60px] tracking-tight">
                                매복된 사랑니는 위치나 방향에 따라 인접치아를 손상시킬 수 있으며, 염증을 유발할 수
                                있기에 발치를 시행해야 할 수 있습니다. <br className="block md:hidden" />
                                저희 치과에서는 정확한 위치와 상태를 파악하기 위해 X- Ray 및 CT를 통해 신중하게 치료
                                계획을 수립하고 있습니다.
                            </p>
                        </div>
                        <div className="relative w-full h-[133px] lg:w-[428px] lg:h-[264px] shrink-0 overflow-hidden rounded-[6px]">
                            <Image
                                src="/images/img_xray.jpg"
                                alt="X-Ray 촬영 장비"
                                fill
                                sizes="(max-width: 1024px) 100vw, 406px"
                                className="object-cover object-bottom lg:object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* #ISSUE: PC 해상도에서 스톤 배경이 노출되는 문제 */}
            {/* #STYLE: 모든 해상도에서 bg-white(#fff) 단일 적용 */}
            <section className="w-full py-[65px] px-[24px] lg:pt-[140px] lg:pb-[110px] bg-white">
                <div className="mx-auto max-w-[910px] flex flex-col items-center">
                    <div className="w-[300px] h-[44px] lg:w-[550px] lg:h-[62px] flex items-center justify-center text-white bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#769283_20%,#769283_80%,rgba(255,255,255,0)_100%)]">
                        <span className="text-[20px]/[35px] lg:text-[30px]/[35px] font-medium mr-2 ">
                            사랑니 발치 후 주의사항
                        </span>
                    </div>

                    <div className="w-full px-[14px] lg:px-0 mt-[33px] lg:mt-[50px]">
                        <div
                            className="w-full max-w-[910px] mx-auto bg-[#F9F9F8] rounded-[10px] pl-[40px]
                        pr-[10px] py-[35px] lg:pl-[140px] lg:pt-[30px] lg:pb-[40px]"
                        >
                            <ul className="flex flex-col gap-[14px] lg:gap-[16px]">
                                {CAUTION_ITEMS.map((item) => (
                                    <li key={item} className="flex items-start gap-[8px]">
                                        <img
                                            src="/images/i_check_g.svg"
                                            alt=""
                                            className="w-[16px] lg:w-[22px] shrink-0 mt-[4px]"
                                        />
                                        <span className="text-[13px]/[22px] lg:text-[16px]/[26px] font-medium text-primary-dark break-keep tracking-tighter">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
