import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';

function TopNavbar() {
  return (
        <div className="xl:hidden w-full p-4">
            <div className="flex justify-between mb-4">
                <button>
                    <MenuIcon className="text-secondary-yellow" />
                </button>
                <Link href={"/"} className="text-white font-bold">
                    <img src="/assets/images/Lakshmi.png" className="inline h-full max-h-[24px] w-auto" alt="Brand Image" />
                    <span className="ms-2 text-sm text-nowrap">LAKSHMI AGENCY</span>
                </Link>
                <button>
                    <ContactSupportIcon className="text-secondary-yellow" />
                </button>
            </div>
            <div className="bg-white text-black rounded-md py-2 p-2 text-sm flex">
                <input
                    type="text"
                    className="flex-grow focus:outline-none placeholder-gray-400 me-4"
                    placeholder="Search for any products..."
                />
                <SearchIcon className="text-secondary-yellow" />
            </div>
        </div>
  )
}

export default TopNavbar