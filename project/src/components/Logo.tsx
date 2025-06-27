import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <div className={`${className} relative`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Robot Head */}
        <rect x="30" y="15" width="40" height="35" rx="8" fill="#22C55E" className="drop-shadow-sm"/>
        
        {/* Robot Eyes */}
        <circle cx="40" cy="28" r="3" fill="#FFFFFF"/>
        <circle cx="60" cy="28" r="3" fill="#FFFFFF"/>
        <circle cx="40" cy="28" r="1.5" fill="#16A34A"/>
        <circle cx="60" cy="28" r="1.5" fill="#16A34A"/>
        
        {/* Robot Smile */}
        <path d="M 42 38 Q 50 42 58 38" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none"/>
        
        {/* Robot Antennas */}
        <line x1="38" y1="15" x2="38" y2="8" stroke="#FB923C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="62" y1="15" x2="62" y2="8" stroke="#FB923C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="38" cy="8" r="2" fill="#FB923C"/>
        <circle cx="62" cy="8" r="2" fill="#FB923C"/>
        
        {/* Robot Body */}
        <rect x="35" y="50" width="30" height="25" rx="5" fill="#16A34A"/>
        
        {/* Robot Arms */}
        <rect x="20" y="55" width="15" height="8" rx="4" fill="#22C55E"/>
        <rect x="65" y="55" width="15" height="8" rx="4" fill="#22C55E"/>
        
        {/* Chef Hat */}
        <ellipse cx="50" cy="12" rx="15" ry="4" fill="#FFFFFF"/>
        <rect x="40" y="5" width="20" height="12" rx="2" fill="#FFFFFF"/>
        
        {/* Food Items */}
        {/* Carrot in left hand */}
        <rect x="15" y="58" width="2" height="8" fill="#FB923C" transform="rotate(-15 16 62)"/>
        <path d="M 12 60 Q 15 58 18 60" fill="#22C55E" transform="rotate(-15 15 60)"/>
        
        {/* Apple in right hand */}
        <circle cx="85" cy="60" r="4" fill="#EF4444"/>
        <path d="M 85 56 Q 87 54 89 56" fill="#22C55E"/>
        
        {/* Cooking Tools */}
        <rect x="45" y="78" width="10" height="3" rx="1" fill="#6B7280"/>
        <circle cx="50" cy="85" r="6" fill="#FB923C" opacity="0.3"/>
        
        {/* Kitchen Counter */}
        <rect x="20" y="88" width="60" height="8" rx="2" fill="#E5E7EB"/>
        
        {/* Steam/Heat Effect */}
        <path d="M 45 82 Q 47 78 45 75" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M 50 82 Q 52 78 50 75" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M 55 82 Q 57 78 55 75" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      </svg>
    </div>
  );
}