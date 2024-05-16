import MobileTitleBar from '@/components/mobile_nav/MobileTitleBar'
import React from 'react'

function layout({ children }: {children: React.ReactNode}) {
  return (
    <>
        { children }
    </>
  )
}

export default layout