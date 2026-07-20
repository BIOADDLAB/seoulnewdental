'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const POPUP_IMAGE = '/images/popups/popup1.jpeg';
const STORAGE_KEY = 'main-popup-hidden-date';

export default function MainPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hiddenDate = localStorage.getItem(STORAGE_KEY);
        if (hiddenDate !== new Date().toDateString()) {
            setIsOpen(true);
        }
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleHideToday = () => {
        localStorage.setItem(STORAGE_KEY, new Date().toDateString());
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <button
                type="button"
                aria-label="팝업 닫기"
                className="absolute inset-0 bg-black/60"
                onClick={handleClose}
            />

            <div
                role="dialog"
                aria-modal="true"
                aria-label="공지 팝업"
                className="relative z-10 flex max-h-[calc(100dvh-2rem)] w-[min(420px,92vw,calc((100dvh-5rem)*2084/3035))] flex-col overflow-hidden rounded-[10px] bg-white shadow-2xl"
            >
                <button
                    type="button"
                    aria-label="팝업 닫기"
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-lg leading-none text-white transition-colors hover:bg-black/70"
                >
                    ×
                </button>

                <div className="relative aspect-[2084/3035] w-full shrink min-h-0">
                    <Image
                        src={POPUP_IMAGE}
                        alt="건강보험심사평가원 DUR 우수기관 감사장"
                        fill
                        priority
                        sizes="(max-width: 420px) 92vw, 420px"
                        className="object-contain"
                    />
                </div>

                <div className="flex shrink-0 border-t border-[#e5e5e5]">
                    <button
                        type="button"
                        onClick={handleHideToday}
                        className="flex-1 py-3.5 text-[13px] font-medium text-[#666] transition-colors hover:bg-[#f7f7f7] sm:text-[14px]"
                    >
                        오늘 하루 보지 않기
                    </button>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="flex-1 border-l border-[#e5e5e5] py-3.5 text-[13px] font-semibold text-primary-dark transition-colors hover:bg-[#f7f7f7] sm:text-[14px]"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
