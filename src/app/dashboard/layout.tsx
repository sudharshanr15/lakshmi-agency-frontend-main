import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

export function layout({ children }: PropsWithChildren) {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default layout