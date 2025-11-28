import React from 'react';

interface LogoProps {
  className?: string;
  color?: 'white' | 'blue';
}

export const Logo: React.FC<LogoProps> = ({ className = "", color = 'blue' }) => {
  const fillColor = color === 'white' ? '#ffffff' : '#1d4ed8'; // blue-700
  const waveColor = color === 'white' ? '#1d4ed8' : '#ffffff'; // Inverted for contrast in the wave cut

  return (
    <svg 
      viewBox="0 0 200 160" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="World Blue Economy Forum Logo"
    >
      {/* WORLD */}
      <text 
        x="100" 
        y="35" 
        textAnchor="middle" 
        fill={fillColor} 
        fontFamily="sans-serif" 
        fontWeight="300" 
        fontSize="24" 
        letterSpacing="2"
      >
        WORLD
      </text>

      {/* BLUE */}
      <text 
        x="100" 
        y="95" 
        textAnchor="middle" 
        fill={fillColor} 
        fontFamily="sans-serif" 
        fontWeight="900" 
        fontSize="62" 
        letterSpacing="-1"
      >
        BLUE
      </text>
      
      {/* Wave Cutout Effect */}
      {/* This path mimics the wave cutting through the bottom of BLUE */}
      <path 
        d="M 50 95 C 70 95, 80 75, 100 75 C 120 75, 130 90, 150 85" 
        stroke={color === 'white' ? '#0f172a' : '#ffffff'} 
        strokeWidth="6" 
        fill="none"
        strokeLinecap="round"
        style={{ mixBlendMode: 'normal' }}
      />
      {/* Actual Wave graphic accent */}
      <path 
        d="M 55 100 C 85 100, 95 65, 120 75 C 135 81, 135 95, 120 95 C 110 95, 110 85, 120 82" 
        stroke={color === 'white' ? '#ffffff' : '#1d4ed8'} 
        strokeWidth="0"
        fill={color === 'white' ? '#ffffff' : '#1d4ed8'} 
        opacity="0.9"
      />

      {/* ECONOMY */}
      <text 
        x="100" 
        y="125" 
        textAnchor="middle" 
        fill={fillColor} 
        fontFamily="sans-serif" 
        fontWeight="400" 
        fontSize="24" 
        letterSpacing="4"
      >
        ECONOMY
      </text>

      {/* FORUM BAR */}
      <rect x="25" y="135" width="150" height="22" fill={fillColor} />
      <text 
        x="100" 
        y="151" 
        textAnchor="middle" 
        fill={color === 'white' ? '#0f172a' : '#ffffff'} 
        fontFamily="sans-serif" 
        fontWeight="600" 
        fontSize="14" 
        letterSpacing="8"
      >
        FORUM
      </text>
    </svg>
  );
};
