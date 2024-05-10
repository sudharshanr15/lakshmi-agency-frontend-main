import Link from 'next/link'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useQuery } from '@tanstack/react-query';
import { getItemGroups } from '@/lib/server_api/items';
import { ItemGroupData } from '@/types/items';
import { toast } from 'react-toastify';
import Loading from './Loading';

function CategoryItem({ item }: {item: ItemGroupData}){
    return (
        <Link href={""} className="flex justify-between gap-4 p-4 items-center hover:bg-[#EAEAEA]">
            <div className="ms-4">
                <h5 className="text-sm ms-4">{item.name.toLowerCase()}</h5>
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
        queryFn: loadData
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
                            <CategoryItem item={item} />
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