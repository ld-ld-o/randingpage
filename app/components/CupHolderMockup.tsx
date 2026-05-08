import React from 'react';
import styles from './cupMockup.module.css';

export default function CupHolderMockup() {
  return (
    <div className={`${styles.mockupContainer} w-80 h-96`}>
      <svg className={styles.mockupSvg} viewBox="0 0 280 380" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="18" stdDeviation="24" floodColor="#000" floodOpacity="0.35" />
          </filter>
          <linearGradient id="paper" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f3f4f6" />
          </linearGradient>
          <linearGradient id="sleeveGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#0ea5a2" />
          </linearGradient>

          {/* subtle paper texture */}
          <filter id="paperTexture">
            <feTurbulence baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="t" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" in2="t" mode="multiply" opacity="0.03" />
          </filter>
        </defs>

        {/* background cast shadow */}
        <ellipse cx="140" cy="320" rx="90" ry="18" fill="#000" opacity="0.12" />

        {/* hand holding (soft silhouette) */}
        <g transform="translate(42,170) rotate(-8)">
          <path d="M120 180c-6-30-42-72-62-68-22 4-38 24-44 40-6 16 6 28 10 32 4 4 40 26 60 28 20 2 46-8 36-32z" fill="#f3d7c9" opacity="0.98" />
        </g>

        {/* cup body */}
        <g filter="url(#softShadow)">
          <rect x="60" y="40" rx="28" ry="28" width="160" height="220" fill="url(#paper)" stroke="#e6e7ea" />
        </g>

        {/* rim */}
        <ellipse cx="140" cy="40" rx="70" ry="12" fill="#f8fafb" stroke="#e6e7ea" />

        {/* sleeve (curved) */}
        <g>
          <path d="M58 120 q40 -28 164 0 v56 q-124 28 -164 0 z" fill="url(#sleeveGrad)" filter="url(#paperTexture)" />
          <text x="140" y="150" fill="#fff" fontSize="12" fontWeight="700" textAnchor="middle">BRAND CAMPAIGN</text>
        </g>

        {/* QR box integrated naturally on sleeve */}
        <g transform="translate(188,138)">
          <rect width="38" height="38" rx="4" ry="4" fill="#fff" stroke="#e6e7ea" />
          {/* stylized QR pattern (realistic small squares) */}
          <g fill="#000">
            <rect x="4" y="4" width="6" height="6" />
            <rect x="14" y="4" width="4" height="4" />
            <rect x="22" y="4" width="6" height="6" />
            <rect x="4" y="14" width="4" height="4" />
            <rect x="12" y="12" width="6" height="6" />
            <rect x="22" y="14" width="4" height="4" />
            <rect x="4" y="22" width="6" height="6" />
            <rect x="14" y="22" width="4" height="4" />
            <rect x="22" y="22" width="6" height="6" />
          </g>
        </g>

        {/* subtle highlight on sleeve */}
        <path d="M58 126 q40 -20 164 4" stroke="#ffffff" strokeOpacity="0.08" fill="none" />

        {/* small campus background hint (out of focus) */}
        <g opacity="0.08" transform="translate(10,12)">
          <rect x="0" y="0" width="260" height="40" rx="6" fill="#111827" />
        </g>
      </svg>
    </div>
  );
}
