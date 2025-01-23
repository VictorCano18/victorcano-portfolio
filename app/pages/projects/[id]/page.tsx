'use client'; // This is a client component

import React from 'react';

export default function Page({ params }: { params: { id: number}}) {
  return (
    <div className="relative mx-auto max-w-xs text-white sm:max-w-full">
        Hello world
    </div>
  );
}
