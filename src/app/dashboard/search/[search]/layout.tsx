import MobileTitleBar from '@/components/mobile_nav/MobileTitleBar'
import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
    title: "Products"
}

function layout({ children, params }: PropsWithChildren) {
    return (
        <>
            <MobileTitleBar title={params.search} />
            {children}
        </>
    )
}

export default layout