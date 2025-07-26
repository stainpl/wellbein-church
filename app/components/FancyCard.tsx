import React from 'react';


interface FancyCardProps {
  description: string;
  verse: string;
  citation: string;
}

export default function FancyCard({
  description,
  verse,
  citation,
}: FancyCardProps) {
  return (
    <div className="relative w-full max-w-md bg-gray-700 rounded-2xl shadow-lg overflow-hidden mx-auto">
      {/* SVG Curve */}
      <svg
        className="absolute top-0 left-0 w-full h-24"
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,40
            C100,60 200,20 300,50
            L400,0
            L400,80
            L0,80
            Z
          "
          fill="#3B82F6"
        />
      </svg>

      {/* Push content down so it doesn’t overlap the SVG */}
      <div className="pt-24 pb-8 px-6 flex flex-col items-center space-y-6 bg-gray-700">
        <p className="text-center text-lg leading-relaxed text-white">
          {description}
        </p>
        <hr className="w-1/2 border-t border-gray-600" />
        <p className="text-center text-lg font-medium leading-relaxed text-white">
          “{verse}”
        </p>
        <hr className="w-1/3 border-t border-gray-600" />
        <p className="text-center text-sm font-light text-gray-400">
          {citation}
        </p>
      </div>
    </div>
  );
}
