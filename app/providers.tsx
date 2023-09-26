// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>   
  )
}