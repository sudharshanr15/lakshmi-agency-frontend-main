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
