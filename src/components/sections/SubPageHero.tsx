import Image from 'next/image';

interface SubPageHeroProps {
    title: string;
    desc: string;
    bgImageName: 'bg_sub_01' | 'bg_sub_02' | 'bg_sub_03' | 'bg_sub_04' | 'bg_sub_05' | 'bg_sub_about';
    imagePositionClassName?: string;
}

export default function SubPageHero({
    title,
    desc,
    bgImageName,
    imagePositionClassName = 'object-center',
}: SubPageHeroProps) {
    return (
        <section
            className="w-full relative overflow-hidden bg-cover bg-repeat px-[16px] pt-[16px] pb-[24px] lg:px-0 lg:pt-[40px] lg:pb-[60px]"
            style={{ backgroundImage: "url('/images/bg_stone.jpg')" }}
        >
            <div className="mx-auto max-w-[1143px] flex flex-col items-center justify-center">
                <div className="w-full h-[200px] sm:h-[250px] lg:h-[380px] rounded-[15px] sm:rounded-[30px] overflow-hidden shadow-md relative flex flex-col items-center justify-center text-center px-4">
                    <Image
                        src={`/images/${bgImageName}.jpg`}
                        alt={`${title} 배경 이미지`}
                        fill
                        priority
                        sizes="(max-w-1143px) 100vw, 1143px"
                        className={`object-cover ${imagePositionClassName}`}
                    />

                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                'linear-gradient(360deg, rgba(76, 87, 81, 0.55) -33.33%, rgba(218, 216, 214, 0.00) 73.33%)',
                        }}
                    />

                    {/* 이미지 내부에 위치하는 콘텐츠 텍스트 */}
                    <div className="relative z-10 text-white flex flex-col items-center">
                        <h2 className="text-[28px]/[38px] font-bold break-keep lg:text-[45px]/[60px] tracking-tight mb-2 lg:mb-4">
                            {title}
                        </h2>
                        <p className="text-[14px]/[22px] font-medium opacity-90 break-keep lg:text-[18px]/[28px] max-w-[600px]">
                            {desc}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center mt-[30px] lg:mt-[50px]">
                    <div className="relative w-[32px] h-[32px] mb-3 lg:w-[40px] lg:h-[40px] lg:mb-4">
                        <Image src="/images/logo_b_x4.png" alt="서울NEW치과 심볼" fill className="object-contain" />
                    </div>

                    <span className="text-[#988575] text-[15px]/[22px] font-bold tracking-tight lg:text-[20px]/[30px]">
                        정확한 진단과 따뜻한 진료로 함께하겠습니다.
                    </span>
                </div>
            </div>
        </section>
    );
}
