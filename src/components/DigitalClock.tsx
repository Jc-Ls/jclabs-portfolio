'use client';

import React, { useState, useEffect } from 'react';

export const DigitalClock = () => {
  const [time, setTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !time) {
    return <div className="text-xs font-mono text-neutral-500">--:--:--</div>;
  }

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
      <div className="font-mono text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 tracking-wider">
        {time}
      </div>
    </div>
  );
};
