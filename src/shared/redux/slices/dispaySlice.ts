import { createSlice } from '@reduxjs/toolkit'
import { displayEnum } from '../../helpers/displayEnum'

const initialState: { displayValue: displayEnum } = { displayValue: displayEnum.blocks }

const displayValueSlice = createSlice({
    name: 'displayValueSlice',
    initialState,
    reducers: {
        setBlocksDisplayValue: (state) => {
            state.displayValue = displayEnum.blocks
        },
        setLinesDisplayValue: (state) => {
            state.displayValue = displayEnum.lines
        }
    },
    selectors: {
        selectDisplayValue: (state) => state.displayValue
    },
})

export const { selectDisplayValue } = displayValueSlice.selectors
export const { setBlocksDisplayValue, setLinesDisplayValue } = displayValueSlice.actions
export const displayValueReducer = displayValueSlice.reducer