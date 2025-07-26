// app/components/Hero.tsx
'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full z-10">
      <Image
        src="/main.jpg"
        alt="Church gathering"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold text-center px-4">
          Welcome to Our Church
        </h1>
      </div>
    </section>
  );
}
