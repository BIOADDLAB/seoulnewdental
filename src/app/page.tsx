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

function ServiceCard({ item, size }: { item: ServiceItem; size: 'mobile' | 'pc' }) {
    const isPc = size === 'pc';

    return (
        <div className={`flex flex-col items-center ${isPc ? 'gap-10' : 'gap-2 md:gap-4'}`}>
            <div
                className={`relative rounded-[10px] overflow-hidden ${
                    isPc ? 'w-[186px] h-[228px]' : 'w-[90px] h-[109px] md:w-[140px] md:h-[170px]'
                }`}
            >
                <Image src={item.image} alt={item.label} fill sizes="186px" />
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
    return (
        <main>
            {/* 히어로 영역 */}
            <MainHero />

            {/* 진료과목 영역 */}
            <section className="w-full py-[62px] lg:py-[150px]">
                <div className="max-w-[1320px] mx-auto px-5 md:px-10 min-[1320px]:px-0">
                    <SectionHeading subtitle="SERVICES" title="진료과목" />

                    {/* 모바일/태블릿 */}
                    <div className="flex justify-center items-center flex-wrap mt-[36px] lg:hidden">
                        <div className="flex flex-col gap-[30px] md:gap-[50px]">
                            <div className="flex justify-center items-center gap-3 md:gap-6">
                                {SERVICE_ITEMS.slice(0, 2).map((item) => (
                                    <ServiceCard key={item.id} item={item} size="mobile" />
                                ))}
                            </div>
                            <div className="flex justify-center items-center gap-3 md:gap-6">
                                {SERVICE_ITEMS.slice(2).map((item) => (
                                    <ServiceCard key={item.id} item={item} size="mobile" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* PC */}
                    <div className="hidden lg:flex justify-center items-center gap-[18px] mt-[40px]">
                        {SERVICE_ITEMS.map((item) => (
                            <ServiceCard key={item.id} item={item} size="pc" />
                        ))}
                    </div>
                </div>
            </section>

            {/* 오시는 길 & 병원 소개 영역 */}
            <ContactSection />
        </main>
    );
}
