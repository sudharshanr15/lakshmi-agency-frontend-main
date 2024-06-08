import { Footer } from '@/components/Footer';
import MobileNavbar from '@/components/MobileNavbar'
import OrdersChart from '@/components/OrdersChart';
import Category from '@/components/mobile_nav/Category';
import RecentOrders from '@/components/orders/RecentOrders';
import React from 'react'

function Dashboard() {
  return (
    <>
        <MobileNavbar />
        <div className='max-w-[1800px] mx-auto px-4 py-4 md:py-12'>
          <div className="flex flex-col md:flex-row gap-4">
            <RecentOrders isNarrowed={true} />
            <div className="flex-grow">
              <OrdersChart />
            </div>
          </div>
        </div>
        <Footer />
    </>
    )
}

export default Dashboard