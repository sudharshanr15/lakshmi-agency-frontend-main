'use client';

import { getOrders } from '@/lib/server_api/items';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import Loading from '../Loading';
import { OrderData } from '@/types/items';
import RefreshIcon from '@mui/icons-material/Refresh';
import Link from 'next/link';

function RecentOrders({ isNarrowed = false }: { isNarrowed?: boolean}) {
    const narrowedCount = 10;
    const queryClient = useQueryClient()
    const ordersQuery = useQuery({
        queryKey: ["orders"],
        queryFn: loadData
    })

    function loadData(){
        return getOrders().then(res => {
            if(res.status == true){
                return res.data.message
            }else{
                return Promise.reject("Error loading data")
            }
        }).catch(err => Promise.reject("Error loading data"))
    }

    return (
        <section className='w-full md:w-max'>
            <div className="flex justify-between">
                <h2 className='text-heading5 font-semibold mb-8'>Recent Orders</h2>
                {(isNarrowed && ordersQuery.data?.length > narrowedCount) && (
                    <Link href={"/dashboard/orders"} className='underline text-blue-500'>
                        View All
                    </Link>
                )}
            </div>
            <table className='md:min-w-[500px] max-w-full w-full p-5'>
                <thead className='bg-[#E7EEF1]'>
                    <tr className=''>
                        <th className='text-sm font-normal text-gray-500 text-start p-4'>Order ID</th>
                        <th className='text-sm font-normal text-gray-500 text-start p-4'>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {(ordersQuery.isLoading || ordersQuery.isFetching) ? (
                        <tr className='border-b border-gray-200'>
                            <td colSpan={2} className='px-2 py-4'>
                                <div className='flex justify-center'>
                                    <Loading height={20} width={20} />
                                </div>
                            </td>
                        </tr>
                    ) : ordersQuery.isError ? (
                        <tr className='border-b border-gray-200'>
                            <td colSpan={2} className='text-center text-sm p-4 text-gray-500'>
                                <button onClick={() => queryClient.invalidateQueries(["orders"])}>
                                    <span className='me-2'>Error loading data</span>
                                    <RefreshIcon fontSize='small' />
                                </button>
                            </td>
                        </tr>
                    ) : ordersQuery.data.slice(0, isNarrowed ? narrowedCount : ordersQuery.data.length).map((item: OrderData, index: number) => (
                        <tr className='border-b border-gray-200' key={item.name}>
                            <td className='p-3 text-gray-500'>{item.name}</td>
                            <td className='p-3 text-gray-500'>{item.transaction_date}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </section>
    )
}

export default RecentOrders