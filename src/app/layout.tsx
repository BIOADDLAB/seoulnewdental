import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButton from '@/components/common/FloatingButton';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/constants/site';

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

const allura = localFont({
    src: '../../public/fonts/Allura-Regular.ttf',
    variable: '--font-point',
    weight: '400',
});

const kccEunyoung = localFont({
    src: '../../public/fonts/KCC은영체(웹,모바일제작용).woff2',
    variable: '--font-kcc',
    weight: '400',
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    verification: {
        google: 'u3N_D2-sODe6Rhz3QwX4lEMqVQKhNaf92d0uVZlnE8c',
        other: {
            'naver-site-verification': 'c7e0df730c8b9325de87df0ccae369d810693cc9',
        },
    },
    alternates: {
        types: {
            'application/rss+xml': `${SITE_URL}/rss.xml`,
        },
    },
    openGraph: {
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_NAME,
        locale: 'ko_KR',
        type: 'website',
        images: [{ url: '/og_img.png', width: 1200, height: 630 }],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko" className={`${suit.variable} ${aboreto.variable} ${allura.variable} ${kccEunyoung.variable}`}>
            <body className="antialiased">
                <Header />
                {children}
                <Footer />
                <FloatingButton />
            </body>
        </html>
    );
}
