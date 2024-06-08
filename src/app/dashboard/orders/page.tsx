import { Footer } from '@/components/Footer'
import MobileNavbar from '@/components/MobileNavbar'
import RecentOrders from '@/components/orders/RecentOrders'
import { MobileNavbarItems } from '@/types/navbar'
import React from 'react'

function OrdersPage() {

  return (
    <>
        <MobileNavbar active={MobileNavbarItems.ORDERS} />
        <div className='max-w-[1800px] mx-auto px-4 py-4 md:py-12'>
          <RecentOrders />
        </div>
        <Footer />
    </>
  )
}

export default OrdersPage