'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { CutieeContent } from '../content/cutiee';

type Photo = CutieeContent['photos'][number];

export default function CinematicPhoto({
  photo,
  className = '',
  sizes = '(max-width: 640px) 100vw, 640px',
  fit = 'contain'
}: {
  photo?: Photo;
  className?: string;
  sizes?: string;
  fit?: 'contain' | 'cover';
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative isolate overflow-hidden bg-[#08060b] ${className}`}>
      {photo && !failed ? (
        <Image
          src={photo.url}
          alt={photo.alt}
          fill
          sizes={sizes}
          className={fit === 'contain' ? 'object-contain' : 'object-cover'}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#3d0c1c]/50 via-[#1a0b18] to-black px-3 text-center">
          <span className="text-xs tracking-wide text-[#f9ead0]/70">Tasveer abhi yahan nahi hai</span>
        </div>
      )}
    </div>
  );
}
