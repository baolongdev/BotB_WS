import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: DataStoreState = {
    dataStore: null,
};

const dataStoreSlice = createSlice({
    name: 'dataStore',
    initialState,
    reducers: {
        setDataStore: (state, action: PayloadAction<{ [key: string]: any }[]>) => {
            if (!state.dataStore) {
                state.dataStore = {};
            }
            action.payload.forEach(item => {
                Object.keys(item).forEach(key => {
                    state.dataStore[key] = item[key];
                });
            });
        },

        pushDataToStore: (state, action: PayloadAction<{ [key: string]: any }[]>) => {
            if (!state.dataStore) {
                state.dataStore = {};
            }
            action.payload.forEach(obj => {
                const key = Object.keys(obj)[0];
                state.dataStore[key] = obj[key];
            });
        },
        clearAlldataStore: (state) => {
            state.dataStore = null;
        },
    },
});

export const { setDataStore, clearAlldataStore, pushDataToStore } = dataStoreSlice.actions;
export default dataStoreSlice.reducer;
