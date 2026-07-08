interface VerticalDividerProps {
    length?: string; // 라인 길이 (h-* 유틸리티), 위치마다 다를 수 있음
    color?: string; // 배경색 유틸리티 (bg-primary-dark, bg-white 등)
    spacing?: 'top' | 'bottom' | 'both' | 'none'; // 라인 기준 여백 방향
    className?: string;
}

const SPACING_CLASS: Record<NonNullable<VerticalDividerProps['spacing']>, string> = {
    top: 'mt-[20px] lg:mt-[24px]',
    bottom: 'mb-[20px] lg:mb-[24px]',
    both: 'my-[20px] lg:my-[24px]',
    none: '',
};

export default function VerticalDivider({
    length = 'h-[15px] lg:h-[24px]',
    color = 'bg-primary-dark',
    spacing = 'both',
    className = '',
}: VerticalDividerProps) {
    return <span className={`block w-[1px] ${length} ${color} ${SPACING_CLASS[spacing]} ${className}`} />;
}
