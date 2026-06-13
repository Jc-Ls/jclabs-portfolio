'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function FirstVisitRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // Check if this is a first visit
    const hasVisited = localStorage.getItem('jcls-visited');
    
    // If on splash page, always allow render
    if (pathname === '/splash') {
      setCanRender(true);
      return;
    }

    // If first visit to any page other than splash
    if (!hasVisited) {
      // Mark as visited and redirect to splash
      localStorage.setItem('jcls-visited', 'true');
      router.push('/splash');
      // Don't allow render while redirecting
      return;
    }

    // If returning visitor, allow render
    setCanRender(true);
  }, [pathname, router]);

  // Show nothing while we're determining if we should redirect
  // This prevents the flash of empty content
  if (!canRender) {
    return (
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
    );
  }

  return null;
}
