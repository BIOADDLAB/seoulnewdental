import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const suit = localFont({
    src: '../../public/fonts/SUIT-Variable.ttf',
    variable: '--font-sans',
    weight: '100 900',
});

const aboreto = localFont({
    src: '../../public/fonts/Aboreto-Regular.ttf',
    variable: '--font-accent',
    weight: '400',
});

export const metadata: Metadata = {
    title: '서울NEW치과',
    description: '정확한 진단과 따뜻한 진료로 함께하는 서울NEW치과',
    openGraph: {
        title: '서울NEW치과',
        description: '정확한 진단과 따뜻한 진료로 함께하는 서울NEW치과',
        url: 'https://실제도메인.com',
        siteName: '서울NEW치과',
        locale: 'ko_KR',
        type: 'website',
        images: [{ url: '/og_img.png', width: 1200, height: 630 }],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko" className={`${suit.variable} ${aboreto.variable}`}>
            <body className="antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
