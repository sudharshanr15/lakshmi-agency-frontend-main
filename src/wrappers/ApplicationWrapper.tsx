'use client'

import React, { PropsWithChildren } from 'react'
import TanstackProvider from './TanstackProvider'

function ApplicationWrapper({ children }: PropsWithChildren) {
  return (
    <TanstackProvider>
        {children}
    </TanstackProvider>
  )
}

export default ApplicationWrapper