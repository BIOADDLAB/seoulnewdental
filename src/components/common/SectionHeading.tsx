interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    isLine?: boolean;
    isBg?: boolean;
    desc?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    descClassName?: string;
}

export default function SectionHeading({
    title,
    subtitle,
    isLine,
    isBg = false,
    desc,
    titleClassName = 'text-[25px]/[35px] font-bold lg:text-[30px]/[35px] lg:font-medium',
    subtitleClassName = 'font-accent text-[13px] font-normal lg:text-[20px]',
    descClassName = 'text-[15px]/[25px] mt-[20px] lg:text-[20px]/[35px]',
}: SectionHeadingProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            {subtitle && (
                <span className={`block mb-[1px] lg:mb-[7px] break-keep ${subtitleClassName}`}>{subtitle}</span>
            )}

            <h2 className={`text-primary-dark break-keep ${titleClassName}`}>{title}</h2>

            {/* #STYLE: isLine이 참일 때, isBg(어두운 배경) */}
            {isLine && (
                <span className={`mt-4 w-[1px] h-[15px] lg:h-[24px] ${isBg ? 'bg-white' : 'bg-primary-dark'}`} />
            )}

            {desc && <p className={`mt-2 whitespace-pre-line break-keep ${descClassName}`}>{desc}</p>}
        </div>
    );
}
