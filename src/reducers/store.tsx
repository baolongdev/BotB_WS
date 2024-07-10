import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from './service/dummyData'
import { googleApi } from './service/GoogleApi'
import selectionFileSlice from './features/selectionFile/selectionFileSlice'
import dataStoreSlice from './features/dataStore/dataStoreSlice'


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        selectionFile: selectionFileSlice,
        dataStore: dataStoreSlice,
        [productsApi.reducerPath]: productsApi.reducer,
        [googleApi.reducerPath]: googleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, googleApi.middleware),
})

setupListeners(store.dispatch)