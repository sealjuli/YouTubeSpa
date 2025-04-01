import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './slices/usersSlice'
import { videosReducer } from './slices/videosSlice'

export const store = configureStore({
    reducer: {
        videosSlice: videosReducer,
        usersSlice: usersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;