import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = { value: '', searchValue: '' }

const inputValueSlice = createSlice({
    name: 'inputValueSlice',
    initialState,
    reducers: {
        updateSearchInputValue: (state) => {
            state.searchValue = state.value
        },
        updateInputValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        clearInputValue: (state) => {
            state.value = ''
        }
    },
    selectors: {
        selectInputValue: (state) => state.value,
        selectSearchInputValue: (state) => state.searchValue,
    },
})

export const { selectInputValue, selectSearchInputValue } = inputValueSlice.selectors
export const { updateInputValue, updateSearchInputValue, clearInputValue } = inputValueSlice.actions
export const inputValueReducer = inputValueSlice.reducer