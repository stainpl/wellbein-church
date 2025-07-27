// app/components/Navbar.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaUsers, FaHistory, FaPhone, FaMusic, FaPlayCircle,
  FaTv, FaVideo, FaImage, FaCalendarAlt, FaStar,
  FaGift, FaHandHoldingHeart, FaUserPlus, FaSignInAlt,
  FaBullseye, FaBible, FaHandsHelping,FaUserShield
} from 'react-icons/fa';

type MenuKey = 'about' | 'ministries' | 'sermons' | 'events' | 'giving' | 'account';

const MENU: Record<MenuKey, { label: string; items: { label: string; href: string; icon: React.ReactNode }[] }> = {
  about: {
    label: 'About',
    items: [
      { label: 'Our Mission', href: '/about#mission', icon: <FaBullseye /> },
      { label: 'Leadership / Pastors', href: '/about#leadership', icon: <FaUsers /> },
      { label: 'History', href: '/about#history', icon: <FaHistory /> },
      { label: 'What We Believe', href: '/about#belief', icon: <FaBible /> },
      { label: 'Contact & Location', href: '/about#contact', icon: <FaPhone /> },
    ],
  },
  ministries: {
    label: 'Ministries',
    items: [
      { label: 'Bible Society', href: '/ministries/bible', icon: <FaBible /> },
      { label: 'English Choir', href: '/ministries/english-choir', icon: <FaMusic /> },
      { label: 'Tiv Choir', href: '/ministries/tiv-choir', icon: <FaMusic /> },
      { label: 'Girls Brigade', href: '/ministries/girls-brigade', icon: <FaHandHoldingHeart /> },
      { label: 'Boys Brigade', href: '/ministries/boys-brigade', icon: <FaHandsHelping /> },
      { label: 'Women Fellowship', href: '/ministries/women-fellowship', icon: <FaHandHoldingHeart /> },
    ],
  },
  sermons: {
    label: 'Sermons & Media',
    items: [
      { label: 'Latest Sermon', href: '/sermons/latest', icon: <FaPlayCircle /> },
      { label: 'Live Stream', href: '/sermons/live', icon: <FaTv /> },
      { label: 'Video Archive', href: '/sermons/archive', icon: <FaVideo /> },
      { label: 'Gallery', href: '/sermons/gallery', icon: <FaImage /> },
    ],
  },
  events: {
    label: 'Events',
    items: [
      { label: 'Upcoming Events', href: '/events/upcoming', icon: <FaCalendarAlt /> },
      { label: 'Weekly Schedules', href: '/events/weekly', icon: <FaCalendarAlt /> },
      { label: 'Special Programs', href: '/events/special', icon: <FaStar /> },
    ],
  },
  giving: {
    label: 'Giving / Donate',
    items: [
      { label: 'Tithes', href: '/donate/tithes', icon: <FaGift /> },
      { label: 'Offerings', href: '/donate/offerings', icon: <FaGift /> },
      { label: 'Support', href: '/donate/support', icon: <FaHandHoldingHeart /> },
    ],
  },
  account: {
    label: 'Account',
    items: [
      { label: 'Sign Up', href: '/auth/signup', icon: <FaUserPlus /> },
      { label: 'Log In', href: '/auth/login', icon: <FaSignInAlt /> },
      { label: 'Admin', href: '/admin/login', icon: <FaUserShield /> },
    ],
  },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <nav ref={containerRef} className="relative flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="z-40">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={40} // Adjust based on your logo's actual width
            height={40} // Adjust based on your logo's actual height
            priority // Optimize for LCP since it's in the navbar
          />
        </Link>

        {/* Desktop Menu */}
            {/* Desktop Menu */}
   <ul className="hidden md:flex space-x-8 z-40">
  {(Object.keys(MENU) as MenuKey[]).map((key, i, arr) => {
    const isEdge = i >= arr.length - 2;  // last two items
    return (
      <li
  key={key}
  className="relative group"
  onMouseEnter={() => setOpenMenu(key)}
  onMouseLeave={() => setOpenMenu(null)}
>
  <button className="font-medium">{MENU[key].label}</button>

  {openMenu === key && (
    <div
      className={`
        absolute
        top-full        /* right below the <li> */
        ${isEdge ? 'right-0' : 'left-0'}
      `}
    >
      {/* 0px gap: no mt-2 here! */}
      {/* arrow */}
      <div
        className={`
          absolute
          ${isEdge ? 'right-6' : 'left-6'}
          -top-2
          w-4 h-4
          bg-blue/60
          backdrop-blur
          transform rotate-45
          shadow-sm
        `}
      />
      {/* dropdown panel */}
      <div className="bg-black/22 backdrop-blur-md rounded-xl shadow-lg p-4 w-72">
        {MENU[key].items.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center space-x-3 py-2 px-3 rounded hover:bg-white/10 transition text-white"
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  )}
</li>

    );
  })}
</ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-40" onClick={() => setMobileOpen((o) => !o)}>
          {mobileOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Panel */}
        {/* Mobile Panel */}
           {mobileOpen && (
            <div className="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-black/60 backdrop-blur-md shadow-lg pt-16 p-6 overflow-auto z-30 text-white">
              <ul className="space-y-4">
                  {(Object.keys(MENU) as MenuKey[]).map((key) => (
                  <li key={key}>
                   <button
                className="w-full text-left font-medium flex justify-between items-center"
            onClick={() => setOpenMenu((cur) => (cur === key ? null : key))}
              >
            {MENU[key].label}
            <span>{openMenu === key ? '−' : '+'}</span>
          </button>
          {openMenu === key && (
            <ul className="mt-2 space-y-2">
              {MENU[key].items.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center space-x-3 pl-4 py-2 rounded hover:bg-white/10 transition"
                >
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </Link>
              ))}
            </ul>
          )}
        </li>
         ))}
    </ul>
  </div>
)}

      </nav>

      {/* Pass‑through transparent backdrop */}
      <div className="absolute inset-0 pointer-events-none bg-transparent" />
    </header>
  );
}
