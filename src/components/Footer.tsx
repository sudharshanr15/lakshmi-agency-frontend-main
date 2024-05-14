import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#F8F9FA] hidden xl:block">
            <div className="flex max-w-[1800px] mx-auto px-4 py-16">
                <div className='max-w-[430px] text-sm'>
                    <div className='flex gap-1 items-center'>
                        <img src="/assets/images/Lakshmi.png" alt="" className='max-w-[50px]' />
                        <span className='uppercase text-sm-bold'>LAKSHMI AGENCY</span>
                    </div>
                    <p className='mt-4'>
                    The objective of Lakshmi Agency is to establish a marketplace for selling interior construction and decoration products for both living and working spaces. The aim is to provide customers with a one-stop-shop where they can find all the necessary materials and benefit from exclusive offers . This will ultimately save them time, money, and energy in their search for interior design solutions.
                    </p>
                </div>
                <div className="flex-grow md:ms-20 xl:ms-40">
                    <div className="flex md:gap-x-20 xl:gap-x-40">
                        <div className='flex flex-col gap-4'>
                            <h5 className='text-primary capitalize text-body-bold'>About Us</h5>
                            <Link href={""} className='text-sm font-medium capitalize'>Our Stories</Link>
                            <Link href={""} className='text-sm font-medium capitalize'>Our Careers</Link>
                            <Link href={""} className='text-sm font-medium capitalize'>Our Partners</Link>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h5 className='text-primary capitalize text-body-bold'>Resources</h5>
                            <Link href={""} className='text-sm font-medium capitalize'>Blogs</Link>
                            <Link href={""} className='text-sm font-medium capitalize'>Offers Page</Link>
                            <Link href={""} className='text-sm font-medium capitalize'>FAQ</Link>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h5 className='text-primary capitalize text-body-bold'>Reach Us</h5>
                            <Link href={""} className='text-sm font-medium capitalize'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:block shadow bg-primary">
                <div className="max-w-[1800px] mx-auto">
                    <div className="w-full p-4 md:flex md:items-center md:justify-between">
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
                            <li className='border-r last:border-r-0'>
                                <span
                                    className="hover:underline px-4"
                                >
                                    Copyrights@2022 All rights reserved by
                                    Lakshmi Agency
                                </span>
                            </li>
                            <li className='border-r last:border-r-0'>
                                <Link
                                    href="#"
                                    className="hover:underline px-4"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className='border-r last:border-r-0'>
                                <Link
                                    href="#"
                                    className="hover:underline px-4"
                                >
                                    Cookie policy
                                </Link>
                            </li>
                            <li className='border-r last:border-r-0'>
                                <Link
                                    href="#"
                                    className="hover:underline px-4"
                                >
                                    Terms of use
                                </Link>
                            </li>
                        </ul>

                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center space-x-4">
                            <Link href={""} className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
                                <FacebookIcon className="h-6 w-6 text-white" />
                            </Link>
                            <Link href={""} className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
                                <TwitterIcon className="h-6 w-6 text-white" />
                            </Link>
                            <Link href={""} className="flex items-center justify-center h-10 w-10 bg-[#356c88] rounded-md">
                                <LinkedInIcon className="h-6 w-6 text-white" />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
