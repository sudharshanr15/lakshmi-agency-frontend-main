'use client';

import React, { useEffect, useMemo } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCategoryItems } from "@/lib/server_api/items";
import Card from "@/containers/categories/card";
import { getAccessToken } from "@/lib/session";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "@/lib/store/CategoryItemsSlicer";
import { RootState } from "@/lib/store/store";
import Loading from "@/components/Loading";
import Link from "next/link";

function PageLoading(){
    return (
        <div className="flex h-full items-center justify-center my-11">
            <Loading />
        </div>
    )
}

function page({ params }) {
    const categoryItems = useSelector((state: RootState) => state.category_items)
    const cartItems = useSelector((state: RootState) => state.cart)

    const cartItemsCount = useMemo(() => {
        return Object.keys(cartItems.value).length
    }, [cartItems])

    const dispatch = useDispatch()

    const items_query = useInfiniteQuery({
        queryKey: ["item", params.product],
        queryFn: ({ pageParam }) => getCategoryItems(params.product, pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextPage,
        staleTime: 1000 * 60 * 5
    })

    useEffect(() => {
        if(items_query.data?.pageParams){
          const items = items_query.data.pages.flatMap(page => page.data)
          dispatch(updateData(items))
          return
        }
    }, [items_query.data?.pageParams])


    if(items_query.isLoading){
        return <PageLoading />
    }

    if(categoryItems.value.length == 0){
        return (
            <div className="flex justify-center items-center my-11">
                No results found
            </div>
        )
    }

    return (
        <>
            {
                (cartItemsCount != 0) && (
                    <div className="bg-gray-200">
                        <div className="flex justify-between items-center max-w-[1800px] mx-auto p-4">
                            <h5 className="text-primary text-body lg:text-heading5">Total {cartItemsCount} products selected</h5>
                            <Link href={""} className="bg-secondary-yellow text-sm py-4 px-8 text-sm-bold lg:text-body-bold">Preview & Request Order</Link>
                        </div>
                    </div>
                )
            }
            <div className="bg-white max-w-[1800px] mx-auto p-4">

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        categoryItems.value.map((item, index) => (
                            <Card {...item} key={index} />
                        ))
                    }
                </div>
                {items_query.hasNextPage && <div className="flex justify-center mt-8">
                    {items_query.isFetching ?
                        <Loading/> :
                        <button className="bg-primary py-4 px-8 text-white rounded-lg" onClick={() => items_query.fetchNextPage()}>Load More</button>
                    }
                </div>}
            </div>
        </>
    );
}

export default page;
