import React from 'react';

export function CircuitBoard() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-circuit">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="trace-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
        <pattern id="hex-grid" width="40" height="34.6" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
           <path d="M20 0 L40 11.5 L40 34.6 L20 46.1 L0 34.6 L0 11.5 Z" fill="none" stroke="#1e293b" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Hex Grid Background */}
      <rect width="100%" height="100%" fill="url(#hex-grid)" className="opacity-10" />

      {/* Group centered */}
      <g filter="url(#glow-circuit)" className="opacity-60">
        
        {/* === Top Left Quadrant === */}
        {/* Static Base Trace */}
        <path 
          d="M 42% 42% L 35% 42% L 30% 30% L 15% 30% L 10% 20%" 
          fill="none" 
          stroke="#0e7490" 
          strokeWidth="1" 
          className="opacity-40" 
        />
        {/* Node */}
        <circle cx="10%" cy="20%" r="3" fill="#0e7490" className="opacity-50" />
        {/* Flow Animation */}
        <path 
          d="M 42% 42% L 35% 42% L 30% 30% L 15% 30% L 10% 20%" 
          fill="none" 
          stroke="url(#trace-grad)" 
          strokeWidth="2"
          strokeDasharray="60 300"
          strokeDashoffset="300"
        >
          <animate attributeName="stroke-dashoffset" from="300" to="-300" dur="6s" repeatCount="indefinite" />
        </path>
         {/* Data Packet */}
        <circle r="2" fill="#fff">
           <animateMotion dur="6s" repeatCount="indefinite" path="M 42% 42% L 35% 42% L 30% 30% L 15% 30% L 10% 20%" keyPoints="0;1" keyTimes="0;1" />
           <animate attributeName="opacity" values="0;1;1;0" dur="6s" repeatCount="indefinite" />
        </circle>

        {/* === Top Right Quadrant === */}
        <path 
          d="M 58% 42% L 65% 42% L 70% 35% L 85% 35% L 90% 25%" 
          fill="none" 
          stroke="#0e7490" 
          strokeWidth="1" 
          className="opacity-40" 
        />
        <circle cx="90%" cy="25%" r="3" fill="#0e7490" className="opacity-50" />
        <path 
          d="M 58% 42% L 65% 42% L 70% 35% L 85% 35% L 90% 25%" 
          fill="none" 
          stroke="url(#trace-grad)" 
          strokeWidth="2"
          strokeDasharray="80 250"
          strokeDashoffset="250"
        >
          <animate attributeName="stroke-dashoffset" from="250" to="-250" dur="5s" repeatCount="indefinite" />
        </path>
        <circle r="2" fill="#fff">
           <animateMotion dur="5s" repeatCount="indefinite" path="M 58% 42% L 65% 42% L 70% 35% L 85% 35% L 90% 25%" />
           <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" />
        </circle>
        
        {/* === Bottom Left Quadrant === */}
        <path 
          d="M 42% 58% L 35% 58% L 30% 65% L 15% 65% L 10% 75%" 
          fill="none" 
          stroke="#0e7490" 
          strokeWidth="1" 
          className="opacity-40" 
        />
        <circle cx="10%" cy="75%" r="3" fill="#0e7490" className="opacity-50" />
         <path 
          d="M 42% 58% L 35% 58% L 30% 65% L 15% 65% L 10% 75%" 
          fill="none" 
          stroke="url(#trace-grad)" 
          strokeWidth="2"
          strokeDasharray="70 280"
          strokeDashoffset="280"
        >
          <animate attributeName="stroke-dashoffset" from="280" to="-280" dur="7s" repeatCount="indefinite" />
        </path>
        <circle r="2" fill="#fff">
           <animateMotion dur="7s" repeatCount="indefinite" path="M 42% 58% L 35% 58% L 30% 65% L 15% 65% L 10% 75%" />
           <animate attributeName="opacity" values="0;1;1;0" dur="7s" repeatCount="indefinite" />
        </circle>

        {/* === Bottom Right Quadrant === */}
        <path 
          d="M 58% 58% L 65% 58% L 70% 70% L 85% 70% L 90% 85%" 
          fill="none" 
          stroke="#0e7490" 
          strokeWidth="1" 
          className="opacity-40" 
        />
        <circle cx="90%" cy="85%" r="3" fill="#0e7490" className="opacity-50" />
         <path 
          d="M 58% 58% L 65% 58% L 70% 70% L 85% 70% L 90% 85%" 
          fill="none" 
          stroke="url(#trace-grad)" 
          strokeWidth="2"
          strokeDasharray="50 200"
          strokeDashoffset="200"
        >
          <animate attributeName="stroke-dashoffset" from="200" to="-200" dur="4s" repeatCount="indefinite" />
        </path>
        <circle r="2" fill="#fff">
           <animateMotion dur="4s" repeatCount="indefinite" path="M 58% 58% L 65% 58% L 70% 70% L 85% 70% L 90% 85%" />
           <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* === Vertical Bus Lines (Data Highway) === */}
        {/* Top */}
        <path d="M 50% 15% L 50% 35%" stroke="#0e7490" strokeWidth="1" className="opacity-30" />
        <path d="M 50% 35% L 50% 15%" stroke="url(#trace-grad)" strokeWidth="2" strokeDasharray="10 20" strokeDashoffset="20">
             <animate attributeName="stroke-dashoffset" from="20" to="-40" dur="3s" repeatCount="indefinite" />
        </path>
        
        {/* Bottom */}
        <path d="M 50% 85% L 50% 65%" stroke="#0e7490" strokeWidth="1" className="opacity-30" />
        <path d="M 50% 65% L 50% 85%" stroke="url(#trace-grad)" strokeWidth="2" strokeDasharray="10 20" strokeDashoffset="20">
             <animate attributeName="stroke-dashoffset" from="20" to="-40" dur="3s" repeatCount="indefinite" />
        </path>

      </g>
      
      {/* Central Chip Decor - Technical Frame */}
      <g className="opacity-80">
          <path d="M 35% 35% L 40% 35% L 40% 30%" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <path d="M 65% 35% L 60% 35% L 60% 30%" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <path d="M 35% 65% L 40% 65% L 40% 70%" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <path d="M 65% 65% L 60% 65% L 60% 70%" stroke="#22d3ee" strokeWidth="1" fill="none" />
          
          {/* Micro-text deco */}
          <rect x="34%" y="48%" width="2" height="4" fill="#0e7490" />
          <rect x="65%" y="48%" width="2" height="4" fill="#0e7490" />
      </g>

    </svg>
  );
}
