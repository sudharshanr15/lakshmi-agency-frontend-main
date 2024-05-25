'use client';

import MobileTitleBar from '@/components/mobile_nav/MobileTitleBar'
import ProfileMenu from '@/containers/profile/ProfileMenu'
import { getUserProfile } from '@/lib/server_api/items';
import { update } from '@/lib/store/MobileNavbar';
import { MobileNavbarItems } from '@/types/navbar';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux';

const PATH_TITLES: {
    [key: string]: string
} = {
    "/dashboard/profile": "My Profile",
    "/dashboard/profile/address": "Delivery Address"
}

function layout({ children }: { children: React.ReactNode}) {
    const path = usePathname();
    const dispatch = useDispatch();

    function onBack(){
        dispatch(update(MobileNavbarItems.PROFILE))
    }

  return (
    <>
        <MobileTitleBar href='/dashboard' onLinkClicked={onBack} title={PATH_TITLES[path] ?? "Not found"} />
        <div className='flex'>
            <div className="hidden xl:block">
                <ProfileMenu />
            </div>
            <div className="flex-grow p-4">
                {children}
            </div>
        </div>
    </>
  )
}

export default layout