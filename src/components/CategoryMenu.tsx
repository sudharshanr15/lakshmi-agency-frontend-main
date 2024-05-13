import Link from 'next/link'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useQuery } from '@tanstack/react-query';
import { getItemGroups } from '@/lib/server_api/items';
import { ItemGroupData } from '@/types/items';
import { toast } from 'react-toastify';
import Loading from './Loading';

function CategoryItem({ item, setCategoryOpen }: {item: ItemGroupData, setCategoryOpen: any}){
    return (
        <Link href={"/dashboard/categories/" + item.name} className="flex justify-between gap-4 p-4 items-center hover:bg-[#EAEAEA]" onClick={() => {setCategoryOpen(false)}}>
            <div className="ms-4 flex gap-4 items-center">
                <div className="rounded-full bg-secondary-yellow p-1 aspect-square max-h-[50px]">
                    <img src="/assets/images/pipes.jpg" className='rounded-full aspect-square' alt="" />
                </div>
                <h5 className="text-sm">{item.name.toLowerCase()}</h5>
            </div>
            <ChevronRightIcon fontSize="small" />
        </Link>
    )
}

function CategoryLoading(){
    return (
        <div className="p-8 w-[250px] flex justify-center">
           <Loading />
        </div>
    )
}

function CategoryMenu({ setCategoryOpen }) {
    const categoryQuery = useQuery({
        queryKey: ["item_group"],
        queryFn: loadData,
        staleTime: 1000 * 60 * 5
    })

    function loadData(){
        return getItemGroups().then(res => {
            if(res.data){
                return res.data.data
            }else{
                return Promise.reject("Unable to fetch data")
            }
        }).catch(err => Promise.reject("Error Fetching categories"))
    }

    if(categoryQuery.isError){
        toast.error("Error fetching categories")
        setCategoryOpen(false)
        return <></>
    }

  return (
    <div className="absolute left-0 top-full h-screen max-h-screen overflow-y-auto z-50 w-full backdrop-blur">
        <div className="flex h-full border border-[#EAEAEA]">
            <div className="bg-[#F2F2F2] h-full">
                <div className="flex flex-col w-full my-4">
                    {categoryQuery.isLoading ?
                        <CategoryLoading /> :
                        categoryQuery.data.map((item: ItemGroupData, index: number) => (
                            <CategoryItem setCategoryOpen={setCategoryOpen} item={item} />
                        ))
                    }
                </div>
            </div>
            <div className="hidden">
                <div className="bg-white h-full">
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryMenu