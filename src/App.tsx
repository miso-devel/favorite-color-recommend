import React from 'react'
import logo from './logo.svg'
import { Color } from './components/Color'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <p>App component</p>
            <Color />
        </div>
    )
}

export default App
