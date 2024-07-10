import { createSlice } from "@reduxjs/toolkit";

const initialState: SelectionFileState = {
    selectedFileNode: null,
};

const selectionFileSlice = createSlice({
    name: "selectionFile",
    initialState,
    reducers: {
        setSelectedFileNode: (state, action) => {
            state.selectedFileNode = action.payload;
        },
        clearSelectedFileNode: (state) => {
            state.selectedFileNode = null;
        },
    },
});

export const { setSelectedFileNode, clearSelectedFileNode } = selectionFileSlice.actions;
export default selectionFileSlice.reducer;
