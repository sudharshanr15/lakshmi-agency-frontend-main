'use client';

import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import CategoryIcon from '@mui/icons-material/Category';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Link from "next/link";
import CategoryMenu from "./CategoryMenu";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
    const [categoryOpen, setCategoryOpen] = useState(false)

    return (
        <>
            <div className="w-full bg-primary relative max-h-screen z-50">
                <div className="hidden xl:flex w-full justify-between text-white max-w-[1800px] mx-auto items-center gap-8 pt-4 px-4">
                    <Link href={"/"} className="text-white font-bold">
                        <img src="/assets/images/Lakshmi.png" className="inline h-full max-h-[48px] w-auto" alt="Brand Image" />
                        <span className="ms-2 text-nowrap">LAKSHMI AGENCY</span>
                    </Link>
                    <div>
                        <MyLocationIcon className="me-2" />
                        Delivery to trichy - <span className="text-secondary-yellow">600000</span>
                    </div>
                    <div className="bg-white text-black rounded-md py-2 pl-10 pr-4 sm:text-sm flex-grow max-w-[600px] flex">
                        <input
                            type="text"
                            className="flex-grow focus:outline-none placeholder-gray-400 me-4"
                            placeholder="Search for any products..."
                        />
                        <SearchIcon className="text-secondary-yellow" />
                    </div>
                    <div>
                        <button className="text-white">
                            <PersonIcon fontSize="large" />
                            <span className="inline-block ms-2">Jhon Doe</span>
                        </button>
                    </div>
                </div>
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
                <hr className="hidden xl:block border-b border-[#E9EBF0] my-3" />
                <div className="hidden xl:flex items-center justify-between text-white max-w-[1800px] mx-auto pb-4 px-4">
                    <div>
                        <button className="text-sm-bold text-white px-4 border-r border-r-[#E9EBF0]" onClick={() => setCategoryOpen(prev => !prev)}>
                            <CategoryIcon />
                            <span className="ms-2">Categories</span>
                        </button>
                        <Link href={""} className="text-sm-bold text-white px-4">
                            <LocalMallIcon />
                            <span className="ms-2">Orders</span>
                        </Link>
                    </div>
                    <div>
                        <button className="border border-secondary-yellow text-secondary-yellow px-4 py-2 rounded">Become a Seller</button>
                    </div>
                </div>
                {categoryOpen && <CategoryMenu />}
            </div>
            <MobileNavbar />
        </>
        // <div>
        //     {isDrawerOpen && (
        //         <>
        //             <div
        //                 className="w-screen h-screen fixed top-[7.5rem] z-[30]"
        //                 // onClick={toggleClose}
        //             ></div>
        //             <div
        //                 id="drawer-navigation"
        //                 className={`fixed top-[7.5rem] left-0 z-40 w-80 md:mb-32 bg-[#f2f2f2] h-screen p-4 overflow-y-auto transition-transform ${
        //                     isDrawerOpen ? "" : "-translate-x-full"
        //                 } bg-[#E9EBF0]`}
        //                 aria-labelledby="drawer-navigation-label"
        //             >
        //                 {/* list of items */}
        //                 {isDrawerOpen && (
        //                     <ul className="py-5">
        //                         {categories_test.map((item, i) => (
        //                             <li
        //                                 key={i}
        //                                 className="p-3 hover:bg-[#EAEAEA]"
        //                                 // onClick={() => togglePipe(item.name)}
        //                             >
        //                                 <Link
        //                                     href={
        //                                         "/dashboard/categories/" +
        //                                         item.name
        //                                     }
        //                                     className=""
        //                                 >
        //                                     <div className="flex justify-between items-center">
        //                                         <div className="flex items-center">
        //                                             <img
        //                                                 src={""}
        //                                                 alt={
        //                                                     item.name +
        //                                                     " Category"
        //                                                 }
        //                                                 className="w-12 h-12 rounded-full border-4 border-yellow-400 text-[#000]"
        //                                             />
        //                                             <span className="ml-4">
        //                                                 {item.name}{" "}
        //                                             </span>
        //                                         </div>
        //                                         <div className="mt-2">
        //                                             <button>
        //                                                 <svg
        //                                                     xmlns="http://www.w3.org/2000/svg"
        //                                                     fill="none"
        //                                                     viewBox="0 0 24 24"
        //                                                     strokeWidth={1.5}
        //                                                     stroke="currentColor"
        //                                                     className="w-4 h-4"
        //                                                 >
        //                                                     <path
        //                                                         strokeLinecap="round"
        //                                                         strokeLinejoin="round"
        //                                                         d="M8.25 4.5l7.5 7.5-7.5 7.5"
        //                                                     />
        //                                                 </svg>
        //                                             </button>
        //                                         </div>
        //                                     </div>
        //                                     {/* <div className="flex cursor-pointer">
        //                 <img
        //                   src={""}
        //                   alt="category image"
        //                   className="-mt-3 rounded-full w-12 h-12 border-4 border-yellow-400 text-[#000000]"
        //                 />
        //                 <span className="ml-4">{item.name} </span>
        //               </div>

        //               <div className="mt-2">
        //                 <button>
        //                   <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     strokeWidth={1.5}
        //                     stroke="currentColor"
        //                     className="w-4 h-4"
        //                   >
        //                     <path
        //                       strokeLinecap="round"
        //                       strokeLinejoin="round"
        //                       d="M8.25 4.5l7.5 7.5-7.5 7.5"
        //                     />
        //                   </svg>
        //                 </button>
        //               </div> */}
        //                                 </Link>
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 )}
        //             </div>
        //         </>
        //     )}
        //     {isPipeOpen ? (
        //         <div
        //             id="drawer-navigation"
        //             className={`fixed top-[7.5rem] left-80 z-40 w-80 md:mb-32 bg-white h-screen p-4 overflow-y-auto transition-transform ${
        //                 isPipeOpen ? "" : "-translate-x-full"
        //             } bg-[#f2f2f2]`}
        //             aria-labelledby="drawer-navigation-label"
        //         >
        //             <button
        //                 type="button"
        //                 // onClick={() => togglePipe("")} // This will close the sidebar
        //                 data-drawer-hide="drawer-navigation"
        //                 aria-controls="drawer-navigation"
        //                 className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        //             >
        //                 <svg
        //                     aria-hidden="true"
        //                     className="w-5 h-5"
        //                     fill="currentColor"
        //                     viewBox="0 0 20 20"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                 >
        //                     <path
        //                         fillRule="evenodd"
        //                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        //                         clipRule="evenodd"
        //                     ></path>
        //                 </svg>
        //                 <span className="sr-only">Close menu</span>
        //             </button>

        //             {isDrawerOpen && (
        //                 <ul className="py-4">
        //                     {subCategories.map((item, i) => (
        //                         <div
        //                             key={i}
        //                             // onClick={() =>
        //                             //     routeToSubCategories(item.name)
        //                             // }
        //                             className="cursor-pointer"
        //                         >
        //                             <li className="px-3 space-x-5 flex py-5 justify-between text-[#07101F] hover:bg-[#EAEAEA]">
        //                                 <div className="flex">
        //                                     <span className="ml-4 underline">
        //                                         {item.name}{" "}
        //                                     </span>
        //                                 </div>
        //                             </li>
        //                         </div>
        //                     ))}
        //                 </ul>
        //             )}
        //         </div>
        //     ) : (
        //         !isPipeOpen
        //     )}

        //     <div className="hidden lg:block">
        //         <nav className="bg-[#004b71] fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        //             <div className="max-w mx-2 flex flex-wrap items-center justify-between p-4">
        //                 <div className="flex items-center">
        //                     <Link href={"/dashboard"}>
        //                         <img
        //                             src="/image/Lakshmi.png"
        //                             className="h-8 mr-3"
        //                             alt="Flowbite Logo"
        //                         />
        //                     </Link>
        //                     <Link href={"/dashboard"}>
        //                         <span className="self-center text-1xl font-semibold whitespace-nowrap text-white">
        //                             LAKSHMI AGENCY
        //                         </span>
        //                     </Link>

        //                     {/* <div className="flex ml-3">
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           fill="none"
        //           viewBox="0 0 24 24"
        //           strokeWidth={1.5}
        //           stroke="currentColor"
        //           className="w-6 h-6 text-white"
        //         >
        //           <path
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        //           />
        //           <path
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        //           />
        //         </svg>

        //         <span className="self-center  font-semibold whitespace-nowrap text-white">
        //           Delivered to {billingAddress.city} -{" "}
        //           <span className="text-yellow-300">
        //             {billingAddress.pincode}
        //           </span>{" "}
        //         </span>
        //       </div> */}
        //                 </div>

        //                 <div className="flex md:order-2">
        //                     <Link href={"/dashboard/profile"}>
        //                         <div className="flex m-3 md:hidden lg:block ">
        //                             <div className="flex">
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="none"
        //                                     viewBox="0 0 24 24"
        //                                     strokeWidth={1.5}
        //                                     stroke="currentColor"
        //                                     className="w-6 h-6 mr-2 text-white cursor-pointer"
        //                                 >
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        //                                     />
        //                                 </svg>

        //                                 <span className="mr-7 text-white ">
        //                                     {profile &&
        //                                         profile.full_name.trim()}
        //                                 </span>
        //                             </div>
        //                         </div>
        //                     </Link>

        //                     <button
        //                         data-collapse-toggle="navbar-sticky"
        //                         type="button"
        //                         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //                         aria-controls="navbar-sticky"
        //                         aria-expanded="false"
        //                     >
        //                         <span className="sr-only">Open main menu</span>
        //                         <svg
        //                             className="w-5 h-5"
        //                             aria-hidden="true"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 17 14"
        //                         >
        //                             <path
        //                                 stroke="currentColor"
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M1 1h15M1 7h15M1 13h15"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </div>
        //                 <div className="flex-grow flex justify-center ml-3">
        //                     <div className="w-[80%] max-w-2xl">
        //                         <label htmlFor="search" className="sr-only">
        //                             Search
        //                         </label>
        //                         <form
        //                             className="relative"
        //                             // onSubmit={routeToSearch}
        //                         >
        //                             <input
        //                                 id="search"
        //                                 className="block w-full bg-white text-black rounded-md py-2 pl-10 pr-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                                 type="search"
        //                                 placeholder="Search"
        //                                 // value={query}
        //                                 // onChange={(e) =>
        //                                 //     setQuery(e.target.value)
        //                                 // }
        //                             />
        //                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        //                                 <span>
        //                                     <svg
        //                                         xmlns="http://www.w3.org/2000/svg"
        //                                         fill="none"
        //                                         viewBox="0 0 24 24"
        //                                         strokeWidth={1.5}
        //                                         stroke="currentColor"
        //                                         className="w-6 h-6"
        //                                     >
        //                                         <path
        //                                             strokeLinecap="round"
        //                                             strokeLinejoin="round"
        //                                             d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        //                                         />
        //                                     </svg>
        //                                 </span>
        //                             </div>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>
        //             <hr />
        //             {/* CATEGORIES */}
        //             <div className="hidden md:block bg-[#004b71] text-white ">
        //                 <div className=" max-w-2 p-2 flex flex-wrap items-center justify-between mx-auto ">
        //                     <div className="hidden sm:ml-6 sm:block">
        //                         <div className="flex">
        //                             {categoryMenu.map((item, i) => (
        //                                 <div key={i}>{item.icon}</div>
        //                             ))}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </nav>
        //     </div>
        //     {/* <Mobilenav /> */}
        //     {/* <Mobilefooter /> */}
        // </div>
    );
}

export default Navbar;
