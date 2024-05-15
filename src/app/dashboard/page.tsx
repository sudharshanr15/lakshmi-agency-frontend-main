'use client';

import { Footer } from '@/components/Footer';
import MobileNavbar from '@/components/MobileNavbar'
import RecentOrders from '@/components/orders/RecentOrders';
import React from 'react'

function Dashboard() {
  return (
    <>
        <MobileNavbar />
        <div className='max-w-[1800px] mx-auto px-4 py-4 md:py-12'>
          <RecentOrders />
        </div>
        <Footer />
    </>
    )
}

export default Dashboard