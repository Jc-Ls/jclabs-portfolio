'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function FirstVisitRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Don't redirect if already on splash screen
    if (pathname === '/splash') {
      return;
    }

    // Check if this is a first visit
    const hasVisited = localStorage.getItem('jcls-visited');
    
    if (!hasVisited) {
      // Mark as visited and redirect to splash
      localStorage.setItem('jcls-visited', 'true');
      router.push('/splash');
    }
  }, [pathname, router]);

  // Don't render anything while checking/redirecting
  if (!mounted) return null;
  return null;
}
