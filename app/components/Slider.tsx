'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Image
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const images = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg'];

export default function Slider() {
  const [idx, setIdx] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIdx((prev) => (prev + 1) % images.length),
      5000
    );
    return () => resetTimeout();
  }, [idx]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const prev = () => {
    resetTimeout();
    setIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    resetTimeout();
    setIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-[600px] overflow-hidden">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            i === idx ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            fill // Use fill to cover the container
            style={{ objectFit: 'cover' }} // Equivalent to object-cover
            priority={i === 0} // Prioritize the first image for LCP
          />
        </div>
      ))}
      <button
        onClick={prev}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 z-20"
      >
        <BsChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 z-20"
      >
        <BsChevronRight size={24} />
      </button>
    </div>
  );
}