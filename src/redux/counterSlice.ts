import { createSlice } from '@reduxjs/toolkit'
// sliceファイルはstateを更新するためのファイル
import type { RootState } from './store'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        additional: (state) => {
            state.count += 1
        },
        skip: (state) => {
            state.count += 1
        },
    },
})
// actionsはreducerに定義したstateを更新するためのdispatchの役割をh果たす。
export const { additional, skip } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.count
export default counterSlice.reducer
