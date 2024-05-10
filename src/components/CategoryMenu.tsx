import Link from 'next/link'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function CategoryMenu() {
  return (
    <div className="absolute left-0 top-full h-screen max-h-screen overflow-y-auto z-50 w-full backdrop-blur-sm">
        <div className="flex h-full border border-[#EAEAEA]">
            <div className="bg-[#F2F2F2] h-full">
                <div className="flex flex-col w-full my-4">
                    {Array(5).fill(0).map((item, index) => (
                        <Link href={""} className="flex gap-4 p-4 items-center hover:bg-[#EAEAEA]" key={index}>
                            <div className="ms-4">
                                <h5 className="text-sm ms-4">Pipes</h5>
                            </div>
                            <ChevronRightIcon fontSize="small" />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="hidden">
                <div className="bg-white h-full">
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryMenu