import Image from 'next/image';
import { HOSPITAL_INFO } from '@/constants/hospital';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#37493F]">
            <div>
                {/* 로고 영역 */}
                <Link href="/">
                    <img src="/images/logo_w.svg" alt="서울NEW치과 로고" />
                    <span className="tracking-normal">서울NEW치과</span>
                </Link>

                {/* 정보 영역 */}
                <address>
                    <div>
                        <span>대표원장: {HOSPITAL_INFO.ceo}</span>
                        <span>{HOSPITAL_INFO.address}</span>
                        <span>전화: {HOSPITAL_INFO.tel}</span>
                        <span>사업자등록번호: {HOSPITAL_INFO.businessNumber}</span>
                        <span>FAX: {HOSPITAL_INFO.fax}</span>
                    </div>
                </address>

                {/* 저작권 표기 영역 */}
                <div>
                    <p>COPYRIGHT ⓒ 2024 {HOSPITAL_INFO.name}</p>
                    <p>ALL RIGHT RESERVED. Made By 바이오애드랩.</p>
                </div>
            </div>
        </footer>
    );
}
