import SubPageHero from '@/components/sections/SubPageHero';
import ProcessSteps from '@/components/sections/ProcessSteps';

export default function Home() {
    return (
        <main>
            <SubPageHero
                title="NEW치과 소개"
                desc={`정확한 진단과 정직한 진료로 \n오래도록 건강한 미소를 함께합니다.`}
                bgImageName="bg_about"
            />

            <ProcessSteps
                topSubtitle="Process"
                topTitle="임플란트 과정"
                items={[
                    { id: '1', num: '01', text: '정밀 진단 및 \n상담 진행' },
                    { id: '2', num: '02', text: '정확한 위치에 \n임플란트 식립' },
                    { id: '3', num: '03', text: '안정적인 \n연결 시행' },
                    { id: '4', num: '04', text: '치아기등과 심미성을 \n고려한 맞춤 보철' },
                ]}
            />
            <ProcessSteps
                topSubtitle="Process"
                topTitle="임플란트 과정"
                items={[
                    { id: '1', num: '01', text: '정밀 진단 및 \n상담 진행' },
                    { id: '2', num: '02', text: '정확한 위치에 \n임플란트 식립' },
                    { id: '3', num: '03', text: '안정적인 \n연결 시행' },
                ]}
            />
            <ProcessSteps
                topSubtitle="Process"
                topTitle="임플란트 과정"
                items={[
                    { id: '1', num: '01', text: '정밀 진단 및 \n상담 진행' },
                    { id: '2', num: '02', text: '정확한 위치에 \n임플란트 식립' },
                    { id: '3', num: '03', text: '안정적인 \n연결 시행' },
                    { id: '4', num: '04', text: '치아기등과 심미성을 ' },
                    { id: '5', num: '04', text: '치아기등과 심미성을 ' },
                ]}
            />
        </main>
    );
}
