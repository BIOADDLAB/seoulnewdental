// #STYLE: PC 이미지 확대 비율 및 반응형 줄바꿈 속성 수정
import Image from 'next/image';

interface SubPageHeroProps {
    title: string;
    desc: string;
    bgImageName: 'bg_sub_01' | 'bg_sub_02' | 'bg_sub_03' | 'bg_sub_04' | 'bg_sub_05' | 'bg_about';
    imagePos?: string;
}

// #ISSUE: 이미지 위치 추후에 각각조정하기
const DEFAULT_IMAGE_POS: Record<SubPageHeroProps['bgImageName'], string> = {
    bg_sub_01: 'object-center',
    bg_sub_02: 'object-center',
    bg_sub_03: 'object-center',
    bg_sub_04: 'object-center',
    bg_sub_05: 'object-center',
    bg_about: 'object-center',
};

export default function SubPageHero({ title, desc, bgImageName, imagePos }: SubPageHeroProps) {
    const position = imagePos ?? DEFAULT_IMAGE_POS[bgImageName];

    return (
        <section
            className="w-full relative overflow-hidden bg-cover bg-repeat px-[16px] pt-[16px] pb-[24px] lg:px-0 lg:pt-[45px] lg:pb-[78px]"
            style={{ backgroundImage: "url('/images/bg_stone.jpg')" }}
        >
            <div className="mx-auto max-w-[1360px] flex flex-col items-center justify-center">
                <div className="w-full h-[179px] sm:h-[350px] lg:h-[490px] rounded-[15px] lg:rounded-[50px] overflow-hidden shadow-md relative flex flex-col items-center justify-center text-center px-4">
                    <Image
                        src={`/images/${bgImageName}.jpg`}
                        alt={`${title} 배경 이미지`}
                        fill
                        priority
                        sizes="(max-width: 1143px) 100vw, 1143px"
                        className={`object-cover ${position}`}
                    />

                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(218,216,214,0.00)_0%,rgba(76,87,81,0.55)_80%)]" />

                    <div className="relative z-10 text-white flex flex-col items-center">
                        <h2 className="text-[25px]/[30px] font-semibold break-keep mb-3 lg:text-[40px]/[30px] lg:mb-4.5">
                            {title}
                        </h2>
                        <p className="text-[13px]/[20px] font-semibold whitespace-pre-line lg:whitespace-normal lg:break-keep lg:text-[25px]/[30px] max-w-[1000px]">
                            {desc}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center mt-[30px] lg:mt-[90px]">
                    <div className="relative w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] ">
                        <Image src="/images/logo_b_x4.png" alt="서울NEW치과 심볼" fill className="object-contain" />
                    </div>

                    <span className="text-[#988575] text-[15px]/[46px] font-bold  lg:text-[25px]/[46px]">
                        정확한 진단과 따뜻한 진료로 함께하겠습니다.
                    </span>
                </div>
            </div>
        </section>
    );
}
