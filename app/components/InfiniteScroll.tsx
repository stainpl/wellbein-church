'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function InfiniteScroll() {
  const [items, setItems] = useState<number[]>([]);
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // initial load
    setItems(Array.from({ length: 10 }, (_, i) => i));
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setItems((prev) => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i)]);
      }
    });
    if (loader.current) obs.observe(loader.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="space-y-4 p-6">
      {items.map((n) => (
        <div key={n} className="p-4 bg-white rounded shadow">
          Item #{n + 1}
        </div>
      ))}
      <div ref={loader} className="h-10" />
    </div>
  );
}
