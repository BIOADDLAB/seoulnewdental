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
            className="w-full relative overflow-hidden bg-cover bg-center py-[40px] px-[16px] lg:py-[80px] lg:px-0"
            style={{ backgroundImage: bgImage }}
        >
            <div className="mx-auto max-w-[1200px] flex flex-col items-center">
                {/* #ISSUE: 기존 하드코딩 헤더를 SectionHeading 컴포넌트로 교체 */}
                {(topSubtitle || topTitle) && (
                    <div className="mb-[40px] lg:mb-[60px] w-full">
                        <SectionHeading title={topTitle || ''} subtitle={topSubtitle} />
                    </div>
                )}

                <div className="relative w-full max-w-[1000px] flex flex-col lg:flex-row lg:justify-between items-center lg:items-stretch z-10">
                    {/* #STYLE: 중앙 원형 그래픽 (비대칭 패딩 적용) 
                      원형 모양을 커스텀(svg 등)으로 교체하려면 이 div 블록(className="... z-20") 내부를 수정하시면 됩니다. 
                    */}
                    <div className="flex justify-center items-center relative mb-[40px] lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[240px] h-[240px] lg:w-[320px] lg:h-[320px] z-20">
                        <div className="absolute inset-0 bg-[#d8e0da] rounded-full opacity-60"></div>
                        <div className="absolute inset-[30px] lg:inset-[40px] bg-[#93ab9a] rounded-full opacity-80"></div>
                        <div className="absolute inset-[45px] lg:inset-[60px] bg-[#68866e] rounded-full flex items-center justify-center shadow-lg">
                            <p className="text-white text-center font-bold text-[16px]/[24px] lg:text-[20px]/[30px] whitespace-pre-line break-keep">
                                {centerText}
                            </p>
                        </div>
                    </div>
                    {/* --- 원형 모양 수정 영역 끝 --- */}

                    {/* 좌측(1, 3번) 아이템 */}
                    <div className="w-full lg:w-[320px] flex flex-col gap-[40px] lg:gap-[120px] mb-[40px] lg:mb-0 lg:py-[40px]">
                        {[items[0], items[2]].map((item, idx) => (
                            <div
                                key={item.id}
                                className="relative w-full flex flex-col items-center lg:items-start bg-transparent"
                            >
                                <div className="relative w-full flex items-center justify-center lg:justify-start gap-[8px] lg:gap-[12px] pb-[8px] lg:pb-[12px] border-b-0 lg:border-b border-[#a3b1a6]">
                                    <span className="flex items-center justify-center w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] shrink-0 rounded-full bg-[#68866e] text-white text-[13px] lg:text-[14px] font-bold">
                                        {item.num}
                                    </span>
                                    <h4 className="font-bold text-[16px] lg:text-[18px] text-[#333]">{item.title}</h4>

                                    {/* PC 전용 우측 연결선 */}
                                    <svg
                                        className={`hidden lg:block absolute right-[-60px] w-[60px] h-[60px] pointer-events-none ${idx === 0 ? 'top-[100%]' : 'bottom-[0]'}`}
                                    >
                                        {idx === 0 ? (
                                            <line x1="0" y1="0" x2="60" y2="60" stroke="#a3b1a6" strokeWidth="1.5" />
                                        ) : (
                                            <line x1="0" y1="60" x2="60" y2="0" stroke="#a3b1a6" strokeWidth="1.5" />
                                        )}
                                    </svg>
                                </div>
                                <div className="pt-[10px] lg:pt-[16px] lg:pl-[44px] text-center lg:text-left">
                                    <p className="text-[14px] lg:text-[15px]/[24px] text-gray-600 break-keep whitespace-pre-line">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 우측(2, 4번) 아이템 */}
                    <div className="w-full lg:w-[320px] flex flex-col gap-[40px] lg:gap-[120px] lg:py-[40px]">
                        {[items[1], items[3]].map((item, idx) => (
                            <div
                                key={item.id}
                                className="relative w-full flex flex-col items-center lg:items-start bg-transparent"
                            >
                                <div className="relative w-full flex items-center justify-center lg:justify-start gap-[8px] lg:gap-[12px] pb-[8px] lg:pb-[12px] border-b-0 lg:border-b border-[#a3b1a6]">
                                    {/* PC 전용 좌측 연결선 */}
                                    <svg
                                        className={`hidden lg:block absolute left-[-60px] w-[60px] h-[60px] pointer-events-none ${idx === 0 ? 'top-[100%]' : 'bottom-[0]'}`}
                                    >
                                        {idx === 0 ? (
                                            <line x1="60" y1="0" x2="0" y2="60" stroke="#a3b1a6" strokeWidth="1.5" />
                                        ) : (
                                            <line x1="60" y1="60" x2="0" y2="0" stroke="#a3b1a6" strokeWidth="1.5" />
                                        )}
                                    </svg>

                                    <span className="flex items-center justify-center w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] shrink-0 rounded-full bg-[#68866e] text-white text-[13px] lg:text-[14px] font-bold">
                                        {item.num}
                                    </span>
                                    <h4 className="font-bold text-[16px] lg:text-[18px] text-[#333]">{item.title}</h4>
                                </div>
                                <div className="pt-[10px] lg:pt-[16px] lg:pl-[44px] text-center lg:text-left">
                                    <p className="text-[14px] lg:text-[15px]/[24px] text-gray-600 break-keep whitespace-pre-line">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 하단 박스 영역 */}
                {bottomBox && (
                    <div className="relative mt-[50px] lg:mt-[80px] w-full max-w-[800px] bg-white border border-gray-300 rounded-[12px] p-[24px] lg:py-[32px] flex flex-col lg:flex-row justify-center items-center gap-[16px] lg:gap-[40px] shadow-sm">
                        <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-[30px] px-[20px] py-[6px]">
                            <span className="text-[#333] font-bold text-[14px] lg:text-[16px]">{bottomBox.title}</span>
                        </div>

                        {bottomBox.list.map((listItem, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#68866e] text-white text-[10px]">
                                    ✔
                                </span>
                                <span className="text-gray-700 font-medium text-[14px] lg:text-[15px]">{listItem}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
