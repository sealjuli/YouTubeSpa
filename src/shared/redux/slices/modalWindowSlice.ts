import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavoriteItemType } from '../../types/favoriteItemsTypes'

type InitialState = {
    showWindow: boolean,
    query: FavoriteItemType
}

const initialState: InitialState = {
    showWindow: false,
    query: {
        id: '',
        request: '',
        requestName: '',
        sortBy: 'Без сортировки',
        quantity: 12
    }
}

const modalWindowSlice = createSlice({
    name: 'modalWindowSlice',
    initialState,
    reducers: {
        changeShowWindow: (state) => {
            state.showWindow = !state.showWindow
        },
        setRequest: (state, action: PayloadAction<string>) => {
            state.query.request = action.payload
        },
        setRequestName: (state, action: PayloadAction<string>) => {
            state.query.requestName = action.payload
        },
        setSortBy: (state, action: PayloadAction<string>) => {
            state.query.sortBy = action.payload
        },
        setQuantity: (state, action: PayloadAction<number | null>) => {
            state.query.quantity = action.payload

        },
        setQuery: (state, action: PayloadAction<FavoriteItemType>) => {
            state.query = action.payload
        },
        clearQuery: (state) => {
            state.query.request = ''
            state.query.requestName = ''
            state.query.sortBy = 'Без сортировки'
            state.query.quantity = 12
        }
    },
    selectors: {
        selectShowWindow: (state) => state.showWindow,
        selectQuery: (state) => state.query
    },
})

export const { selectShowWindow, selectQuery } = modalWindowSlice.selectors
export const {
    changeShowWindow,
    setQuery,
    setRequest,
    setRequestName,
    setSortBy,
    setQuantity,
    clearQuery } = modalWindowSlice.actions
export const modalWindowReducer = modalWindowSlice.reducer