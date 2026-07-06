'use client';

import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import SectionHeading from '@/components/common/SectionHeading';
import ContactSection from '@/components/sections/ContactSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TRUST_ITEMS = [
    {
        id: 1,
        title: '오랜 경험으로 축적된\n다양한 수술 케이스',
        desc: '임상경험이 풍부한 의료진이 환자의\n건강상태를 고려해 치료 방향을 결정합니다.',
        img: '/images/img_trust_01.jpg',
    },
    {
        id: 2,
        title: '지속가능한 사후관리',
        desc: '치료 후에도 최대 7년간 보장해드리며\n꾸준히 사후관리 서비스를 제공합니다.',
        img: '/images/img_trust_02.jpg',
    },
];

const SERVICE_ITEMS = [
    { id: '01', en: 'IMPLANT', ko: '임플란트', img: '/images/img_s_01.jpg' },
    { id: '02', en: 'DENTURES', ko: '틀니', img: '/images/img_s_02.jpg' },
    { id: '03', en: 'CLEAR ALIGNERS', ko: '투명교정', img: '/images/img_s_03.jpg' },
    { id: '04', en: 'PERIODONTAL CARE', ko: '스케일링 및 잇몸치료', img: '/images/img_s_04.jpg' },
    { id: '05', en: 'WISDOM TEETH', ko: '사랑니 발치', img: '/images/img_s_05.jpg' },
    { id: '06', en: 'CAVITY CARE', ko: '충치치료', img: '/images/img_s_06.jpg' },
    { id: '07', en: 'ZIRCONIA CROWNS', ko: '지르코니아', img: '/images/img_s_07.jpg' },
    { id: '08', en: 'LAMINATES', ko: '라미네이트', img: '/images/img_s_08.jpg' },
    { id: '09', en: 'COSMETIC DENTAL', ko: '치아성형', img: '/images/img_s_09.jpg' },
    { id: '10', en: 'TEETH WHITENING', ko: '치아미백', img: '/images/img_s_10.jpg' },
];

const PROMISE_LINES = [
    <>
        환자분들의 자연치아를 <br />
        최대한 보존하는 것을 가장 중요하게 생각합니다.
    </>,
    <>
        오랜 임상경험을 바탕으로 불필요한 치료는 줄이고, <br />꼭 필요한 진료만을 정성껏 시행합니다.
    </>,
    <>
        치아 하나하나의 가치를 소중히 여기며 시간이 <br className="block lg:hidden" />
        지나도 <br className="hidden lg:block" />
        만족할 수 있는 결과를 위해 기본에 <br className="block lg:hidden" />
        충실한 진료를 약속드립니다!
    </>,
];

export default function AboutPage() {
    return (
        <main className="w-full">
            <SubPageHero
                title="NEW치과 소개"
                desc="정확한 진단과 정직한 진료로 오래도록 건강한 미소를 함께합니다."
                bgImageName="bg_about"
            />

            {/* 약속 영역 */}
            <section className="w-full py-[60px] px-[32px] lg:py-[95px]">
                <div className="mx-auto max-w-[900px] flex flex-col items-center">
                    <SectionHeading subtitle="PROMISE" title="서울NEW치과는 약속합니다." isLine />

                    <div className="mt-[28px] lg:mt-[30px] flex flex-col gap-[24px] lg:gap-[32px] text-center">
                        {PROMISE_LINES.map((line, idx) => (
                            <p
                                key={idx}
                                className="text-[15px]/[24px] lg:text-[15px]/[25px] text-primary-dark break-keep"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* 신뢰 영역 */}
            <section className="w-full bg-primary py-[62px] px-[24px] lg:py-[130px]">
                <div className="mx-auto max-w-[1000px] flex flex-col items-center">
                    <SectionHeading
                        subtitle="SEOUL NEW DENTAL"
                        title="수많은 임상경험을 바탕으로 신뢰를 제공합니다!"
                        titleClassName="text-[25px]/[34px] font-bold lg:text-[30px]/[35px] lg:font-medium text-white"
                        subtitleClassName="font-accent text-[13px] font-normal lg:text-[30px] text-white"
                    />

                    <div className="w-full flex flex-col gap-[22px] lg:gap-[30px] mt-[36px] lg:mt-[60px] ">
                        {TRUST_ITEMS.map((item) => (
                            <div
                                key={item.id}
                                className="w-full bg-cream rounded-t-[20px] rounded-bl-[20px] shadow-md pt-[20px] px-[20px] pb-[25px]  lg:p-[22px] flex flex-col md:flex-row items-center gap-[14px] lg:gap-[60px]"
                            >
                                <div className="relative w-full h-[114px] md:w-[360px] md:h-[192px] shrink-0 overflow-hidden rounded-[10px]">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 360px"
                                        className="object-cover rounded-[10px]"
                                    />
                                </div>

                                <div className="flex flex-col text-left w-full">
                                    <div className="flex justify-center lg:justify-normal items-start gap-[8px]">
                                        <span className="w-[5px] h-[5px] lg:w-[6px] lg:h-[5px] rounded-full bg-primary-dark shrink-0 mt-[11px] lg:mt-[14px]" />
                                        <h4 className="text-[20px]/[27px] lg:text-[22px]/[32px] font-semibold whitespace-pre-line break-keep">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p className="mt-[14px] lg:mt-[20px] pl-[13px] text-[15px]/[24px] lg:text-[15px]/[25px] font-medium text-center lg:text-left  whitespace-pre-line break-keep">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* #TODO: 진료과목 배경 stone01 로 변경하기 */}
            {/* 진료과목 영역 */}
            <section className="w-full bg-cover bg-center py-[60px] lg:py-[140px] overflow-hidden">
                {/* 타이틀 영역 */}
                <div className="mx-auto max-w-[1320px] px-[24px] lg:px-10">
                    <SectionHeading
                        subtitle="SERVICES"
                        title="진료과목"
                        subtitleClassName="font-accent text-[13px] lg:text-[20px] lg:mb-0"
                        titleClassName="text-[25px]/[35px] lg:text-[30px]/[35px] font-medium"
                    />
                </div>

                <div className="mx-auto max-w-[1320px] pl-[24px] lg:pl-10 mt-[35px] lg:mt-[60px]">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        speed={5000}
                        allowTouchMove={false}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        slidesPerView="auto"
                        spaceBetween={8}
                        breakpoints={{
                            1024: {
                                spaceBetween: 20,
                            },
                        }}
                        className="continuous-swiper w-full"
                    >
                        {SERVICE_ITEMS.map((item) => (
                            <SwiperSlide key={item.id} className="!w-[90px] lg:!w-[186px]">
                                <div className="flex flex-col w-full">
                                    <div className="relative w-full h-[109px] lg:h-[227px] overflow-hidden rounded-t-[10px] rounded-bl-[10px]">
                                        <Image
                                            src={item.img}
                                            alt={item.ko}
                                            fill
                                            sizes="(max-width: 1024px) 90px, 186px"
                                            className="object-cover rounded-t-[10px] rounded-bl-[10px]"
                                        />
                                    </div>
                                    <span className="font-accent text-[20px] lg:text-[25px]  mt-[20px] lg:mt-[23px]">
                                        {item.id}
                                    </span>
                                    <span className="hidden text-[15px]/[13px] uppercase  mt-[14px] lg:block">
                                        {item.en}
                                    </span>
                                    <span className="text-[18px] lg:text-[20px] font-medium  mt-[7px] break-keep">
                                        {item.ko}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
