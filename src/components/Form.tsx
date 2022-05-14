import { useAppSelector } from '../redux/hooks'
export const Form = () => {
    const count = useAppSelector((state) => state.counter.count)
    const color = useAppSelector((state) => state.colors.color)

    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <h1>
                {color.map((n, i) => {
                    return <p key={i}>{n}</p>
                })}
            </h1>
            {/* typeはcounter/additionalとして送られる */}
            {/* <button onClick={() => dispatch(additional())}>Up</button> */}
        </div>
    )
}
