import { createSlice } from '@reduxjs/toolkit'
// sliceファイルはstateを更新するためのファイル

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    // ここのactionって何に使ってるん？
    reducers: {
        additional: (state, action) => {
            console.log(state.count, action.payload)
            if (Number.isNaN(action.payload)) return
            state.count += action.payload
        },
        subtraction: (state, action) => {
            console.log(state.count, action.payload)
            if (Number.isNaN(action.payload)) return
            state.count -= action.payload
        },
    },
})

export const { additional, subtraction } = counterSlice.actions
export default counterSlice.reducer
