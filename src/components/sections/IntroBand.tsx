import Image from 'next/image';
import { ReactNode } from 'react';

interface IntroBandProps {
    topLabel?: string;
    accent?: string;
    titleClassName?: string;
    accentClassName?: string;
    title?: ReactNode;
    isLine?: boolean;
    strong?: ReactNode;
    desc?: string | React.ReactNode;
    descClassName?: string;
    bgImage?: string;
    bgPos?: string;
    className?: string;
}

export default function IntroBand({
    topLabel,
    accent,
    accentClassName,
    titleClassName,
    descClassName,
    title,
    isLine,
    strong,
    desc,
    bgImage,
    bgPos,
    className = '',
}: IntroBandProps) {
    const isDark = !!bgImage;

    return (
        <section className={`w-full h-[364px] lg:h-[540px] relative overflow-hidden ${className}`}>
            {bgImage && (
                <>
                    {/* #STYLE: bgPos를 통해 해상도별 이미지 노출 위치 제어 */}
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        sizes="100vw"
                        className={`object-cover ${bgPos || 'object-center'}`}
                        aria-hidden
                    />
                    <div className="absolute inset-0 bg-[#414D46]/72" />
                </>
            )}

            <div
                className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  flex flex-col items-center text-center w-full ${
                    isDark ? 'text-white' : 'text-primary-dark'
                }`}
            >
                {topLabel && <span className="text-[15px]">{topLabel}</span>}

                {accent && (
                    <span
                        className={`font-accent text-[20px] lg:text-[30px] uppercase mt-[6px] ${accentClassName || ''}`}
                    >
                        {accent}
                    </span>
                )}

                {title && (
                    <h3
                        className={`text-[25px]/[35px] lg:text-[30px]/[40px] font-semibold whitespace-pre-line break-keep mt-2  ${titleClassName || ''}`}
                    >
                        {title}
                    </h3>
                )}

                {isLine && (
                    <span
                        className={`my-[20px] lg:my-[26px] w-[1px] h-[16px] lg:h-[22px] ${isDark ? 'bg-white' : 'bg-primary-dark'}`}
                    />
                )}

                {/* #ISSUE: strong과 desc가 모두 전달되었을 때 렌더링되는 블록 */}
                {strong && desc ? (
                    <p className="text-[15px]/[25px] lg:text-[20px]/[35px] font-medium whitespace-pre-line break-keep">
                        <strong className="block lg:inline text-[15px] lg:text-[20px]/[35px] font-medium mb-[14px] lg:mb-0 lg:mr-1">
                            {strong}
                        </strong>
                        <span className={`inline ${descClassName}`}>{desc}</span>
                    </p>
                ) : (
                    <>
                        {/* #ISSUE: strong 단독으로 전달되었을 때 렌더링되는 블록 */}
                        {strong && (
                            <strong className="text-[15px] font-medium! lg:text-[20px]/[25px] break-keep">
                                {strong}
                            </strong>
                        )}

                        {desc && (
                            <p
                                className={`text-[15px]/[25px] lg:text-[20px]/[35px] font-medium whitespace-pre-line break-keep mt-[14px] lg:mt-[18px] ${descClassName}`}
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
