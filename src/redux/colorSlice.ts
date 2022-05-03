import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// sliceファイルはstateを更新するためのファイル
import type { RootState } from './store'

type State = {
    color: string[]
    apis: any[]
}
const initialState: State = {
    color: ['pink', 'aa'],
    apis: [],
}
// 非同期処理
// API取得
export const fetchColorGet = createAsyncThunk('fetch/get', async () => {
    const res = await axios.get(
        'https://www.thecolorapi.com/id?rgb=rgb(0,71,171)'
    )
    return res.data.rgb
})

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        toRed: (state) => {
            state.color = [...state.color, 'red']
        },
        toBlue: (state) => {
            state.color = [...state.color, 'blue']
        },
    },
    extraReducers: (builder) => {
        console.log(builder)
        builder.addCase(fetchColorGet.fulfilled, (state, action) => {
            state.apis = [...state.apis, action.payload]
        })
        builder.addCase(fetchColorGet.rejected, (state) => {
            console.log('sippai')
        })
    },
})

// actionsはreducerに定義したstateを更新するためのdispatchの役割をh果たす。
export const { toRed, toBlue } = colorSlice.actions
// RootStateで全てのstateが見れる
// ここのcolorCheckerはstoreで定義されてないと使えない
export const selectColor = (state: RootState) => state.colorChecker.color

export default colorSlice.reducer
