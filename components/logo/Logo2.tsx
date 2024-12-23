import React from 'react';

interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    width?: number;
    height?: number;
}

export const Logo2: React.FC<IconSvgProps> = ({
    size = 72,
    width,
    height,
    ...props
}) => (
    <svg
        height={size || height}
        viewBox="0 0 300 300"
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M20 150 L100 30 L200 30 L280 150 L200 270 L100 270 Z"
            fill="#1e293b"
        />

        <path
            d="M40 150 Q150 50, 260 150 Q150 250, 40 150"
            fill="none"
            stroke="#38bdf8"
            strokeDasharray="4,4"
            strokeWidth="2"
        >
            <animate
                attributeName="strokeDashoffset"
                dur="1s"
                repeatCount="indefinite"
                values="0;8"
            />
        </path>

        <path
            d="M90 80 L210 80 M150 80 L150 220"
            stroke="#38bdf8"
            strokeLinecap="round"
            strokeWidth="8"
        >
            <animate
                attributeName="strokeWidth"
                dur="2s"
                repeatCount="indefinite"
                values="8;10;8"
            />
        </path>

        <path
            d="M100 220 L100 120 L150 180 L200 120 L200 220"
            fill="none"
            stroke="#38bdf8"
            strokeLinecap="round"
            strokeWidth="8"
        >
            <animate
                attributeName="stroke"
                dur="3s"
                repeatCount="indefinite"
                values="#38bdf8;#7dd3fc;#38bdf8"
            />
        </path>

        <circle cx="150" cy="80" fill="#7dd3fc" r="5">
            <animate
                attributeName="opacity"
                dur="2s"
                repeatCount="indefinite"
                values="1;0.5;1"
            />
        </circle>
        <circle cx="100" cy="120" fill="#7dd3fc" r="5" />
        <circle cx="200" cy="120" fill="#7dd3fc" r="5" />
        <circle cx="150" cy="180" fill="#7dd3fc" r="5" />

        <circle
            cx="150"
            cy="150"
            fill="none"
            r="120"
            stroke="#38bdf8"
            strokeOpacity="0.3"
            strokeWidth="0.5"
        />
    </svg>
);

export default Logo2;