import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../../hooks/storeHooks'
import { LoginUserType, LoginUserResponseType } from '../../types/usersTypes'
import { usersApi } from '../../api/usersApi'

const fetchPostLogin = createAppAsyncThunk<LoginUserResponseType, LoginUserType>(
    'usersSlice/fetchPostLogin',
    async (user: LoginUserType, thunkAPI) => {
        try {
            const response = await usersApi.postLoginUser(user)
            return response.data
        } catch (e) {
            const error = e as {
                response: {
                    data: {
                        message: string, errors?: {
                            location: string
                            msg: string
                            param: string
                            value: string
                        }[]
                    }
                }
            }
            if (error.response.data.errors) {
                return thunkAPI.rejectWithValue(error.response.data.errors[0].msg)
            } else
                return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)

type InitialStateType = {
    status: string;
    error: null | string;
    message: null | string;
}

const initialState: InitialStateType = { status: '', error: null, message: null }

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        clearUsersState: (state) => {
            state.status = ''
            state.error = null
            state.message = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostLogin.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchPostLogin.fulfilled, (state, action) => {
                state.status = 'succeeded'
                localStorage.setItem('token', action.payload.token)
            })
            .addCase(fetchPostLogin.rejected, (state, action) => {
                state.status = 'failed'
                if (action.payload) {
                    state.error = action.payload
                }
            })
    },
    selectors: {
        selectStatus: (state) => state.status,
        selectError: (state) => state.error,
        selectMessage: (state) => state.message,
    },
})

export { fetchPostLogin }
export const { clearUsersState } = usersSlice.actions
export const usersReducer = usersSlice.reducer
export const { selectStatus, selectError, selectMessage } = usersSlice.selectors