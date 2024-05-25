'use client';

import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '@/lib/server_api/items';
import Loading from '@/components/Loading';
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

  return (
    <div className='flex flex-col gap-8'>
        <div className="flex items-center gap-6">
            <span className="p-2 aspect-square rounded-full text-gray-400 border-2 border-gray-400 bg-gray-200">
                <PersonIcon fontSize='large' />
            </span>
            <h5 className='font-medium capitalize'>{userProfileQuery.data?.profile?.customer_name}</h5>
        </div>
        <div className='font-medium'>
            <h4 className='text-gray-400 mb-3'>Mobile Number</h4>
            <h5>{userProfileQuery.data?.profile?.custom_mobile_number}</h5>
        </div>
    </div>
  )
}

export default page