import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../../hooks/storeHooks'
import { YouTubeResponse, YoutubeSearchResult } from '../../types/youTubeTypes'
import { youTubeApi } from '../../api/youTubeApi'
import { FieldType } from '../../types/favoriteItemsTypes'

type YouTubeRequest = Omit<FieldType, 'requestName'>

const sortByTitle = (a: YoutubeSearchResult, b: YoutubeSearchResult) => {
    return a.snippet.title.toLowerCase().localeCompare(b.snippet.title.toLowerCase());
};

const sortByChannelTitle = (a: YoutubeSearchResult, b: YoutubeSearchResult) => {
    return a.snippet.channelTitle.toLowerCase().localeCompare(b.snippet.channelTitle.toLowerCase());
};

const fetchGetVideos = createAppAsyncThunk<YouTubeResponse, YouTubeRequest>('videosSlice/fetchGetVideos', async (request: YouTubeRequest, thunkAPI) => {
    try {
        const { data } = await youTubeApi.getVideos(request)
        if (data.items && data.items.length > 0) {
            if (request.sortBy === 'title') {
                data.items.sort(sortByTitle)
            } else if (request.sortBy === 'channelTitle') {
                data.items.sort(sortByChannelTitle)
            }
        }
        return data
    } catch (e) {
        const error = e as { message: string }
        return thunkAPI.rejectWithValue(error.message)
    }
})

export type InitialStateType = {
    videos: {
        status: '' | 'loading' | 'succeeded' | 'failed';
        data: YouTubeResponse | null,
        error: string | null;
    }
}

const initialState: InitialStateType = { videos: { status: '', data: null, error: null } }


const videosSlice = createSlice({
    name: 'videosSlice',
    initialState,
    reducers: {
        clearVideosState: (state) => {
            state.videos.data = null;
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
                if (action.payload) {
                    state.videos.error = action.payload
                }
            })
    },
    selectors: {
        selectVideoStatus: (state) => state.videos.status,
        selectIsSucceededStatus: (state) => state.videos.status === 'succeeded',
        selectVideosArray: (state) => state.videos.data,
        selectVideosError: (state) => state.videos.error
    },
})

export { fetchGetVideos, }
export const { clearVideosState } = videosSlice.actions
export const videosReducer = videosSlice.reducer
export const {
    selectVideoStatus,
    selectIsSucceededStatus,
    selectVideosArray,
    selectVideosError } = videosSlice.selectors