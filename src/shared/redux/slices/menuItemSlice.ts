import { createSlice } from '@reduxjs/toolkit'
import { menuItemsEnum } from '../../helpers/menuItemsEnum'

type InitialState = {
    currentItemMenu: menuItemsEnum,
}

const initialState: InitialState = {
    currentItemMenu: menuItemsEnum.search,
}

const menuItemSlice = createSlice({
    name: 'menuItemSlice',
    initialState,
    reducers: {
        setSearch: (state) => {
            state.currentItemMenu = menuItemsEnum.search
        },
        setFavorites: (state) => {
            state.currentItemMenu = menuItemsEnum.favorites
        },
    },
    selectors: {
        selectCurrentMenuItem: (state) => state.currentItemMenu,
    },
})

export const { selectCurrentMenuItem } = menuItemSlice.selectors
export const { setSearch, setFavorites } = menuItemSlice.actions
export const menuItemReducer = menuItemSlice.reducer