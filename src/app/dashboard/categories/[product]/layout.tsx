import MobileTitleBar from '@/components/mobile_nav/MobileTitleBar'
import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
    title: "Products"
}

function layout({ children }: PropsWithChildren) {
    return (
        <>
            <MobileTitleBar title='Products' />
            {children}
        </>
    )
}

export default layout