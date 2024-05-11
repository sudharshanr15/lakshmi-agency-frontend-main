import Link from 'next/link'
import React from 'react'

function OrderSuccess() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-primary font-semibold">
        <h2>Your Order has been<br/>Placed successfully</h2>
        <img
            src={"/assets/images/order-result.png"}
            alt="order-result"
        />
        <div className="px-4 py-4 flex flex-col">
            <button className="bg-secondary-yellow text-black py-2 px-24 rounded mb-2">
                Go to Orders
            </button>
            <Link href={"/dashboard"} className="text-primary border border-primary py-2 px-24 rounded">
                Back to Home
            </Link>
        </div>
    </div>
  )
}

export default OrderSuccess