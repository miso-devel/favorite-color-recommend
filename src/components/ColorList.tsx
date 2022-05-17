import { Color } from './Color'
import { Process } from './Process'
import { RandomColor } from '../util/RandomColor'
import { useAppDispatch } from '../redux/hooks'
import { skip } from '../redux/counterSlice'
export const ColorList = () => {
    let color = RandomColor()
    const dispatch = useAppDispatch()
    return (
        <div>
            <Process />
            <div className="colors grid md:grid-cols-2 grid-cols-1 gap-5 lg:m-20 m-10">
                {color.map((c, i) => {
                    return <Color bg={c} key={i} />
                })}
            </div>
            <button
                onClick={() => {
                    dispatch(skip())
                    color = RandomColor()
                }}
                className="font-bold"
            >
                skip
            </button>
        </div>
    )
}
