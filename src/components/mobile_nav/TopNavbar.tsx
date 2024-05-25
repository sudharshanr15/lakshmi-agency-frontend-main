import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

function TopNavbar() {
    const router = useRouter()
    const searchSchema = z.object({
        search: z.string().min(1)
    })

    const {
        handleSubmit,
        formState: { errors },
        register
    } = useForm({
        resolver: zodResolver(searchSchema)
    })

    function onSearch(data){
        router.push("/dashboard/search/" + data.search)
    }
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
            <div className={`bg-white text-black rounded-md py-2 p-2 text-sm ${errors.search?.message ? "border-2 border-red-400" : ""}`}>
                <form onSubmit={handleSubmit(onSearch)} className="flex me-4">
                    <input
                        type="text"
                        className="flex-grow focus:outline-none placeholder-gray-400 me-4"
                        placeholder="Search for any products..."
                        {...register("search")}
                    />
                    <button type="submit">
                        <SearchIcon className="text-secondary-yellow" />
                    </button>
                </form>
            </div>
        </div>
  )
}

export default TopNavbar