'use client';

import React from 'react';

interface TextInputProps {
  label?: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function TextInput({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
}: TextInputProps) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
