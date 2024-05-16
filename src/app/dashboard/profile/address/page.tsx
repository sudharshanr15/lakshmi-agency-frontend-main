import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

function page() {
  return (
    <div className='flex flex-col gap-8'>
        <h4 className='font-medium hidden xl:block'>Delivery Address</h4>
        <div className="">
            <div className="flex flex-col gap-2 p-2 border rounded md:w-max">
                <h5 className='text-sm font-medium'>
                    <span className='text-gray-400'>Name:</span>
                    <span className="ms-2">Username here</span>
                </h5>
                <h5 className='text-sm font-medium'>
                    <span className='text-gray-400'>Primary Mobile:</span>
                    <span className="ms-2">primary mobile here</span>
                </h5>
                <h5 className='text-sm font-medium'>
                    <span className='text-gray-400'>Secondary Mobile Number:</span>
                    <span className="ms-2">secondary mobile here</span>
                </h5>
                <h5 className='text-sm font-medium'>
                    <span className='text-gray-400'>EMail id:</span>
                    <span className="ms-2">email here</span>
                </h5>
                <h5 className='text-sm font-medium'>
                    <span className='text-gray-400'>Address:</span>
                    <span className="ms-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugit?</span>
                </h5>
            </div>
        </div>
    </div>
  )
}

export default page