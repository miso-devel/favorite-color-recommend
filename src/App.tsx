import { Form } from './components/Form'
import { ColorList } from './components/ColorList'
import { Result } from './components/Result'
import { useAppSelector } from './redux/hooks'

import './App.css'

const App = () => {
    const count = useAppSelector((state) => state.counter.count)
    return (
        <div className="App h-screen  bg-white">
            <p className=" font-extrabold text-5xl py-10">Color Recommender</p>
            <div className="">
                <Form />
                {count < 5 && <ColorList />}
                {count >= 5 && <Result />}
            </div>
        </div>
    )
}

export default App
