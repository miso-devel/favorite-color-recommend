import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// sliceファイルはstateを更新するためのファイル
import type { RootState } from './store'

const colorModels = ['XYZ', 'cmyk', 'hsv', 'hex', 'name', 'hsl', 'rgb'] as const
type colorModel = typeof colorModels[number]
type State = {
    color: number[][]
    result: {
        [C in colorModel]: {
            value: string
        }
    }
}

const initialState: State = {
    color: [],
    result: {
        XYZ: {
            value: '',
        },
        cmyk: {
            value: '',
        },
        hsv: {
            value: '',
        },
        hex: {
            value: '',
        },
        name: {
            value: '',
        },
        hsl: {
            value: '',
        },
        rgb: {
            value: '',
        },
    },
}
// 非同期処理
// API取得
export const fetchResultColor = createAsyncThunk(
    'fetch/get',
    async (state: number[]) => {
        const res = await axios.get(
            `https://www.thecolorapi.com/id?rgb=rgb(${state[0]},${state[1]},${state[2]})`
        )
        return res.data
    }
)

export const colorSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        addColor: (state, action) => {
            state.color = [...state.color, action.payload]
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchResultColor.fulfilled, (state, action) => {
            state.result = action.payload
        })
        builder.addCase(fetchResultColor.rejected, () => {
            console.log('失敗')
        })
    },
})

// actionsはreducerに定義したstateを更新するためのdispatchの役割をh果たす。
export const { addColor } = colorSlice.actions
// RootStateで全てのstateが見れる
// ここのcolorCheckerはstoreで定義されてないと使えない
export const selectColor = (state: RootState) => state.colors.color

export default colorSlice.reducer
