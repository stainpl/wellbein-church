// components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 p-6 text-center">
      <p>&copy; {new Date().getFullYear()} aP Church . All rights reserved.</p>
    </footer>
  );
}