import { CategoryItemData } from "@/types/items";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SearchItemSlicerType = {
    value: {
        [key: string]: CategoryItemData[]
    }
}

type PayloadParamsType = {
    item_name: string,
    value: CategoryItemData[]
}

const initialState: SearchItemSlicerType = {
    value: {}
}

const searchSlicer = createSlice({
    name: "search_slicer",
    initialState,
    reducers: {
        updateData: (state: SearchItemSlicerType, action: PayloadAction<PayloadParamsType>) => {
            state.value[action.payload.item_name] = action.payload.value
        }
    }
})

export const { updateData } = searchSlicer.actions

export default searchSlicer.reducer