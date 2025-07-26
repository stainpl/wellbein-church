'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import UserHeader from './UserHeader';

export default function HeaderSwitcher() {
  const { data: session, status } = useSession();
  const [showNavbar, setShowNavbar] = useState(false);

  // Only show Navbar once we know we're NOT authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      // small timeout so it can fade
      setTimeout(() => setShowNavbar(true), 100);
    }
  }, [status]);

  if (session?.user) {
    // logged in → show UserHeader
    return <UserHeader />;
  }

  // logged out → show Navbar with fade-in once ready
  return showNavbar ? <Navbar className="opacity-0 animate-fade-in" /> : null;
}
