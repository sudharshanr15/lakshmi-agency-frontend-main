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