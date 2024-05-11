import { configureStore } from "@reduxjs/toolkit"
import CategoryItemReducer from "./CategoryItemsSlicer"
import CartSlicer from "./CartSlicer"

export const store = configureStore({
    reducer: {
        category_items: CategoryItemReducer,
        cart: CartSlicer
    },
})

export type RootState = ReturnType<typeof store.getState>