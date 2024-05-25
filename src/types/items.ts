export type ItemGroupData = {
    name: string,
    item_group_name: string,
    image?: string
}

export type CategoryItemData = {
    name: string,
    item_code: string,
    item_name: string,
    item_group: string,
    disabled: string,
    image: string,
    description: string,
    brand: string
}

export const CategoryItemValidNames = ["name", "item_code", "item_name", "item_group", "disabled", "image", "description", "brand"]

export type OrderData = {
    name: string,
    transaction_date: string
}

export type UserProfile = {
    profile: {
        customer_name: string,
        custom_mobile_number: string,
        email_id?: string,
        primary_address: string
    },
    address: {
        name: string,
        address_line1: string,
        city: string,
        state: string,
        country: string,
        pincode: string,
        email_id?: string
    }
}