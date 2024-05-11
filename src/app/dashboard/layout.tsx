import Navbar from '@/components/Navbar'
import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: {
    template: "%s | Lakshmi Agency",
    default: "Home"
  }
}

export function layout({ children }: PropsWithChildren) {
  return (
    <>
        <Navbar />
        <main className='mb-32'>
            {children}
        </main>
    </>
  )
}

export default layout