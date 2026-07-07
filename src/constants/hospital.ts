export const HOSPITAL_INFO = {
    name: '서울NEW치과',
    ceo: '장삼철',
    address: '서울특별시 성북구 길음로2 지상 3층',
    tel: '02-942-0248',
    fax: '02-3292-0248',
    businessNumber: '209-90-12410',
    parking: '주차장 50대 완비, 무료 주차 가능',
    coordinates: {
        lat: 37.60432737438466,
        lng: 127.02474171888052,
    },
} as const;

export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${HOSPITAL_INFO.coordinates.lat},${HOSPITAL_INFO.coordinates.lng}&z=16&hl=ko&output=embed`;

export const GOOGLE_MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${HOSPITAL_INFO.coordinates.lat},${HOSPITAL_INFO.coordinates.lng}`;
