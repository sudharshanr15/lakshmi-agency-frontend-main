import { RootState } from '@/lib/store/store'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

function CartCountTracker() {
    const cartItems = useSelector((state: RootState) => state.cart)

    const cartItemsCount = useMemo(() => {
        return Object.keys(cartItems.cart).length
    }, [cartItems])

    if(cartItemsCount == 0){
        return <></>
    }

    return (
        <div className="bg-gray-200">
            <div className="flex justify-between items-center max-w-[1800px] mx-auto p-4">
                <h5 className="text-primary text-body lg:text-heading5">Total {cartItemsCount} products selected</h5>
                <Link href={"/dashboard/cart"} className="bg-secondary-yellow text-sm py-4 px-8 text-sm-bold lg:text-body-bold">Preview & Request Order</Link>
            </div>
        </div>
    )
}

export default CartCountTracker