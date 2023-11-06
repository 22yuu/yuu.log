'use client';

import { useRef } from 'react';

export default function ContentEditable() {
  const ref = useRef<HTMLDivElement | null>(null);

  return <div ref={ref}></div>;
}
