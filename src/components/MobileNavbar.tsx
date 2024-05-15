import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import gsap from "gsap";
import Category from "./mobile_nav/Category";
import ProfileMenu from "@/containers/profile/ProfileMenu";

enum NavbarItems {
    HOME,
    CATEGORY,
    ORDERS,
    PROFILE
}

function MobileNavbar() {
    const navbarItems = [
        {
            name: "Home",
            icon: <HomeIcon />,
            type: NavbarItems.HOME
        },
        {
            name: "Category",
            icon: <CategoryIcon />,
            type: NavbarItems.CATEGORY
        },
        {
            name: "Orders",
            icon: <LocalMallIcon />,
            type: NavbarItems.ORDERS
        },
        {
            name: "Profile",
            icon: <PersonIcon />,
            type: NavbarItems.PROFILE
        },
    ]

    const [currentItem, setCurrentItem] = useState(NavbarItems.HOME)

    useEffect(() => {
        if(currentItem != NavbarItems.HOME){
            gsap.to("body", {
                overflow: "hidden"
            })
        }else{
            gsap.to("body", {
                overflow: "auto"
            })
        }
    }, [currentItem])

    return (
        <>
            {
                (currentItem != NavbarItems.HOME) &&
                <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-white z-50 pb-32">
                    {
                        (currentItem == NavbarItems.CATEGORY) ?
                        <Category /> :
                        currentItem == NavbarItems.PROFILE ?
                        <ProfileMenu /> :
                        <></>
                    }
                </div>
            }
            <div className="xl:hidden w-full fixed bottom-0 left-0 rounded-ss-2xl rounded-se-2xl overflow-hidden z-50">
                {/* <div className="bg-white">
                    <p>first</p>
                    <p>first</p>
                    <p>first</p>
                    <p>first</p>
                </div> */}
                <div className="bg-primary p-4">
                    <div className="flex items-center justify-between">
                        {navbarItems.map((item, index) => (
                            <button
                                className={`${(currentItem == item.type) ? 'text-secondary-yellow' : 'text-gray-400'}`}
                                onClick={() => setCurrentItem(item.type)}
                            >
                                {item.icon}
                                <span className="mt-1 block text-sm">{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileNavbar;
