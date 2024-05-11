import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

export function Footer() {
    return (
        <>
            <div className="bg-[#F8F9FA] z-[100] sm:block hidden">
                <div className="mx-10 mt-12  lg:mt-16 mb-5">
                    <div className="grid grid-cols-2  ">
                        <div className="mx-2">
                            <div className="flex items-center p-5">
                                <img
                                    src={"/assets/images/Lakshmi.png"}
                                    alt="Logo"
                                    className="w-40 h-20"
                                />
                            </div>
                            <p className="">
                                The objective of Lakshmi Agency is to establish
                                a marketplace for selling interior construction
                                and decoration products for both living and
                                working spaces. The aim is to provide customers
                                with a one-stop-shop where they can find all the
                                necessary materials and benefit from exclusive
                                offers . This will ultimately save them time,
                                money, and energy in their search for interior
                                design solutions.
                            </p>
                        </div>

                        <div className="mt-2 md:mt-20 mx-2 p-4 flex justify-evenly">
                            {/*  */}
                            {/* <div>
                  <h1 className="text-2xl font-bold mt-5 text-[#004b71]">
                    About us
                  </h1>
                  <p className="mt-4 mx-auto"></p>
                  <span className="text-1xl">
                    <p className="mt-3">Our careers</p>
                    <p className="mt-3">Our partners</p>
                    <p className="mt-3">Our clients</p>
                  </span>
                </div> */}
                            {/*  */}
                            <div>
                                <h1 className="text-2xl text-[#004b71] font-bold mt-5">
                                    Resources
                                </h1>
                                <p className="mt-4 mx-auto"></p>
                                <span className=" text-1xl">
                                    <p className="mt-3">Blogs</p>
                                    {/* <p className="mt-3">Offer page</p>
                    <p className="mt-3">Tutorials</p>
                    <p className="mt-3">Clients page</p> */}
                                </span>
                            </div>
                            {/*  */}
                            <div>
                                <h1 className="text-2xl font-bold mt-5 text-[#004b71]">
                                    Reach us
                                </h1>
                                <p className="mt-4 mx-auto"></p>
                                <span className=" text-1xl">
                                    <p className="mt-3">Contact us</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="hidden md:block shadow bg-[#0A4E71]">
                    <div className="w-full p-4 md:flex md:items-center md:justify-between">
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
                            <li>
                                <Link
                                    href="#"
                                    className="mr-4 hover:underline md:mr-6"
                                >
                                    Copyrights@2022.All rights reserved by
                                    Lakshmi Agency
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="mr-4 hover:underline md:mr-6"
                                >
                                    |
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="mr-4 hover:underline md:mr-6"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="mr-4 hover:underline md:mr-6"
                                >
                                    |
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="mr-4 hover:underline md:mr-6"
                                >
                                    Cookie policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="mr-4 hover:underline md:mr-6"
                                >
                                    |
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Terms of use
                                </Link>
                            </li>
                        </ul>

                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center space-x-4">
                            <span className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
                                <FacebookIcon className="h-6 w-6 text-white" />
                            </span>
                            <span className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
                                <TwitterIcon className="h-6 w-6 text-white" />
                            </span>
                            <span className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
                                <LinkedInIcon className="h-6 w-6 text-white" />
                            </span>
                        </span>
                    </div>
                </footer>
            </div>
            <div className="h-24 sm:hidden block"></div>
        </>
    );
}
