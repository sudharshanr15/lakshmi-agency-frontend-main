'use client';

import CartCountTracker from '@/components/CartCountTracker';
import Loading from '@/components/Loading';
import PageLoading from '@/components/PageLoading';
import Card from '@/containers/categories/card';
import { getSearchItems } from '@/lib/server_api/items';
import { updateData } from '@/lib/store/SearchSlicer';
import { RootState } from '@/lib/store/store';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function page({ params }) {
    const searchItem = params.search;
    const dispatch = useDispatch();
    const searchItems = useSelector((state: RootState) => state.search);

    const searchQuery = useInfiniteQuery({
        queryKey: ["search", searchItem],
        queryFn: ({ pageParam }) => getSearchItems(searchItem, pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    })

    useEffect(() => {
        if(searchQuery.data?.pageParams){
            const items = searchQuery.data.pages.flatMap(page => page.data)
            dispatch(updateData({item_name: searchItem, value: items}))
            return
        }
    }, [searchQuery.data?.pageParams])

    if(searchQuery.isLoading){
        return <PageLoading />
    }

    if(searchItems.value[searchItem]?.length == 0){
        return (
            <div className="flex justify-center items-center my-11">
                No results found
            </div>
        )
    }

    return (
        <>
            <CartCountTracker />
            <div className="bg-white max-w-[1800px] mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        searchItems.value[searchItem]?.map((item, index) => (
                            <Card {...item} key={item.item_code} />
                        ))
                    }
                </div>
                {searchQuery.hasNextPage && <div className="flex justify-center mt-8">
                    {searchQuery.isFetching ?
                        <Loading/> :
                        <button className="bg-primary py-4 px-8 text-white rounded-lg" onClick={() => searchQuery.fetchNextPage()}>Load More</button>
                    }
                </div>}
            </div>
        </>
    )
}

export default page