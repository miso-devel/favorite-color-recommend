import React from 'react'
import { Color } from './components/Color'
import { ColorList } from './components/ColorList'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <p className=" font-extrabold text-center text-4xl my-10">
                Color Recommender
            </p>
            <div className="">
                <ColorList />
                <Color />
            </div>
        </div>
    )
}

export default App
