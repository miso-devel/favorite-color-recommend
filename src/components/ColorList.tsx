import { Color } from './Color'
import { RandomColor } from '../methods/RandomColor'
import { useAppSelector } from '../redux/hooks'
import { useEffect } from 'react'
export const ColorList = () => {
    const colors = useAppSelector((state) => state.colors.color)
    useEffect(() => {
        console.log('更新')
    }, [colors])
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
