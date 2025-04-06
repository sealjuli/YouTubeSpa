import { createSlice } from '@reduxjs/toolkit'
import { DispayType } from '../../types/displayType'

const initialState: { displayValue: DispayType } = { displayValue: 'blocks' }

const displayValueSlice = createSlice({
    name: 'displayValueSlice',
    initialState,
    reducers: {
        setBlocksDisplayValue: (state) => {
            state.displayValue = 'blocks'
        },
        setLinesDisplayValue: (state) => {
            state.displayValue = 'lines'
        }
    },
    selectors: {
        selectIsBlocksValue: (state) => state.displayValue === 'blocks'
    },
})

export const { selectIsBlocksValue } = displayValueSlice.selectors
export const { setBlocksDisplayValue, setLinesDisplayValue } = displayValueSlice.actions
export const displayValueReducer = displayValueSlice.reducer