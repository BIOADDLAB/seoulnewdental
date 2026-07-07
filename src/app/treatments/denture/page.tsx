// #PAGE: 틀니 페이지
import Image from 'next/image';
import SubPageHero from '@/components/sections/SubPageHero';
import SectionHeading from '@/components/common/SectionHeading';
import IntroBand from '@/components/sections/IntroBand';
import ProcessSteps, { ProcessItem } from '@/components/sections/ProcessSteps';
import ContactSection from '@/components/sections/ContactSection';

const BENEFIT_ITEMS = [
    {
        id: 1,
        title: '치아 상실 보완 가능',
        desc: (
            <>
                <span className="md:hidden">
                    {'여러개의 치아가 상실된 경우에도 \n저작 기능과 구강 기능 회복에 효과적입니다.'}
                </span>
                <span className="hidden md:inline">
                    {
                        '여러개의 치아가 상실된 경우에도 전체적인 \n기능 회복이 가능하여 저작기능을 회복하는 데 \n효과적입니다.'
                    }
                </span>
            </>
        ),
        isHighlight: false,
        orderClass: 'order-2 md:order-1',
    },
    {
        id: 2,
        title: '빠른 회복',
        desc: '임플란트와 달리 수술과정이 없어 비교적\n빠르게 일상생활이 가능합니다.',
        isHighlight: true,
        orderClass: 'order-1 md:order-2',
    },
    {
        id: 3,
        title: '조정 및 관리 가능',
        desc: '사용 중 불편함이 있을 경우 조정이 가능하여\n지속적으로 편안함을 유지할 수 있습니다.',
        isHighlight: false,
        orderClass: 'order-3 md:order-3',
    },
];

const DENTURE_TYPES = [
    {
        id: 1,
        title: '전체틀니',
        subtitle: (
            <>
                <span className="block lg:inline text-[15px]/[24px] lg:text-[20px]/[35px] font-extrabold tracking-tight">
                    모든 치아를
                    <br className="lg:hidden" /> 상실한 경우
                </span>
                <span className="block lg:inline text-[15px]/[24px] lg:text-[20px]/[35px] font-normal lg:ml-1">
                    시행하는 방법
                </span>
            </>
        ),
        desc: (
            <>
                <span className="lg:hidden block w-full">
                    {'치아가 모두 상실된\n경우 사용하는 틀니로,\n저작 기능과 심미성을\n회복하는 데 도움을 줍니다.'}
                </span>
                <span className="hidden lg:inline">
                    {'치아가 모두 상실된 경우 사용하는 틀니로,\n저작 기능과 심미성을 회복하는 데 도움을 줍니다.'}
                </span>
            </>
        ),
        img: '/images/img_denture_01.jpg',
    },
    {
        id: 2,
        title: '부분틀니',
        subtitle: (
            <>
                <span className="block lg:inline font-bold">
                    치아가 일부
                    <br className="lg:hidden" /> 남아있는 경우
                </span>
                <span className="block lg:inline font-normal mt-[4px] lg:mt-0 lg:ml-1">시행하는 방법</span>
            </>
        ),
        desc: (
            <>
                <span className="lg:hidden block w-full">
                    {'자연치아가 일부 남아있는\n경우 사용하는 틀니로,\n상실된 치아 부위를\n효과적으로 보완합니다.'}
                </span>
                <span className="hidden lg:inline">
                    {'자연치아가 일부 남아 있는 경우 사용하는 틀니로,\n상실된 치아 부위를 효과적으로 보완합니다.'}
                </span>
            </>
        ),
        img: '/images/img_denture_02.jpg',
    },
];

const CARE_ITEMS: ProcessItem[] = [
    {
        id: 'c1',
        num: '01',
        text: (
            <>
                <span className="hidden lg:inline whitespace-pre-line">{'식사 후 세척은 \n필수입니다.'}</span>
                <span className="lg:hidden whitespace-pre-line">{'식사 후 \n세척 필수'}</span>
            </>
        ),
    },

    {
        id: 'c2',
        num: '02',
        text: (
            <>
                <span className="hidden lg:inline whitespace-pre-line">
                    {'일반치약 대신 전용 \n세정제로 부드러운 솔을 \n이용하여 관리합니다.'}
                </span>
                <span className="lg:hidden whitespace-pre-line">{'전용세정제, \n부드러운 솔로 \n관리'}</span>
            </>
        ),
    },
    {
        id: 'c3',
        num: '03',
        text: (
            <>
                <span className="hidden lg:inline whitespace-pre-line">
                    {'취침시에는 빼 두고, \n물에 보관해야 합니다.'}
                </span>
                <span className="lg:hidden whitespace-pre-line">{'취침 시, 탈착 후 \n물에 보관'}</span>
            </>
        ),
    },
    {
        id: 'c4',
        num: '04',
        text: (
            <>
                <span className="hidden lg:inline whitespace-pre-line">{'정기적인 치과 점검을 \n받아야합니다.'}</span>
                <span className="lg:hidden whitespace-pre-line">{'정기적인 \n치과 점검'}</span>
            </>
        ),
    },
    {
        id: 'c5',
        num: '05',
        text: (
            <>
                <span className="hidden lg:inline whitespace-pre-line">{'떨어뜨리지 않게 \n주의하셔야 합니다.'}</span>
                <span className="lg:hidden whitespace-pre-line">{'떨어뜨리지 \n않게 주의'}</span>
            </>
        ),
    },
];
export default function DenturePage() {
    return (
        <main className="w-full">
            <SubPageHero
                title="틀니 소개"
                desc={'치아결손을 보완하여 저작기능을\n회복하는 탈부착식 보철 치료'}
                bgImageName="bg_sub_05"
            />

            {/* 1920 기준 잘림 현상을 방지하기 위해 2xl:h-[1200px] 추가 */}
            <section className="relative w-full h-[537px] md:h-[700px] lg:h-[1020px] 2xl:h-[1200px] flex flex-col">
                <Image
                    src="/images/bg_denture_main.jpg"
                    alt="틀니 제작 모습"
                    fill
                    quality={100}
                    sizes="100vw"
                    className="object-cover object-bottom z-0"
                />

                <div className="absolute inset-0 z-10 pointer-events-none opacity-50 bg-[linear-gradient(180deg,#769283_0.27%,rgba(118,146,131,0.40)_67.79%,rgba(182,174,121,0)_100%)]" />
                <IntroBand
                    topLabel="SEOUL NEW DENTAL"
                    accent="DENTURES"
                    accentClassName="!mt-[2px] !mb-[27px] lg:!text-[30px] lg:!mb-[20px]"
                    isLine
                    lineClassName="bg-white"
                    title="경험으로 완성하는 편안한 틀니"
                    titleClassName="font-kcc !font-normal !text-[28px] lg:!text-[40px]/[50px]"
                    desc={
                        <>
                            <span className="lg:hidden whitespace-pre-line">
                                {
                                    '오랜 임상경험과 보철 전문 의료진, \n숙련된 기공사의 협업을 바탕으로 개인별 \n구강 상태에 맞춘 맞춤 보철물을 제작하여 \n편안하고 자연스러운 일상을 돕습니다.'
                                }
                            </span>
                            <span className="hidden lg:inline whitespace-pre-line">
                                {
                                    '저희 치과는 오랜 임상경험을 바탕으로 개개인에 맞춘 정밀한 제작과 조정을 통해 \n불편함을 줄이고 자연스러운 일상을 돕고 있습니다. \n보철분야를 전문으로 하는 의료진과 숙련된 틀니 기공사의 협업을 통해 맞춤형으로 제작하고 있습니다.'
                                }
                            </span>
                        </>
                    }
                    descClassName="mt-[15px] !font-medium lg:!mt-[20px] lg:text-[20px]"
                    positionClassName="top-[60px] lg:top-[94px]  left-1/2 -translate-x-1/2"
                    className="relative z-20 w-full !bg-transparent [&_h3]:text-white [&_p]:text-white [&_span]:text-white"
                />
            </section>

            {/* 장점소개 스톤1 적용 */}
            <section
                className="w-full bg-cover bg-center py-[62px] px-[24px] lg:pt-[114px] lg:pb-[125px]"
                style={{ backgroundImage: "url('/images/bg_stone.jpg')" }}
            >
                <div className="mx-auto max-w-[1100px] flex flex-col items-center">
                    <SectionHeading
                        subtitle="BENEFITS"
                        title="장점 소개"
                        subtitleClassName="!text-[13px] lg:!text-[20px]"
                        titleClassName="!text-[25px]/[35px] lg:!text-[30px]/[35px]"
                    />

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[20px] lg:gap-[33px] mt-[48px] lg:mt-[70px]">
                        {BENEFIT_ITEMS.map((item) => (
                            <div key={item.id} className={`flex flex-col items-center text-center ${item.orderClass}`}>
                                <div
                                    className={`w-full max-w-[274px] lg:max-w-[313px] rounded-full  lg:py-[10px] flex justify-center items-center ${
                                        item.isHighlight
                                            ? 'bg-primary text-white shadow-2xs'
                                            : 'bg-[#E0E0E0] text-primary-dark shadow-2xs'
                                    }`}
                                >
                                    <h4 className="text-[20px]/[35px] lg:text-[30px]/[35px] font-medium tracking-tight">
                                        {item.title}
                                    </h4>
                                </div>
                                <p className="mt-[24px] lg:mt-[30px] text-[14px]/[22px] lg:text-[15px]/[25px] font-medium text-primary-dark whitespace-pre-line break-keep px-[10px]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 틀니 방법 */}
            {/* #TODO: 이미지 넘버 확인 */}
            <section className="w-full bg-white py-[62px] px-[16px] lg:px-[24px] lg:py-[140px]">
                <div className="mx-auto max-w-[308px] lg:max-w-[902px] flex flex-col items-center">
                    <SectionHeading
                        subtitle="DENTURE PROCEDURE"
                        title="틀니 방법"
                        desc="틀니는 잔존 치아에 따라 종류가 달라집니다!"
                    />

                    <div className="w-full border border-primary/20 rounded-t-[3px] lg:rounded-t-[10px] mt-[40px] lg:mt-[50px]  lg:border-primary/50 overflow-hidden">
                        {/* 헤더 (전체틀니 / 부분틀니) */}
                        <div className="grid grid-cols-2 bg-primary">
                            {DENTURE_TYPES.map((type, idx) => (
                                <div
                                    key={`header-${type.id}`}
                                    className={`py-[4px] lg:py-[18px] text-center text-white text-[18px]/[27px] lg:text-[25px]/[27px] font-medium ${
                                        idx === 0 ? 'border-r border-primary/20 lg:border-primary/50' : ''
                                    }`}
                                >
                                    {type.title}
                                </div>
                            ))}
                        </div>

                        {/* 본문 콘텐츠 */}
                        <div className="grid grid-cols-2 bg-white">
                            {DENTURE_TYPES.map((type, idx) => (
                                <div
                                    key={`content-${type.id}`}
                                    className={`flex flex-col items-center text-center pt-[12px] pb-[20px] lg:pt-[30px] lg:px-[32px] lg:pb-[50px]  ${
                                        idx === 0 ? 'border-r border-primary/20' : ''
                                    }`}
                                >
                                    {/* 모바일 4:3, PC 1.6:1 비율 이미지 */}
                                    {/* #STYLE: 양옆 12px 여백을 위해 w-[calc(100%-24px)] 적용 */}
                                    <div className="relative w-[calc(100%-24px)] lg:w-full aspect-[4/3] lg:aspect-[1.6/1] rounded-[5px] overflow-hidden">
                                        <Image
                                            src={type.img}
                                            alt={type.title}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 500px"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* 굵기/줄바꿈이 분리된 서브타이틀 */}
                                    <div className="mt-[23px] lg:mt-[30px] px-[4px] lg:px-0 text-[14px]/[22px] lg:text-[18px]/[28px] text-primary-dark break-keep tracking-tight lg:tracking-normal">
                                        {type.subtitle}
                                    </div>

                                    {/* 구분선 */}
                                    <span className="block w-full max-w-[121px] h-[1px] bg-primary-dark/70 my-[20px] lg:my-[24px] lg:max-w-[335px]" />

                                    {/* 설명 텍스트 */}
                                    <p className="w-full px-[2px] lg:px-0 text-[13px]/[20px] lg:text-[15px]/[25px] font-normal text-primary-dark whitespace-pre-line break-keep tracking-tight lg:tracking-normal">
                                        {type.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 틀니 관리 방법 */}
            {/* #TODO: 배경 f9f9f9로 변경 + 안에 텍스트 정렬 확인 */}
            <ProcessSteps
                bgImage="none"
                sectionClass="bg-[#f9f9f9] lg:!pb-[140px]"
                topSubtitle="DENTURE CARE GUIDE"
                topTitle="틀니 관리 방법"
                desc="올바른 관리가 틀니의 편안함과 수명을 좌우합니다."
                items={CARE_ITEMS}
                titleClassName="!mb-[22px] lg:!mb-0"
                descClassName="text-[15px]/[24px] mt-[0px] lg:text-[20px]/[30px] lg:mt-[25px] mb-[28px] lg:mb-[60px]"
                circleSize="w-[100px] h-[100px] lg:w-[185px] lg:h-[185px]"
                lineHeight="h-[1px] lg:h-[3px]"
                numSizeClass="text-[13px]/[10px] mb-[6px] lg:text-[15px]/[10px] lg:mb-[25px]"
                textSizeClass="text-[13px]/[19px] lg:text-[15px]/[25px] lg:font-medium"
            />
            <ContactSection />
        </main>
    );
}
