// #LINK: @/components/common/SectionHeading
import SectionHeading from '@/components/common/SectionHeading';

export interface ProcessItem {
    id: string;
    num: string;
    text: string;
}

export interface ProcessStepsProps {
    topSubtitle?: string;
    topTitle?: string;
    desc?: string;
    items: ProcessItem[];
}

export default function ProcessSteps({ topSubtitle, topTitle, desc, items }: ProcessStepsProps) {
    const isFourItems = items.length === 4;

    const circleSizeClass = isFourItems
        ? 'w-[143px] h-[143px] md:w-[155px] md:h-[155px] lg:w-[175px] lg:h-[175px]'
        : 'w-[100px] h-[100px] md:w-[135px] md:h-[135px] lg:w-[175px] lg:h-[175px]';

    const numSizeClass = isFourItems
        ? 'text-[15px] md:text-[13px] lg:text-[14px] mb-[14px] lg:mb-1'
        : 'text-[12px] md:text-[13px] lg:text-[14px] mb-[8px] lg:mb-1';

    const textSizeClass = isFourItems
        ? 'text-[15px]/[24px] md:text-[14px] lg:text-[15px]/[25px]'
        : 'text-[12px]/[16px] md:text-[14px] lg:text-[15px]/[25px]';

    const renderCircle = (item: ProcessItem) => (
        <div
            key={item.id}
            className={`relative rounded-full bg-primary flex flex-col items-center justify-center shadow-sm shrink-0 ${circleSizeClass}`}
        >
            <div className="absolute inset-[4px] lg:inset-[6px] border border-white rounded-full pointer-events-none" />

            <span className={`text-white font-light ${numSizeClass}`}>{item.num}</span>
            <p
                className={`text-white text-center font-medium break-keep whitespace-pre-line px-2 lg:px-4 ${textSizeClass}`}
            >
                {item.text}
            </p>
        </div>
    );

    const lineOffsetClass = isFourItems
        ? 'left-[72px] right-[72px] md:left-[78px] md:right-[78px] lg:left-[88px] lg:right-[88px]'
        : 'left-[50px] right-[50px] md:left-[68px] md:right-[68px] lg:left-[88px] lg:right-[88px]';

    return (
        <section
            className="w-full relative overflow-hidden bg-cover bg-center py-[62px] px-[16px] lg:pt-[140px] lg:pb-[110px] lg:px-0"
            style={{ backgroundImage: "url('/images/bg_stone_02.jpg')" }}
        >
            <div className="mx-auto max-w-[1200px] flex flex-col items-center">
                {(topSubtitle || topTitle || desc) && (
                    <div className="mb-[46px] lg:mb-[60px] w-full">
                        <SectionHeading title={topTitle || ''} subtitle={topSubtitle} desc={desc} />
                    </div>
                )}

                {/* 3개 패턴 */}
                {items.length === 3 && (
                    // #STYLE: justify-between 제거 후 w-fit과 justify-center, gap 조합으로 정확한 간격 지정
                    <div className="relative w-fit mx-auto flex justify-center items-center gap-[4px] md:gap-[24px] lg:gap-[45px]">
                        <div className={`absolute top-1/2 h-[1px] bg-primary -z-10 ${lineOffsetClass}`} />
                        {items.map(renderCircle)}
                    </div>
                )}

                {/* 4개 패턴 */}
                {items.length === 4 && (
                    <div className="w-full mx-auto">
                        <div className="hidden lg:flex relative w-fit mx-auto justify-center items-center gap-[57px]">
                            <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] -z-10 ${lineOffsetClass}`} />
                            {items.map(renderCircle)}
                        </div>
                        <div className="flex lg:hidden flex-col gap-[22px] md:gap-[40px]">
                            <div className="flex justify-center w-full">
                                <div className="relative flex w-fit mx-auto justify-center gap-[22px] md:gap-[40px]">
                                    <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] -z-10 ${lineOffsetClass}`} />
                                    {items.slice(0, 2).map(renderCircle)}
                                </div>
                            </div>
                            <div className="flex justify-center w-full">
                                <div className="relative flex w-fit mx-auto justify-center gap-[22px] md:gap-[40px]">
                                    <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] -z-10 ${lineOffsetClass}`} />
                                    {items.slice(2, 4).map(renderCircle)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 5개 패턴 */}
                {items.length === 5 && (
                    <div className="w-full mx-auto flex flex-col gap-[30px] lg:gap-[50px]">
                        <div className="relative flex w-fit mx-auto justify-center gap-[4px] md:gap-[24px] lg:gap-[45px]">
                            <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] -z-10 ${lineOffsetClass}`} />
                            {items.slice(0, 3).map(renderCircle)}
                        </div>
                        <div className="relative flex w-fit mx-auto justify-center gap-[4px] md:gap-[24px] lg:gap-[45px]">
                            <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] -z-10 ${lineOffsetClass}`} />
                            {items.slice(3, 5).map(renderCircle)}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
