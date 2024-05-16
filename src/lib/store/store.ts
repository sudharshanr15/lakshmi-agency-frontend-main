import { combineReducers, configureStore } from "@reduxjs/toolkit"
import CategoryItemReducer from "./CategoryItemsSlicer"
import CartSlicer from "./CartSlicer"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import MobileNavbar from "./MobileNavbar"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    category_items: CategoryItemReducer,
    cart: persistReducer(persistConfig, CartSlicer),
    mobileNavbar: MobileNavbar
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>