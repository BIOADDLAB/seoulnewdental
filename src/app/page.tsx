// #ISSUE: 진료과목 섹션 등장 시 애니메이션 부재 및 이미지 화질 저하
'use client';

import { useEffect, useRef, useState } from 'react';
import ContactSection from '@/components/sections/ContactSection';
import MainHero from '@/components/sections/MainHero';
import SectionHeading from '../components/common/SectionHeading';
import Image from 'next/image';

interface ServiceItem {
    id: number;
    label: string;
    labelEn: string;
    image: string;
}

const SERVICE_ITEMS: ServiceItem[] = [
    { id: 1, label: '임플란트', labelEn: 'IMPLANT', image: '/images/img_services_01.jpg' },
    { id: 2, label: '틀니', labelEn: 'DENTURES', image: '/images/img_services_02.jpg' },
    { id: 3, label: '보존진료', labelEn: 'RESTORATIVE CARE', image: '/images/img_services_03.jpg' },
    { id: 4, label: '일반진료', labelEn: 'GENERAL DENTISTRY', image: '/images/img_services_04.jpg' },
    { id: 5, label: '특수진료', labelEn: 'SPECIAL CARE', image: '/images/img_services_05.jpg' },
];

function ServiceCard({
    item,
    size,
    index,
    isVisible,
}: {
    item: ServiceItem;
    size: 'mobile' | 'pc';
    index: number;
    isVisible: boolean;
}) {
    const isPc = size === 'pc';
    return (
        <div
            className={`flex flex-col items-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'
            } ${isPc ? 'gap-10' : 'gap-2 md:gap-4'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div
                className={`relative rounded-[10px] overflow-hidden ${isPc ? 'w-[186px] h-[228px]' : 'w-[90px] h-[109px] md:w-[140px] md:h-[170px]'}`}
            >
                <Image src={item.image} alt={item.label} fill sizes="186px" className="object-cover" />
            </div>
            <div className="flex flex-col items-center gap-1">
                {isPc && <span className="text-[15px]/[13px] uppercase">{item.labelEn}</span>}
                <span
                    className={`font-medium text-primary-dark ${isPc ? 'text-[20px]' : 'text-[18px] md:text-[20px]'}`}
                >
                    {item.label}
                </span>
            </div>
        </div>
    );
}

export default function Home() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <MainHero />

            <section ref={sectionRef} className="w-full py-[62px] lg:py-[150px] bg-white overflow-hidden">
                <div className="max-w-[1320px] mx-auto px-5 md:px-10 min-[1320px]:px-0">
                    <div
                        className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
                    >
                        <SectionHeading subtitle="SERVICES" title="진료과목" />
                    </div>

                    <div className="flex justify-center items-center flex-wrap mt-[36px] lg:hidden">
                        <div className="flex flex-col gap-[30px] md:gap-[50px]">
                            <div className="flex justify-center items-center gap-3 md:gap-6">
                                {SERVICE_ITEMS.slice(0, 2).map((item, idx) => (
                                    <ServiceCard
                                        key={item.id}
                                        item={item}
                                        size="mobile"
                                        index={idx}
                                        isVisible={isVisible}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-center items-center gap-3 md:gap-6">
                                {SERVICE_ITEMS.slice(2).map((item, idx) => (
                                    <ServiceCard
                                        key={item.id}
                                        item={item}
                                        size="mobile"
                                        index={idx + 2}
                                        isVisible={isVisible}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center items-center gap-[18px] mt-[40px]">
                        {SERVICE_ITEMS.map((item, idx) => (
                            <ServiceCard key={item.id} item={item} size="pc" index={idx} isVisible={isVisible} />
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </main>
    );
}
