import { configureStore } from '@reduxjs/toolkit'
// import { enterValueReducer } from './slices/enterValueSlice'
// import { updatingValueReducer } from './slices/updatingValueSlice'
// import { todosReducer } from './slices/todosSlice'
import { usersReducer } from './slices/usersSlice'

export const store = configureStore({
    reducer: {
        // enterValueSlice: enterValueReducer,
        // updatingValueSlice: updatingValueReducer,
        // todosSlice: todosReducer,
        usersSlice: usersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;