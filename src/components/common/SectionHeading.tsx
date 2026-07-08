import VerticalDivider from './VerticalDivider';

interface SectionHeadingProps {
    title: string | React.ReactNode;
    subtitle?: string;
    isLine?: boolean;
    isBg?: boolean;
    desc?: string | React.ReactNode;
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

            <h2
                className={`text-primary-dark break-keep whitespace-pre-line text-[25px]/[35px] font-bold lg:text-[30px]/[35px] lg:font-medium ${titleClassName ?? ''}`}
            >
                {title}
            </h2>

            {isLine && <VerticalDivider color={isBg ? 'bg-white' : 'bg-primary-dark'} spacing="top" />}

            {desc && (
                <p className={`${isLine ? '' : 'mt-2'} whitespace-pre-line break-keep ${descClassName}`}>{desc}</p>
            )}
        </div>
    );
}
