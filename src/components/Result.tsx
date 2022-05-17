import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { Process } from './Process'
import { CalcResult } from '../util/CalcResult'
import { fetchResultColor } from '../redux/colorSlice'
import { useEffect } from 'react'
export const Result = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchResultColor(average))
    }, [])
    // 選択した色
    const color = useAppSelector((state) => state.colors.color)
    const apiResult = useAppSelector((state) => state.colors.result)
    // 選択した色の平均値計算
    const average = CalcResult(color)
    const refreshPage = () => {
        window.location.reload()
    }
    return (
        <div className="App">
            <Process />

            <p className=" font-bold text-3xl my-10">Result</p>

            <div
                className=" h-40 rounded-lg flex justify-center items-center mx-20"
                style={{
                    backgroundColor: `rgb(${average[0]},${average[1]},${average[2]})`,
                }}
            >
                <p className=" shadow-lg p-5 mx-40 my-10 bg-slate-50 rounded-md font-bold">
                    {apiResult.name.value}
                </p>
            </div>

            <div className=" grid lg:grid-cols-3 grid-cols-1 mx-10 my-5 gap-5">
                <p className=" shadow-lg p-5">{apiResult.XYZ.value}</p>
                <p className=" shadow-lg p-5">{apiResult.cmyk.value}</p>
                <p className=" shadow-lg p-5">{apiResult.hsv.value}</p>
                <p className=" shadow-lg p-5">{apiResult.hex.value}</p>
                <p className=" shadow-lg p-5">{apiResult.hsl.value}</p>
                <p className=" shadow-lg p-5">{apiResult.rgb.value}</p>
            </div>

            <div>
                <button className=" shadow-lg p-5 my-20" onClick={refreshPage}>
                    もう一度する
                </button>
            </div>
        </div>
    )
}
