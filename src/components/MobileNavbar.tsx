'use client';

import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import gsap from "gsap";
import Category from "./Category";
import ProfileMenu from "@/containers/profile/ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { update } from "@/lib/store/MobileNavbar";
import { MobileNavbarItems } from "@/types/navbar";
import RecentOrders from "./orders/RecentOrders";
import OrdersPage from "@/app/dashboard/orders/page";
import Link from "next/link";

enum LinkType {
    LINK,
    BUTTON
}

function MobileNavbar({ active = MobileNavbarItems.HOME }: { active: MobileNavbarItems }) {
    const activeItem = useSelector((state: RootState) => state.mobileNavbar.activeItem)
    const dispatch = useDispatch()

    const navbarItems = {
        "home": {
            name: "Home",
            icon: <HomeIcon />,
            type: MobileNavbarItems.HOME,
            linkType: LinkType.LINK,
            href: "/dashboard"
        },
        "category": {
            name: "Category",
            icon: <CategoryIcon />,
            type: MobileNavbarItems.CATEGORY,
            linkType: LinkType.BUTTON,
            id: "nav-item_category"
        },
        "orders": {
            name: "Orders",
            icon: <LocalMallIcon />,
            type: MobileNavbarItems.ORDERS,
            linkType: LinkType.LINK,
            href: "/dashboard/orders"
        },
        "profile": {
            name: "Profile",
            icon: <PersonIcon />,
            type: MobileNavbarItems.PROFILE,
            linkType: LinkType.BUTTON
        }
    }

    const [currentItem, setCurrentItem] = useState(active ?? MobileNavbarItems.HOME)

    useEffect(() => {
        // if(currentItem != MobileNavbarItems.HOME){
        //     gsap.to("body", {
        //         overflow: "hidden"
        //     })
        // }else{
        //     gsap.to("body", {
        //         overflow: "auto"
        //     })
        // }
        // dispatch(update(currentItem))
    }, [currentItem])

    return (
        <>
            {
                (currentItem != MobileNavbarItems.HOME && currentItem != MobileNavbarItems.ORDERS) &&
                <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-white z-50 pb-32">
                    {
                        (currentItem == MobileNavbarItems.CATEGORY) ?
                        <Category /> :
                        currentItem == MobileNavbarItems.PROFILE ?
                        <ProfileMenu /> :
                        <></>
                    }
                </div>
            }
            <div className="xl:hidden w-full fixed bottom-0 left-0 rounded-ss-2xl rounded-se-2xl overflow-hidden z-50" id="navbar-mobile">
                {/* <div className="bg-white">
                    <p>first</p>
                    <p>first</p>
                    <p>first</p>
                    <p>first</p>
                </div> */}
                <div className="bg-primary p-4">
                    <div className="flex items-center justify-between">
                        {Object.values(navbarItems).map((item, index) => {
                            if(item.linkType == LinkType.LINK){
                                return (
                                    <Link
                                        href={item.href}
                                        className={`${(currentItem == item.type) ? 'text-secondary-yellow' : 'text-gray-400'} text-center`}
                                        onClick={() => setCurrentItem(item.type)}
                                        {...(item.id && {id: item.id})}
                                    >
                                        {item.icon}
                                        <span className="mt-1 block text-sm">{item.name}</span>
                                    </Link>
                                )
                            }else{
                                return (
                                    <button
                                        className={`${(currentItem == item.type) ? 'text-secondary-yellow' : 'text-gray-400'}`}
                                        onClick={() => setCurrentItem(item.type)}
                                        {...(item.id && {id: item.id})}
                                    >
                                        {item.icon}
                                        <span className="mt-1 block text-sm">{item.name}</span>
                                    </button>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileNavbar;
