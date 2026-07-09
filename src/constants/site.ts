export const SITE_URL = 'https://www.seoulnewdent.co.kr';

export const SITE_NAME = '서울NEW치과';

export const SITE_DESCRIPTION = '정확한 진단과 따뜻한 진료로 함께하는 서울NEW치과';

export const SITE_PAGES = [
    {
        path: '/',
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        priority: 1,
    },
    {
        path: '/about',
        title: 'NEW치과 소개',
        description: '서울NEW치과의 진료 철학, 신뢰, 진료과목을 소개합니다.',
        priority: 0.8,
    },
    {
        path: '/treatments/implant',
        title: '임플란트',
        description: '서울NEW치과 임플란트 진료 안내입니다.',
        priority: 0.8,
    },
    {
        path: '/treatments/denture',
        title: '틀니',
        description: '서울NEW치과 틀니 진료 안내입니다.',
        priority: 0.8,
    },
    {
        path: '/treatments/conservative',
        title: '보존진료',
        description: '서울NEW치과 보존진료 안내입니다.',
        priority: 0.8,
    },
    {
        path: '/treatments/general',
        title: '일반진료',
        description: '서울NEW치과 일반진료 안내입니다.',
        priority: 0.8,
    },
    {
        path: '/treatments/special',
        title: '특수진료',
        description: '서울NEW치과 특수진료 안내입니다.',
        priority: 0.8,
    },
] as const;
