import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { additional, subtraction } from '../redux/counterSlice'
import { RandomColor } from '../methods/RandomColor'
export const ColorList = () => {
    const count = useAppSelector((state) => state.counter.count)
    const dispatch = useAppDispatch()
    const color = RandomColor()
    console.log(color)
    return (
        <div>
            <div className="colors grid grid-cols-2 gap-5 m-20">
                <button onClick={() => dispatch(additional())}>
                    <div className=" h-40  bg-orange-600 rounded-lg"></div>
                </button>

                <div className=" h-40 bg-emerald-500 rounded-lg"></div>
                <div className=" h-40 bg-red-700 rounded-lg"></div>
                <div className=" h-40  bg-gray-700 rounded-lg"></div>
            </div>
        </div>
    )
}
