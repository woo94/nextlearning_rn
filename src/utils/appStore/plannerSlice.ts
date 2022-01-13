import { RootState } from './Store'
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { __DOC__PLANNER } from 'src/utils/types/firestore'

export const plannerAdapter = createEntityAdapter<__DOC__PLANNER>({
    selectId: (entity) => entity.planner_id,
    sortComparer: (a, b) => a.year_month.localeCompare(b.year_month)
})

export const plannerSlice = createSlice({
    name: 'planner',
    initialState: plannerAdapter.getInitialState(),
    reducers: {
        upsertPlanner: plannerAdapter.upsertOne
    }
})

export const { upsertPlanner } = plannerSlice.actions

export const selectPlanner = (state: RootState) => state.planner

export const plannerSelectorFns = plannerAdapter.getSelectors()

export default plannerSlice.reducer
