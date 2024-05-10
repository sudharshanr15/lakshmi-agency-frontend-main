'use client'

import React, { PropsWithChildren } from 'react'
import TanstackProvider from './TanstackProvider'
import { ToastContainer } from 'react-toastify'

function ApplicationWrapper({ children }: PropsWithChildren) {
  return (
    <TanstackProvider>
        {children}
        <ToastContainer
          position='bottom-right'
          pauseOnHover
          draggable
        />
    </TanstackProvider>
  )
}

export default ApplicationWrapper