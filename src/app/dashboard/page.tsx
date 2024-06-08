'use client';
import { Footer } from '@/components/Footer';
import MobileNavbar from '@/components/MobileNavbar'
import OrdersChart from '@/components/OrdersChart';
import Category from '@/components/Category';
import RecentOrders from '@/components/orders/RecentOrders';
import React from 'react'
import Link from 'next/link';
import { toggleCategoryNavbar } from '@/utils/methods';

function Dashboard() {
  return (
    <>
        <MobileNavbar />
        <div className='max-w-[1800px] mx-auto px-4 py-4 md:py-12'>
          <div className="mb-8">
            <div className="flex justify-between">
            <h2 className='text-body-big-bold md:text-heading5 !font-semibold mb-4'>Categories</h2>
              <button className='underline text-blue-500' onClick={toggleCategoryNavbar}>
                  View All
              </button>
            </div>
            <Category isNarrowed={true} />
          </div>
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