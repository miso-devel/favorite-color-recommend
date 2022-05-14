import { Form } from './components/Form'
import { ColorList } from './components/ColorList'
import './App.css'

const App = () => {
    return (
        <div className="App h-screen  bg-white">
            <p className=" font-extrabold text-center text-4xl py-10">
                Color Recommender
            </p>
            <div className="">
                <ColorList />
                <Form />
            </div>
        </div>
    )
}

export default App
