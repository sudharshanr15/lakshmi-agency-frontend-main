'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import { logoutSession } from '@/lib/session';
import { NextResponse } from 'next/server';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
    {
        title: "My Profile",
        icon: <PersonOutlineOutlinedIcon />,
        href: "/dashboard/profile"
    },
    {
        title: "Delivery Address",
        icon: <SignpostOutlinedIcon />,
        href: "/dashboard/profile/address"
    },
]

function ProfileMenu() {
    const path = usePathname()

    const [activeItem, setActiveItem] = useState(menuItems[0])
    const router = useRouter()

    useLayoutEffect(() => {
        const active = menuItems.filter(item => {
            return item.href == path.toLocaleLowerCase()
        })
        setActiveItem(active[0] ?? menuItems[0])

    }, [])

    function onSignOut(){
        logoutSession().finally(() => {
            router.push("/")
        })
    }

    return (
        <aside>
            <ul>
                {menuItems.map((item, index) => (
                    <li className={`py-4 text-primary border-b border-gray-300 ${activeItem.title == item.title ? 'bg-primary bg-opacity-15' : activeItem.title}`} key={index}>
                        <Link href={item.href} className="flex items-stretch w-full" onClick={() => setActiveItem(item)}>
                            {(activeItem.title == item.title) && <div className="before:content-[''] before:border-2 border:ms-2 before:rounded-full before:block before:h-full before:border-primary"></div>}
                            <div className="text-body font-medium mx-8 py-2">
                                {item.icon}
                                <span className='ms-4'>{item.title}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={onSignOut} className='text-blue-900 underline font-medium p-4'>Sign Out</button>
        </aside>
    )
}

export default ProfileMenu