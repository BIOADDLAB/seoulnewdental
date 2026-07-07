import Image from 'next/image';
import SectionHeading from '@/components/common/SectionHeading';

export interface FeatureItem {
    id: string;
    num: string;
    title: string;
    desc: string;
}

export interface FeaturesProps {
    topSubtitle?: string;
    topTitle?: string;
    bgImage?: string;
    centerText: string;
    mainTitle?: string;
    items: FeatureItem[];
    bottomBox?: {
        title: string;
        list: string[];
    };
}

export default function Features({
    topSubtitle,
    topTitle,
    bgImage = "url('/images/bg_stone_02.jpg')",
    centerText,
    items,
    bottomBox,
}: FeaturesProps) {
    return (
        <section
            className={`w-full relative overflow-hidden py-[60px] px-[32px] lg:py-[140px] lg:px-0 ${
                bgImage !== 'none' ? 'bg-cover bg-center' : 'bg-transparent'
            }`}
            style={bgImage !== 'none' ? { backgroundImage: bgImage } : undefined}
        >
            <div className="mx-auto max-w-[1200px] flex flex-col items-center">
                {(topSubtitle || topTitle) && <SectionHeading title={topTitle || ''} subtitle={topSubtitle} />}

                <div className="relative w-full max-w-[1000px] flex flex-col mt-[35px] lg:mt-[72px] lg:flex-row lg:justify-between items-center lg:items-stretch z-10">
                    <div className="relative mb-[37px] lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 w-[234px] h-[234px] lg:w-[404px] lg:h-[404px]">
                        <div className="relative bg-primary/40 w-full h-full rounded-full">
                            <div className="absolute bg-primary/70 w-[192px] h-[192px] lg:w-[309px] lg:h-[309px] lg:bottom-[17px] rounded-full bottom-[12px] left-1/2 -translate-x-1/2">
                                <div className="absolute bg-primary w-[144px] h-[144px] lg:w-[233px] lg:h-[233px] lg:bottom-[17px] rounded-full bottom-[10px] left-1/2 -translate-x-1/2 flex justify-center items-center text-center text-white text-[18px]/[25px] lg:text-[25px]/[43px] font-semibold">
                                    <span className="whitespace-pre-line">{centerText}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:hidden w-full flex-col gap-[30px] mb-[30px]">
                        {items.map((item) => (
                            <div key={item.id} className="relative w-full flex flex-col items-center bg-transparent">
                                <div className="relative w-full flex items-center justify-center gap-[8px] pb-[8px] border-b-0 border-primary">
                                    <span className="flex items-center justify-center w-[22px] h-[22px] shrink-0 rounded-full bg-primary text-white text-[13px] leading-none">
                                        {item.num}
                                    </span>
                                    <h4 className="font-semibold text-[20px] text-[#2C3D33]">{item.title}</h4>
                                </div>
                                <div className="pt-[10px] text-center">
                                    <p className="text-[15px]/[24px] text-[#2C3D33] font-medium break-keep whitespace-pre-line">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex flex-col w-full lg:w-[320px] gap-[30px] lg:gap-[230px] mb-[30px] lg:mb-0 lg:py-[40px]">
                        {[items[0], items[2]].map((item, idx) => (
                            <div
                                key={item.id}
                                className="relative w-full flex flex-col items-center lg:items-start bg-transparent"
                            >
                                <div className="relative w-full flex items-center justify-center lg:justify-start gap-[8px] lg:gap-[12px] pb-[8px] lg:pb-[12px] border-b-0 lg:border-b border-primary">
                                    <span className="flex items-center justify-center w-[22px] h-[22px] lg:w-[29px] lg:h-[29px] shrink-0 rounded-full bg-primary text-white text-[13px] lg:text-[14px] leading-none">
                                        {item.num}
                                    </span>
                                    <h4 className="font-semibold text-[20px] text-[#2C3D33]">{item.title}</h4>
                                    <svg
                                        className={`hidden lg:block absolute right-[-60px] w-[60px] h-[60px] pointer-events-none ${idx === 0 ? 'top-[100%]' : 'bottom-[0]'}`}
                                    >
                                        {idx === 0 ? (
                                            <line x1="0" y1="0" x2="60" y2="60" stroke="#769283" strokeWidth="1" />
                                        ) : (
                                            <line x1="0" y1="60" x2="60" y2="0" stroke="#769283" strokeWidth="1" />
                                        )}
                                    </svg>
                                </div>
                                <div className="pt-[10px] lg:pt-[16px] lg:pl-[44px] text-center lg:text-left">
                                    <p className="text-[15px]/[24px] font-medium break-keep whitespace-pre-line">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex flex-col w-full lg:w-[320px] gap-[30px] lg:gap-[230px] lg:py-[40px]">
                        {[items[1], items[3]].map((item, idx) => (
                            <div
                                key={item.id}
                                className="relative w-full flex flex-col items-center lg:items-start bg-transparent"
                            >
                                <div className="relative w-full flex items-center justify-center lg:justify-start gap-[8px] lg:gap-[12px] pb-[8px] lg:pb-[12px] border-b-0 lg:border-b border-primary">
                                    <svg
                                        className={`hidden lg:block absolute left-[-60px] w-[60px] h-[60px] pointer-events-none ${idx === 0 ? 'top-[100%]' : 'bottom-[0]'}`}
                                    >
                                        {idx === 0 ? (
                                            <line x1="60" y1="0" x2="0" y2="60" stroke="#769283" strokeWidth="1" />
                                        ) : (
                                            <line x1="60" y1="60" x2="0" y2="0" stroke="#769283" strokeWidth="1" />
                                        )}
                                    </svg>
                                    <span className="flex items-center justify-center w-[22px] h-[22px] lg:w-[29px] lg:h-[29px] shrink-0 rounded-full bg-primary text-white text-[13px] lg:text-[14px] leading-none">
                                        {item.num}
                                    </span>
                                    <h4 className="font-semibold text-[20px] text-[#2C3D33]">{item.title}</h4>
                                </div>
                                <div className="pt-[10px] lg:pt-[16px] lg:pl-[44px] text-center lg:text-left">
                                    <p className="text-[14px]/[24px] text-[#2C3D33] font-medium break-keep whitespace-pre-line">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {bottomBox && (
                    <div className="relative mt-[50px] lg:mt-[80px] w-full max-w-[800px] bg-white border border-gray-300 rounded-[12px] px-[24px] pt-[45px] pb-[24px] lg:px-[32px] lg:py-[32px] flex flex-col lg:flex-row justify-center items-center gap-[16px] lg:gap-[40px] shadow-sm">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-[30px] px-[20px] py-[6px] w-max max-w-[90%] text-center break-keep overflow-hidden flex items-center justify-center bg-white">
                            <Image
                                src="/images/bg_stone_02.jpg"
                                alt="background"
                                fill
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 300px"
                                className="object-cover z-0"
                            />
                            <span className="relative z-10 text-[#333] font-bold text-[14px] lg:text-[16px]">
                                {bottomBox.title}
                            </span>
                        </div>
                        {bottomBox.list.map((listItem, idx) => (
                            <div key={idx} className="flex items-center gap-[8px]">
                                <img src="/images/i_check_g.svg" alt="check" className="w-[16px] shrink-0" />
                                <span className="text-gray-700 font-medium text-[14px] lg:text-[15px]">{listItem}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
