import React, { PropsWithChildren } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

function MobileTitleBar({ title }: {title: string}) {
    return (
        <div className='xl:hidden sticky top-0 left-0 z-50 w-full bg-primary'>
            <div className="flex items-centet gap-4 p-4">
                <Link href={"/dashboard"} className='text-secondary-yellow'>
                <ArrowBackIosNewIcon fontSize='small' />
                </Link>
                <span className='text-body-bold text-white'>{title}</span>
            </div>
        </div>
    )
}

export default MobileTitleBar