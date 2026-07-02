import SectionHeading from '@/components/common/SectionHeading';

export default function Home() {
    return (
        <main>
            <SectionHeading
                subtitle="SERVICES"
                title="진료과목"
                desc="섹션헤딩테스트ㅇㅇㅇㅇ"
                isLine={true}
                isBg={false}
            />
            <div className="bg-gray-400 w-full h-[600px] mt-20"></div>
        </main>
    );
}
