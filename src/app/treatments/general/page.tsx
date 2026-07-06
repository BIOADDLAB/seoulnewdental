// #PAGE: 일반진료 페이지
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import SectionHeading from '@/components/common/SectionHeading';
import IntroBand from '@/components/sections/IntroBand';
import ContactSection from '@/components/sections/ContactSection';

const EXTRACTION_CASES = [
    '잇몸 속에 매복되어 통증을 유발하는 경우',
    '비스듬히 자라 주변치아를 손상시키는 경우',
    '음식물이 자주 끼어 염증이 반복되는 경우',
    '충치의 원인이 되는 경우',
];

const CAUTION_ITEMS = [
    '거즈는 지혈을 위해 1시간 정도 꼭 물고있기',
    '발치부위는 당일 과도한 양치나 자극 피하기',
    '자극적이고 뜨거운 음식 피하기',
    '음주, 흡연은 1주일 이상 피하기',
    '심한 운동 및 뜨거운 사우나는 1~2일 정도 피하기',
    '붓기나 통증이 있는 경우 냉찜질 해주기',
];

export default function GeneralPage() {
    return (
        <main className="w-full">
            <SubPageHero
                title="일반진료 소개"
                desc={'구강건강을 유지하고 예방하는\n기본 진료입니다'}
                bgImageName="bg_sub_02"
            />

            {/* 스케일링 및 잇몸치료 밴드 */}
            {/* #TODO: 이미지 영역 확인 + 높이 확인 모바일 319 웹 541 */}
            <IntroBand
                accent="PERIODONTAL CARE"
                title="스케일링 및 잇몸치료"
                desc={'치석과 구강 내 세균을 제거하여 구강건강을\n유지하고 예방하는 치료입니다.'}
                bgImage="/images/bg_band_04.jpg"
                accentClassName="!mt-0 !text-[15px] lg:!text-[20px]"
                titleClassName="!text-[20px]/[30px] lg:!text-[30px]"
                descClassName="!text-[15px]/[24px] lg:!text-[20px]/[35px]"
            />

            {/* 스케일링 필요성 */}
            <section
                className="w-full bg-cover bg-center py-[62px] px-[24px] lg:py-[120px]"
                style={{ backgroundImage: "url('/images/bg_stone_02.jpg')" }}
            >
                <div className="mx-auto max-w-[900px] flex flex-col items-center">
                    <SectionHeading
                        subtitle="PERIODONTAL CARE"
                        title="스케일링 및 잇몸치료는 왜 필요한 건가요?"
                        desc={
                            '구강 내에는 약 500여종 이상의 세균이 존재하며,\n이 세균들이 치아표면에 쌓여 치태와 치석을 유발합니다.\n\n제거되지 않은 치태 및 치석은 잇몸에 염증을 유발하고 차후 잇몸질환으로 이어지게 됩니다.'
                        }
                    />

                    <span className="block w-[1px] h-[40px] lg:h-[60px] bg-primary-dark/50 mt-[30px] lg:mt-[40px]" />

                    <div className="w-full max-w-[820px] bg-white rounded-[8px] shadow-sm px-[24px] py-[24px] lg:px-[50px] lg:py-[32px] mt-[30px] lg:mt-[40px]">
                        <p className="text-center text-[14px]/[24px] lg:text-[16px]/[28px] font-medium text-primary-dark break-keep">
                            스케일링과 잇몸치료는 이러한 원인을 제거하여 건강한 잇몸상태를 유지하는 데 중요한 역할을
                            하기에 정기적으로 치과에 내원하여 관리를 받아야 합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 사랑니 발치 10만건 밴드 */}
            <section className="w-full bg-primary py-[62px] px-[24px] lg:py-[100px]">
                <div className="mx-auto max-w-[900px] flex flex-col items-center text-center text-white">
                    <span className="font-accent text-[13px] lg:text-[20px] uppercase">WISDOM TEETH</span>
                    <h3 className="text-[25px]/[35px] font-bold lg:text-[30px]/[40px] lg:font-medium mt-1">
                        사랑니 발치
                    </h3>

                    <div className="flex items-end mt-[24px] lg:mt-[36px]">
                        <strong className="font-accent text-[80px]/[80px] lg:text-[130px]/[120px] font-light">
                            10
                        </strong>
                        <span className="text-[20px] lg:text-[28px] font-semibold pb-[6px] lg:pb-[12px] pl-[6px]">
                            만건
                        </span>
                    </div>
                </div>
            </section>

            {/* 사랑니 발치가 필요한 경우 */}
            <section
                className="w-full bg-cover bg-center py-[62px] px-[24px] lg:py-[120px]"
                style={{ backgroundImage: "url('/images/bg_stone_02.jpg')" }}
            >
                <div className="mx-auto max-w-[1000px] flex flex-col items-center">
                    <h2 title="사랑니 발치가 필요한 경우" />

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[18px] lg:gap-y-[24px] mt-[36px] lg:mt-[56px] w-full max-w-[860px]">
                        {EXTRACTION_CASES.map((item) => (
                            <li key={item} className="flex items-start gap-[10px]">
                                <img
                                    src="/images/i_check_g.svg"
                                    alt=""
                                    className="w-[20px] lg:w-[24px] shrink-0 mt-[1px]"
                                />
                                <span className="text-[14px]/[22px] lg:text-[16px]/[26px] font-medium text-primary-dark break-keep">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* 더보기 영역 */}
                    <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-[28px] lg:gap-[60px] mt-[60px] lg:mt-[110px]">
                        <div className="w-full lg:max-w-[480px]">
                            <span className="block w-full h-[1px] bg-primary" />
                            <span className="block text-[14px] lg:text-[16px] font-semibold text-primary-dark mt-[24px] lg:mt-[40px]">
                                [더보기]
                            </span>
                            <p className="mt-[16px] lg:mt-[28px] text-[13px]/[22px] lg:text-[15px]/[26px] font-medium text-primary-dark break-keep">
                                매복된 사랑니는 위치나 방향에 따라 인접치아를 손상시킬 수 있으며, 염증을 유발할 수
                                있기에 발치를 시행해야 할 수 있습니다. 저희 치과에서는 정확한 위치와 상태를 파악하기
                                위해 X-Ray 및 CT를 통해 신중하게 치료 계획을 수립하고 있습니다.
                            </p>
                        </div>

                        <div className="relative w-full h-[200px] lg:w-[406px] lg:h-[263px] shrink-0 overflow-hidden rounded-[6px]">
                            <Image
                                src="/images/img_xray.jpg"
                                alt="X-Ray 촬영 장비"
                                fill
                                sizes="(max-width: 1024px) 100vw, 406px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 발치 후 주의사항 */}
            <section className="w-full bg-white py-[62px] px-[24px] lg:py-[120px]">
                <div className="mx-auto max-w-[1000px] flex flex-col items-center">
                    <h2 title="사랑니 발치 후 주의사항" />

                    <div className="w-full mt-[36px] lg:mt-[60px]">
                        <div className="w-full max-w-[760px] mx-auto bg-[#F7F8F6] rounded-[16px] px-[28px] py-[28px] lg:px-[100px] lg:py-[44px]">
                            <ul className="flex flex-col gap-[14px] lg:gap-[16px]">
                                {CAUTION_ITEMS.map((item) => (
                                    <li key={item} className="flex items-start gap-[12px]">
                                        <img
                                            src="/images/i_check_g.svg"
                                            alt=""
                                            className="w-[20px] lg:w-[22px] shrink-0 mt-[1px]"
                                        />
                                        <span className="text-[14px]/[22px] lg:text-[16px]/[26px] font-medium text-primary-dark break-keep">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
