import { configureStore } from '@reduxjs/toolkit'
import plannerReducer from './plannerSlice'

const store = configureStore({
    reducer: {
        planner: plannerReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch