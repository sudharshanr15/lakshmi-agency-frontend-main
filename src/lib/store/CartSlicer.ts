import { CategoryItemData } from "@/types/items";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type QuantityType = {
    qty: number
}

type CartItemType = CategoryItemData & QuantityType

type CartSlicerType = {
    value: {
        [key: string]: CartItemType
    }
}

const initialState: CartSlicerType = {
    value: JSON.parse(sessionStorage.getItem("cart") ?? "{}")
}

const cartSlicer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state: CartSlicerType, action: PayloadAction<CartItemType>) => {
            state.value[action.payload.item_code] = action.payload

            sessionStorage.setItem("cart", JSON.stringify(state.value));
        },
        remove: (state: CartSlicerType, action: PayloadAction<CategoryItemData>) => {
            const temp_object = state.value
            delete temp_object[action.payload.item_code]

            state.value = temp_object

            sessionStorage.setItem("cart", JSON.stringify(state.value));
        },
        clear: (state: CartSlicerType, action: PayloadAction<{}>) => {
            state.value = {}
            sessionStorage.setItem("cart", JSON.stringify(state.value));
        }
    }
})

export const { add, remove, clear} = cartSlicer.actions

export default cartSlicer.reducer