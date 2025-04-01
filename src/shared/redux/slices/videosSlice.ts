import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../../hooks/storeHooks'
import { YouTubeResponse } from '../../types/youTubeTypes'
import { youTubeApi } from '../../api/youTubeApi'

const fetchGetVideos = createAppAsyncThunk<YouTubeResponse, string>('videosSlice/fetchGetVideos', async (query: string, thunkAPI) => {
    try {
        const { data } = await youTubeApi.getVideos(query)
        return data
    } catch (e) {
        console.log(e)
        const error = e as { message: string }
        return thunkAPI.rejectWithValue(error.message)
    }
})

export type InitialStateType = {
    videos: {
        status: string;
        data: YouTubeResponse | [],
        error: null | string;
    }
}

const initialState: InitialStateType = { videos: { status: '', data: [], error: null } }


const videosSlice = createSlice({
    name: 'videosSlice',
    initialState,
    reducers: {
        clearVideosState: (state) => {
            state.videos.data = [];
            state.videos.error = null;
            state.videos.status = '';
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetVideos.pending, (state) => {
                state.videos.status = 'loading'
                state.videos.error = null
            })
            .addCase(fetchGetVideos.fulfilled, (state, action) => {
                state.videos.status = 'succeeded'
                state.videos.data = action.payload
            })
            .addCase(fetchGetVideos.rejected, (state, action) => {
                state.videos.status = 'failed'
                console.log(action.payload)
                if (action.payload) {
                    state.videos.error = action.payload
                }
            })
    },
    selectors: {
        selectVideoStatus: (state) => state.videos.status
        // selectTodos: (state) => state.todos.data,
        // selectTaskById: (state, id) =>
        //     state.todos.data.find((task) => task.id === id),
    },
})

export { fetchGetVideos, }
export const { clearVideosState } = videosSlice.actions
export const videosReducer = videosSlice.reducer
export const { selectVideoStatus } = videosSlice.selectors