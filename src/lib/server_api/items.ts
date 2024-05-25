'use server';

import { ResponseParams } from "@/types/Request";
import { CategoryItemValidNames, UserProfile } from "@/types/items";
import Request from "@/utils/Request"

const HOST_URL = "https://portal.lakshmiagency.com"

export async function getItemGroups(){
    const url = new URL("/api/resource/Item Group", HOST_URL)
    const filters = {"parent_item_group":"Lakshmi Agency"}
    const fields = ["name", "item_group_name", "image"]

    url.searchParams.set("filters", JSON.stringify(filters))
    url.searchParams.set("fields", JSON.stringify(fields))

    return Request({ url })
}

type nextPage = {nextPage: number | null}

export async function getCategoryItems(item: string, pageParam: number): Promise<ResponseParams & nextPage>{
    const page_limit = 10;
    let next_page: null | number = null;

    const url = new URL("/api/resource/Item", HOST_URL)
    const filters = {"item_group": [
        "descendants of (inclusive)",
        item
    ]};
    const fields = CategoryItemValidNames

    url.searchParams.set("filters", JSON.stringify(filters))
    url.searchParams.set("fields", JSON.stringify(fields))
    url.searchParams.set("limit_start", pageParam.toString())
    url.searchParams.set("limit_page_length", page_limit.toString())

    return Request({ url }).then(res => {
        if(res.status){
            if(res.data.data.length == page_limit){
                next_page = pageParam + page_limit
            }

            return {
                ...res,
                data: res.data.data,
                nextPage: next_page
            }
        }else{
            return{
                ...res,
                data: res.data.data,
                nextPage: next_page
            }
        }
    }).catch(err => ({
        status: false,
        data: [],
        nextPage: next_page,
        statusCode: 0
    }))
}

export async function postOrder(items: {item_code: string, qty: number, delivery_date: string}[]){
    const url = new URL("/api/method/lakshmiagency.api.v1.order.add_order", HOST_URL)
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify({
        "items": items
    })
    return Request({ url, method: "POST", headers, body})
}

export async function getOrders(){
    const url = new URL("/api/method/lakshmiagency.api.v1.order.get_order", HOST_URL)

    return Request({ url, method: "POST"})
}

export async function getUserProfile(): Promise<Partial<UserProfile>>{
    const url = new URL("/api/method/lakshmiagency.api.v1.customer.get_profile", HOST_URL)

    const response: Partial<UserProfile> = {}

    return Request({ url }).then(res => {
        if(res.status){
            const profile = res.data.message.profile[0]
            const address = res.data.message.address[0]
            if(profile){
                const {customer_name, custom_mobile_number, email_id, primary_address} = profile
                response.profile = {customer_name, custom_mobile_number, email_id, primary_address}
            }

            if(address){
                const {name, address_line1, city, state, country, pincode, email_id } = address
                response.address = {name, address_line1, city, state, country, pincode, email_id }
            }

            return response
        }else{
            return Promise.reject("Unable to fetch data")
        }
    }).catch(err => Promise.reject(err))
}

export async function getSearchItems(item: string, pageParam: number): Promise<ResponseParams & nextPage>{
    const page_limit = 10;
    let next_page: null | number = null;

    const url = new URL("/api/resource/Item", HOST_URL)
    const filters = {"item_name": [
        "like",
        "180 MTRS CRI ZFIRE WIRES 1.0 SQ.MM BLACK"
    ]};
    const fields = CategoryItemValidNames

    url.searchParams.set("filters", JSON.stringify(filters))
    url.searchParams.set("fields", JSON.stringify(fields))
    url.searchParams.set("limit_start", pageParam.toString())
    url.searchParams.set("limit_page_length", page_limit.toString())

    return Request({ url }).then(res => {
        if(res.status){
            if(res.data.data.length == page_limit){
                next_page = pageParam + page_limit
            }

            return {
                ...res,
                data: res.data.data,
                nextPage: next_page
            }
        }else{
            return{
                ...res,
                data: res.data.data,
                nextPage: next_page
            }
        }
    }).catch(err => ({
        status: false,
        data: [],
        nextPage: next_page,
        statusCode: 0
    }))
}