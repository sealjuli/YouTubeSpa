import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavoriteItemType } from '../../types/favoriteItemsTypes'

type InitialState = { items: FavoriteItemType[] }
const login = localStorage.getItem('login')
const savedString = localStorage.getItem(`savedRequests_${login}`)
const initialState: InitialState = { items: savedString ? JSON.parse(savedString) || [] : [] }

const favoriteItemsSlice = createSlice({
    name: 'favoriteItemsSlice',
    initialState,
    reducers: {
        updateItem: (state, action: PayloadAction<FavoriteItemType>) => {
            const index = state.items.findIndex(val => val.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
            localStorage.setItem(
                `savedRequests_${login}`,
                JSON.stringify(state.items)
            )
        },
        addItem: (state, action: PayloadAction<FavoriteItemType>) => {
            state.items.push(action.payload)
            localStorage.setItem(
                `savedRequests_${login}`,
                JSON.stringify(state.items)
            )
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(val => val.id !== action.payload)
            localStorage.setItem(
                `savedRequests_${login}`,
                JSON.stringify(state.items)
            )
        }
    },
    selectors: {
        selectItems: (state) => state.items,
    },
})

export const { selectItems } = favoriteItemsSlice.selectors
export const { updateItem, addItem, deleteItem } = favoriteItemsSlice.actions
export const favoriteItemsReducer = favoriteItemsSlice.reducer