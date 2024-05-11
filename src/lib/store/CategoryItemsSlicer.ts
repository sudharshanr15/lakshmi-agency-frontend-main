import { CategoryItemData } from "@/types/items"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type CategoryItemSlicerType = {
    value: CategoryItemData[]
}

const initialValue: CategoryItemSlicerType = {
    value: []
}

export const CategoryItemSlicer = createSlice({
    name: "category_item_slicer",
    initialState: initialValue,
    reducers: {
        updateData: (state: CategoryItemSlicerType, action: PayloadAction<CategoryItemData[]>) => {
            state.value = [...action.payload]
        }
    }
})

export const { updateData } = CategoryItemSlicer.actions;

export default CategoryItemSlicer.reducer;