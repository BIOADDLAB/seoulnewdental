'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, ElementType } from 'react';

type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';

interface RevealProps {
    children: ReactNode;
    variant?: RevealVariant;
    delay?: number; // ms 단위, 리스트 순차 등장 시 사용
    className?: string;
    as?: ElementType;
}

const VARIANTS: Record<RevealVariant, Variants> = {
    'fade-up': { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
    'fade-in': { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    'slide-left': { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
    'slide-right': { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
    'scale-in': { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
};

// #STYLE: whileInView는 내부적으로 IntersectionObserver를 써서
// 화면에 이미 보이는 섹션도 관찰 시작과 동시에 바로 감지됨 (놓치는 경우 없음)
export default function Reveal({ children, variant = 'fade-up', delay = 0, className = '', as = 'div' }: RevealProps) {
    const MotionTag = (motion as unknown as Record<string, typeof motion.div>)[as as string] ?? motion.div;

    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={VARIANTS[variant]}
            transition={{ duration: 1, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </MotionTag>
    );
}
