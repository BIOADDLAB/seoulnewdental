import Image from 'next/image';
import { ReactNode } from 'react';

interface IntroBandProps {
    topLabel?: ReactNode;
    topLabelClassName?: string;
    accent?: ReactNode;
    accentClassName?: string;
    title?: ReactNode;
    titleClassName?: string;
    isLine?: boolean;
    lineClassName?: string;
    strong?: ReactNode;
    strongClassName?: string;
    desc?: ReactNode;
    descClassName?: string;
    bgImage?: string;
    bgPos?: string;
    className?: string;
    positionClassName?: string;
}

export default function IntroBand({
    topLabel,
    topLabelClassName,
    accent,
    accentClassName,
    title,
    titleClassName,
    isLine,
    lineClassName,
    strong,
    strongClassName,
    desc,
    descClassName,
    bgImage,
    bgPos,
    className = '',
    positionClassName,
}: IntroBandProps) {
    const isDark = !!bgImage;

    return (
        <section className={`w-full h-[364px] lg:h-[540px] 2xl:h-[700px] relative overflow-hidden ${className}`}>
            {bgImage && (
                <>
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        quality={100}
                        sizes="100vw"
                        className={`object-cover ${bgPos || 'object-center'}`}
                        aria-hidden
                    />
                    <div className="absolute inset-0 bg-[#414D46]/72" />
                </>
            )}

            <div
                className={`absolute flex flex-col items-center text-center w-full ${
                    isDark ? 'text-white' : 'text-primary-dark'
                } ${positionClassName ?? 'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'}`}
            >
                {topLabel && <span className={`text-[15px] ${topLabelClassName ?? ''}`}>{topLabel}</span>}
                {accent && (
                    <span
                        className={`font-accent text-[20px] lg:text-[30px] uppercase mt-[6px] ${accentClassName ?? ''}`}
                    >
                        {accent}
                    </span>
                )}
                {isLine && (
                    <span
                        className={`mb-[20px] lg:mb-[26px] w-[1px] h-[16px] lg:h-[22px] ${lineClassName ?? (isDark ? 'bg-white' : 'bg-primary-dark')}`}
                    />
                )}
                {title && (
                    <h3
                        className={`text-[25px]/[35px] lg:text-[30px]/[40px] font-semibold whitespace-pre-line break-keep ${titleClassName ?? ''}`}
                    >
                        {title}
                    </h3>
                )}
                {strong && desc ? (
                    <p className="mt-2 text-[15px]/[25px] lg:text-[20px]/[35px] font-medium whitespace-pre-line break-keep">
                        <strong
                            className={`block lg:inline text-[15px] lg:text-[20px]/[35px] font-medium mb-[14px] lg:mb-0 lg:mr-1 ${strongClassName ?? ''}`}
                        >
                            {strong}
                        </strong>
                        <span className={`inline ${descClassName ?? ''}`}>{desc}</span>
                    </p>
                ) : (
                    <>
                        {strong && (
                            <strong
                                className={`mt-2 text-[15px] font-medium! lg:text-[20px]/[25px] break-keep ${strongClassName ?? ''}`}
                            >
                                {strong}
                            </strong>
                        )}
                        {desc && (
                            <p
                                className={`text-[15px]/[25px] lg:text-[20px]/[35px] font-medium whitespace-pre-line break-keep mt-[14px] lg:mt-[18px] ${descClassName ?? ''}`}
                            >
                                {desc}
                            </p>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
