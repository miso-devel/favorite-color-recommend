import { Color } from './Color'
import { RandomColor } from '../methods/RandomColor'
export const ColorList = () => {
    const color = RandomColor()
    console.log(color)
    return (
        <div className="colors grid grid-cols-2 gap-5 m-20">
            {color.map((c) => {
                return <Color bg={c} key={c} />
            })}
        </div>
    )
}
