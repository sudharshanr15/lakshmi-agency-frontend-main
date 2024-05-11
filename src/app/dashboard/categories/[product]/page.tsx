'use client';

import React, { useEffect } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCategoryItems } from "@/lib/server_api/items";
import Card from "@/containers/categories/card";
import { getAccessToken } from "@/lib/session";

function page({ params }) {

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
        //   dispatch(updateData(items))
          return
        }
    }, [items_query.data?.pageParams])

    function loadData({ pageParam }){
        return getCategoryItems(params.product, pageParam)
    }
    return (
        <div className="bg-white">
            {
                items_query.data?.pages.flatMap((item, index) => (
                    <Card {...item.data} />
                ))
            }
        </div>
    );
}

export default page;
