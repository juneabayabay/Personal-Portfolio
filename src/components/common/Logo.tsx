"use client";

import { useId } from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 40 }: LogoProps) {
  const id = useId().replace(/:/g, "");
  const grad1 = `${id}-grad1`;
  const grad2 = `${id}-grad2`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Arjune Abay Abay"
    >
      <defs>
        <linearGradient id={grad1} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6c5ce7" />
          <stop offset="100%" stopColor="#00b4d8" />
        </linearGradient>
        <linearGradient id={grad2} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="100%" stopColor="#f77f6c" />
        </linearGradient>
      </defs>
      <path d="M 30 180 L 80 20 L 120 20 L 70 180 Z" fill={`url(#${grad1})`} opacity="0.9" />
      <path d="M 170 180 L 120 20 L 80 20 L 130 180 Z" fill={`url(#${grad2})`} opacity="0.9" />
      <rect x="65" y="100" width="70" height="20" rx="10" fill="#ffffff" opacity="0.95" />
      <circle cx="100" cy="110" r="8" fill="#f77f6c" />
      <circle
        cx="100"
        cy="110"
        r="15"
        fill="none"
        stroke="#00b4d8"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}
