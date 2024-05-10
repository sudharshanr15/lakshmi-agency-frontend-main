import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

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