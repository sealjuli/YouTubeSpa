import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './slices/usersSlice'
import { videosReducer } from './slices/videosSlice'
import { inputValueReducer } from './slices/inputValueSlice'
import { displayValueReducer } from './slices/dispaySlice'
import { modalWindowReducer } from './slices/modalWindowSlice'
import { likeReducer } from './slices/likeSlice'
import { menuItemReducer } from './slices/menuItemSlice'
import { favoriteItemsReducer } from './slices/favoriteItemsSlice'

export const store = configureStore({
    reducer: {
        usersSlice: usersReducer,
        inputValueSlice: inputValueReducer,
        displayValueSlice: displayValueReducer,
        modalWindowSlice: modalWindowReducer,
        likeSlice: likeReducer,
        menuItemSlice: menuItemReducer,
        favoriteItemsSlice: favoriteItemsReducer,
        videosSlice: videosReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;