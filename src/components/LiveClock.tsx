"use client";
import React, { useState, useEffect } from 'react';

export const LiveClock = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Update the clock every second
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Africa/Lagos', // Set to your operating base
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    }, 1000);

    // Initial set
    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!time) return <span className="font-mono text-[10px] text-neutral-500">SYSTEM BOOTING...</span>;

  return (
    <div className="flex items-center space-x-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse"></div>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
        WAT // {time}
      </span>
    </div>
  );
};