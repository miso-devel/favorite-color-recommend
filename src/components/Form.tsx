import { useAppSelector } from '../redux/hooks'
export const Form = () => {
    const count = useAppSelector((state) => state.counter.count)
    const color = useAppSelector((state) => state.colors.color)

    return (
        <div className="App">
            <p className="font-extrabold text-3xl py-5">Count: {count}</p>
            <div className="mx-20 grid grid-cols-5">
                {color.map((n, i) => {
                    return (
                        <div
                            className="h-10"
                            style={{
                                backgroundColor: `rgb(${n[0]},${n[1]},${n[2]})`,
                            }}
                            key={i}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}
