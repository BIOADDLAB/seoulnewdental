'use client';

import { useEffect, useRef, useLayoutEffect, ReactNode, ElementType } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';

interface RevealProps {
    children: ReactNode;
    variant?: RevealVariant;
    delay?: number; // ms 단위, 리스트 순차 등장 시 사용
    className?: string;
    as?: ElementType;
}

const FROM_VARS: Record<RevealVariant, gsap.TweenVars> = {
    'fade-up': { opacity: 0, y: 28 },
    'fade-in': { opacity: 0 },
    'slide-left': { opacity: 0, x: -40 },
    'slide-right': { opacity: 0, x: 40 },
    'scale-in': { opacity: 0, scale: 0.94 },
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// #STYLE: ScrollTrigger의 once:true로 화면에 처음 들어올 때 한 번만 재생
export default function Reveal({ children, variant = 'fade-up', delay = 0, className = '', as = 'div' }: RevealProps) {
    const ref = useRef<HTMLElement>(null);
    const Tag = as;

    useIsomorphicLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(el, FROM_VARS[variant], {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.9,
                delay: delay / 1000,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                    invalidateOnRefresh: true,
                },
            });
        });

        // #ISSUE: 마운트 시점에 이미지/폰트 로딩이 안 끝나 트리거 위치가 어긋나는 문제
        // #STYLE: 레이아웃이 확정된 뒤 한 번 더 재계산해서 위치를 바로잡음
        const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);

        return () => {
            clearTimeout(refreshTimer);
            ctx.revert();
        };
    }, [variant, delay]);

    return (
        <Tag ref={ref} className={className}>
            {children}
        </Tag>
    );
}
