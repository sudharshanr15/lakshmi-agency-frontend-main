'use client';

import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Loading from '@/components/Loading';
import { getUserProfile } from '@/lib/server_api/items';
import { useQuery } from '@tanstack/react-query';
import ReplayIcon from '@mui/icons-material/Replay';

function page() {
    const userProfileQuery = useQuery({
        queryKey: ["user_profile"],
        queryFn: loadData
    })

    function loadData(){
        return getUserProfile()
    }

    if(userProfileQuery.isLoading || userProfileQuery.isFetching){
        return <Loading />
    }

    if(userProfileQuery.isError){
        return (
            <button onClick={() => userProfileQuery.refetch()} className="inline-flex items-center gap-2 text-primary">
                <ReplayIcon />
                <span>Retry</span>
            </button>
        )
    }

    throw new Error("sdfsdf")

  return (
    <div className='flex flex-col gap-8'>
        <h4 className='font-medium hidden xl:block'>Delivery Address</h4>
        <div className="">
            <div className="flex flex-col gap-2 p-2 border rounded md:w-max">
                <h5 className='text-sm font-medium'>
                    <span className='text-gray-400'>Name:</span>
                    <span className="ms-2">{userProfileQuery.data?.address?.name}</span>
                </h5>
                <h5 className='text-sm font-medium'>
                    <span className='text-gray-400'>Primary Mobile:</span>
                    <span className="ms-2">{userProfileQuery.data?.profile?.custom_mobile_number}</span>
                </h5>
                <h5 className='text-sm font-medium'>
                    <span className='text-gray-400'>Address:</span>
                    <span className="ms-2" dangerouslySetInnerHTML={{ __html: userProfileQuery.data?.profile?.primary_address.replaceAll("\n", "").split("<br>").join(" ")}}></span>
                </h5>
            </div>
        </div>
    </div>
  )
}

export default page