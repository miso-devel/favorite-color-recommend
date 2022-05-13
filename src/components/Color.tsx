import { useAppDispatch } from '../redux/hooks'
import { additional } from '../redux/counterSlice'

export const Color = ({ bg }: any) => {
    const dispatch = useAppDispatch()

    console.log(bg)
    return (
        <button onClick={() => dispatch(additional())}>
            <div
                className=" h-40 rounded-lg"
                style={{ backgroundColor: `rgb(${100},${70},${120})` }}
            >
                {bg}
            </div>
        </button>
    )
}
