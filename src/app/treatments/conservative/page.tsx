import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Features from '@/components/sections/Features';
import ContactSection from '@/components/sections/ContactSection';
import IntroBand from '@/components/sections/IntroBand';

export default function ConservativePage() {
    return (
        <main className="w-full">
            <SubPageHero
                title="보존진료 소개"
                desc={'손상된 치아를 발치하지 않고 자연치아를 \n최대한 살려 기능을 유지하는 치료'}
                bgImageName="bg_sub_01" // 서브이미지 01로 변경
            />

            <IntroBand
                topLabel="SEOUL NEW DENTAL"
                accent="DOCTOR CONSULTATION"
                isLine
                desc={
                    <>
                        <strong className="block font-medium! lg:inline lg:mr-[6px] mb-[14px] lg:mb-0">
                            자연치아를 지키는 가장 신중한 선택
                        </strong>
                        <span className="inline">
                            불필요한 치료를 지양하고 가능한 한 자연치아를 <br className="block lg:hidden" />
                            보존하는 방향으로 진료합니다. <br />
                            정확한 진단과 섬세한 치료를 통해 치아의 <br className="block lg:hidden" />
                            수명을 오래 유지할 수 있도록 돕습니다.
                        </span>
                    </>
                }
                bgImage="/images/bg_band_01.jpg"
                bgPos="object-[70%_center] lg:object-center"
            />

            <section
                className="w-full py-[60px] lg:py-[140px] px-[20px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bg_stone.jpg')" }}
            >
                {/* 기존 충치 원인 내용 (수정 없음) */}
                <div className="max-w-[1040px] mx-auto flex flex-col items-center">
                    <SectionHeading subtitle="CAVITY CAUSES" title="충치는 왜 생기는 건가요?" />
                    <p className="mt-[20px] text-center text-[14px] lg:text-[18px] font-medium leading-[1.6] break-keep">
                        입안의 세균이 음식물을 분해하면서 산을 만들어
                        <br />
                        치아를 서서히 녹이면서 발생합니다.
                    </p>

                    <div className="relative w-[162px] h-[162px] border border-primary rounded-full lg:w-[269px] lg:h-[269px] mt-[40px] mb-[68px] lg:mt-[56px] lg:mb-[95px]">
                        <img src="/images/img_why.png" className="rounded-full " alt="" />
                    </div>

                    <div className="w-full border border-primary rounded-[10px] px-[40px] pt-[60px] pb-[34px] lg:px-[67px] lg:pt-[67px] lg:pb-[42px] relative bg-white">
                        <div className="absolute top-[-18px] lg:top-[-22px] left-1/2 -translate-x-1/2 border border-primary rounded-full px-[28px] py-[6px] lg:py-[8px] lg:px-[42px] w-max mx-auto bg-[#F2F4F3]">
                            <span className="font-medium text-[20px]/[35px] lg:text-[30px]/[35px]">
                                치료가 필요한 경우
                            </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-y-[18px] lg:gap-y-[27px] gap-x-[40px] lg:gap-x-[60px]">
                            {[
                                '치아표면이 까맣게 변한 경우',
                                '음식물이 자주 끼는 경우',
                                '씹을 때 불편감이나 통증이 있는 경우',
                                <>
                                    음식이나 단 음식을 섭취하였을 때 <br className="block lg:hidden" />
                                    시린 느낌이 있는 경우
                                </>,
                            ].map((text, idx) => (
                                <div key={idx} className="flex items-start lg:items-center gap-[10px] lg:gap-[20px]">
                                    <img
                                        src="/images/i_check_g.svg"
                                        alt="check"
                                        className="w-[17px] lg:w-[34px] mt-[2px] lg:mt-0 shrink-0"
                                    />
                                    <span className=" text-[15px]/[24px] lg:text-[20px]/[25px] font-medium break-keep">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 배경 이미지 제거 bgImage="none" 전달 */}
            <Features
                bgImage="none"
                centerText={`충치를 치료하는 \n과정은 \n무엇인가요?`}
                mainTitle="충치 치료 과정"
                items={[
                    {
                        id: '1',
                        num: '01',
                        title: '초기충치',
                        desc: '치아의 가장 바깥층에만 충치가 있는\n단계로 충치부위를 제거한 후, 레진을\n사용하여 치료할 수 있습니다.',
                    },
                    {
                        id: '2',
                        num: '02',
                        title: '중기충치',
                        desc: '충치범위가 상아질까지 진행된 경우로\n충치부위를 제거한 후, 맞춤 인레이를\n제작하여 치료할 수 있습니다.',
                    },
                    {
                        id: '3',
                        num: '03',
                        title: '진행된 충치',
                        desc: '충치범위가 넓거나 깊은 경우 충치부위를\n제거한 후, 치아전체를 덮는 맞춤\n크라운을 제작하여 치료할 수 있습니다.',
                    },
                    {
                        id: '4',
                        num: '04',
                        title: '심한충치 (신경치료)',
                        desc: '충치가 신경까지 진행된 경우\n감염된 신경을 제거하고 소독·충전하는\n신경치료 후 맞춤 크라운으로 보호합니다.',
                    },
                ]}
            />
            <section className="w-full py-[50px] lg:py-[140px] px-5 sm:px-[36px] bg-primary">
                <div className="max-w-[965px] mx-auto">
                    <SectionHeading
                        subtitle="DENTAL RESTORATIONS"
                        title="보철물 소개"
                        titleClassName="text-[25px]/[35px] lg:text-[35px] font-bold text-white text-center"
                        subtitleClassName="text-[13px] font-normal mb-[2px] lg:text-[16px] text-white text-center"
                    />

                    {/* 보철물 테이블 전체 박스 */}
                    <div className="mt-8 lg:mt-[60px] rounded-[10px] lg:rounded-[20px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.05)] text-center border border-white/20">
                        {/* PC/태블릿 전용 헤더 (md 이상에서만 노출) */}
                        <div className="hidden md:grid grid-cols-2 bg-white">
                            <h3 className="py-[16px] lg:py-[22px] text-[18px] lg:text-[22px] font-bold text-primary-dark ">
                                인레이
                            </h3>
                            <h3 className="py-[16px] lg:py-[22px] text-[18px] lg:text-[22px] font-bold text-primary-dark">
                                크라운
                            </h3>
                        </div>

                        {/* 본문 그리드 영역 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#6B8A7A]">
                            {/* 좌측 컬럼: 인레이 상세 영역 */}
                            {/* #STYLE: 모바일 인레이 파트 상단 여백 제거(pt-0) 및 촘촘한 요소 간격 구성 */}
                            <div className="flex flex-col gap-6 pb-6 pt-0 md:p-5 lg:p-[25px] md:border-r md:border-white/20 text-white">
                                {/* 모바일 전용 헤더 라벨 (PC처럼 흰색 바탕 꽉 차게 변경 및 갭 타이트하게 밀착) */}
                                <div className="block md:hidden w-full bg-white py-[14px] text-[16px] font-bold text-primary-dark border-b border-[#E5E7EB] ">
                                    인레이
                                </div>

                                {/* 레진 인레이 */}
                                <div className="flex flex-col items-center px-5 md:px-0">
                                    <div className="w-full rounded-[8px] overflow-hidden bg-white/10">
                                        <img
                                            src="/images/img_in_01.png"
                                            alt="emax resin inlay"
                                            className="w-full h-auto object-cover rounded-[12px]"
                                        />
                                    </div>
                                    {/* #STYLE: 특수문자를 개별 span 태그로 분리 정렬 */}
                                    <h4 className="mt-4 lg:mt-[22px] text-[18px] lg:text-[25px] font-bold flex items-center justify-center gap-1">
                                        <span className="inline-block text-white mt-1 select-none">•</span>
                                        <span className="tracking-tight">emax resin inlay</span>
                                    </h4>
                                    <p className="mt-1.5 text-[13px] lg:text-[15px]/[25px] font-medium opacity-90 break-keep">
                                        치아 색과 유사해
                                        <br />
                                        심미성이 우수하고 가성비가 좋습니다
                                    </p>
                                </div>

                                {/* 골드 인레이 */}
                                <div className="flex flex-col items-center px-5 md:px-0">
                                    <div className="w-full rounded-[8px] overflow-hidden bg-white/10">
                                        <img
                                            src="/images/img_in_03.png"
                                            alt="gold inlay"
                                            className="w-full h-auto object-cover rounded-[12px]"
                                        />
                                    </div>
                                    {/* #STYLE: 특수문자를 개별 span 태그로 분리 정렬 */}
                                    <h4 className="mt-4 lg:mt-[22px] text-[18px] lg:text-[25px] font-bold flex items-center justify-center gap-1">
                                        <span className="inline-block text-white mt-1 select-none">•</span>
                                        <span className="tracking-tight">gold inlay</span>
                                    </h4>
                                    <p className="mt-1.5 text-[13px] lg:text-[15px]/[25px] font-medium opacity-90 break-keep">
                                        생체 친화성이 높고 강도가 뛰어나
                                        <br />
                                        깨질 우려가 적은 금 인레이입니다
                                    </p>
                                </div>
                            </div>

                            {/* 우측 컬럼: 크라운 상세 영역 */}
                            {/* #STYLE: 모바일 크라운 파트 상단 여백 제거(pt-0) 및 모바일 전용 상단 보더라인 갭 최적화 */}
                            <div className="flex flex-col gap-6 pb-6 pt-0 md:p-5 lg:p-[25px] text-white border-t border-white/20 md:border-t-0 md:border-l md:border-white/20">
                                {/* 모바일 전용 헤더 라벨 (PC처럼 흰색 바탕 꽉 차게 변경 및 갭 타이트하게 밀착) */}
                                <div className="block md:hidden w-full bg-white py-[14px] text-[16px] font-bold text-primary-dark border-b border-[#E5E7EB] ">
                                    크라운
                                </div>

                                {/* 지르코니아 */}
                                <div className="flex flex-col items-center px-5 md:px-0">
                                    <div className="w-full rounded-[8px] overflow-hidden bg-white/10">
                                        <img
                                            src="/images/img_in_02.png"
                                            alt="zirconia"
                                            className="w-full h-auto object-cover rounded-[12px]"
                                        />
                                    </div>
                                    {/* #STYLE: 특수문자를 개별 span 태그로 분리 정렬 */}
                                    <h4 className="mt-4 lg:mt-[22px] text-[18px] lg:text-[25px] font-bold flex items-center justify-center gap-1">
                                        <span className="inline-block text-white mt-1 select-none">•</span>
                                        <span className="tracking-tight">zirconia</span>
                                    </h4>
                                    <p className="mt-1.5 text-[13px] lg:text-[15px]/[25px] font-medium opacity-90 break-keep">
                                        세라믹 중 강도가 가장 우수하며,
                                        <br />
                                        치아색과 비슷해 인기가 많습니다
                                    </p>
                                </div>

                                {/* PFM 크라운 */}
                                <div className="flex flex-col items-center px-5 md:px-0">
                                    <div className="w-full rounded-[8px] overflow-hidden bg-white/10">
                                        <img
                                            src="/images/img_in_04.png"
                                            alt="pfm"
                                            className="w-full h-auto object-cover rounded-[12px]"
                                        />
                                    </div>
                                    {/* #STYLE: 특수문자를 개별 span 태그로 분리 정렬 */}
                                    <h4 className="mt-4 lg:mt-[22px] text-[18px] lg:text-[25px] font-bold flex items-center justify-center gap-1">
                                        <span className="inline-block text-white mt-1 select-none">•</span>
                                        <span className="tracking-tight">pfm</span>
                                    </h4>
                                    <p className="mt-2 text-[13px] lg:text-[15px]/[25px] font-medium opacity-90 break-keep">
                                        겉은 치아 색 도자기, 속은 메탈로
                                        <br />
                                        제작된 강도 좋은 크라운입니다
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-[60px] lg:py-[140px] px-[20px] bg-[#f9f9f9]">
                <div className="max-w-[845px] mx-auto">
                    <SectionHeading subtitle="ROOT CANAL" title="신경치료 과정" />

                    <div className="grid grid-cols-2 lg:flex lg:justify-center gap-x-[20px] gap-y-[40px] lg:gap-[70px] mt-[40px] lg:mt-[43px]">
                        {[
                            { num: '01', desc: '충치로 감염된\n신경 제거', img: '/images/img_root_01.png' },
                            {
                                num: '02',
                                desc: '세균이 남지 않도록\n여러번 치아 뿌리\n내부 소독',
                                img: '/images/img_root_02.png',
                            },
                            {
                                num: '03',
                                desc: '비어있는 공간을\n충전 전용 재료로\n밀폐하여 재감염방지',
                                img: '/images/img_root_03.png',
                            },
                            {
                                num: '04',
                                desc: '충전까지 진행한 후,\n약해진 치아를 보호하기\n위해 크라운 적용',
                                img: '/images/img_root_04.png',
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex justify-center w-full lg:w-auto">
                                <div className="flex flex-col items-center text-center w-[143px] lg:w-[160px]">
                                    <div className="relative w-[143px] h-[143px] lg:w-[160px] lg:h-[160px] rounded-full border-2 border-primary bg-white overflow-hidden mb-[15px] lg:mb-[10px]">
                                        <Image
                                            src={item.img}
                                            alt={`신경치료 과정 ${item.num}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="relative w-[58px] h-[34px] flex justify-center items-center mb-[10px] lg:mb-[6px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="58"
                                            height="34"
                                            viewBox="0 0 58 34"
                                            fill="none"
                                            className="absolute inset-0 z-0"
                                        >
                                            <ellipse
                                                cx="28.6965"
                                                cy="16.941"
                                                rx="30"
                                                ry="14.5"
                                                transform="rotate(-19.4834 28.6965 16.941)"
                                                fill="#769283"
                                            />
                                        </svg>
                                        <span className="relative font-accent z-10 text-white text-[20px]/[22px]">
                                            {item.num}
                                        </span>
                                    </div>

                                    <p className="text-[#555] text-[15px]/[21px] lg:text-[15px] leading-[1.6] whitespace-pre-line break-keep">
                                        {item.desc}
                                    </p>
                                </div>

                                {idx < 3 && (
                                    <div
                                        className={`
                                        ${idx === 1 ? 'hidden lg:flex' : 'flex'} 
                                        absolute 
                                        top-[60px] lg:top-[80px] 
                                        right-[-10px] lg:right-[-35px] 
                                        translate-x-1/2 
                                        -translate-y-1/2 
                                        z-10
                                    `}
                                    >
                                        <img src="/images/arr_r_g.png" alt="다음" className="w-[8px] lg:w-[12px]" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
