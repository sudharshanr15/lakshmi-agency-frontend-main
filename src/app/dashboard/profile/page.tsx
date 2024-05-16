import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

function page() {
  return (
    <div className='flex flex-col gap-8'>
        <div className="flex items-center gap-6">
            <span className="p-2 aspect-square rounded-full text-gray-400 border-2 border-gray-400 bg-gray-200">
                <PersonIcon fontSize='large' />
            </span>
            <h5 className='font-medium capitalize'>Update username</h5>
        </div>
        <div className='font-medium'>
            <h4 className='text-gray-400 mb-3'>Mobile Number</h4>
            <h5>123467890</h5>
        </div>
        <div className='font-medium'>
            <h4 className='text-gray-400 mb-3'>Email Address</h4>
            <h5>N/A</h5>
        </div>
    </div>
  )
}

export default page