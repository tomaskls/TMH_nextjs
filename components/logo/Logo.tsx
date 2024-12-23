import React from 'react';

interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  width?: number;
  height?: number;
}

export const Logo: React.FC<IconSvgProps> = ({
  size = 72, // padidinau numatytąjį dydį
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 400 200"
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" style={{stopColor: "currentColor", stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: "currentColor", stopOpacity: 0.7}} />
      </linearGradient>
    </defs>

    <g transform="translate(30, 30)">
      <path d="M0,0 h80" stroke="#FF1CF7" strokeWidth="15"/>
      <path d="M40,0 v90" stroke="#FF1CF7" strokeWidth="15"/>
      <rect fill="#FF1CF7" height="4" transform="rotate(45, 40, 42)" width="30" x="25" y="40"/>
      <rect fill="#FF1CF7" height="4" transform="rotate(-45, 40, 62)" width="30" x="25" y="60"/>
    </g>

    <g transform="translate(140, 30)">
      <path 
        d="M0,90 v-60 l40,90 l40,-90 v60" 
        fill="none" 
        stroke="url(#grad1)" 
        strokeLinecap="square"
        strokeWidth="15"
      />
      <circle cx="40" cy="45" fill="currentColor" r="4"/>
      <rect fill="currentColor" height="10" width="10" x="35" y="60"/>
    </g>

    <g transform="translate(250, 30)">
      <path 
        d="M0,0 v90 M0,45 h60 M60,0 v90" 
        stroke="currentColor" 
        strokeLinecap="round"
        strokeWidth="15"
      />
      <path d="M30,15 l30,0" stroke="currentColor" strokeWidth="4"/>
      <path d="M30,75 l30,0" stroke="currentColor" strokeWidth="4"/>
    </g>

    <g transform="translate(20, 140)">
      <line stroke="currentColor" strokeWidth="2" x1="0" x2="360" y1="0" y2="0"/>
      <circle cx="180" cy="0" fill="currentColor" r="4"/>
      <rect fill="currentColor" height="20" width="4" x="178" y="10"/>
    </g>
  </svg>
);

export default Logo;