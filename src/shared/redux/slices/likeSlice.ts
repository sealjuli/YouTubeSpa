import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
    liked: boolean
}

const initialState: InitialState = {
    liked: false
}

const likeSlice = createSlice({
    name: 'likeSlice',
    initialState,
    reducers: {
        setLikeButton: (state) => {
            state.liked = true
        },
        removeLikeButton: (state) => {
            state.liked = false
        },
    },
    selectors: {
        selectLikeValue: (state) => state.liked,
    },
})

export const { selectLikeValue } = likeSlice.selectors
export const { setLikeButton, removeLikeButton } = likeSlice.actions
export const likeReducer = likeSlice.reducer