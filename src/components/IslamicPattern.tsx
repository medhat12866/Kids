import React from 'react';

export function IslamicPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="islamic-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Star pattern */}
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="90" cy="10" r="2" fill="currentColor" />
          <circle cx="10" cy="90" r="2" fill="currentColor" />
          <circle cx="90" cy="90" r="2" fill="currentColor" />
          
          {/* Geometric shapes */}
          <path
            d="M50 30 L60 40 L50 50 L40 40 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M50 50 L60 60 L50 70 L40 60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
    </svg>
  );
}
