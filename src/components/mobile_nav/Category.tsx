import { getItemGroups } from '@/lib/server_api/items'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../Loading'
import { ItemGroupData } from '@/types/items'
import Link from 'next/link'

function CategoryLoading(){
    return (
        <div className="w-full h-full">
            <div className="flex h-full items-center justify-center">
                <Loading height={30} width={30} />
            </div>
        </div>
    )
}

function Category() {
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

    if(categoryQuery.isLoading){
        return <CategoryLoading />
    }

    return (
        <div className="p-4 grid grid-cols-3 gap-x-4 gap-y-12">
            {categoryQuery.data.map((item: ItemGroupData, index: number) => (
                <Link href={""} key={index} className='text-center hover:bg-[#EAEAEA]'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="p-2 bg-secondary-yellow max-w-[80px] rounded-full aspect-square overflow-hidden">
                            <img src="/assets/images/pipes.jpg" className="h-full object-cover aspect-square rounded-full" alt="" />
                        </div>
                        <span className='text-sm mt-2'>{item.name.toLowerCase()}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Category