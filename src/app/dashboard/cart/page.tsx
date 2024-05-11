'use client';

import Card from '@/containers/categories/card';
import { RootState } from '@/lib/store/store'
import React from 'react'
import { useSelector } from 'react-redux'

function page() {
    const cartItems = useSelector((state: RootState) => state.cart)
    return (
        <>
            {/* {
                (cartItemsCount != 0) && (
                    <div className="bg-gray-200">
                        <div className="flex justify-between items-center max-w-[1800px] mx-auto p-4">
                            <h5 className="text-primary text-body lg:text-heading5">Total {cartItemsCount} products selected</h5>
                            <Link href={""} className="bg-secondary-yellow text-sm py-4 px-8 text-sm-bold lg:text-body-bold">Preview & Request Order</Link>
                        </div>
                    </div>
                )
            } */}
            <div className="bg-white max-w-[1800px] mx-auto p-4">

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        Object.values(cartItems.value).map((item, index) => (
                            <Card {...item} key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default page