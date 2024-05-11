import MobileTitleBar from '@/components/mobile_nav/MobileTitleBar'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Cart"
}

function layout({ children }) {
    return (
        <>
            <MobileTitleBar title='Cart' />
            {children}
        </>
    )
}

export default layout