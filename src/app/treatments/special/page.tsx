// #PAGE: 특수진료 페이지
import SubPageHero from '@/components/sections/SubPageHero';
import SectionHeading from '@/components/common/SectionHeading';
import VerticalDivider from '@/components/common/VerticalDivider';
import IntroBand from '@/components/sections/IntroBand';
import ProcessSteps from '@/components/sections/ProcessSteps';
import ContactSection from '@/components/sections/ContactSection';
import Reveal from '@/components/common/Reveal';

const RECOMMEND_CLASS = 'text-[15px]/[24px] lg:text-[20px]/[35px] font-medium break-keep text-center';

export default function SpecialPage() {
    return (
        <main className="w-full">
            <SubPageHero
                title="특수진료 소개"
                desc={'환자상태를 고려한 맞춤\n특수진료를 제공합니다'}
                bgImageName="bg_sub_04"
            />

            {/* 투명교정 */}
            {/* #TODO: 이미지 위치 조정 */}
            <IntroBand
                accent="CLEAR ALIGNERS"
                accentClassName="text-[13px]! lg:text-[20px]! mt-0!"
                titleClassName="text-[20px]! mt-[0px]! font-medium! lg:text-[30px]!"
                title="투명교정"
                desc={'탈착이 가능한 투명장치를 이용하여\n치아를 점진적으로 이동시키는 교정치료'}
                bgImage="/images/bg_band_02.jpg"
            />

            <section className="w-full bg-primary pt-[62px] px-[24px] pb-[66px] lg:py-[110px]">
                <div className="mx-auto max-w-[900px] flex flex-col items-center text-white">
                    <Reveal variant="fade-up">
                        <SectionHeading
                            subtitle="RECOMMENDATIONS"
                            title="이런 경우에 추천됩니다!"
                            subtitleClassName="font-accent text-[15px] mb-[9px] font-normal lg:text-[20px] text-white lg:mb-[14px]"
                            titleClassName="text-[20px]/[35px] font-medium lg:text-[30px]/[50px] text-white"
                        />
                    </Reveal>
                    <ul className="flex flex-col items-center mt-[15px] lg:mt-[20px]">
                        {[
                            '눈에 띄지 않는 교정을 원하는 경우',
                            '직장 및 일상생활에서 심미가 중요한 경우',
                            '벌어진 치아 등 배열 개선이 필요한 경우',
                        ].map((text, idx) => (
                            <Reveal key={text} as="li" variant="fade-up" delay={idx * 80} className={RECOMMEND_CLASS}>
                                {text}
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>

            {/* #TODO: 배경 stone 몇번배경인지 확인 */}
            <ProcessSteps
                topSubtitle="BENEFITS"
                topTitle="장점 소개"
                desc={
                    <>
                        <span className="lg:hidden">{`착용시간이 매우 중요한 교정치료이기에 \n하루 권장시간을 꼭 지켜주세요!`}</span>
                        <span className="hidden lg:inline">
                            착용시간이 매우 중요한 교정치료이기에 하루 권장시간을 꼭 지켜주세요!
                        </span>
                    </>
                }
                titleClassName="!mb-[22px] lg:!mb-0"
                descClassName="text-[15px]/[24px] mt-[0px] lg:text-[20px]/[30px] lg:mt-[25px] mb-[28px] lg:mb-[50px]"
                circleSize="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
                lineHeight="h-[1px] lg:h-[3px]"
                numSizeClass="text-[13px]/[10px] mb-[6px] lg:text-[15px]/[10px] lg:mb-[24px]"
                textSizeClass="text-[13px]/[19px] lg:text-[15px]/[22px] lg:font-medium"
                sectionClass="lg:!pb-[140px]"
                items={[
                    {
                        id: '1',
                        num: '01',
                        text: (
                            <>
                                <span className="hidden lg:inline whitespace-pre-line">
                                    {'심미적 기능이 \n뛰어납니다.'}
                                </span>
                                <span className="lg:hidden whitespace-pre-line">{'뛰어난 \n심미적 기능'}</span>
                            </>
                        ),
                    },
                    {
                        id: '2',
                        num: '02',
                        text: (
                            <>
                                <span className="hidden lg:inline whitespace-pre-line">
                                    {'탈부착 기능으로 \n위생관리에 용이합니다.'}
                                </span>
                                <span className="lg:hidden whitespace-pre-line">
                                    {'탈착 가능으로, \n위생관리 용이'}
                                </span>
                            </>
                        ),
                    },
                    {
                        id: '3',
                        num: '03',
                        text: (
                            <>
                                <span className="hidden lg:inline whitespace-pre-line">
                                    {'일상생활에 비교적 \n편안합니다.'}
                                </span>
                                <span className="lg:hidden whitespace-pre-line">{'비교적 편안한 \n일상생활'}</span>
                            </>
                        ),
                    },
                ]}
            />

            {/* 지르코니아 */}
            {/* #TODO: 배경 확인 */}
            <IntroBand
                accent="ZIRCONIA"
                accentClassName="!text-[13px] lg:!text-[20px]/[30px] !mt-0 "
                title="지르코니아"
                titleClassName="!text-[20px] !font-medium !mt-0 lg:!text-[30px]/[44px]"
                desc={'자연스러움과 내구성을 동시에\n고려한 보철의 기준'}
                descClassName="!mt-[28px] lg:!mt-[24px]"
                bgImage="/images/bg_band_03.jpg"
            />

            <section className="w-full bg-primary pt-[62px] px-[24px] pb-[66px] lg:py-[110px]">
                <div className="mx-auto max-w-[900px] flex flex-col items-center text-white">
                    <Reveal variant="fade-up">
                        <SectionHeading
                            subtitle="RECOMMENDATIONS"
                            title="이런 경우에 추천됩니다!"
                            subtitleClassName="font-accent text-[15px] mb-[9px] font-normal lg:text-[20px] text-white lg:mb-[14px]"
                            titleClassName="text-[20px]/[35px] font-medium lg:text-[30px]/[50px] text-white"
                        />
                    </Reveal>
                    <ul className="flex flex-col items-center mt-[15px] lg:mt-[20px]">
                        {[
                            '자연스럽고 티나지 않는 보철을 원하는 경우',
                            '금속보철이 부담스러운 경우',
                            '오랫동안 사용할 수 있는 보철을 원하는 경우',
                        ].map((text, idx) => (
                            <Reveal key={text} as="li" variant="fade-up" delay={idx * 80} className={RECOMMEND_CLASS}>
                                {text}
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>

            {/* #TODO: 배경 stone 몇번배경인지 확인 */}
            <ProcessSteps
                topSubtitle="BENEFITS"
                topTitle="장점 소개"
                circleSize="w-[100px] h-[100px] lg:w-[185px] lg:h-[185px] "
                lineHeight="h-[1px] lg:h-[3px]"
                sectionClass="lg:pb-[140px]!"
                numSizeClass="text-[13px]/[10px] mb-[6px] lg:text-[15px]/[10px] lg:mb-[24px]"
                textSizeClass="text-[13px]/[19px] lg:text-[15px]/[22px] lg:font-medium"
                items={[
                    {
                        id: '1',
                        num: '01',
                        text: (
                            <>
                                <span className="hidden lg:inline whitespace-pre-line">
                                    {'자연치아와 유사한 \n색감과 심미적 기능이 \n뛰어납니다.'}
                                </span>
                                <span className="lg:hidden whitespace-pre-line">{'자연치아 같은 \n심미적 기능'}</span>
                            </>
                        ),
                    },
                    {
                        id: '2',
                        num: '02',
                        text: (
                            <>
                                <span className="hidden lg:inline whitespace-pre-line">
                                    {'높은 강도로 \n내구성이 우수합니다.'}
                                </span>
                                <span className="lg:hidden whitespace-pre-line">{'높은 강도로 \n내구성 우수'}</span>
                            </>
                        ),
                    },
                    {
                        id: '3',
                        num: '03',
                        text: (
                            <>
                                <span className="hidden lg:inline whitespace-pre-line">
                                    {'금속이 없어 잇몸 \n염증 및 변색 우려가 \n감소합니다.'}
                                </span>
                                <span className="lg:hidden whitespace-pre-line">{'무금속으로 \n염증·변색 감소'}</span>
                            </>
                        ),
                    },
                ]}
            />

            {/* 치아 성형 */}
            <section className="w-full bg-white py-[60px] px-[20px] lg:py-[140px]">
                <div className="mx-auto max-w-[900px] flex flex-col items-center">
                    <Reveal variant="fade-up">
                        <SectionHeading
                            subtitle="DENTAL VENEERS"
                            title="치아 성형"
                            titleClassName="lg:mb-[20px]"
                            desc={
                                <>
                                    <span className="lg:hidden">{`치아의 형태와 균형을 간단하게 \n다듬어 인상을 개선하는 시술`}</span>
                                    <span className="hidden lg:inline block">
                                        치아의 형태와 균형을 간단하게 다듬어 인상을 개선하는 시술
                                    </span>
                                </>
                            }
                        />
                    </Reveal>

                    <VerticalDivider spacing="both" />
                    {/* TODO: 그라디언트 시안 넓이 다시 확인 */}
                    <Reveal
                        variant="scale-in"
                        className="w-[274px] h-[34px] lg:w-[378px] lg:h-[47px] flex items-center justify-center text-white bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#769283_20%,#769283_80%,rgba(255,255,255,0)_100%)]"
                    >
                        <span className="text-[20px]/[35px] lg:text-[30px]/[35px] font-medium mr-2 ">추천</span>
                        <span className="font-point text-[30px]/[20px] lg:text-[50px]/[35px] block mt-[6px]">
                            Point!
                        </span>
                    </Reveal>

                    <div className="flex flex-col items-center gap-[10px] lg:gap-[20px] mt-[43px] lg:mt-[56px]">
                        {['앞니 모양이 고르지 않는 경우', '작은 깨짐이나 마모가 있는 경우'].map((text, idx) => (
                            <Reveal
                                key={text}
                                variant="fade-up"
                                delay={idx * 90}
                                className="flex items-center gap-[10px] lg:gap-[14px]"
                            >
                                <img src="/images/i_check_g.svg" alt="check" />
                                <span className="text-[15px]/[24px] lg:text-[20px]/[30px] font-medium break-keep tracking-tighter">
                                    {text}
                                </span>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal
                        as="p"
                        variant="fade-up"
                        className="mt-[32px] lg:mt-[56px] text-center text-[13px]/[21px] lg:text-[18px]/[30px] font-medium text-primary-dark break-keep tracking-tight"
                    >
                        치아 성형은 치아삭제를 최소화하여 진행할 수 있으며, <br className="block lg:hidden" />
                        비교적 간단한 시술로 <br className="hidden lg:block" />
                        빠른 개선이 가능하다는 장점이 있습니다!
                    </Reveal>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
