'use client'

import React, { PropsWithChildren } from 'react'
import TanstackProvider from './TanstackProvider'
import { ToastContainer } from 'react-toastify'
import ReduxWrapper from './ReduxWrapper'

function ApplicationWrapper({ children }: PropsWithChildren) {
  return (
    <TanstackProvider>
      <ReduxWrapper>
        {children}
        <ToastContainer
          position='bottom-right'
          pauseOnHover
          draggable
        />
      </ReduxWrapper>
    </TanstackProvider>
  )
}

export default ApplicationWrapper