'use client';

import Loading from '@/components/Loading';
import OrderSuccess from '@/components/OrderSuccess';
import Card from '@/containers/categories/card';
import { postOrder } from '@/lib/server_api/items';
import { clear } from '@/lib/store/CartSlicer';
import { RootState } from '@/lib/store/store'
import Link from 'next/link';
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

function page() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart)
    const cartItemsCount = useMemo(() => {
        return Object.keys(cartItems.cart).length
    }, [cartItems])
    const [orderStatus, setOrderStatus] = useState(false)
    const [isOrderLoading, setIsOrderLoading] = useState(false)

    function clearCart(){
        dispatch(clear({}))
    }

    function onOrderBtn(){
        const date = new Date()
        date.setDate(date.getDate() + 4)
        const delivery_date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        const items = Object.values(cartItems.cart).map(item => (
            {
                item_code: item.item_code,
                qty: item.qty,
                delivery_date: delivery_date
            }
        ))
        setIsOrderLoading(true)
        postOrder(items).then(res => {
            if(res.status){
                setOrderStatus(true)
                dispatch(clear({}))
            }else{
                toast.error(res.data.message ?? "Unable to place order")
            }
            }).catch(err => toast.error("Unable to place order"))
            .finally(() => {
                setIsOrderLoading(false)
            })
    }

    if(orderStatus){
        return <OrderResult />
    }

    return (
        <>
            <div className="bg-gray-200">
                <div className="max-w-[1800px] mx-auto p-4">
                    {
                        (cartItemsCount != 0) ? (
                            <>
                            <h5 className="text-primary text-body lg:text-heading5">Total {cartItemsCount} products selected</h5>
                            <div className='flex justify-end gap-4'>
                                <button className='border border-primary text-primary rounded p-2 text-sm lg:text-body flex-grow max-w-[300px]' onClick={clearCart}>Clear</button>
                                <button className="bg-secondary-yellow p-2 text-sm-bold lg:text-body-bold rounded flex-grow max-w-[300px]" onClick={onOrderBtn} disabled={isOrderLoading}>
                                    <div className="flex gap-4 justify-center items-center">
                                        {isOrderLoading && <Loading className='text-black' height={20} width={20} />}
                                        <span>Place Order</span>
                                    </div>
                                </button>
                            </div>
                            </>
                        ) : (
                            <h5 className="text-primary text-body lg:text-heading5">Cart is empty</h5>
                        )
                    }
                </div>
            </div>
            <div className="bg-white max-w-[1800px] mx-auto p-4">

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        Object.values(cartItems.cart).map((item, index) => (
                            <Card {...item} key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

function OrderResult() {
    return (
        <div className="h-[60vh]">
            <OrderSuccess />
        </div>
    );
  }

export default page