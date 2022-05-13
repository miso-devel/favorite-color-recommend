import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { additional, subtraction } from '../redux/counterSlice'
import { toRed, toBlue, fetchColorGet } from '../redux/colorSlice'
export const Form = () => {
    const count = useAppSelector((state) => state.counter.count)
    const color = useAppSelector((state) => state.colorChecker.color)
    const apis = useAppSelector((state) => state.colorChecker.apis)
    const dispatch = useAppDispatch()

    console.log(apis)
    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <h1>
                {color.map((n, i) => {
                    return <p key={i}>{n}</p>
                })}
            </h1>
            {/* typeはcounter/additionalとして送られる */}
            <button onClick={() => dispatch(additional())}>Up</button>
            <button onClick={() => dispatch(subtraction())}>Down</button>
            <button onClick={() => dispatch(toBlue())}>toBlue</button>
            <button onClick={() => dispatch(toRed())}>toRed</button>
            <button onClick={() => dispatch(fetchColorGet())}>fetch API</button>
        </div>
    )
}
