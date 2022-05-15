import { useAppDispatch } from '../redux/hooks'
import { additional } from '../redux/counterSlice'
import { addColor } from '../redux/colorSlice'
type Bg = {
    bg: number[]
}
export const Color = ({ bg }: Bg) => {
    const dispatch = useAppDispatch()

    return (
        <button
            onClick={() => {
                dispatch(addColor(bg)), dispatch(additional())
            }}
        >
            <div
                className=" lg:h-40 h-20 rounded-lg flex justify-center items-center"
                style={{ backgroundColor: `rgb(${bg[0]},${bg[1]},${bg[2]})` }}
            ></div>
        </button>
    )
}
