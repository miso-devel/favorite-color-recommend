import { useAppDispatch } from '../redux/hooks'
import { additional } from '../redux/counterSlice'
import { addColor } from '../redux/colorSlice'
export const Color = ({ bg }: any) => {
    const dispatch = useAppDispatch()

    return (
        <button
            onClick={() => {
                dispatch(addColor(bg)), dispatch(additional())
            }}
        >
            <div
                className=" h-40 rounded-lg flex justify-center items-center"
                style={{ backgroundColor: `rgb(${bg[0]},${bg[1]},${bg[2]})` }}
            ></div>
        </button>
    )
}
