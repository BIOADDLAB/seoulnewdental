import SubPageHero from '@/components/sections/SubPageHero';
import ProcessSteps from '@/components/sections/ProcessSteps';
import Features from '@/components/sections/Features';

export default function Home() {
    return (
        <main>
            <SubPageHero
                title="NEW치과 소개"
                desc={`정확한 진단과 정직한 진료로 \n오래도록 건강한 미소를 함께합니다.`}
                bgImageName="bg_about"
            />

            <Features
                topSubtitle="BENEFITS"
                topTitle="장점 소개"
                centerText={`무절개 임플란트의\n장점은\n무엇일까요?`}
                items={[
                    {
                        id: '1',
                        num: '01',
                        title: '출혈·통증 없음',
                        desc: '무절개 방식으로 출혈과 통증 부담없이\n편안하게 치료 받을 수 있습니다.',
                    },
                    { id: '2', num: '02', title: '빠른 회복', desc: '임플란트 수술 후 바로\n일상생활이 가능합니다.' },
                    {
                        id: '3',
                        num: '03',
                        title: '감염 위험 감소',
                        desc: '외부 노출이 줄어들어 감염 위험성을\n낮추는 데 도움이 됩니다.',
                    },
                    {
                        id: '4',
                        num: '04',
                        title: '전신질환 환자 수술가능',
                        desc: '고혈압, 당뇨, 심장질환 등 전신질환이\n있는 경우에도 환자의 상태를 고려해\n치료 계획을 수립합니다.',
                    },
                ]}
                bottomBox={{
                    title: '무절개 임플란트가 필요한 경우',
                    list: ['치과공포가 있는 환자', '전신질환이 있는 환자', '입을 오래 못 벌리는 환자'],
                }}
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
