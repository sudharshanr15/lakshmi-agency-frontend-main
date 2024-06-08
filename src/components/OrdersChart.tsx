'use client'
import Charts from "react-apexcharts"

import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts"
import { useQuery } from "@tanstack/react-query"
import { getOrders } from "@/lib/server_api/items"

type series = {
    data: Array<number>
}
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month_orders = Array(12).fill(0)

function OrdersChart() {
    const [series, setSeries] = useState([])
    const ordersQuery = useQuery({
        queryKey: ["orders"],
        queryFn: loadData
    })

    function loadData(){
        return getOrders().then(res => {
            if(res.status == true){
                return res.data.message
            }else{
                return Promise.reject("Error loading data")
            }
        }).catch(err => Promise.reject("Error loading data"))
    }

    useEffect(() => {
        if(ordersQuery.isSuccess){
            const group_dates = Object.groupBy(ordersQuery.data, groupDates)
            months.map((month, index) => {
                if(group_dates[month]){
                    month_orders[index] = group_dates[month]!.length
                }
            })

            setSeries((prev) => {
                return [{
                    data: month_orders
                }]
            })
        }else if(ordersQuery.isError){
            setSeries((prev) => {
                return [{
                    data: month_orders
                }]
            })        }
    }, [ordersQuery.data])

    const options =  {
        colors: ["#F9C74F"],
        xaxis: {
            categories: months
        },
        stroke: {
            curve: "smooth"
        }
    }

    if(ordersQuery.isLoading) return <></>

  return (
    <div>
        <ReactApexChart width="100%" options={options} series={series} />
    </div>
  )
}

function groupDates({ transaction_date }){
    const transaction_date_object = new Date(transaction_date)
    if(new Date().getFullYear() == transaction_date_object.getFullYear()){
        return months[transaction_date_object.getMonth()]
    }else{
        return false
    }
}

export default OrdersChart