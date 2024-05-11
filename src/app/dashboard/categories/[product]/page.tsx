'use client';

import React from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCategoryItems } from "@/lib/server_api/items";

function page({ params }) {

    const items_query = useInfiniteQuery({
        queryKey: ["item", params.product],
        queryFn: ({ pageParam }) => getCategoryItems(params.product, pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextPage,
        staleTime: 1000 * 60 * 5
    })

    function loadData({ pageParam }){
        return getCategoryItems(params.product, pageParam)
    }
    return (
        <div className="bg-white">

        </div>
    );
}

export default page;
