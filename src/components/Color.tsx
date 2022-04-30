import { FC, useState } from 'react'
import { useSelector } from '../redux/store'
import { useDispatch } from 'react-redux'
import { additional, subtraction } from '../redux/counterSlice'
export const Color = () => {
    const count = useSelector((state: any) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(additional(1))}>Up</button>
            <button onClick={() => dispatch(subtraction(1))}>Down</button>
        </div>
    )
}
