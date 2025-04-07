import { createSlice } from '@reduxjs/toolkit'
import { MenuItemsEnum } from '../../enums/menuItemsEnum'

type InitialState = {
    currentItemMenu: MenuItemsEnum,
}

const initialState: InitialState = {
    currentItemMenu: MenuItemsEnum.search,
}

const menuItemSlice = createSlice({
    name: 'menuItemSlice',
    initialState,
    reducers: {
        setSearch: (state) => {
            state.currentItemMenu = MenuItemsEnum.search
        },
        setFavorites: (state) => {
            state.currentItemMenu = MenuItemsEnum.favorites
        },
    },
    selectors: {
        selectCurrentMenuItem: (state) => state.currentItemMenu,
    },
})

export const { selectCurrentMenuItem } = menuItemSlice.selectors
export const { setSearch, setFavorites } = menuItemSlice.actions
export const menuItemReducer = menuItemSlice.reducer