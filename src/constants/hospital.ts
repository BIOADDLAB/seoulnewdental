export const HOSPITAL_INFO = {
    name: '서울NEW치과',
    ceo: '장삼철',
    address: '서울특별시 성북구 길음로2 지상 3층',
    tel: '02-942-0248',
    fax: '02-3292-0248',
    businessNumber: '209-90-12410',
    parking: '주차장 50대 완비, 무료 주차 가능',
    coordinates: {
        lat: 37.6043088,
        lng: 127.0246306,
    },
} as const;

export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${HOSPITAL_INFO.coordinates.lat},${HOSPITAL_INFO.coordinates.lng}&z=16&hl=ko&output=embed`;

export const GOOGLE_MAPS_LINK_URL =
    'https://www.google.com/maps/place/%EC%84%9C%EC%9A%B8%EB%89%B4%EC%B9%98%EA%B3%BC%EC%9D%98%EC%9B%90/data=!4m6!3m5!1s0x357cbc91e536485f:0xbf5bfe30ca389ac2!8m2!3d37.6043088!4d127.0246306!16s%2Fg%2F1vg4grll?entry=ttu';
