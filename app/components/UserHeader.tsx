'use client';
import { FaUserCircle, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function UserHeader() {
  const { data: session } = useSession();

  if (!session || !session.user) return null;

  const name = session.user.name || 'User';
  const role = session.user.role || 'MEMBER';

  const isAdmin = role === 'ADMIN';

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50
    ${isAdmin ? 'bg-blue-900/80' : 'bg-green-900/80'}
    text-white backdrop-blur-md shadow-md
    h-20 sm:h-24 flex items-center
  `}
>
  <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
    <div className="flex items-center gap-2">
      <FaUserCircle className="text-2xl sm:text-3xl" />
      <span className="text-base sm:text-lg font-semibold">
        Welcome, {name}
      </span>
    </div>
    <div className="flex items-center gap-4">
      <Link
        href={isAdmin ? '/admin/dashboard' : '/dashboard'}
        className="hover:text-yellow-300 transition"
        title="Dashboard"
      >
        <FaTachometerAlt className="text-xl sm:text-2xl" />
      </Link>
      <button
        onClick={() => signOut()}
        className="hover:text-red-400 transition"
        title="Logout"
      >
        <FaSignOutAlt className="text-xl sm:text-2xl" />
      </button>
    </div>
  </div>
</header>
  );
}
