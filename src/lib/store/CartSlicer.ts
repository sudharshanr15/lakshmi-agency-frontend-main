'use client';

import { CategoryItemData } from "@/types/items";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type QuantityType = {
    qty: number
}

type CartItemType = CategoryItemData & QuantityType

type CartSlicerType = {
    cart: {
        [key: string]: CartItemType
    }
}

const initialState: CartSlicerType = {
    cart: {}
}

const cartSlicer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state: CartSlicerType, action: PayloadAction<CartItemType>) => {
            state.cart[action.payload.item_code] = action.payload

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        remove: (state: CartSlicerType, action: PayloadAction<CategoryItemData>) => {
            const temp_object = state.cart
            delete temp_object[action.payload.item_code]

            state.cart = temp_object

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        clear: (state: CartSlicerType, action: PayloadAction<{}>) => {
            state.cart = {}
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    }
})

export const { add, remove, clear} = cartSlicer.actions

export default cartSlicer.reducer