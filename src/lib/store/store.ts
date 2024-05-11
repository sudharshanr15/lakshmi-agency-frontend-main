import { configureStore } from "@reduxjs/toolkit"
import CategoryItemReducer from "./CategoryItemsSlicer"

export const store = configureStore({
    reducer: {
        category_items: CategoryItemReducer
    },
})

export type RootState = ReturnType<typeof store.getState>