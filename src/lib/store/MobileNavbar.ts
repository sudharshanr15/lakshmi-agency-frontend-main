import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ActiveNavbarItem = {
    activeItem?: string
}

const initialState: ActiveNavbarItem = {
    activeItem: undefined
}

const slicer = createSlice({
    name: "mobile-active-navbar-item",
    initialState,
    reducers: {
        update: function(state: ActiveNavbarItem, action: PayloadAction<string>){
            state.activeItem = action.payload
        }
    }
})

export const { update } = slicer.actions

export default slicer.reducer