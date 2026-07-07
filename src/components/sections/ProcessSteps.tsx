// #ISSUE: 고정된 배경 이미지로 인해 다양한 페이지의 요구사항(스톤1/스톤2/#fff/#f9f9f9) 수용 불가
// #STYLE: bgImage, sectionClass 속성 추가 및 투명 처리 로직 구성
import SectionHeading from '@/components/common/SectionHeading';

export interface ProcessItem {
    id: string;
    num: string;
    text: string | React.ReactNode;
}

export interface ProcessStepsProps {
    topSubtitle?: string;
    topTitle?: string;
    titleClassName?: string;
    desc?: string | React.ReactNode;
    items: ProcessItem[];
    sectionClass?: string;
    circleSize?: string;
    lineHeight?: string;
    descClassName?: string;
    numSizeClass?: string;
    textSizeClass?: string;
    bgImage?: string;
}

export default function ProcessSteps({
    topSubtitle,
    topTitle,
    titleClassName,
    desc,
    items,
    sectionClass = '',
    circleSize,
    lineHeight,
    descClassName,
    numSizeClass: numSizeClassProp,
    textSizeClass: textSizeClassProp,
    bgImage = "url('/images/bg_stone.jpg')",
}: ProcessStepsProps) {
    const isFourItems = items.length === 4;

    const circleSizeClass = isFourItems
        ? 'w-[143px] h-[143px] md:w-[155px] md:h-[155px] lg:w-[175px] lg:h-[175px]'
        : (circleSize ?? 'w-[100px] h-[100px] md:w-[135px] md:h-[135px] lg:w-[175px] lg:h-[175px]');

    const numSizeClass =
        numSizeClassProp ??
        (isFourItems
            ? 'text-[15px] md:text-[13px] lg:text-[14px] mb-[14px] lg:mb-1'
            : 'text-[12px] md:text-[13px] lg:text-[14px] mb-[8px] lg:mb-1');
    const textSizeClass =
        textSizeClassProp ??
        (isFourItems
            ? 'text-[15px]/[24px] md:text-[14px] lg:text-[15px]/[25px]'
            : 'text-[12px]/[16px] md:text-[14px] lg:text-[15px]/[25px]');

    const renderCircle = (item: ProcessItem) => (
        <div
            key={item.id}
            className={`relative rounded-full bg-primary flex flex-col items-center justify-center shadow-sm shrink-0 ${circleSizeClass}`}
        >
            <div className="absolute inset-[2px] lg:inset-[5px] border border-white/40 lg:border-white/70 rounded-full pointer-events-none" />
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
            className={`w-full relative overflow-hidden py-[62px] px-[16px] md:px-10 lg:pt-[140px] lg:pb-[110px] lg:px-0 ${
                bgImage !== 'none' ? 'bg-cover bg-center' : ''
            } ${sectionClass}`}
            style={bgImage !== 'none' ? { backgroundImage: bgImage } : undefined}
        >
            <div className="mx-auto max-w-[1200px] flex flex-col items-center">
                {(topSubtitle || topTitle || desc) && (
                    <div className="w-full">
                        <SectionHeading
                            title={topTitle || ''}
                            titleClassName={`text-[25px]/[35px] font-bold lg:text-[30px]/[35px] lg:font-medium mb-[30px] lg:mb-[45px] ${titleClassName || ''}`}
                            subtitle={topSubtitle}
                            desc={desc}
                            descClassName={descClassName}
                        />
                    </div>
                )}

                {items.length === 3 && (
                    <div className="relative w-fit mx-auto flex justify-center items-center gap-[4px] md:gap-[24px] lg:gap-[45px]">
                        <div className={`absolute top-1/2 ${lineHeight ?? 'h-[3px]'} bg-primary ${lineOffsetClass}`} />
                        {items.map(renderCircle)}
                    </div>
                )}

                {items.length === 4 && (
                    <div className="w-full mx-auto">
                        <div className="hidden lg:flex relative w-fit mx-auto justify-center items-center gap-[57px]">
                            <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] ${lineOffsetClass}`} />
                            {items.map(renderCircle)}
                        </div>
                        <div className="flex lg:hidden flex-col gap-[22px] md:gap-[40px]">
                            <div className="flex justify-center w-full">
                                <div className="relative flex w-fit mx-auto justify-center gap-[22px] md:gap-[40px]">
                                    <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] ${lineOffsetClass}`} />
                                    {items.slice(0, 2).map(renderCircle)}
                                </div>
                            </div>
                            <div className="flex justify-center w-full">
                                <div className="relative flex w-fit mx-auto justify-center gap-[22px] md:gap-[40px]">
                                    <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] ${lineOffsetClass}`} />
                                    {items.slice(2, 4).map(renderCircle)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {items.length === 5 && (
                    <div className="w-full mx-auto flex flex-col gap-[30px] lg:gap-[50px]">
                        <div className="relative flex w-fit mx-auto justify-center gap-[4px] md:gap-[24px] lg:gap-[45px]">
                            <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] ${lineOffsetClass}`} />
                            {items.slice(0, 3).map(renderCircle)}
                        </div>
                        <div className="relative flex w-fit mx-auto justify-center gap-[4px] md:gap-[24px] lg:gap-[45px]">
                            <div className={`absolute top-1/2 h-[2px] bg-[#c0c8c2] ${lineOffsetClass}`} />
                            {items.slice(3, 5).map(renderCircle)}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
