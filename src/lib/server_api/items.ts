'use server';

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

export async function getCategoryItems(item: string, pageParam: number){
    const page_limit = 10;
    let next_page: null | number = null;

    const url = new URL("/api/resource/Item", HOST_URL)
    const filters = {"item_group": [
        "descendants of (inclusive)",
        item
    ]};
    const fields = ["name", "image"]

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
                nextPage: next_page
            }
        }else{
            return{
                ...res,
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
